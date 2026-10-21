// server/controllers/assistantController.js
// STRICT RESTRICTION: Based ONLY on AP Govt Mathematics Class 10 Semester 1, Chapter 1 – REAL NUMBERS (Pages 14 to 31)

const Lesson = require('../models/Lesson');

const SYSTEM_PROMPT = `You are MathMentor Socratic Assistant, an AI pedagogy co-pilot strictly designed for teachers and students following the Government of Andhra Pradesh State Board Class 10 Mathematics Textbook, Semester 1, Chapter 1: REAL NUMBERS (Strictly Pages 14 to 31).

YOUR CORE PEDAGOGICAL CAPABILITIES:
1. Provide classroom story hooks, blackboard layout plans, Socratic guiding questions, step-by-step proofs by contradiction, and common student misconceptions.
2. Strictly limit your domain to Chapter 1: REAL NUMBERS (Pages 14-31). Key topics:
   - Fundamental Theorem of Arithmetic (Theorem 1.1) and Unique Factorisation (Carl Friedrich Gauss, Disquisitiones Arithmeticae).
   - Factor Tree of composite numbers (specifically 32760 = 2³ × 3² × 5 × 7 × 13).
   - Can 4ⁿ or 6ⁿ end with digit 0? (Divisibility by 10 requires prime 5; uniqueness of FTA proves absence of 5).
   - HCF and LCM relationships: HCF(a, b) × LCM(a, b) = a × b for two numbers.
   - CAUTIONARY WARNING: HCF(p, q, r) × LCM(p, q, r) ≠ p × q × r for three numbers (e.g. 6, 72, 120). Three-number formula: LCM(p, q, r) = [p·q·r·HCF(p, q, r)] / [HCF(p, q)·HCF(q, r)·HCF(p, r)].
   - Circular sports track problem (Exercise 1.1 Q7): Sonia takes 18 min, Ravi takes 12 min. Explain why LCM (36 min) is needed rather than HCF.
   - Theorem 1.3: Let p be a prime number. If p divides a², then p divides a, where a is a positive integer.
   - Proofs of irrationality by contradiction: √2 (Theorem 1.4), √3 (Example 5), √5 (Exercise 1.2 Q1), 5 - √3 (Example 6), 3√2 (Example 7), 3 + 2√5, 1/√2, 7√5, 6 + √2.
   - Always emphasize the coprime assumption: "Let √2 = a/b where a, b are coprime integers and b ≠ 0".

STRICT GUARDRAIL / OUT OF SCOPE RULE:
If asked about ANY topic outside Chapter 1 Real Numbers (Pages 14 to 31) — such as polynomials, quadratic equations, linear equations, coordinate geometry, trigonometry, statistics, probability, calculus, physics, chemistry, general trivia, or programming — you MUST politely decline.
State clearly:
"This topic is outside the current textbook section available to me. I am strictly restricted to the Government of Andhra Pradesh Class 10 Mathematics Textbook, Semester 1, Chapter 1: REAL NUMBERS (Pages 14 to 31). Please ask me regarding the Fundamental Theorem of Arithmetic, factor trees (32760), HCF & LCM relationships, terminal zeroes (4ⁿ), the Sonia & Ravi sports track problem, Theorem 1.3, proofs of irrationality, or Exercises 1.1 & 1.2."

FORMATTING:
Use markdown headers, bold highlights, bullet points, and neat mathematical notation.`;

// Call Google Gemini API (Gemini 1.5 Flash / Gemini 2.0 Flash)
async function callGeminiApi(prompt, lessonContext) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey.trim() === '' || apiKey === 'your_gemini_api_key_here') {
    return null;
  }

  const userQuery = lessonContext 
    ? `Active Lesson Context: ${lessonContext}\n\nTeacher Question: ${prompt}`
    : prompt;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey.trim()}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [
        {
          role: 'user',
          parts: [{ text: userQuery }]
        }
      ],
      systemInstruction: {
        parts: [{ text: SYSTEM_PROMPT }]
      },
      generationConfig: {
        temperature: 0.3,
        maxOutputTokens: 1200
      }
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Gemini API request failed with status:', response.status, errorText);
    return null;
  }

  const data = await response.json();
  const candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (candidateText) {
    const isOutOfScope = candidateText.toLowerCase().includes('outside the current textbook section');
    return {
      answer: candidateText,
      isOutOfScope,
      poweredBy: 'gemini'
    };
  }

  return null;
}

// Knowledge scope topics allowed for local fallback
const ALLOWED_KEYWORDS = [
  'real number', 'real numbers', 'euclid', 'fundamental theorem', 'arithmetic',
  'prime', 'composite', 'factor', 'factor tree', '32760', '4^n', '4n', '6^n', '6n',
  'hcf', 'lcm', 'highest common factor', 'lowest common multiple',
  '6 and 20', '96 and 404', '6, 72 and 120', '6, 72, 120', 'sonia', 'ravi',
  'sports field', 'circular track', '18 minutes', '12 minutes', '36 minutes',
  'irrational', 'rational', 'p/q', 'p divides a', 'divides a^2', 'theorem 1.3',
  'sqrt(2)', 'sqrt(3)', 'sqrt(5)', '√2', '√3', '√5', 'root 2', 'root 3', 'root 5',
  '5 - sqrt(3)', '5-√3', '3sqrt(2)', '3√2', '3 + 2sqrt(5)', '3+2√5', '1/sqrt(2)', '1/√2',
  '7sqrt(5)', '7√5', '6 + sqrt(2)', '6+√2', 'exercise 1.1', 'exercise 1.2',
  'coprime', 'contradiction', 'gauss', 'disquisitiones', 'unique factorisation'
];

// Disallowed topics (outside pages 14-31)
const FORBIDDEN_KEYWORDS = [
  'polynomial', 'polynomials', 'linear equations', 'quadratic', 'arithmetic progression',
  'triangle', 'triangles', 'coordinate geometry', 'trigonometry', 'circles',
  'constructions', 'surface area', 'volume', 'statistics', 'probability',
  'calculus', 'matrix', 'derivative', 'integral', 'pythagoras proof',
  'logarithm', 'sets', 'relations', 'functions'
];

exports.askAssistant = async (req, res) => {
  try {
    const { prompt, lessonContext } = req.body;
    if (!prompt || prompt.trim() === '') {
      return res.status(400).json({ message: 'Prompt cannot be empty' });
    }

    const lowerPrompt = prompt.toLowerCase();

    // Check if query is explicitly asking about forbidden/outside topics
    const isForbidden = FORBIDDEN_KEYWORDS.some(kw => lowerPrompt.includes(kw));
    if (isForbidden) {
      return res.json({
        answer: "This topic is outside the current textbook section available to me. I am strictly restricted to the Government of Andhra Pradesh Class 10 Mathematics Textbook, Semester 1, Chapter 1: REAL NUMBERS (Pages 14 to 31). Please ask me regarding Fundamental Theorem of Arithmetic, factor trees (32760), HCF & LCM relationships, terminal zeroes (4ⁿ), the Sonia & Ravi sports track problem, Theorem 1.3, proofs of irrationality (√2, √3, 5−√3, 3√2), or Exercises 1.1 & 1.2.",
        isOutOfScope: true,
      });
    }

    // Attempt Google Gemini API first if configured
    try {
      const geminiResult = await callGeminiApi(prompt, lessonContext);
      if (geminiResult) {
        return res.json(geminiResult);
      }
    } catch (apiError) {
      console.warn('Gemini API call failed, falling back to built-in knowledge base:', apiError.message);
    }

    // Check if query relates to real numbers content
    const isAllowed = ALLOWED_KEYWORDS.some(kw => lowerPrompt.includes(kw)) ||
      (lessonContext && ALLOWED_KEYWORDS.some(kw => lessonContext.toLowerCase().includes(kw)));

    if (!isAllowed && !lowerPrompt.includes('teach') && !lowerPrompt.includes('board') && !lowerPrompt.includes('story') && !lowerPrompt.includes('question') && !lowerPrompt.includes('intro')) {
      return res.json({
        answer: "This topic is outside the current textbook section available to me. I can only provide teacher guidance based on pages 14 to 31 of AP Class 10 Real Numbers.",
        isOutOfScope: true,
      });
    }

    // Contextual responses based purely on pages 14–31
    let answer = "";

    if (lowerPrompt.includes('32760') || lowerPrompt.includes('factor tree')) {
      answer = `### How to Teach the Factor Tree of 32760 (Pages 16–17)

**1. Classroom Story Hook:**
Tell students: "Numbers look massive, but they have prime DNA. Let's peel 32760 like an onion."

**2. Sequential Board Plan:**
- 32760 = 2 × 16380 (divide by 2)
- 16380 = 2 × 8190 (divide by 2)
- 8190 = 2 × 4095 (divide by 2)
- 4095 = 3 × 1365 (sum is 18 ⟹ divide by 3)
- 1365 = 3 × 455 (sum is 15 ⟹ divide by 3)
- 455 = 5 × 91 (ends in 5 ⟹ divide by 5)
- 91 = 7 × 13 (both 7 and 13 are prime!)

**3. Key Teaching Script:**
"Notice how we collect all circled prime leaves: 2 × 2 × 2 × 3 × 3 × 5 × 7 × 13 = 2³ × 3² × 5 × 7 × 13.
Ask students: *What if someone divided by 5 first?* They will still arrive at three 2s, two 3s, one 5, one 7, and one 13. This proves the **Fundamental Theorem of Arithmetic (Theorem 1.1)**: factorisation is unique apart from order!"`;

    } else if (lowerPrompt.includes('4^n') || lowerPrompt.includes('4n') || lowerPrompt.includes('end with zero') || lowerPrompt.includes('ending in zero') || lowerPrompt.includes('6^n')) {
      answer = `### Teaching Applications of FTA: Can 4ⁿ or 6ⁿ End with Zero? (Pages 20–21, 24)

**1. Pedagogical Logic:**
For any number to end in digit 0, it must be divisible by 10 = 2 × 5. Hence, its prime factorisation MUST contain the prime 5.

**2. What to Write on the Board:**
1. 4ⁿ = (2²)ⁿ = 2²ⁿ.
2. The ONLY prime factor of 4ⁿ is 2.
3. By the **uniqueness of the Fundamental Theorem of Arithmetic**, there are no other prime factors in the factorisation of 4ⁿ.
4. Therefore, prime 5 cannot occur.
5. **Conclusion:** There is no natural number n for which 4ⁿ ends with digit zero.

*(For 6ⁿ in Exercise 1.1 Q5: 6ⁿ = 2ⁿ × 3ⁿ. Prime factors are only 2 and 3; prime 5 is absent. Identical reasoning applies).*`;

    } else if (lowerPrompt.includes('sonia') || lowerPrompt.includes('ravi') || lowerPrompt.includes('sports field') || lowerPrompt.includes('circular track')) {
      answer = `### Teaching the Circular Track Problem (Exercise 1.1 Q7, Page 24)

**1. The Classroom Drama:**
Draw a circular track. Place Sonia (takes 18 min) and Ravi (takes 12 min) at the START flag.
Ask students: *"After 12 minutes, Ravi is at the start. Where is Sonia? Still in the middle of Lap 1! At 18 minutes, Sonia is at the start, but where is Ravi? Halfway through Lap 2!"*

**2. Why LCM and not HCF?**
Students often guess HCF=6. Ask them: *"Can they meet at 6 minutes when neither has completed even 1 lap?"*
They will immediately realize the reunion time must be GREATER than 18 and 12, which requires a Common Multiple!

**3. Board Solution:**
- 18 = 2 × 3²
- 12 = 2² × 3
- LCM(18, 12) = 2² × 3² = 4 × 9 = 36 minutes.
- Sonia completed 36/18 = 2 rounds; Ravi completed 36/12 = 3 rounds. Both stand at the start at minute 36!`;

    } else if (lowerPrompt.includes('sqrt(2)') || lowerPrompt.includes('√2') || lowerPrompt.includes('root 2') || (lowerPrompt.includes('proof') && lowerPrompt.includes('contradiction'))) {
      answer = `### Teaching Proof by Contradiction: √2 is Irrational (Theorem 1.4, Pages 25–26)

**1. Six-Stage Teaching Flow:**
1. **Assumption:** Assume √2 is rational = a/b where a, b are coprime integers (b ≠ 0). *Crucial: Explain coprime (HCF = 1).*
2. **Squaring:** 2b² = a²  ... (1)
3. **First Divisibility:** 2 divides a² ⟹ by Theorem 1.3, 2 divides a. Let a = 2c.
4. **Substitution:** 2b² = (2c)² = 4c² ⟹ b² = 2c².
5. **Second Divisibility:** 2 divides b² ⟹ 2 divides b.
6. **Contradiction:** Both a and b have 2 as a common factor. This CONTRADICTS that a and b are coprime!
7. **Conclusion:** Our assumption was false. √2 is irrational.

**Teacher Tip:** Emphasize to students that omitting 'a and b are coprime' will cause them to lose marks in board exams!`;

    } else if (lowerPrompt.includes('sqrt(3)') || lowerPrompt.includes('√3') || lowerPrompt.includes('root 3')) {
      answer = `### Teaching the Proof that √3 is Irrational (Example 5, Page 26)

Follow the identical structure to √2:
1. Assume √3 = a/b where a, b are coprime integers, b ≠ 0.
2. 3b² = a² ⟹ 3 divides a² ⟹ 3 divides a.
3. Write a = 3c for integer c.
4. 3b² = (3c)² = 9c² ⟹ b² = 3c².
5. 3 divides b² ⟹ 3 divides b.
6. Common factor 3 contradicts coprimality.
7. Hence √3 is irrational.`;

    } else if (lowerPrompt.includes('sqrt(5)') || lowerPrompt.includes('√5') || lowerPrompt.includes('root 5')) {
      answer = `### Teaching the Proof that √5 is Irrational (Exercise 1.2 Q1, Page 28)

**Teacher Guidance & Board Template:**
1. **Assumption:** Assume to the contrary that √5 is rational: √5 = a/b where a and b are coprime integers (b ≠ 0).
2. **Squaring:** 5b² = a²  ... (1)
3. **Divisibility of a:** 5 divides a² ⟹ by Theorem 1.3, 5 divides a. Write a = 5c for some integer c.
4. **Substitution:** 5b² = (5c)² = 25c² ⟹ b² = 5c².
5. **Divisibility of b:** 5 divides b² ⟹ 5 divides b.
6. **Contradiction:** Both a and b share at least 5 as a common factor, contradicting that a and b are coprime!
7. **Conclusion:** Our assumption is false. Therefore, √5 is IRRATIONAL.

*Teacher Tip:* Highlight the algebraic trap: (5c)² is 25c², NOT 5c²!`;

    } else if (lowerPrompt.includes('3 + 2') || lowerPrompt.includes('3+2') || lowerPrompt.includes('1/√2') || lowerPrompt.includes('1/sqrt(2)') || lowerPrompt.includes('7√5') || lowerPrompt.includes('7sqrt(5)') || lowerPrompt.includes('6 + √2') || lowerPrompt.includes('6+√2')) {
      answer = `### Teaching Exercise 1.2 Proofs: Radical Isolation Method (Pages 28–29)

**1. For 3 + 2√5 (Exercise 1.2 Q2):**
- Assume 3 + 2√5 = a/b (coprime, b ≠ 0).
- 2√5 = a/b − 3 = (a − 3b) / b.
- √5 = (a − 3b) / (2b).
- Since a, b, 3, 2 are integers, (a − 3b)/(2b) is rational ⟹ √5 is rational.
- Contradiction! Since √5 is known to be irrational, 3 + 2√5 is IRRATIONAL.

**2. For 1/√2 (Exercise 1.2 Q3(i)):**
- Assume 1/√2 = a/b ⟹ Invert both sides: √2 = b/a.
- Since a, b are integers (a ≠ 0), b/a is rational ⟹ √2 is rational.
- Contradicts that √2 is irrational! Hence 1/√2 is IRRATIONAL.

**3. For 7√5 (Exercise 1.2 Q3(ii)):**
- 7√5 = a/b ⟹ √5 = a / (7b). Right side is rational, contradicting irrationality of √5!

**4. For 6 + √2 (Exercise 1.2 Q3(iii)):**
- 6 + √2 = a/b ⟹ √2 = (a − 6b)/b. Contradicts that √2 is irrational!`;

    } else if (lowerPrompt.includes('gauss') || lowerPrompt.includes('disquisitiones')) {
      answer = `### Carl Friedrich Gauss & The Fundamental Theorem of Arithmetic (Page 18)

**Textbook Historical Context for Teachers:**
- Carl Friedrich Gauss (1777–1855) is often called the *'Prince of Mathematicians'* (*Princeps mathematicorum*).
- He gave the first complete, rigorous mathematical proof of the Fundamental Theorem of Arithmetic in his landmark work **Disquisitiones Arithmeticae** (1801).
- In this book, Gauss proved that every composite positive integer can be factored into primes in one and only one way (unique up to the arrangement of factors).
- *Classroom Story Tip:* Gauss made monumental discoveries as a teenager. Tell students that this theorem took centuries from Euclid to Gauss to achieve complete mathematical rigor!`;

    } else if (lowerPrompt.includes('5 - sqrt(3)') || lowerPrompt.includes('5-√3') || lowerPrompt.includes('3sqrt(2)') || lowerPrompt.includes('3√2') || lowerPrompt.includes('expression')) {
      answer = `### Teaching Compound Irrational Expressions (Examples 6 & 7, Pages 27–28)

**Pedagogical Warning:** Tell students **NOT TO SQUARE** both sides!
Because √3 and √2 are already established as irrational, all you must do is **isolate the radical**:

- **Example 6 (5 − √3):**
  5 − √3 = a/b ⟹ √3 = 5 − a/b = (5b − a)/b.
  Since a, b, 5 are integers, (5b − a)/b is rational.
  This implies √3 is rational, contradicting the established fact that √3 is irrational! Hence 5 − √3 is irrational.

- **Example 7 (3√2):**
  3√2 = a/b ⟹ √2 = a / (3b).
  Since a, 3, b are integers, a/(3b) is rational, contradicting that √2 is irrational! Hence 3√2 is irrational.`;

    } else if (lowerPrompt.includes('three numbers') || lowerPrompt.includes('6, 72 and 120') || lowerPrompt.includes('formula') || lowerPrompt.includes('hcf and lcm')) {
      answer = `### Teaching HCF & LCM: Two Numbers vs Three Numbers (Pages 21–23, 30–31)

**1. For Two Numbers (a, b):**
HCF(a, b) × LCM(a, b) = a × b.
- Smallest powers of common primes for HCF.
- Greatest powers of all primes for LCM.

**2. The Critical Three-Number Warning (Page 22 & 31):**
For 6, 72, and 120:
- HCF = 6, LCM = 360 ⟹ HCF × LCM = 2160.
- But product of numbers = 6 × 72 × 120 = 51840!
- **HCF(p, q, r) × LCM(p, q, r) ≠ p × q × r!**

**3. True Three-Number Identity (Page 31):**
LCM(p, q, r) = [p · q · r · HCF(p, q, r)] / [HCF(p, q) · HCF(q, r) · HCF(p, r)].`;

    } else if (lowerPrompt.includes('theorem 1.3') || lowerPrompt.includes('divides a^2') || lowerPrompt.includes('p divides a')) {
      answer = `### Teaching Theorem 1.3: If p | a² then p | a (Pages 24–25)

**5-Step Board Explanation:**
1. Let prime factorisation of a be: a = p₁p₂...pₙ (primes).
2. Squaring gives: a² = (p₁p₂...pₙ)² = p₁²p₂²...pₙ².
3. Given that prime p divides a².
4. By the **Fundamental Theorem of Arithmetic**, the ONLY prime factors of a² are p₁, p₂...pₙ.
5. Therefore, p must be one of p₁...pₙ, which means p divides a!

**Classroom Counterexample:**
Ask students why p must be PRIME. If p is composite (say p=4) and a=6: 4 divides 6² (36), but 4 DOES NOT divide 6! This shows students why the prime condition is mandatory!`;

    } else {
      answer = `### Teacher Guidance from AP Class 10 Real Numbers (Pages 14–31)

As your teaching assistant for Chapter 1: Real Numbers, here is how you can structure this lesson:
1. **Start with a Hook:** Do not define terms right away. Ask students questions based on prior knowledge (Class 9 roots or fractions).
2. **Tell the Story:** Frame composite numbers as structures built from prime 'atoms'.
3. **Board Plan:** Use clean column separation (definitions on left, factor trees/equations in center, key formulas boxed in color).
4. **Target Common Misconceptions:** Watch for students trying to apply HCF × LCM = product to three numbers, or forgetting the coprime condition in contradiction proofs.
5. **Conclude with Exit Check:** Use one quick problem from Exercise 1.1 or 1.2 to verify understanding before students leave.`;
    }

    return res.json({ answer, isOutOfScope: false });
  } catch (error) {
    console.error('Assistant error:', error);
    return res.status(500).json({ message: 'Error processing teacher query' });
  }
};
