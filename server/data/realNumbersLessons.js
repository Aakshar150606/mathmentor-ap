// server/data/realNumbersLessons.js
// STRICT RESTRICTION: Based ONLY on AP Govt Mathematics Class 10 Semester 1, Chapter 1 – REAL NUMBERS (Pages 14 to 31)

const lessonsData = [
  {
    lessonNumber: "01",
    slug: "introduction-to-real-numbers",
    chapter: "Real Numbers",
    chapterNumber: 1,
    section: "1.1 Introduction",
    title: "Introduction to Real Numbers",
    sourcePages: "14–15",
    estimatedMinutes: 40,
    difficulty: "Foundation",
    orderIndex: 1,

    objective: "Help teachers introduce the transition to Class 10 Real Numbers, reviewing rational and irrational numbers, and setting up the two core pillars of positive integers: Euclid's Division Algorithm and the Fundamental Theorem of Arithmetic.",
    whyStudentsLearnIt: "Students need to understand that Class 10 is not merely repeating number sets from Class 9, but discovering how positive integers behave under division (Euclid's algorithm) and how they are constructed through multiplication (Fundamental Theorem of Arithmetic).",
    howToIntroduce: "Do NOT start by writing definitions on the blackboard. Begin with diagnostic questions that elicit students' prior memories of square roots like √2, √3, and fractions.",

    story: {
      headline: "The Architecture of Numbers: How Positive Integers Are Built",
      narrative: "Imagine mathematics as an investigation of building blocks. In Class IX, you explored the number line and noticed mysterious gaps that could not be filled by fractions—numbers like √2, √3, and √5. You called them irrational numbers.\n\nNow, in Class X, we pause and look deeper at the most familiar numbers of all: the positive integers (1, 2, 3, 4...). Two monumental ideas govern these integers:\n1. How they divide: Euclid's division algorithm, which tells us that whenever one integer is divided by another, the remainder is strictly smaller than the divisor.\n2. How they multiply: The Fundamental Theorem of Arithmetic, which reveals that every composite integer is made from prime numbers in one and only one unique way.\n\nToday, we begin uncovering the atomic secret of numbers.",
      keyTakeaway: "Positive integers possess two fundamental structural properties: division with remainders, and unique multiplication by prime numbers."
    },

    teacherScript: {
      english: "Good morning class! Before we open our textbooks, let me ask you a question. Can every number in the universe be written as a simple fraction like p/q where q is not zero? Think about √2 or √3 from Class 9. Exactly, they cannot! In Class 10, we are going to look behind the curtain. We will discover the Fundamental Theorem of Arithmetic—which tells us how every composite number is built from prime building blocks.",
      telugu: "శుభోదయం విద్యార్థులారా! ఈ రోజు మనం 10వ తరగతి మొదటి అధ్యాయం 'వాస్తవ సంఖ్యలు' (Real Numbers) ప్రారంభిస్తున్నాం. 9వ తరగతిలో మీరు కరణీయ సంఖ్యలు (Irrational numbers) అంటే √2, √3 గురించి నేర్చుకున్నారు కదా? ప్రతి సంఖ్యను p/q రూపంలో రాయగలమా? రాయలేము! ఈ తరగతిలో మనం ధన పూర్ణ సంఖ్యల యొక్క రెండు ముఖ్యమైన ధర్మాలను పరిశీలిస్తాం: ఒకటి యూక్లిడ్ భాగహార న్యాయం, రెండవది అంకగణిత ప్రాథమిక సిద్ధాంతం (Fundamental Theorem of Arithmetic).",
      tenglish: "Good morning students! Textbook open chese mundu oka chinna question. Mana Class 9 lo nerchukunna numbers gurthunnaya? Prathi number ni manam p/q fraction la rayagalama? For example √2 or √3? Rayalemu kada! Avi irrational numbers. Ee Class 10 lo manam composite numbers primes thoti ela tayaravuthayo, 'Fundamental Theorem of Arithmetic' dwara telusukuntam."
    },

    boardPlan: [
      {
        stepNumber: 1,
        title: "Recall Number Categories",
        boardContent: "CHAPTER 1: REAL NUMBERS\n\nClass 9 Recall:\n• Rational Numbers (p/q, q ≠ 0)\n• Irrational Numbers (Cannot be written as p/q, e.g., √2, √3, √5)",
        teacherAction: "Write the recall columns on the left of the board. Ask students for examples.",
        studentsAction: "Copy the classification and call out examples of rational and irrational numbers."
      },
      {
        stepNumber: 2,
        title: "Two Pillars of Class 10",
        boardContent: "Two Fundamental Properties of Positive Integers:\n1. Divisibility → Euclid's Division Algorithm (Remainders & HCF)\n2. Multiplication → Fundamental Theorem of Arithmetic (Prime Factorisation)",
        teacherAction: "Write the two properties clearly in boxes. Emphasize that multiplication of primes will be our main focus.",
        studentsAction: "Note the two concepts and circle 'Fundamental Theorem of Arithmetic'."
      },
      {
        stepNumber: 3,
        title: "Key Goal of This Chapter",
        boardContent: "Applications of Fundamental Theorem:\n(a) Proving √2, √3, √5 are irrational\n(b) Exploring decimal expansions of rational numbers",
        teacherAction: "State the chapter mission: using prime factorisation to prove deep facts.",
        studentsAction: "Listen attentively and record the applications in their notebooks."
      }
    ],

    questions: [
      {
        category: "WARM-UP",
        question: "Can anyone name three numbers that cannot be expressed in the form p/q where p and q are integers and q ≠ 0?",
        expectedAnswer: "√2, √3, √5 (or any irrational number).",
        teacherGuidance: "Praise correct answers. If someone says π or 0.101001..., point out that in our chapter we study √2, √3, √5."
      },
      {
        category: "THINK",
        question: "When you divide any positive integer 'a' by 3, what are the only possible remainders?",
        expectedAnswer: "0, 1, or 2 (remainders are always strictly less than 3).",
        teacherGuidance: "Connect this to Euclid's division algorithm intuition mentioned on page 14."
      },
      {
        category: "DISCUSS",
        question: "Why do you think prime numbers are called the 'atoms' of mathematics?",
        expectedAnswer: "Because composite numbers are broken down into primes, but primes cannot be broken down further.",
        teacherGuidance: "Use this to bridge directly into Section 1.2: Fundamental Theorem of Arithmetic."
      },
      {
        category: "CHECK",
        question: "What are the two major properties of positive integers we study in Chapter 1?",
        expectedAnswer: "Euclid's division algorithm and Fundamental Theorem of Arithmetic.",
        teacherGuidance: "Quick whole-class choral response check."
      },
      {
        category: "EXIT QUESTION",
        question: "What is the smallest prime number, and can a composite number have only one prime factor?",
        expectedAnswer: "Smallest prime is 2. Yes, e.g., 4 = 2 × 2 or 8 = 2³ (only prime factor 2).",
        teacherGuidance: "Use this exit ticket to prepare students for factor trees tomorrow."
      }
    ],

    examples: [
      {
        exampleNumber: "Intro-1",
        title: "Connecting Class 9 and Class 10 Real Numbers",
        problem: "Classify into Rational vs Irrational: 7/5, √2, 0, √3, -4, √5.",
        solutionSteps: [
          { step: "Rational Numbers", math: "7/5, 0, -4", explanation: "Can be written in p/q form with integers and denominator ≠ 0." },
          { step: "Irrational Numbers", math: "√2, √3, √5", explanation: "Cannot be written in p/q form (page 14)." }
        ],
        pedagogicalNote: "Reinforce that the Real Number system comprises both rational and irrational numbers."
      }
    ],

    interactiveType: "none",
    misconceptions: [
      {
        misconception: "Students believe 'Real Numbers' only refers to numbers without square roots.",
        whyStudentsThinkThis: "They associate 'real' with everyday integers and fractions they count with.",
        correction: "Real numbers include BOTH rational numbers (fractions/integers) and irrational numbers (roots like √2, √3).",
        classroomRemedy: "Draw a large Venn diagram on the board showing Real Numbers encompassing Rational and Irrational collections."
      }
    ],

    classroomActivity: {
      title: "The Number Line Recall Sort",
      duration: "10 minutes",
      materialsNeeded: "Chalk, board, student notebooks",
      instructions: [
        "Divide the blackboard into two columns: 'Can write as p/q' and 'Cannot write as p/q'.",
        "Call out 6 numbers from the chapter: 2/3, √2, 17, √3, -5, √5.",
        "Have student pairs classify them and justify their choice in 60 seconds.",
        "Highlight √2 and √3: explain that in this chapter, we will rigorously PROVE they are irrational."
      ],
      teacherFacilitation: "Ensure students do not confuse negative numbers with irrational numbers."
    },

    checkUnderstanding: {
      quickChecks: [
        "Ask: If r is a remainder when dividing by 5, can r be 6? (No, r < 5).",
        "Ask: What theorem explains prime factorisation? (Fundamental Theorem of Arithmetic)."
      ],
      exitTicket: "Write down the two main properties of positive integers mentioned in Section 1.1."
    },

    conclusion: "Summarize: Positive integers are governed by division (remainders) and multiplication (prime factors). Tomorrow, we explore the prime building blocks of large numbers like 32760 using factor trees!"
  },

  {
    lessonNumber: "02",
    slug: "fundamental-theorem-of-arithmetic",
    chapter: "Real Numbers",
    chapterNumber: 1,
    section: "1.2 Fundamental Theorem of Arithmetic",
    title: "The Fundamental Theorem of Arithmetic & Factor Trees",
    sourcePages: "16–20",
    estimatedMinutes: 50,
    difficulty: "Core",
    orderIndex: 2,

    objective: "Teach teachers how to guide students to discover the Fundamental Theorem of Arithmetic through factor trees, prime factorisation of 32760, and the concept of uniqueness apart from order.",
    whyStudentsLearnIt: "It establishes the foundational truth of number theory: every composite number has a unique 'DNA' of prime factors. This uniqueness is what makes HCF, LCM, and irrationality proofs mathematically valid.",
    howToIntroduce: "Do NOT write Theorem 1.1 on the board immediately. Instead, challenge the class: 'Take any number, like 24 or 30. Break it down until you can break it no more. Can two different students arrive at different prime factors?'",

    story: {
      headline: "The Factor Tree Detective: Uncovering the Secret of 32760",
      narrative: "Imagine you are given a giant number: 32760. It looks intimidating. But numbers are like puzzle boxes. We start dividing by the smallest prime number: 2. \n32760 splits into 2 and 16380.\n16380 splits into 2 and 8190.\n8190 splits into 2 and 4095.\nNow it ends in 5, but wait! The sum of digits is 4+0+9+5 = 18, so it divides by 3!\n4095 splits into 3 and 1365.\n1365 splits into 3 and 455.\n455 splits into 5 and 91.\n91 splits into 7 and 13.\nAnd 13 is prime!\n\nWhen we collect all the prime branches: 2 × 2 × 2 × 3 × 3 × 5 × 7 × 13, which is 2³ × 3² × 5 × 7 × 13.\n\nNow ask students: If someone else started by dividing by 5 or 7 first, would they get different prime factors at the end? NO! They would still get three 2s, two 3s, one 5, one 7, and one 13. Only the order would change. This universal truth was formalized by Carl Friedrich Gauss as the Fundamental Theorem of Arithmetic.",
      keyTakeaway: "Composite numbers break down into prime factors in one and only one way, regardless of which factor you extract first."
    },

    teacherScript: {
      english: "Students, look at the number 32760 on the board. Let us build a factor tree together. Watch how every branch that cannot split further is circled—those are our prime numbers. At the very end, we write 32760 = 2³ × 3² × 5 × 7 × 13. Now, what if Ravi wrote 5 × 7 × 13 × 3² × 2³? Is Ravi wrong? No! The primes are identical; only the order changed. This is Theorem 1.1: Every composite number can be expressed as a product of primes, and this factorisation is unique, apart from the order in which the prime factors occur.",
      telugu: "విద్యార్థులారా, బోర్డు మీద ఉన్న 32760 సంఖ్యను చూడండి. దీన్ని కారణాంక వృక్షం (Factor Tree) ద్వారా ప్రధాన కారణాంకాలుగా విడగొడదాం. 32760 ని 2 తో భాగిస్తే 16380 వస్తుంది. అలా చివరి దాకా చేస్తే మనకు 2³ × 3² × 5 × 7 × 13 వస్తుంది. ఎవరైనా క్రమం మార్చి 5 × 7 × 13 × 3² × 2³ రాసినా అందులో ఉండే ప్రధాన సంఖ్యలు మారవు కదా! దీనినే 'అంకగణిత ప్రాథమిక సిద్ధాంతం' అంటారు.",
      tenglish: "Students, board meedha unna 32760 number chudandi. Deeniki manam Factor Tree veddam. Step-by-step 2 thoti, tarvatha 3, 5, 7, 13 thoti divide chesthe 2³ × 3² × 5 × 7 × 13 vasthundi. Order marchina, prime factors ave untayi. This is the Fundamental Theorem of Arithmetic—factorisation is always unique apart from the order."
    },

    boardPlan: [
      {
        stepNumber: 1,
        title: "Starting the Factor Tree for 32760",
        boardContent: "      32760\n     /     \\\n   (2)    16380\n         /     \\\n       (2)    8190\n             /    \\\n           (2)   4095",
        teacherAction: "Draw the first three branches dividing by 2. Circle each prime factor 2.",
        studentsAction: "Draw the tree branches in their notebook, circling prime 2s."
      },
      {
        stepNumber: 2,
        title: "Completing Branches with 3, 5, 7, 13",
        boardContent: "       4095\n      /    \\\n    (3)   1365\n          /   \\\n        (3)   455\n             /   \\\n           (5)   91\n                /  \\\n              (7)  (13)",
        teacherAction: "Continue down the tree: divide by 3, then 3, then 5, then 7, ending at prime 13.",
        studentsAction: "Complete the full factor tree down to prime 13."
      },
      {
        stepNumber: 3,
        title: "Exponential Form & Ascending Order",
        boardContent: "32760 = 2 × 2 × 2 × 3 × 3 × 5 × 7 × 13\n      = 2³ × 3² × 5 × 7 × 13\n\nConvention: Write primes in ascending order:\np₁ ≤ p₂ ≤ p₃ ≤ ... ≤ pₙ",
        teacherAction: "Box the final exponential form. Explain the mathematical standard of writing in ascending order.",
        studentsAction: "Write the exponential representation and box it."
      },
      {
        stepNumber: 4,
        title: "Theorem 1.1 Statement",
        boardContent: "THEOREM 1.1 (Fundamental Theorem of Arithmetic):\nEvery composite number can be expressed (factorised) as a product of primes, and this factorisation is unique, apart from the order in which the prime factors occur.",
        teacherAction: "Underline 'unique' and 'apart from the order'. Mention Carl Friedrich Gauss.",
        studentsAction: "Copy Theorem 1.1 verbatim as given in textbook page 17."
      }
    ],

    questions: [
      {
        category: "WARM-UP",
        question: "Is 1 a prime number or a composite number?",
        expectedAnswer: "Neither! 1 is a unique unit number; prime numbers are greater than 1 with exactly two distinct factors.",
        teacherGuidance: "Clarify this immediately to avoid confusion during prime factorisation."
      },
      {
        category: "THINK",
        question: "Can 32760 ever have 11 as a prime factor if we factorise it in a different way?",
        expectedAnswer: "No! Because the prime factorisation is unique by the Fundamental Theorem of Arithmetic.",
        teacherGuidance: "Emphasize that uniqueness guarantees no other prime can magically appear."
      },
      {
        category: "DISCUSS",
        question: "Why do mathematicians write prime factors in ascending order (2³ × 3² × 5 × 7 × 13)?",
        expectedAnswer: "To give the factorisation a standardized unique appearance so everyone writes it identically.",
        teacherGuidance: "Show students that without convention, 2 × 3 and 3 × 2 look different even though they represent the same factorisation."
      },
      {
        category: "CHECK",
        question: "State the Fundamental Theorem of Arithmetic in your own words.",
        expectedAnswer: "Any composite number can be written as a product of primes in only one unique way, ignoring order.",
        teacherGuidance: "Check if the student mentions both 'product of primes' and 'unique apart from order'."
      },
      {
        category: "EXIT QUESTION",
        question: "Express the prime factorisation of 140 in exponential form.",
        expectedAnswer: "140 = 2² × 5 × 7.",
        teacherGuidance: "Quick 30-second notebook inspection before leaving."
      }
    ],

    examples: [
      {
        exampleNumber: "Textbook Example (p. 16-17)",
        title: "Factorisation of 32760",
        problem: "Express 32760 as a product of prime factors using a factor tree.",
        solutionSteps: [
          { step: "Step 1", math: "32760 = 2 × 16380", explanation: "Divide by smallest prime 2" },
          { step: "Step 2", math: "16380 = 2 × 8190", explanation: "Divide by 2 again" },
          { step: "Step 3", math: "8190 = 2 × 4095", explanation: "Divide by 2 again" },
          { step: "Step 4", math: "4095 = 3 × 1365", explanation: "Sum of digits is 18 (divisible by 3)" },
          { step: "Step 5", math: "1365 = 3 × 455", explanation: "Sum of digits is 15 (divisible by 3)" },
          { step: "Step 6", math: "455 = 5 × 91", explanation: "Ends in 5, divide by 5" },
          { step: "Step 7", math: "91 = 7 × 13", explanation: "91 is 7 × 13, both prime" },
          { step: "Conclusion", math: "32760 = 2³ × 3² × 5 × 7 × 13", explanation: "Expressed in ascending powers of primes." }
        ],
        pedagogicalNote: "Highlight to teachers that 91 is frequently mistaken as prime by students. Remind them: 7 × 13 = 91."
      }
    ],

    interactiveType: "factor-tree",
    interactiveConfig: {
      targetNumber: 32760,
      steps: [
        { current: 32760, factor: 2, remaining: 16380 },
        { current: 16380, factor: 2, remaining: 8190 },
        { current: 8190, factor: 2, remaining: 4095 },
        { current: 4095, factor: 3, remaining: 1365 },
        { current: 1365, factor: 3, remaining: 455 },
        { current: 455, factor: 5, remaining: 91 },
        { current: 91, factor: 7, remaining: 13 }
      ],
      resultPrimes: [2, 2, 2, 3, 3, 5, 7, 13],
      exponential: "2³ × 3² × 5 × 7 × 13"
    },

    misconceptions: [
      {
        misconception: "Students think changing the order of factors produces a 'different' prime factorisation.",
        whyStudentsThinkThis: "They see 2 × 3 × 5 and 5 × 3 × 2 as visually different strings of symbols.",
        correction: "Multiplication is commutative. The set of prime building blocks is identical. Order does not change uniqueness.",
        classroomRemedy: "Show two grocery bags with the same fruits in different order. Are the items different? No!"
      },
      {
        misconception: "Students stop factorising composite numbers when they hit an unfamiliar odd number like 91.",
        whyStudentsThinkThis: "91 looks like a prime number because it is odd and does not end in 5.",
        correction: "91 = 7 × 13. Divisibility by 7 must be checked.",
        classroomRemedy: "Encourage testing small primes: 2, 3, 5, 7, 11, 13 systematically."
      }
    ],

    classroomActivity: {
      title: "Interactive Factor Tree Relay",
      duration: "15 minutes",
      materialsNeeded: "Chalkboard, colored chalk",
      instructions: [
        "Write 32760 at the top of the board.",
        "Call 7 different students in sequence. Each student finds one prime branch and circles it.",
        "Student 1: extracts 2 leaving 16380.",
        "Student 2: extracts 2 leaving 8190.",
        "Student 3: extracts 2 leaving 4095.",
        "Student 4: extracts 3 leaving 1365.",
        "Student 5: extracts 3 leaving 455.",
        "Student 6: extracts 5 leaving 91.",
        "Student 7: splits 91 into 7 and 13.",
        "Have the whole class chant the final exponential form: 2³ × 3² × 5 × 7 × 13."
      ],
      teacherFacilitation: "Ensure students do not jump ahead to 4 or 6. Remind them only PRIME factors are allowed on branches."
    },

    checkUnderstanding: {
      quickChecks: [
        "Ask: If x = p₁ · p₂ · ... · pₙ, can pᵢ be composite? (No, all must be primes).",
        "Ask: What is the uniqueness guarantee? (Primes are unique apart from order)."
      ],
      exitTicket: "Write 156 as a product of prime factors in exponential form."
    },

    conclusion: "Celebrate the discovery: Every composite number has a single, unique prime identity. In the next lesson, we will see how this uniqueness solves the mystery of whether 4ⁿ can ever end in zero!"
  },

  {
    lessonNumber: "03",
    slug: "applications-can-4n-end-in-zero",
    chapter: "Real Numbers",
    chapterNumber: 1,
    section: "1.2 Fundamental Theorem of Arithmetic (Applications)",
    title: "Applications of FTA: Can 4ⁿ End With Digit Zero?",
    sourcePages: "20–21",
    estimatedMinutes: 45,
    difficulty: "Core",
    orderIndex: 3,

    objective: "Train teachers to demonstrate how the uniqueness part of the Fundamental Theorem of Arithmetic is applied to prove that 4ⁿ can never end in digit 0 for any natural number n.",
    whyStudentsLearnIt: "Students learn how a theoretical theorem (FTA) provides a definitive mathematical proof about infinite numbers, replacing guesswork and endless trial calculation.",
    howToIntroduce: "Ask the class: 'Calculate 4¹ = 4, 4² = 16, 4³ = 64, 4⁴ = 256. Notice the last digit oscillates between 4 and 6. Will 4¹⁰⁰ or 4¹⁰⁰⁰ ever end in 0? Can you test every power up to infinity? No! How can mathematics prove it for all n at once?'",

    story: {
      headline: "The Detective and the Missing Prime: The Mystery of 4ⁿ",
      narrative: "Imagine a locked safe that only opens if a number ends with digit 0. What is the key to ending in zero? Think: 10, 20, 30, 100... Every number ending in 0 must be divisible by 10. And what makes 10? 10 = 2 × 5!\n\nThis means any number ending with zero MUST carry both prime 2 and prime 5 in its prime factorisation.\n\nNow, look at the suspect: 4ⁿ. \n4 is 2 × 2 = 2².\nSo 4ⁿ = (2²)ⁿ = 2²ⁿ.\n\nLook inside 4ⁿ: What prime factors does it have? Only 2! No matter how large n is—whether n is 1, 10, or a billion—4ⁿ is just 2 multiplied by itself 2n times: 2 × 2 × 2...\n\nCan prime 5 sneak in? The Fundamental Theorem of Arithmetic shouts: 'NO! Prime factorisation is UNIQUE!' Because 5 is not in the prime factorisation of 4ⁿ, and no other factorisation exists, 4ⁿ can NEVER end in 0.",
      keyTakeaway: "A number ends with 0 if and only if 5 is among its prime factors. Since 4ⁿ has only 2 as a prime factor, FTA uniqueness guarantees it can never end in 0."
    },

    teacherScript: {
      english: "Class, let us examine Example 1 from page 20. If 4ⁿ were to end with the digit zero for any natural number n, what number must divide it? It must be divisible by 5! That means the prime factorisation of 4ⁿ must contain the prime 5. But 4ⁿ = (2²)ⁿ = 2²ⁿ. The ONLY prime factor of 4ⁿ is 2. Now, why can't there be another prime factor? By the uniqueness of the Fundamental Theorem of Arithmetic! There are no other prime factors in the factorisation of 4ⁿ. Hence, there is no natural number n for which 4ⁿ ends with the digit zero.",
      telugu: "విద్యార్థులారా, పేజీ 20 లోని ఉదాహరణ 1 చూడండి. n సహజ సంఖ్య అయినప్పుడు 4ⁿ అనే సంఖ్య '0' అంకెతో అంతమవుతుందా? ఏదైనా సంఖ్య 0 తో అంతం కావాలంటే అది 5 చేత భాగించబడాలి. అంటే దాని ప్రధాన కారణాంకాల లబ్దంలో 5 తప్పక ఉండాలి. కానీ 4ⁿ = (2²)ⁿ = 2²ⁿ. ఇందులో ఉన్న ఏకైక ప్రధాన కారణాంకం 2 మాత్రమే. అంకగణిత ప్రాథమిక సిద్ధాంతం ప్రకారం ఈ కారణాంక విభజన అనన్యము (unique). కాబట్టి 5 అందులో ఉండదు. అందువల్ల 4ⁿ ఎప్పటికీ సున్నాతో అంతం కాదు.",
      tenglish: "Class, Example 1 chudandi. 4ⁿ zero tho end avvalante 5 ane prime factor undali kada? But 4ⁿ = (2²)ⁿ = 2²ⁿ. Indulo kevalam 2 mathrame prime factor. Fundamental Theorem of Arithmetic uniqueness prakaram inkem primes undavu. So 5 undadu kabatti 4ⁿ eppatiki zero tho end kaadu."
    },

    boardPlan: [
      {
        stepNumber: 1,
        title: "Condition for Ending in Zero",
        boardContent: "EXAMPLE 1 (Page 20):\nCheck whether 4ⁿ can end with digit 0 for any n ∈ ℕ.\n\nKey Condition:\nIf a number ends with digit 0, it must be divisible by 5.\n⟹ Prime factorisation must contain prime 5.",
        teacherAction: "Write the question and highlight the necessary condition for terminal zero.",
        studentsAction: "Note down the condition: divisibility by 5 is required."
      },
      {
        stepNumber: 2,
        title: "Prime Factorisation of 4ⁿ",
        boardContent: "4ⁿ = (2²)ⁿ = 2²ⁿ\n\nObservation:\nThe ONLY prime factor of 4ⁿ is 2.",
        teacherAction: "Write the algebraic factorization. Point to the base 2.",
        studentsAction: "Write 4ⁿ = 2²ⁿ and note that 2 is the sole prime factor."
      },
      {
        stepNumber: 3,
        title: "Invoking FTA Uniqueness & Conclusion",
        boardContent: "By the Fundamental Theorem of Arithmetic:\nThe prime factorisation is UNIQUE.\n⟹ There are no other prime factors in 4ⁿ.\n⟹ Prime 5 cannot appear.\n\nConclusion:\nThere is no natural number n for which 4ⁿ ends with the digit zero.",
        teacherAction: "Underline the role of FTA uniqueness. Box the conclusion.",
        studentsAction: "Copy the rigorous 4-step proof format as required in board exams."
      }
    ],

    questions: [
      {
        category: "WARM-UP",
        question: "What are the first five positive multiples of 10, and what prime factors do they all share?",
        expectedAnswer: "10, 20, 30, 40, 50. They all have both 2 and 5 as prime factors.",
        teacherGuidance: "Ensure students see that having both 2 and 5 is mandatory for ending in 0."
      },
      {
        category: "THINK",
        question: "What about 6ⁿ (Exercise 1.1 Q5)? Can 6ⁿ end with digit 0?",
        expectedAnswer: "No, because 6ⁿ = (2 × 3)ⁿ = 2ⁿ × 3ⁿ. Prime factors are only 2 and 3; prime 5 is absent.",
        teacherGuidance: "Praise students who connect the identical reasoning from 4ⁿ to 6ⁿ."
      },
      {
        category: "DISCUSS",
        question: "Why can't we just test n = 1, 2, 3, 4, 5 and conclude 4ⁿ never ends in 0?",
        expectedAnswer: "Because n belongs to the set of infinite natural numbers. Testing 5 cases doesn't prove it for n = 1,000,000. Proof requires FTA.",
        teacherGuidance: "Highlight the power of mathematical proof over empirical trial."
      },
      {
        category: "CHECK",
        question: "Why does the Fundamental Theorem of Arithmetic matter in this proof?",
        expectedAnswer: "Because it guarantees that NO other prime factorisation exists, ensuring 5 cannot exist in 4ⁿ.",
        teacherGuidance: "Reinforce the keyword: 'uniqueness'."
      },
      {
        category: "EXIT QUESTION",
        question: "For a number to end with two zeros (like 100), what prime factors must it contain?",
        expectedAnswer: "At least two 2s and two 5s (2² × 5² = 100).",
        teacherGuidance: "Quick conceptual check before dismissal."
      }
    ],

    examples: [
      {
        exampleNumber: "Example 1 (p. 20)",
        title: "Terminal digit of 4ⁿ",
        problem: "Consider the numbers 4ⁿ, where n is a natural number. Check whether there is any value of n for which 4ⁿ ends with the digit zero.",
        solutionSteps: [
          { step: "Divisibility requirement", math: "Number ending with 0 is divisible by 5", explanation: "Prime factorisation must contain 5." },
          { step: "Factorisation of 4ⁿ", math: "4ⁿ = (2²)ⁿ = 2²ⁿ", explanation: "The only prime in factorisation is 2." },
          { step: "Uniqueness by FTA", math: "Uniqueness of FTA", explanation: "Guarantees no other prime factors exist." },
          { step: "Conclusion", math: "No such n exists", explanation: "Hence 4ⁿ cannot end with digit zero for any n ∈ ℕ." }
        ],
        pedagogicalNote: "Train teachers to insist on mentioning 'uniqueness of Fundamental Theorem of Arithmetic'—students often lose marks if they omit this phrase."
      }
    ],

    interactiveType: "none",
    misconceptions: [
      {
        misconception: "Students think: 'Maybe if n is a massive number like n = 1000, 4¹⁰⁰⁰ will eventually end in 0.'",
        whyStudentsThinkThis: "They think multiplying numbers enough times might eventually produce a zero.",
        correction: "Multiplying even numbers without a factor of 5 only produces powers of 2. 2 × 2 will never produce a 5, no matter how many times multiplied.",
        classroomRemedy: "Show the last digits pattern on board: 4¹=4, 4²=6, 4³=4, 4⁴=6... it alternates forever between 4 and 6!"
      }
    ],

    classroomActivity: {
      title: "The Zero-Detective Hunt",
      duration: "10 minutes",
      materialsNeeded: "Chalkboard",
      instructions: [
        "Write 4 expressions on the board: 4ⁿ, 6ⁿ, 12ⁿ, 15ⁿ.",
        "Ask groups of students to inspect their prime factorisations: 4ⁿ = 2²ⁿ, 6ⁿ = (2×3)ⁿ, 12ⁿ = (2²×3)ⁿ, 15ⁿ = (3×5)ⁿ.",
        "Ask: Can ANY of these end with zero? Why not?",
        "Lead them to discover: 4ⁿ, 6ⁿ, 12ⁿ lack 5. 15ⁿ has 5 but lacks 2! To end in zero, you need BOTH 2 and 5!"
      ],
      teacherFacilitation: "Watch their eyes light up when they realize 15ⁿ (which has 5) still can't end in zero because it has no 2!"
    },

    checkUnderstanding: {
      quickChecks: [
        "Ask: What is the prime factorisation of 4ⁿ? (2²ⁿ).",
        "Ask: What prime is missing for it to end in 0? (Prime 5)."
      ],
      exitTicket: "State in one sentence why 6ⁿ cannot end in 0."
    },

    conclusion: "Summarize: FTA uniqueness is not just abstract theory—it is a mathematical laser that proves what cannot happen across all infinite natural numbers!"
  },

  {
    lessonNumber: "04",
    slug: "hcf-and-lcm-by-prime-factorisation",
    chapter: "Real Numbers",
    chapterNumber: 1,
    section: "1.2 Fundamental Theorem of Arithmetic (HCF & LCM)",
    title: "HCF and LCM using Prime Factorisation (Two Numbers)",
    sourcePages: "20–22, 30–31",
    estimatedMinutes: 50,
    difficulty: "Core",
    orderIndex: 4,

    objective: "Equip teachers to explain HCF and LCM through prime powers (smallest vs greatest powers) and demonstrate the vital identity HCF(a,b) × LCM(a,b) = a × b for two positive integers.",
    whyStudentsLearnIt: "Prime factorisation turns HCF and LCM from a tedious long-division procedure into an elegant inspection of prime powers, while the two-number formula enables rapid calculations.",
    howToIntroduce: "Write 6 and 20 on the board. Ask: 'What are their factors? What are their multiples?' Then show: 'Can we find both HCF and LCM at once just by looking at their prime powers?'",

    story: {
      headline: "Smallest Powers vs Greatest Powers: The Tale of Two Numbers",
      narrative: "Think of two numbers, 6 and 20, as two recipe cards.\n6 calls for: 2¹ and 3¹.\n20 calls for: 2² and 5¹.\n\nNow, HCF (Highest Common Factor) is the conservative banker. The banker asks: 'What prime ingredients do both cards share in common, and what is the SMALLEST power available?' \nBoth cards share prime 2. The smallest power is 2¹. Neither 3 nor 5 is shared. So HCF = 2¹ = 2.\n\nLCM (Lowest Common Multiple) is the generous banquet chef. The chef asks: 'I need to satisfy both recipes at once! What is the GREATEST power of every prime involved?'\nFor prime 2: take 2².\nFor prime 3: take 3¹.\nFor prime 5: take 5¹.\nChef computes: 2² × 3¹ × 5¹ = 4 × 3 × 5 = 60. So LCM = 60!\n\nNow look at the magic discovery: Multiply HCF and LCM: 2 × 60 = 120. Multiply the original numbers: 6 × 20 = 120! They match exactly! HCF(a, b) × LCM(a, b) = a × b.",
      keyTakeaway: "HCF uses smallest powers of common primes; LCM uses greatest powers of all primes involved. For any two positive integers, HCF(a,b) × LCM(a,b) = a × b."
    },

    teacherScript: {
      english: "Look at pages 21–22. We define: HCF is the product of the smallest power of each common prime factor involved in the numbers. LCM is the product of the greatest power of each prime factor involved in the numbers. For 6 and 20: HCF is 2¹ = 2; LCM is 2² × 3¹ × 5¹ = 60. Notice that HCF × LCM = 2 × 60 = 120 = 6 × 20. This gives us the golden formula for two positive integers: HCF(a, b) × LCM(a, b) = a × b. In Example 3, we use this formula to find the LCM of 96 and 404 without calculating huge factor multiples!",
      telugu: "పేజీలు 21–22 లోని నిర్వచనాలు చూడండి: గ.సా.భా (HCF) అంటే సంఖ్యలలోని ఉమ్మడి ప్రధాన కారణాంకాల అత్యల్ప ఘాతాల లబ్దం. క.సా.గు (LCM) అంటే సంఖ్యలలోని ప్రతి ప్రధాన కారణాంకం యొక్క గరిష్ట ఘాతాల లబ్దం. 6 మరియు 20 లకు: HCF = 2, LCM = 60. ఇక్కడ గమనించండి: HCF × LCM = 2 × 60 = 120 = 6 × 20. రెండు ధన పూర్ణ సంఖ్యలు a, b లకు: HCF(a, b) × LCM(a, b) = a × b అవుతుంది. ఉదాహరణ 3 లో 96 మరియు 404 ల HCF కనుగొని, ఈ సూత్రం ద్వారా LCM సులభంగా లెక్కించవచ్చు.",
      tenglish: "Look at pages 21–22. HCF ante common prime factors lo SMALLEST powers product. LCM ante anni prime factors lo GREATEST powers product. For 6 and 20, HCF = 2, LCM = 60. Notice HCF × LCM = 2 × 60 = 120 = 6 × 20! So for any two positive integers, HCF(a,b) × LCM(a,b) = a × b."
    },

    boardPlan: [
      {
        stepNumber: 1,
        title: "Prime Power Definitions",
        boardContent: "HCF & LCM DEFINITIONS (Page 21):\n• HCF = Product of SMALLEST powers of each COMMON prime factor.\n• LCM = Product of GREATEST powers of EACH prime factor involved.",
        teacherAction: "Write the two formal definitions side-by-side. Underline 'SMALLEST COMMON' and 'GREATEST ALL'.",
        studentsAction: "Copy definitions in two parallel columns."
      },
      {
        stepNumber: 2,
        title: "Example 2: 6 and 20",
        boardContent: "EXAMPLE 2 (Page 21):\n6  = 2¹ × 3¹\n20 = 2² × 5¹\n\nCommon prime: 2 ⟹ Smallest power is 2¹\n⟹ HCF(6, 20) = 2\n\nAll primes: 2, 3, 5 ⟹ Greatest powers: 2², 3¹, 5¹\n⟹ LCM(6, 20) = 2² × 3¹ × 5¹ = 4 × 3 × 5 = 60\n\nVerification: HCF × LCM = 2 × 60 = 120\nProduct of numbers = 6 × 20 = 120 (Verified!)",
        teacherAction: "Solve step-by-step. Highlight the equality 120 = 120 in yellow chalk.",
        studentsAction: "Work out the prime factorisation and write the verification step."
      },
      {
        stepNumber: 3,
        title: "The Golden Two-Number Formula",
        boardContent: "GOLDEN RELATIONSHIP (For any 2 positive integers a, b):\nHCF(a, b) × LCM(a, b) = a × b\n\n⟹ LCM(a, b) = (a × b) / HCF(a, b)",
        teacherAction: "Draw a prominent box around the formula. Tell students this is guaranteed to appear in exams.",
        studentsAction: "Box the formula with a red/colored pen."
      },
      {
        stepNumber: 4,
        title: "Example 3: 96 and 404 Application",
        boardContent: "EXAMPLE 3 (Page 22):\nFind HCF of 96 and 404, hence find their LCM.\n96  = 2⁵ × 3\n404 = 2² × 101\n\nHCF(96, 404) = 2² = 4\n\nLCM(96, 404) = (96 × 404) / 4\n             = 96 × 101\n             = 9696",
        teacherAction: "Show how dividing 404 by 4 gives 101, turning large multiplication into an easy mental step: 96 × 101 = 9696.",
        studentsAction: "Calculate 96 × 101 and verify the answer 9696."
      }
    ],

    questions: [
      {
        category: "WARM-UP",
        question: "What is the HCF of two prime numbers, say 17 and 23?",
        expectedAnswer: "1 (since they have no common prime factor other than 1).",
        teacherGuidance: "Remind students that coprime numbers always have an HCF of 1."
      },
      {
        category: "THINK",
        question: "If HCF(a, b) = 1, what is LCM(a, b)?",
        expectedAnswer: "LCM(a, b) = a × b (because HCF × LCM = a × b, and HCF is 1).",
        teacherGuidance: "Help students see how the formula simplifies instantly for coprime integers."
      },
      {
        category: "DISCUSS",
        question: "Why does HCF take the smallest power while LCM takes the greatest power?",
        expectedAnswer: "A common factor must divide BOTH numbers, so it cannot exceed the smaller power. A multiple must be divisible by BOTH numbers, so it must contain at least the larger power.",
        teacherGuidance: "This deepens conceptual understanding instead of mere memorization."
      },
      {
        category: "CHECK",
        question: "If HCF(306, 657) = 9, what formula do we use to find LCM(306, 657)?",
        expectedAnswer: "LCM = (306 × 657) / 9.",
        teacherGuidance: "Direct reference to Exercise 1.1 Question 4."
      },
      {
        category: "EXIT QUESTION",
        question: "Can two numbers have 16 as their HCF and 380 as their LCM? Why or why not?",
        expectedAnswer: "No, because HCF must always be a factor of LCM. 380 is not divisible by 16 (380/16 = 23.75).",
        teacherGuidance: "A brilliant analytical exit question!"
      }
    ],

    examples: [
      {
        exampleNumber: "Example 2 (p. 21)",
        title: "HCF and LCM of 6 and 20",
        problem: "Find the LCM and HCF of 6 and 20 by the prime factorisation method.",
        solutionSteps: [
          { step: "Prime factorisation of 6", math: "6 = 2¹ × 3¹", explanation: "Primes involved: 2, 3" },
          { step: "Prime factorisation of 20", math: "20 = 2² × 5¹", explanation: "Primes involved: 2, 5" },
          { step: "HCF calculation", math: "HCF = 2¹ = 2", explanation: "Smallest power of common prime 2" },
          { step: "LCM calculation", math: "LCM = 2² × 3¹ × 5¹ = 60", explanation: "Greatest powers of primes 2, 3, 5" },
          { step: "Relationship check", math: "HCF × LCM = 2 × 60 = 120 = 6 × 20", explanation: "Verified HCF × LCM = a × b" }
        ],
        pedagogicalNote: "Show both manual factor listing and prime power method to help visual learners."
      },
      {
        exampleNumber: "Example 3 (p. 22)",
        title: "HCF of 96 and 404, hence LCM",
        problem: "Find the HCF of 96 and 404 by the prime factorisation method. Hence, find their LCM.",
        solutionSteps: [
          { step: "Prime factorise 96", math: "96 = 2⁵ × 3", explanation: "2 × 2 × 2 × 2 × 2 × 3" },
          { step: "Prime factorise 404", math: "404 = 2² × 101", explanation: "101 is prime" },
          { step: "HCF", math: "HCF(96, 404) = 2² = 4", explanation: "Common prime is 2, smallest power is 2" },
          { step: "Finding LCM using formula", math: "LCM = (96 × 404) / 4 = 96 × 101 = 9696", explanation: "Using HCF × LCM = a × b" }
        ],
        pedagogicalNote: "Emphasize the word 'Hence' in the question: students must use the formula, not re-factorise."
      }
    ],

    interactiveType: "hcf-lcm",
    interactiveConfig: {
      pairs: [
        { a: 6, b: 20, aFactors: "2¹ × 3¹", bFactors: "2² × 5¹", hcf: 2, lcm: 60, product: 120 },
        { a: 96, b: 404, aFactors: "2⁵ × 3¹", bFactors: "2² × 101¹", hcf: 4, lcm: 9696, product: 38784 },
        { a: 26, b: 91, aFactors: "2¹ × 13¹", bFactors: "7¹ × 13¹", hcf: 13, lcm: 182, product: 2366 }
      ]
    },

    misconceptions: [
      {
        misconception: "Students take the highest power for HCF because 'H' stands for 'Highest'.",
        whyStudentsThinkThis: "The linguistic trap: 'Highest Common Factor' sounds like they should take the highest power.",
        correction: "The factor is 'Highest', but to divide BOTH numbers, the prime power must be the SMALLEST common power.",
        classroomRemedy: "Write on the board: 'Highest Factor needs Lowest Power; Lowest Multiple needs Highest Power!' Have students repeat it."
      }
    ],

    classroomActivity: {
      title: "Prime Power Matching Challenge",
      duration: "10 minutes",
      materialsNeeded: "Index cards / paper slips",
      instructions: [
        "Write prime powers on cards: 2¹, 2², 2⁵, 3¹, 5¹, 101¹.",
        "Give one group 96 and one group 404.",
        "Have them hold up their cards. Call for HCF: only shared primes step forward with their lowest card (2² = 4).",
        "Call for LCM: highest cards of each prime step forward (2⁵, 3¹, 101¹ = 9696)."
      ],
      teacherFacilitation: "Physical movement solidifies the distinction between smallest shared power and greatest overall power."
    },

    checkUnderstanding: {
      quickChecks: [
        "Ask: If HCF(a,b) = 5 and a × b = 150, what is LCM(a,b)? (150/5 = 30).",
        "Ask: For HCF, do we take common primes or all primes? (Only common primes)."
      ],
      exitTicket: "Verify HCF × LCM = product of numbers for 26 and 91."
    },

    conclusion: "Summarize: Prime powers give an instant blueprint for both HCF and LCM. But beware! Does this formula work for THREE numbers? That is the dangerous trap we dismantle in the next lesson!"
  },

  {
    lessonNumber: "05",
    slug: "three-numbers-hcf-lcm-warning",
    chapter: "Real Numbers",
    chapterNumber: 1,
    section: "1.2 Fundamental Theorem of Arithmetic (Three Numbers)",
    title: "HCF & LCM of Three Numbers & The Cautionary Formula",
    sourcePages: "22–23, 30–31",
    estimatedMinutes: 45,
    difficulty: "Advanced",
    orderIndex: 5,

    objective: "Train teachers to teach HCF and LCM of three numbers (6, 72, 120) and forcefully correct the frequent error where students attempt to apply HCF × LCM = p × q × r to three numbers.",
    whyStudentsLearnIt: "The textbook explicitly warns (pages 22 & 31) that the product of three numbers is NOT equal to the product of their HCF and LCM. Students must learn the true relationship given in the textbook summary.",
    howToIntroduce: "Write on the board in large letters: 'Does HCF(p, q, r) × LCM(p, q, r) = p × q × r?' Tell the class: 'Today we will test this formula with 6, 72, and 120. Prepare to be shocked!'",

    story: {
      headline: "The Cautionary Tale of Three Numbers: Breaking the Fake Rule",
      narrative: "In mathematics, a pattern that works for two things does NOT automatically work for three things! \nStudents love generalizing. They say: 'If HCF(a,b) × LCM(a,b) = a × b, then surely HCF(p,q,r) × LCM(p,q,r) = p × q × r!'\n\nLet us put this hypothesis on trial with Example 4:\n6 = 2 × 3\n72 = 2³ × 3²\n120 = 2³ × 3 × 5\n\nHCF is smallest power of common primes: 2¹ × 3¹ = 6.\nLCM is greatest power of all primes: 2³ × 3² × 5 = 8 × 9 × 5 = 360.\n\nNow calculate: \nHCF × LCM = 6 × 360 = 2,160.\nNow calculate the product of the three numbers: \n6 × 72 × 120 = 51,840!\n\n2,160 ≠ 51,840! It fails spectacularly!\n\nWhy? Because when three numbers share factors pairwise, the simple product overcounts shared prime factors. The textbook gives us the real relationship on page 31: \nLCM(p,q,r) = [p · q · r · HCF(p,q,r)] / [HCF(p,q) · HCF(q,r) · HCF(p,r)].",
      keyTakeaway: "HCF(p,q,r) × LCM(p,q,r) ≠ p · q · r. The two-number rule does NOT hold for three numbers."
    },

    teacherScript: {
      english: "Pay close attention to Example 4 on page 22 and the summary remarks on page 31. We find HCF(6, 72, 120) = 6 and LCM(6, 72, 120) = 360. Notice that HCF × LCM = 6 × 360 = 2160, but the product of the three numbers is 6 × 72 × 120 = 51840! They are NOT equal! Make your students write this warning in their notebooks with a big red cross: HCF(p, q, r) × LCM(p, q, r) ≠ p × q × r. If they want the true relationship for three numbers, page 31 gives: LCM(p,q,r) = (p · q · r · HCF(p,q,r)) / (HCF(p,q) · HCF(q,r) · HCF(p,r)).",
      telugu: "పేజీ 22 లోని ఉదాహరణ 4 మరియు పేజీ 31 లోని సారాంశం చాలా ముఖ్యమైనవి. 6, 72, 120 ల HCF = 6, LCM = 360. ఇక్కడ HCF × LCM = 2160 అవుతుంది. కానీ ఆ మూడు సంఖ్యల లబ్దం 6 × 72 × 120 = 51840! 2160 ≠ 51840. కాబట్టి మూడు సంఖ్యల విషయంలో HCF × LCM = p × q × r అనే సూత్రం పనిచేయదు! విద్యార్థులు తరచుగా పరీక్షల్లో ఈ తప్పు చేస్తారు. వారికి పేజీ 31 లో ఇచ్చిన అసలైన సూత్రాన్ని వివరించండి.",
      tenglish: "Look at Example 4 on page 22. 6, 72, 120 ki HCF = 6, LCM = 360. HCF × LCM = 2160, but product of three numbers is 51840! They are NOT equal. Please remind students: HCF(p,q,r) × LCM(p,q,r) ≠ p · q · r. Ee formula kevalam 2 numbers ke pani chesthundi, 3 numbers ki kaadu!"
    },

    boardPlan: [
      {
        stepNumber: 1,
        title: "Example 4 Factorisation",
        boardContent: "EXAMPLE 4 (Page 22):\nFind HCF and LCM of 6, 72 and 120 using prime factorisation.\n\n6   = 2¹ × 3¹\n72  = 2³ × 3²\n120 = 2³ × 3¹ × 5¹",
        teacherAction: "Write the prime factorisations lined up neatly so powers are vertically aligned.",
        studentsAction: "Copy the aligned prime factorisations into their notebooks."
      },
      {
        stepNumber: 2,
        title: "Computing HCF and LCM",
        boardContent: "Common primes to ALL three: 2 and 3\nSmallest powers: 2¹, 3¹\n⟹ HCF(6, 72, 120) = 2¹ × 3¹ = 6\n\nAll primes involved: 2, 3, 5\nGreatest powers: 2³, 3², 5¹\n⟹ LCM(6, 72, 120) = 2³ × 3² × 5¹ = 8 × 9 × 5 = 360",
        teacherAction: "Demonstrate inspecting the column for smallest power (HCF) and greatest power (LCM).",
        studentsAction: "Write down HCF = 6 and LCM = 360."
      },
      {
        stepNumber: 3,
        title: "The Grand Disproof (Page 22 & 31)",
        boardContent: "⚠️ CRITICAL WARNING (Page 22 & 31):\nHCF × LCM = 6 × 360 = 2,160\nProduct of numbers = 6 × 72 × 120 = 51,840\n\n2,160 ≠ 51,840!\n\nCONCLUSION:\nHCF(p, q, r) × LCM(p, q, r) ≠ p × q × r\n(The product of three numbers is NOT equal to product of HCF and LCM!)",
        teacherAction: "Use red chalk to strike through the false formula. Emphasize this directly.",
        studentsAction: "Write the warning in red and circle the disproof: 2160 ≠ 51840."
      },
      {
        stepNumber: 4,
        title: "The True Three-Number Identity (Page 31)",
        boardContent: "CORRECT 3-NUMBER FORMULA (Page 31 Summary):\nLCM(p, q, r) = [p · q · r · HCF(p, q, r)] / [HCF(p, q) · HCF(q, r) · HCF(p, r)]\n\nHCF(p, q, r) = [p · q · r · LCM(p, q, r)] / [LCM(p, q) · LCM(q, r) · LCM(p, r)]",
        teacherAction: "Present the true formulas from the summary. Explain that pairwise HCFs in the denominator remove overcounting.",
        studentsAction: "Record the 3-number formulas from page 31."
      }
    ],

    questions: [
      {
        category: "WARM-UP",
        question: "Find the prime factorisation of 12, 15 and 21 (Exercise 1.1 Q3(i)).",
        expectedAnswer: "12 = 2² × 3, 15 = 3 × 5, 21 = 3 × 7. HCF = 3, LCM = 2² × 3 × 5 × 7 = 420.",
        teacherGuidance: "Quick classroom warm-up from Exercise 1.1."
      },
      {
        category: "THINK",
        question: "Why did 6 × 360 give 2160 while 6 × 72 × 120 gave 51840?",
        expectedAnswer: "Because the numbers share common factors with each other (pairwise), multiplying all three numbers multiplies those shared factors multiple times.",
        teacherGuidance: "Praise deep reasoning about overlapping prime sets."
      },
      {
        category: "DISCUSS",
        question: "If a student in an exam writes: 'LCM(a,b,c) = (a × b × c) / HCF(a,b,c)', what mark should they receive?",
        expectedAnswer: "Zero! The formula is false for three numbers. The textbook explicitly disproves it on page 22.",
        teacherGuidance: "Remind teachers to be vigilant when marking this common blunder."
      },
      {
        category: "CHECK",
        question: "Is HCF × LCM = product of numbers valid for two numbers? What about three numbers?",
        expectedAnswer: "Valid for two numbers; INVALID for three numbers.",
        teacherGuidance: "Ensure clear binary distinction."
      },
      {
        category: "EXIT QUESTION",
        question: "What is HCF(17, 23, 29) and LCM(17, 23, 29)?",
        expectedAnswer: "Since all three are prime, HCF = 1 and LCM = 17 × 23 × 29 = 11339.",
        teacherGuidance: "From Exercise 1.1 Q3(ii)."
      }
    ],

    examples: [
      {
        exampleNumber: "Example 4 (p. 22)",
        title: "HCF and LCM of 6, 72, 120",
        problem: "Find the HCF and LCM of 6, 72 and 120, using the prime factorisation method.",
        solutionSteps: [
          { step: "Prime factorisation", math: "6 = 2 × 3, 72 = 2³ × 3², 120 = 2³ × 3 × 5", explanation: "Write in prime power format." },
          { step: "HCF calculation", math: "HCF = 2¹ × 3¹ = 6", explanation: "Smallest power of common factors 2 and 3." },
          { step: "LCM calculation", math: "LCM = 2³ × 3² × 5¹ = 360", explanation: "Greatest power of each prime factor." },
          { step: "Cautionary check", math: "HCF × LCM = 6 × 360 = 2160 ≠ 6 × 72 × 120 = 51840", explanation: "Textbook notes HCF × LCM ≠ product of 3 numbers." }
        ],
        pedagogicalNote: "Always make students calculate both 2160 and 51840 so the mismatch is etched into memory."
      }
    ],

    interactiveType: "three-number-comparison",
    interactiveConfig: {
      p: 6, q: 72, r: 120,
      hcf: 6, lcm: 360,
      hcfTimesLcm: 2160,
      product: 51840,
      isEqual: false
    },

    misconceptions: [
      {
        misconception: "Students assume that any algebraic property true for 2 numbers automatically holds for 3 numbers.",
        whyStudentsThinkThis: "Natural mathematical overgeneralization.",
        correction: "HCF(p,q,r) × LCM(p,q,r) = p · q · r is FALSE. The product overcounts shared pairwise factors.",
        classroomRemedy: "Show the concrete numbers: 2,160 vs 51,840. Concrete arithmetic instantly cures false algebraic assumptions."
      }
    ],

    classroomActivity: {
      title: "The Three-Number Trial",
      duration: "10 minutes",
      materialsNeeded: "Chalkboard",
      instructions: [
        "Divide class into Team Product and Team HCF-LCM.",
        "Team Product calculates 6 × 72 × 120 on the right board (51,840).",
        "Team HCF-LCM calculates HCF × LCM = 6 × 360 on the left board (2,160).",
        "The class compares the two numbers in unison and announces the verdict: 'GUILTY OF OVERGENERALIZATION!'"
      ],
      teacherFacilitation: "A humorous and memorable way to safeguard students against a notorious exam mistake."
    },

    checkUnderstanding: {
      quickChecks: [
        "Ask: Does HCF × LCM = product work for 3 numbers? (NO).",
        "Ask: What was the product for 6, 72, 120? (51,840 vs 2,160)."
      ],
      exitTicket: "State why HCF(p,q,r) × LCM(p,q,r) ≠ p · q · r using Example 4 values."
    },

    conclusion: "Summarize: Two numbers follow the golden product rule; three numbers require caution. Next, we step onto the sports field to see how LCM solves the real-world mystery of Sonia and Ravi!"
  },

  {
    lessonNumber: "06",
    slug: "classroom-problem-sports-field",
    chapter: "Real Numbers",
    chapterNumber: 1,
    section: "1.2 Fundamental Theorem of Arithmetic (Classroom Problem)",
    title: "Classroom Problem: The Circular Sports Track (Sonia & Ravi)",
    sourcePages: "24",
    estimatedMinutes: 40,
    difficulty: "Core",
    orderIndex: 6,

    objective: "Teach teachers how to guide students through the authentic circular track problem from Exercise 1.1 Q7, transforming an abstract LCM calculation into an engaging, visual sports demonstration.",
    whyStudentsLearnIt: "Students frequently struggle to know whether a real-life word problem requires HCF or LCM. This lesson trains them to recognize that periodic, repetitive cycles requiring a future simultaneous event always call for the Lowest Common Multiple (LCM).",
    howToIntroduce: "Do NOT tell students: 'Calculate LCM(18, 12).' Instead, tell a story: 'Imagine our school sports ground. Sonia and Ravi start running around the track at the exact same second, in the same direction. Sonia runs at a steady pace taking 18 minutes. Ravi runs faster, taking 12 minutes. At what minute will they high-five each other back at the starting line?'",

    story: {
      headline: "The Race on the Circular Track: When Will Sonia and Ravi Meet?",
      narrative: "There is a circular path around a sports field. Sonia takes 18 minutes to drive one round of the field, while Ravi takes 12 minutes for the same round.\n\nThey start at the exact same starting point, at the exact same moment, and travel in the same direction.\n\nLet us follow their journey minute by minute:\n• Minute 12: Ravi finishes Lap 1 and is at the starting point. Where is Sonia? Still running (only two-thirds of the way around)!\n• Minute 18: Sonia finishes Lap 1 and arrives at the starting point. Where is Ravi? Ravi already passed it 6 minutes ago and is halfway through Lap 2!\n• Minute 24: Ravi finishes Lap 2 at the starting point. Sonia is still in the middle of Lap 2.\n• Minute 36: AHA! \nSonia has completed: 36 / 18 = exactly 2 rounds!\nRavi has completed: 36 / 12 = exactly 3 rounds!\n\nBoth are standing at the starting point at the EXACT SAME INSTANT!\n36 minutes is the smallest common multiple of 18 and 12: LCM(18, 12) = 36 minutes.",
      keyTakeaway: "When two cycles repeat periodically and must coincide again at the beginning, the answer is their Lowest Common Multiple (LCM)."
    },

    teacherScript: {
      english: "Class, look at Question 7 on page 24. A classic question: Sonia takes 18 minutes per round; Ravi takes 12 minutes. Why do we find LCM and not HCF? Because they will meet after a time that is GREATER than 18 minutes and 12 minutes—a multiple of both times! Sonia returns to the start at multiples of 18: 18, 36, 54... Ravi returns at multiples of 12: 12, 24, 36, 48... The very first time they are both at the start together is 36 minutes. By prime factorisation: 18 = 2 × 3² and 12 = 2² × 3. LCM = 2² × 3² = 4 × 9 = 36 minutes!",
      telugu: "తరగతి విద్యార్థులారా, పేజీ 24 లోని 7వ సమస్యను గమనించండి. ఒక క్రీడా మైదానం చుట్టూ వృత్తాకార మార్గం ఉంది. సోనియా ఒక రౌండ్ పూర్తి చేయడానికి 18 నిమిషాలు, రవి 12 నిమిషాలు తీసుకుంటారు. ఇద్దరూ ఒకే బిందువు వద్ద, ఒకే దిశలో ప్రారంభమైతే వారు మళ్లీ ప్రారంభ బిందువు వద్ద ఎప్పుడు కలుసుకుంటారు? ఇక్కడ మనం గ.సా.భా చేయాలా, క.సా.గు చేయాలా? వారు కలుసుకునే సమయం 18 మరియు 12 కంటే ఎక్కువ ఉండాలి కాబట్టి క.సా.గు (LCM) చేయాలి! 18 = 2 × 3², 12 = 2² × 3. LCM = 2² × 3² = 36 నిమిషాలు. అంటే 36 నిమిషాల తర్వాత వారు మళ్లీ కలుసుకుంటారు.",
      tenglish: "Class, page 24 lo Q7 chudandi. Sonia circular track round veyyadaniki 18 minutes thesukuntundi, Ravi 12 minutes. Iddaru starting point daggara malli eppudu kalusukuntaru? Multiple of both times kavali kabatti manam LCM cheyali! 18 = 2 × 3², 12 = 2² × 3. LCM = 2² × 3² = 36 minutes. So after 36 minutes, Sonia 2 rounds, Ravi 3 rounds complete chesi starting line daggara kalusukuntaru."
    },

    boardPlan: [
      {
        stepNumber: 1,
        title: "Problem Statement & Variable Mapping",
        boardContent: "EXERCISE 1.1 – QUESTION 7 (Page 24):\nCircular Path around Sports Field:\n• Sonia's time for 1 round = 18 minutes\n• Ravi's time for 1 round  = 12 minutes\n\nCondition: Start together, same point, same time, same direction.\nQuestion: After how many minutes will they meet again at the starting point?",
        teacherAction: "Draw a large circle representing the sports track with a flagged 'START' point. Label Sonia (18m) and Ravi (12m).",
        studentsAction: "Draw the circular track in their notebooks."
      },
      {
        stepNumber: 2,
        title: "Why LCM? (Mathematical Reasoning)",
        boardContent: "WHY LCM?\n• Sonia reaches start at multiples of 18: 18, 36, 54, 72...\n• Ravi reaches start at multiples of 12:  12, 24, 36, 48, 60...\n\nThey will meet at a common multiple.\nThe FIRST time they meet is the LOWEST common multiple (LCM).",
        teacherAction: "Write the two timelines side-by-side. Circle 36 in both rows.",
        studentsAction: "Write out the multiples and circle 36."
      },
      {
        stepNumber: 3,
        title: "Prime Factorisation Solution",
        boardContent: "Prime Factorisation:\n18 = 2¹ × 3²\n12 = 2² × 3¹\n\nLCM(18, 12) = 2² × 3² = 4 × 9 = 36\n\nVerification of Laps:\n• Sonia: 36 ÷ 18 = 2 complete rounds\n• Ravi:  36 ÷ 12 = 3 complete rounds\n\nANSWER: They will meet again at the starting point after 36 minutes.",
        teacherAction: "Calculate prime factorisation and state the final answer with units ('minutes').",
        studentsAction: "Box the final answer: '36 minutes'."
      }
    ],

    questions: [
      {
        category: "WARM-UP",
        question: "How do you know when a word problem requires LCM instead of HCF?",
        expectedAnswer: "When the problem asks for a future common event, repeated cycles, or when the answer must be larger than the given numbers.",
        teacherGuidance: "Give students this golden rule of thumb for word problems."
      },
      {
        category: "THINK",
        question: "When they meet at 36 minutes, how many rounds has Sonia completed, and how many has Ravi completed?",
        expectedAnswer: "Sonia completed 2 rounds (36/18 = 2); Ravi completed 3 rounds (36/12 = 3).",
        teacherGuidance: "Notice that both round counts are whole numbers, proving both are exactly at the start."
      },
      {
        category: "DISCUSS",
        question: "What if the question asked: 'When will they meet anywhere on the track, not necessarily at the start?' Would the time be smaller or larger than 36 minutes?",
        expectedAnswer: "Smaller! Ravi is faster and will lap Sonia on the track earlier than 36 minutes.",
        teacherGuidance: "Emphasize that the question strictly specifies 'AT THE STARTING POINT'."
      },
      {
        category: "CHECK",
        question: "What is LCM(18, 12)?",
        expectedAnswer: "36.",
        teacherGuidance: "Quick check."
      },
      {
        category: "EXIT QUESTION",
        question: "If Sonia took 20 minutes and Ravi took 15 minutes, after how many minutes would they meet at the starting point?",
        expectedAnswer: "LCM(20, 15) = 60 minutes.",
        teacherGuidance: "Instant mental math check."
      }
    ],

    examples: [
      {
        exampleNumber: "Exercise 1.1 Q7 (p. 24)",
        title: "Sports Field Circular Track Problem",
        problem: "There is a circular path around a sports field. Sonia takes 18 minutes to drive one round of the field, while Ravi takes 12 minutes for the same. Suppose they both start at the same point and at the same time, and go in the same direction. After how many minutes will they meet again at the starting point?",
        solutionSteps: [
          { step: "Understand the periodic cycles", math: "T_Sonia = 18 min, T_Ravi = 12 min", explanation: "They meet at the starting point at common multiples of their lap times." },
          { step: "Identify required operation", math: "Time = LCM(18, 12)", explanation: "First reunion at start = Lowest Common Multiple." },
          { step: "Prime factorise 18 and 12", math: "18 = 2 × 3², 12 = 2² × 3", explanation: "Express in prime powers." },
          { step: "Compute LCM", math: "LCM(18, 12) = 2² × 3² = 4 × 9 = 36", explanation: "Greatest powers of primes 2 and 3." },
          { step: "Conclusion", math: "After 36 minutes", explanation: "Sonia finishes 2 laps and Ravi finishes 3 laps." }
        ],
        pedagogicalNote: "Show students the physical interpretation: at 36 min, both have integer round counts (36/18=2, 36/12=3)."
      }
    ],

    interactiveType: "sports-field",
    interactiveConfig: {
      soniaTime: 18,
      raviTime: 12,
      lcmTime: 36,
      soniaRounds: 2,
      raviRounds: 3
    },

    misconceptions: [
      {
        misconception: "Students calculate HCF(18, 12) = 6 and answer '6 minutes'.",
        whyStudentsThinkThis: "They confuse HCF and LCM whenever two numbers are given in a word problem.",
        correction: "At 6 minutes, neither Sonia (takes 18 min) nor Ravi (takes 12 min) has even finished a single round! They cannot meet at the start in 6 minutes.",
        classroomRemedy: "Ask: 'Can Ravi be at the start at 6 minutes if one round takes him 12 minutes?' Students immediately realize 6 minutes is impossible!"
      }
    ],

    classroomActivity: {
      title: "Classroom Track Simulation",
      duration: "10 minutes",
      materialsNeeded: "Two students, a stopwatch/clock, classroom aisle",
      instructions: [
        "Pick two students: 'Sonia' and 'Ravi'.",
        "Set a circular walking perimeter around desks.",
        "Sonia walks slowly (takes 18 steps per round); Ravi walks faster (takes 12 steps per round).",
        "Have the class count steps together: at step 12, Ravi passes start. At step 18, Sonia reaches start. At step 24, Ravi passes start. At step 36, BOTH hit the start line together!",
        "Cheer as they reach step 36 simultaneously."
      ],
      teacherFacilitation: "Physical dramatization makes LCM unforgettable for the entire class."
    },

    checkUnderstanding: {
      quickChecks: [
        "Ask: Why can't the answer be 6? (Neither has finished a round in 6 min).",
        "Ask: How many rounds did Sonia run in 36 minutes? (2 rounds)."
      ],
      exitTicket: "Explain why cyclical reunion problems always require LCM."
    },

    conclusion: "Summarize: We have mastered positive integers, their prime factor trees, and real-world LCM applications. Now, we enter the most exciting part of Chapter 1: Section 1.3—Revisiting Irrational Numbers!"
  },

  {
    lessonNumber: "07",
    slug: "revisiting-irrationals-and-divisibility-theorem",
    chapter: "Real Numbers",
    chapterNumber: 1,
    section: "1.3 Revisiting Irrational Numbers",
    title: "Revisiting Irrational Numbers & The Divisibility Theorem",
    sourcePages: "24–25",
    estimatedMinutes: 50,
    difficulty: "Advanced",
    orderIndex: 7,

    objective: "Equip teachers to explain what an irrational number is according to the textbook definition and guide students through the crucial Theorem 1.3: 'If p is a prime number and p divides a², then p divides a'.",
    whyStudentsLearnIt: "Theorem 1.3 is the mathematical engine that powers all irrationality proofs (like √2 and √3). Without mastering this theorem and its step-by-step proof, students cannot understand why the contradiction proofs work.",
    howToIntroduce: "Ask the class: 'If 2 divides 6² (which is 36), does 2 divide 6? Yes (36/2=18, 6/2=3). If 3 divides 9² (which is 81), does 3 divide 9? Yes. Is this always true for ANY prime p? How does the Fundamental Theorem of Arithmetic prove this rigorously?'",

    story: {
      headline: "The Prime That Divides the Square: The Key to the Kingdom",
      narrative: "In Class IX, you defined an irrational number: a number 's' is called irrational if it cannot be written in the form p/q, where p and q are integers and q ≠ 0.\nYou met √2, √3, √5, and in general √p where p is prime.\n\nNow, how can we mathematically prove that √2 is not a fraction?\nTo do that, we need a secret mathematical key—Theorem 1.3:\n'Let p be a prime number. If p divides a², then p divides a, where a is a positive integer.'\n\nLet us unlock why this MUST be true using our trusted Fundamental Theorem of Arithmetic:\nImagine positive integer 'a' has prime factors: a = p₁ · p₂ · ... · pₙ.\nWhen you square 'a', you get: a² = (p₁ · p₂ · ... · pₙ)² = p₁² · p₂² · ... · pₙ².\nNotice something remarkable: Squaring a number DOES NOT introduce any new prime numbers! It only doubles the powers of the existing primes!\n\nSo if prime p divides a², it must be one of the prime factors of a².\nAnd the Fundamental Theorem of Arithmetic assures us that the ONLY prime factors of a² are p₁, p₂, ... pₙ!\nTherefore, p MUST be one of p₁, p₂, ... pₙ.\nAnd since a is made of those exact primes, p MUST divide a!\n\nThe theorem is proven!",
      keyTakeaway: "Squaring a number doubles prime powers but introduces no new primes. Therefore, if a prime divides a², it must already divide a."
    },

    teacherScript: {
      english: "Class, turn to page 24. We are entering Section 1.3. First, recall the definition: a number s is irrational if it cannot be written in the form p/q where p, q are integers and q ≠ 0. Now look at Theorem 1.3 on page 25: Let p be a prime number. If p divides a², then p divides a, where a is a positive integer. Let us prove this in 5 clear steps. Step 1: Let the prime factorisation of a be p₁p₂...pₙ. Step 2: Then a² = p₁²p₂²...pₙ². Step 3: We are given that p divides a². Step 4: By the Fundamental Theorem of Arithmetic, the only prime factors of a² are p₁, p₂...pₙ. Step 5: Therefore p must be one of them, which means p divides a! Memorize this 5-step flow, because tomorrow we will use it to prove √2 is irrational.",
      telugu: "విద్యార్థులారా, పేజీ 24 చూడండి. కరణీయ సంఖ్య (Irrational number) అంటే p, q లు పూర్ణ సంఖ్యలు మరియు q ≠ 0 అయినప్పుడు p/q రూపంలో రాయలేని సంఖ్య. ఇప్పుడు పేజీ 25 లోని సిద్ధాంతం 1.3 చూడండి: 'p ఒక ప్రధాన సంఖ్య మరియు a ఒక ధన పూర్ణ సంఖ్య అనుకుందాం. a² ని p నిశ్శేషంగా భాగిస్తే, a ని కూడా p నిశ్శేషంగా భాగిస్తుంది.' దీని ఉపపత్తి 5 దశల్లో ఉంటుంది: దశ 1: a = p₁p₂...pₙ అనుకుందాం. దశ 2: a² = p₁²p₂²...pₙ² అవుతుంది. దశ 3: a² ని p భాగిస్తుంది. దశ 4: అంకగణిత ప్రాథమిక సిద్ధాంతం ప్రకారం a² లో ఉండే ప్రధాన కారణాంకాలు p₁, p₂...pₙ మాత్రమే. దశ 5: కాబట్టి p వీటిలో ఒకటవాలి, అంటే p అనేది a ని కూడా భాగిస్తుంది!",
      tenglish: "Look at page 24 & 25. Theorem 1.3 states: If p is prime and p divides a², then p divides a. Proof has 5 simple steps: Step 1: a prime factors are p₁p₂...pₙ. Step 2: a² will be p₁²p₂²...pₙ². Step 3: Given p divides a². Step 4: By FTA, a² has no new prime factors! Step 5: So p must be one of p₁...pₙ, which means p divides a. Ee theorem tho ne manam next class lo √2 irrational ani prove chestham."
    },

    boardPlan: [
      {
        stepNumber: 1,
        title: "Irrational Number Definition Recall",
        boardContent: "SECTION 1.3: REVISITING IRRATIONAL NUMBERS (Page 24)\n\nDefinition:\nA number 's' is called IRRATIONAL if it cannot be written in the form p/q, where p and q are integers and q ≠ 0.\n\nExamples from textbook: √2, √3, √5, and in general √p (where p is prime).",
        teacherAction: "Write definition clearly on left panel. Remind students that √p with prime p is always irrational.",
        studentsAction: "Copy the definition of irrational numbers."
      },
      {
        stepNumber: 2,
        title: "Theorem 1.3 Statement",
        boardContent: "THEOREM 1.3 (Page 25):\nLet p be a prime number. If p divides a², then p divides a, where a is a positive integer.",
        teacherAction: "Write the theorem statement. Highlight 'p is a prime number'. Explain that p MUST be prime for this to work.",
        studentsAction: "Copy Theorem 1.3 word-for-word in their notes."
      },
      {
        stepNumber: 3,
        title: "Proof Steps 1 & 2: Factorising a and a²",
        boardContent: "PROOF:\nStep 1: Let prime factorisation of a be:\n        a = p₁ · p₂ · ... · pₙ\n        (where p₁, p₂, ... pₙ are primes, not necessarily distinct)\n\nStep 2: Squaring both sides:\n        a² = (p₁ · p₂ · ... · pₙ)(p₁ · p₂ · ... · pₙ)\n           = p₁² · p₂² · ... · pₙ²",
        teacherAction: "Explain that squaring only squares each prime factor; no new prime is added.",
        studentsAction: "Write out the prime factorisation of a and a²."
      },
      {
        stepNumber: 4,
        title: "Proof Steps 3, 4 & 5: Invoking FTA & Conclusion",
        boardContent: "Step 3: Given that p divides a².\n\nStep 4: By the Fundamental Theorem of Arithmetic:\n        The ONLY prime factors of a² are p₁, p₂, ... pₙ.\n        So p must be one of p₁, p₂, ... pₙ.\n\nStep 5: Since a = p₁ · p₂ · ... · pₙ, it follows that:\n        p divides a.\n\nHence proved!",
        teacherAction: "Conclude the proof. Point out how FTA uniqueness is the logical bridge.",
        studentsAction: "Write the concluding steps and box 'Hence proved'."
      }
    ],

    questions: [
      {
        category: "WARM-UP",
        question: "Is √4 an irrational number? Why or why not?",
        expectedAnswer: "No! √4 = 2 = 2/1, which is a rational number. Only square roots of non-perfect squares / primes are irrational.",
        teacherGuidance: "Ensure students distinguish between √4 and √2 or √3."
      },
      {
        category: "THINK",
        question: "Why must 'p' be a PRIME number in Theorem 1.3? What if p is composite, say p = 4 and a = 6?",
        expectedAnswer: "If p = 4, a = 6: a² = 36. 4 divides 36 (36/4 = 9), BUT 4 DOES NOT divide 6 (6/4 = 1.5)! So the theorem FAILS if p is composite!",
        teacherGuidance: "This is a profound mathematical insight. Praise students who understand this counterexample!"
      },
      {
        category: "DISCUSS",
        question: "Why did squaring 'a' not introduce any new prime factors?",
        expectedAnswer: "Because a² is just a × a. It only multiplies the existing primes together; it cannot create a new prime out of thin air.",
        teacherGuidance: "Reinforce that prime factors of a² are identical to prime factors of a."
      },
      {
        category: "CHECK",
        question: "If 5 divides a², does 5 divide a?",
        expectedAnswer: "Yes, by Theorem 1.3, since 5 is prime.",
        teacherGuidance: "Fast verification."
      },
      {
        category: "EXIT QUESTION",
        question: "State the five steps in the proof of Theorem 1.3.",
        expectedAnswer: "1. Assume a = p₁...pₙ. 2. a² = p₁²...pₙ². 3. p divides a². 4. By FTA, primes of a² are only p₁...pₙ so p is among them. 5. Therefore p divides a.",
        teacherGuidance: "Check if students can recite the flow without looking."
      }
    ],

    examples: [
      {
        exampleNumber: "Theorem 1.3 (p. 25)",
        title: "Proof of Divisibility Theorem",
        problem: "Prove that if p is a prime number and p divides a², then p divides a, where a is a positive integer.",
        solutionSteps: [
          { step: "Step 1", math: "a = p₁ · p₂ · ... · pₙ", explanation: "Prime factorisation of a" },
          { step: "Step 2", math: "a² = p₁² · p₂² · ... · pₙ²", explanation: "Square both sides" },
          { step: "Step 3", math: "p | a²", explanation: "Given that p divides a²" },
          { step: "Step 4", math: "p ∈ {p₁, p₂, ... pₙ}", explanation: "By FTA, only prime factors of a² are p₁...pₙ" },
          { step: "Step 5", math: "p | a", explanation: "Since p is among factors of a, p divides a" }
        ],
        pedagogicalNote: "Highlight that students must state 'where p₁, p₂...pₙ are primes, not necessarily distinct'."
      }
    ],

    interactiveType: "divisibility-theorem",
    interactiveConfig: {
      steps: [
        { label: "Step 1: Factorise a", content: "Let a = p₁ · p₂ · ... · pₙ (primes)" },
        { label: "Step 2: Construct a²", content: "a² = (p₁ · p₂ · ... · pₙ)² = p₁² · p₂² · ... · pₙ²" },
        { label: "Step 3: Given Condition", content: "We are given that prime p divides a²" },
        { label: "Step 4: FTA Uniqueness", content: "The ONLY prime factors of a² are p₁, p₂, ... pₙ. Hence p must be one of them." },
        { label: "Step 5: Conclusion", content: "Since p is in the factorisation of a, p divides a. (Q.E.D.)" }
      ]
    },

    misconceptions: [
      {
        misconception: "Students think Theorem 1.3 works for ANY number, including composites like 4 or 6.",
        whyStudentsThinkThis: "They overlook the critical word 'prime' in 'Let p be a prime number'.",
        correction: "Show counterexample: 4 divides 6² (36), but 4 does NOT divide 6. The theorem strictly requires p to be prime.",
        classroomRemedy: "Have students circle the word 'PRIME' in Theorem 1.3 in yellow highlighter."
      }
    ],

    classroomActivity: {
      title: "Step-by-Step Proof Build",
      duration: "10 minutes",
      materialsNeeded: "5 flashcards with Step 1 to Step 5 written separately",
      instructions: [
        "Shuffle the 5 flashcards.",
        "Hand them to 5 volunteers.",
        "Have the class direct them to stand in the correct logical sequence from Step 1 to Step 5 at the front of the room.",
        "Once in order, each student reads their step out loud."
      ],
      teacherFacilitation: "Reinforces deductive logical sequencing in mathematical proofs."
    },

    checkUnderstanding: {
      quickChecks: [
        "Ask: If 7 divides a², does 7 divide a? (Yes, 7 is prime).",
        "Ask: If 9 divides a², must 9 divide a? (Not necessarily, 9 is composite; e.g. a=6, a²=36, 9|36 but 9 does not divide 6)."
      ],
      exitTicket: "Write down the prime factorisation form of a² if a = p₁p₂...pₙ."
    },

    conclusion: "Summarize: We have forged the master key—Theorem 1.3. Tomorrow, we use this key to unlock one of the greatest proofs in the history of mathematics: proving √2 is irrational!"
  },

  {
    lessonNumber: "08",
    slug: "proofs-of-irrationality-sqrt2-sqrt3",
    chapter: "Real Numbers",
    chapterNumber: 1,
    section: "1.3 Revisiting Irrational Numbers (Proofs)",
    title: "Mathematical Proof by Contradiction: √2 and √3 are Irrational",
    sourcePages: "25–27",
    estimatedMinutes: 55,
    difficulty: "Advanced",
    orderIndex: 8,

    objective: "Master teaching the rigorous method of Proof by Contradiction for proving √2 is irrational (Theorem 1.4) and √3 is irrational (Example 5), strictly following the textbook structure.",
    whyStudentsLearnIt: "Proof by Contradiction (Reductio ad Absurdum) is a foundational proof technique in mathematics. Students learn that when you cannot measure infinite non-repeating decimals, deductive logic can definitively prove irrationality.",
    howToIntroduce: "Explain the detective technique: 'If a detective wants to prove someone was NOT in the city during a crime, what do they assume? They assume: 'Suppose they WERE in the city.' Then they show this leads to an impossible contradiction! That is Proof by Contradiction.'",

    story: {
      headline: "The Impossible Fraction: How Deductive Logic Proved √2 Cannot Exist as a Ratio",
      narrative: "For centuries, ancient mathematicians believed every quantity in nature could be expressed as a clean ratio of two integers: a/b. When the diagonal of a 1×1 square turned out to be √2, they searched desperately for two integers a and b such that a/b = √2.\n\nThen came the breakthrough of proof by contradiction:\nSuppose √2 IS rational. That means √2 = a/b, where a and b are coprime integers (they have no common factors except 1).\n\nLet us follow the algebra:\nSquare both sides: 2 = a² / b² ⟹ 2b² = a².\nLook at that equation: 2 divides a²!\nAnd from our master theorem yesterday: If 2 divides a², then 2 MUST divide a!\n\nSo a can be written as 2c (an even number).\nSubstitute a = 2c back: 2b² = (2c)² = 4c² ⟹ b² = 2c².\nNow look again: 2 divides b²!\nWhich means 2 MUST divide b!\n\nSTOP! Look at what just happened:\nWe proved 2 divides a, AND 2 divides b!\nThat means 2 is a COMMON FACTOR of a and b!\n\nBut we started by stating that a and b are COPRIME (no common factors except 1)!\nThis is an impossible contradiction! A number cannot have NO common factors and simultaneously share the factor 2!\n\nWhere did this contradiction come from? From our flawed starting assumption that √2 is rational.\nTherefore, that assumption is FALSE. √2 is IRRATIONAL!",
      keyTakeaway: "Assuming √2 = a/b (coprime) forces both a and b to be multiples of 2, contradicting coprimality. Hence √2 must be irrational."
    },

    teacherScript: {
      english: "Class, open page 25. This is Theorem 1.4: √2 is irrational. This is one of the most important proofs in your entire Class 10 board exam. Notice the 6 distinct logical stages: Stage 1: Assumption—Assume √2 is rational, so √2 = a/b where a, b are coprime integers and b ≠ 0. Stage 2: Squaring—b√2 = a, so 2b² = a². Stage 3: Divisibility—2 divides a², so by Theorem 1.3, 2 divides a. Let a = 2c. Stage 4: Substitution—2b² = 4c², so b² = 2c². This means 2 divides b², so 2 divides b. Stage 5: The Contradiction—Both a and b share common factor 2, which contradicts that a and b are coprime! Stage 6: Conclusion—Our assumption was false; √2 is irrational. For √3 on page 26, the structure is IDENTICAL, replacing 2 with 3!",
      telugu: "తరగతి విద్యార్థులారా, పేజీ 25 లోని సిద్ధాంతం 1.4 చాలా ముఖ్యమైనది: √2 ఒక కరణీయ సంఖ్య అని నిరూపించుట. దీనిని విరోధాభాస పద్ధతి (Proof by contradiction) ద్వారా నిరూపిస్తాం. దశ 1: భావన—√2 అకరణీయ సంఖ్య అనుకుందాం. కాబట్టి √2 = a/b, ఇక్కడ a, b లు పరస్పర ప్రధాన సంఖ్యలు (coprime), b ≠ 0. దశ 2: వర్గం చేయగా—b√2 = a ⟹ 2b² = a². దశ 3: a² ని 2 భాగిస్తుంది కాబట్టి a ని కూడా 2 భాగిస్తుంది. కాబట్టి a = 2c అనుకుందాం. దశ 4: ప్రతిక్షేపించగా—2b² = 4c² ⟹ b² = 2c². కాబట్టి b ని కూడా 2 భాగిస్తుంది. దశ 5: విరోధాభాస—a మరియు b లకు 2 ఉమ్మడి కారణాంకం అయింది. కానీ అవి పరస్పర ప్రధాన సంఖ్యలు అనే దానికి ఇది విరుద్ధం! దశ 6: ముగింపు—కాబట్టి మన భావన తప్పు; √2 ఒక కరణీయ సంఖ్య. ఇదే విధంగా పేజీ 26 లోని √3 కూడా నిరూపిస్తాం.",
      tenglish: "Look at Theorem 1.4 on page 25: Prove that √2 is irrational. Proof by contradiction method: Step 1: Assume √2 is rational = a/b where a,b are coprime. Step 2: 2b² = a². Step 3: 2 divides a², so 2 divides a. Put a = 2c. Step 4: 2b² = 4c² ⟹ b² = 2c², so 2 divides b. Step 5: Both a and b have 2 as common factor, which contradicts that a,b are coprime! Step 6: Hence √2 is irrational. Same structure for √3 with 3!"
    },

    boardPlan: [
      {
        stepNumber: 1,
        title: "Stage 1: The Coprime Assumption",
        boardContent: "THEOREM 1.4 (Page 25): Prove that √2 is irrational.\n\nPROOF (By Contradiction):\nLet us assume, to the contrary, that √2 is rational.\n⟹ √2 = a/b, where a and b are COPRIME integers, and b ≠ 0.\n(Coprime = HCF(a, b) = 1, no common factor other than 1)",
        teacherAction: "Write the assumption on board. Underline 'COPRIME'. Explain why common factors were cancelled out.",
        studentsAction: "Write Stage 1 and highlight 'coprime'."
      },
      {
        stepNumber: 2,
        title: "Stage 2 & 3: Squaring and First Divisibility",
        boardContent: "Stage 2: Squaring\nb√2 = a\nSquaring both sides:\n2b² = a²  ------------------ (1)\n\nStage 3: First Divisibility\n2 divides a²\nBy Theorem 1.3: 2 divides a.\nSo, we can write: a = 2c  (for some integer c)",
        teacherAction: "Derive 2b² = a². Apply Theorem 1.3 to get a = 2c.",
        studentsAction: "Copy equations and label (1) and a = 2c."
      },
      {
        stepNumber: 3,
        title: "Stage 4 & 5: Second Divisibility and Contradiction",
        boardContent: "Stage 4: Substituting a = 2c into (1):\n2b² = (2c)² = 4c²\n⟹ b² = 2c²\n\nThis means: 2 divides b²\nBy Theorem 1.3: 2 divides b.\n\nStage 5: The Contradiction:\nFrom Stages 3 and 4, 'a' and 'b' have at least 2 as a common factor.\nBut this CONTRADICTS the fact that a and b are coprime!",
        teacherAction: "Substitute into equation (1). Highlight the contradiction in bright chalk.",
        studentsAction: "Follow algebraic substitution: b² = 2c² and record the contradiction."
      },
      {
        stepNumber: 4,
        title: "Stage 6: Final Conclusion",
        boardContent: "Stage 6: Conclusion:\nThis contradiction has arisen because of our incorrect assumption that √2 is rational.\n\nSo, we conclude that:\n√2 is IRRATIONAL. (Hence proved)",
        teacherAction: "Write the formal closing sentence. Emphasize that students must write the concluding sentence to get full board marks.",
        studentsAction: "Copy the standard closing sentence."
      }
    ],

    questions: [
      {
        category: "WARM-UP",
        question: "What does it mean when we say two integers 'a' and 'b' are coprime?",
        expectedAnswer: "Their HCF is 1; they share no common factor other than 1.",
        teacherGuidance: "Make sure students don't confuse 'coprime' with 'both numbers must be prime'."
      },
      {
        category: "THINK",
        question: "In the proof of √3 is irrational (Example 5, p. 26), what equation replaces 2b² = a²?",
        expectedAnswer: "3b² = a² (and we substitute a = 3c).",
        teacherGuidance: "Show students how the entire template transfers seamlessly from 2 to 3."
      },
      {
        category: "DISCUSS",
        question: "Why did we square both sides? What was the algebraic motivation?",
        expectedAnswer: "To eliminate the square root radical and convert it into an integer divisibility relation (2b² = a²).",
        teacherGuidance: "Help students appreciate the purpose behind each algebraic step."
      },
      {
        category: "CHECK",
        question: "What exact fact did having 2 divide both a and b contradict?",
        expectedAnswer: "It contradicted the assumption that a and b are coprime.",
        teacherGuidance: "Ensure students pinpoint the exact contradiction."
      },
      {
        category: "EXIT QUESTION",
        question: "If proving √5 is irrational (Exercise 1.2 Q1), what will be the common factor that causes the contradiction?",
        expectedAnswer: "5 (since 5b² = a², both a and b will be divisible by 5).",
        teacherGuidance: "Prepares them directly for Exercise 1.2 Q1."
      }
    ],

    examples: [
      {
        exampleNumber: "Theorem 1.4 (p. 25)",
        title: "Proof that √2 is irrational",
        problem: "Prove that √2 is irrational.",
        solutionSteps: [
          { step: "Assumption", math: "√2 = a/b, a, b coprime, b ≠ 0", explanation: "Assume rational in simplest form" },
          { step: "Square", math: "2b² = a²", explanation: "Multiply by b and square" },
          { step: "Divisibility of a", math: "2 | a² ⟹ 2 | a ⟹ a = 2c", explanation: "Apply Theorem 1.3" },
          { step: "Substitute", math: "2b² = (2c)² = 4c² ⟹ b² = 2c²", explanation: "Substitute into equation" },
          { step: "Divisibility of b", math: "2 | b² ⟹ 2 | b", explanation: "Apply Theorem 1.3 again" },
          { step: "Contradiction", math: "Common factor 2 contradicts coprimality", explanation: "Contradiction reached" },
          { step: "Conclusion", math: "√2 is irrational", explanation: "Assumption was false" }
        ],
        pedagogicalNote: "Show students the beautiful symmetry: step 3 gives 2|a, step 5 gives 2|b."
      },
      {
        exampleNumber: "Example 5 (p. 26)",
        title: "Proof that √3 is irrational",
        problem: "Prove that √3 is irrational.",
        solutionSteps: [
          { step: "Assumption", math: "√3 = a/b, a, b coprime, b ≠ 0", explanation: "Assume rational" },
          { step: "Square", math: "3b² = a²", explanation: "Square both sides" },
          { step: "Divisibility of a", math: "3 | a² ⟹ 3 | a ⟹ a = 3c", explanation: "By Theorem 1.3" },
          { step: "Substitute", math: "3b² = 9c² ⟹ b² = 3c²", explanation: "Substitute a = 3c" },
          { step: "Divisibility of b", math: "3 | b² ⟹ 3 | b", explanation: "By Theorem 1.3" },
          { step: "Contradiction & Conclusion", math: "Common factor 3 contradicts coprimality ⟹ √3 is irrational", explanation: "Hence proved" }
        ],
        pedagogicalNote: "Have students write the √3 proof alongside the √2 proof to see the 1:1 structural correspondence."
      }
    ],

    interactiveType: "contradiction-proof-sqrt2",
    interactiveConfig: {
      number: "√2",
      prime: 2,
      steps: [
        { name: "Assumption", detail: "Assume √2 is rational: √2 = a/b where a, b are coprime integers (b ≠ 0)." },
        { name: "Algebra", detail: "b√2 = a. Squaring both sides: 2b² = a²." },
        { name: "First Deduction", detail: "2 divides a², so by Theorem 1.3, 2 divides a. Let a = 2c." },
        { name: "Substitution", detail: "2b² = (2c)² = 4c² ⟹ b² = 2c²." },
        { name: "Second Deduction", detail: "2 divides b², so by Theorem 1.3, 2 divides b." },
        { name: "Contradiction", detail: "Both a and b share factor 2. Contradicts that a and b are coprime!" },
        { name: "Verdict", detail: "Assumption is invalid. Therefore, √2 is irrational." }
      ]
    },

    misconceptions: [
      {
        misconception: "Students forget to state that 'a and b are coprime' in the first line.",
        whyStudentsThinkThis: "They think just saying 'a and b are integers' is sufficient.",
        correction: "Without the coprime condition, having a common factor of 2 is NOT a contradiction! (E.g., 4/6 has factor 2, which is fine unless already reduced to lowest terms).",
        classroomRemedy: "Highlight that 'coprime' is the fulcrum upon which the entire contradiction pivots."
      }
    ],

    classroomActivity: {
      title: "The Courtroom Contradiction",
      duration: "15 minutes",
      materialsNeeded: "Chalkboard, judge gavel / notebook",
      instructions: [
        "One student acts as 'Defense Lawyer' claiming √2 is rational (a/b).",
        "The class acts as 'Prosecutor' proving step-by-step: 2 divides a! 2 divides b!",
        "The class presents the coprime certificate: 'Your Honor, they claimed no common factors, but we caught the factor 2!'",
        "The teacher (Judge) bangs the desk: 'Objection sustained! The assumption is guilty of contradiction. √2 is sentenced to be IRRATIONAL!'"
      ],
      teacherFacilitation: "Creates an indelible classroom memory that makes proof writing effortless."
    },

    checkUnderstanding: {
      quickChecks: [
        "Ask: If 3b² = a², does 3 divide a? (Yes, by Theorem 1.3).",
        "Ask: What is the contradiction in the √3 proof? (Both a and b share factor 3)."
      ],
      exitTicket: "Write down the first 3 lines of the proof that √3 is irrational."
    },

    conclusion: "Summarize: We have conquered the pinnacle proof of Class 10! Next, we examine irrational expressions like 5 - √3 and 3√2 where the proof is even shorter and more elegant!"
  },

  {
    lessonNumber: "09",
    slug: "proofs-of-irrational-expressions",
    chapter: "Real Numbers",
    chapterNumber: 1,
    section: "1.3 Revisiting Irrational Numbers (Expressions)",
    title: "Proofs of Irrational Expressions: 5 − √3 and 3√2",
    sourcePages: "27–28",
    estimatedMinutes: 45,
    difficulty: "Core",
    orderIndex: 9,

    objective: "Teach teachers how to guide students through the simpler contradiction proofs for compound irrational expressions like 5 − √3 (Example 6) and 3√2 (Example 7), without unnecessarily reproving √3 or √2 from scratch.",
    whyStudentsLearnIt: "Students learn how mathematical theorems build on each other: once √3 is known to be irrational, proving that 5 − √3 is irrational takes only simple algebraic rearrangement.",
    howToIntroduce: "Ask the class: 'If you take a rational number like 5, and subtract an irrational number like √3, can the result be a clean fraction? Let us find out using simple algebra!'",

    story: {
      headline: "The Contagion of Irrationality: How Roots Infect Expressions",
      narrative: "Imagine rational numbers are clean water, and an irrational number like √3 is a drop of deep blue ink.\nWhat happens when you add, subtract, multiply, or divide a rational number by an irrational number?\nThe entire mixture turns blue!\n\nLet us prove Example 6: Show that 5 − √3 is irrational.\nSuppose to the contrary that 5 − √3 is rational, so 5 − √3 = a/b where a, b are coprime integers (b ≠ 0).\n\nNow, perform simple algebraic isolation:\nMove √3 to one side and the fraction to the other:\n5 − a/b = √3\n⟹ (5b − a) / b = √3.\n\nNow look at the left hand side: \nSince 5, a, and b are all integers, the fraction (5b − a) / b is purely RATIONAL!\n\nThis means √3 must be rational!\n\nCLANG! The contradiction strikes! We already know that √3 is IRRATIONAL!\nA rational quantity cannot equal an irrational quantity!\nThis contradiction arose because we assumed 5 − √3 was rational.\nTherefore, 5 − √3 is IRRATIONAL.\n\nNotice how simple and fast this was compared to squaring! We did NOT need to square both sides. We simply isolated the radical!",
      keyTakeaway: "To prove expressions like 5 − √3 or 3√2 are irrational, isolate the radical term on one side. The other side is rational (made of integers), creating an immediate contradiction."
    },

    teacherScript: {
      english: "Class, look at Example 6 and Example 7 on pages 27–28. Students often make the mistake of squaring expressions like 5 − √3. Tell your students: DO NOT SQUARE! You don't need to! Since √3 is already established as irrational, your only goal is to isolate √3 on one side. Look: 5 − √3 = a/b gives √3 = 5 − a/b = (5b − a)/b. Since a and b are integers, (5b − a)/b is rational. This implies √3 is rational, which contradicts the fact that √3 is irrational! Hence 5 − √3 is irrational. Likewise for Example 7: 3√2 = a/b gives √2 = a/(3b). Since a, 3, b are integers, a/(3b) is rational, contradicting that √2 is irrational!",
      telugu: "పేజీలు 27–28 లోని ఉదాహరణలు 6 మరియు 7 చూడండి. 5 − √3 మరియు 3√2 లను కరణీయ సంఖ్యలని నిరూపించేటప్పుడు విద్యార్థులు వర్గం (squaring) చేయడానికి ప్రయత్నిస్తారు. అలా చేయవలసిన అవసరం లేదు! కేవలం కరణీయ పదాన్ని (radical) ఒకవైపు ఒంటరిగా ఉంచితే సరిపోతుంది. 5 − √3 = a/b అనుకుంటే √3 = (5b − a)/b అవుతుంది. ఇక్కడ a, b లు పూర్ణ సంఖ్యలు కాబట్టి (5b − a)/b అకరణీయ సంఖ్య. అంటే √3 కూడా అకరణీయ సంఖ్య కావాలి. కానీ √3 కరణీయ సంఖ్య అనే సత్యానికి ఇది విరుద్ధం! కాబట్టి 5 − √3 ఒక కరణీయ సంఖ్య. అలాగే 3√2 = a/b లో √2 = a/(3b) అవుతుంది. ఇది కూడా విరోధాభాసకు దారితీస్తుంది.",
      tenglish: "Look at Example 6 and 7 on pages 27–28. 5 − √3 and 3√2 proofs are very short! Squaring cheyalsina avasaram ledu. Just radical ni isolate cheyandi: 5 − √3 = a/b ⟹ √3 = (5b − a)/b. Left side integers unnay kabatti rational. This implies √3 is rational, which contradicts the fact that √3 is irrational! Hence 5 − √3 is irrational."
    },

    boardPlan: [
      {
        stepNumber: 1,
        title: "Example 6: 5 − √3 is Irrational (Page 27)",
        boardContent: "EXAMPLE 6 (Page 27):\nShow that 5 − √3 is irrational.\n\nPROOF:\nAssume to the contrary that 5 − √3 is rational.\n⟹ 5 − √3 = a/b  (where a, b are coprime integers, b ≠ 0)\n\nRearranging to isolate √3:\n5 − a/b = √3\n⟹ (5b − a) / b = √3",
        teacherAction: "Write assumption and isolate √3 cleanly on the right.",
        studentsAction: "Copy the algebraic rearrangement step."
      },
      {
        stepNumber: 2,
        title: "Contradiction & Conclusion for 5 − √3",
        boardContent: "Since 'a' and 'b' are integers, 5 − a/b = (5b − a)/b is RATIONAL.\n⟹ √3 is rational.\n\nBut this contradicts the fact that √3 is IRRATIONAL.\n\nThis contradiction arose due to our incorrect assumption.\nHence, 5 − √3 is IRRATIONAL. (Hence proved)",
        teacherAction: "Highlight that integers under subtraction and division yield rational numbers.",
        studentsAction: "Note down the contradiction and the conclusion."
      },
      {
        stepNumber: 3,
        title: "Example 7: 3√2 is Irrational (Page 28)",
        boardContent: "EXAMPLE 7 (Page 28):\nShow that 3√2 is irrational.\n\nPROOF:\nAssume to the contrary that 3√2 is rational.\n⟹ 3√2 = a/b  (where a, b are coprime integers, b ≠ 0)\n\nRearranging:\n√2 = a / (3b)\n\nSince 3, a, and b are integers, a/(3b) is RATIONAL.\n⟹ √2 is rational.\n\nThis contradicts the fact that √2 is IRRATIONAL.\nHence, 3√2 is IRRATIONAL. (Hence proved)",
        teacherAction: "Demonstrate Example 7 in 4 lines. Point out how easy it is compared to Theorem 1.4.",
        studentsAction: "Copy Example 7 into their notebooks."
      }
    ],

    questions: [
      {
        category: "WARM-UP",
        question: "If x is rational and y is rational (y ≠ 0), is x/y rational?",
        expectedAnswer: "Yes, the ratio of two integers/rationals with non-zero denominator is always rational.",
        teacherGuidance: "Remind students of closure properties of rational numbers."
      },
      {
        category: "THINK",
        question: "Why don't we need to square both sides in 5 − √3 = a/b?",
        expectedAnswer: "Because √3 is ALREADY proven to be irrational. Isolating √3 immediately creates a contradiction with a rational fraction.",
        teacherGuidance: "Save students valuable time in exams."
      },
      {
        category: "DISCUSS",
        question: "What happens in Exercise 1.2 Question 2: Prove that 3 + 2√5 is irrational? How do we isolate √5?",
        expectedAnswer: "3 + 2√5 = a/b ⟹ 2√5 = a/b - 3 = (a - 3b)/b ⟹ √5 = (a - 3b) / (2b).",
        teacherGuidance: "Walk through the two-step isolation: subtract 3, then divide by 2."
      },
      {
        category: "CHECK",
        question: "In 3√2 = a/b, what does √2 equal?",
        expectedAnswer: "a / (3b).",
        teacherGuidance: "Check basic fraction manipulation."
      },
      {
        category: "EXIT QUESTION",
        question: "Show how to isolate √2 in 6 + √2 = a/b (Exercise 1.2 Q3(iii)).",
        expectedAnswer: "√2 = a/b - 6 = (a - 6b) / b.",
        teacherGuidance: "Quick exit check."
      }
    ],

    examples: [
      {
        exampleNumber: "Example 6 (p. 27)",
        title: "Proof that 5 − √3 is irrational",
        problem: "Show that 5 − √3 is irrational.",
        solutionSteps: [
          { step: "Assumption", math: "5 − √3 = a/b (coprime, b ≠ 0)", explanation: "Assume rational" },
          { step: "Rearrange", math: "√3 = 5 − a/b = (5b − a)/b", explanation: "Isolate radical √3" },
          { step: "Rationality argument", math: "(5b − a)/b is rational", explanation: "Since a, b, 5 are integers" },
          { step: "Contradiction", math: "√3 is rational contradicts fact that √3 is irrational", explanation: "Known irrational fact" },
          { step: "Conclusion", math: "5 − √3 is irrational", explanation: "Hence proved" }
        ],
        pedagogicalNote: "Train students to never waste 15 minutes reproving √3 from scratch inside this problem."
      },
      {
        exampleNumber: "Example 7 (p. 28)",
        title: "Proof that 3√2 is irrational",
        problem: "Show that 3√2 is irrational.",
        solutionSteps: [
          { step: "Assumption", math: "3√2 = a/b (coprime, b ≠ 0)", explanation: "Assume rational" },
          { step: "Rearrange", math: "√2 = a / (3b)", explanation: "Isolate √2" },
          { step: "Rationality argument", math: "a / (3b) is rational", explanation: "Since 3, a, b are integers" },
          { step: "Contradiction & Conclusion", math: "Contradicts √2 is irrational ⟹ 3√2 is irrational", explanation: "Hence proved" }
        ],
        pedagogicalNote: "Remind students that a, 3, b are all integers, so their quotient is rational."
      }
    ],

    interactiveType: "irrational-expressions",
    interactiveConfig: {
      expressions: [
        { expr: "5 − √3", isolated: "√3 = (5b − a)/b", knownRadical: "√3" },
        { expr: "3√2", isolated: "√2 = a/(3b)", knownRadical: "√2" },
        { expr: "3 + 2√5", isolated: "√5 = (a − 3b)/(2b)", knownRadical: "√5" },
        { expr: "1/√2", isolated: "√2 = b/a", knownRadical: "√2" },
        { expr: "7√5", isolated: "√5 = a/(7b)", knownRadical: "√5" },
        { expr: "6 + √2", isolated: "√2 = (a − 6b)/b", knownRadical: "√2" }
      ]
    },

    misconceptions: [
      {
        misconception: "Students try to square both sides for 5 − √3, getting 25 − 10√3 + 3 = a²/b², which makes the radical harder to isolate.",
        whyStudentsThinkThis: "They blindly apply the squaring method learned for single radicals like √2.",
        correction: "Teach the rule: Single radical (like √2) → Square both sides. Compound expression (like 5 − √3) → Just isolate the radical!",
        classroomRemedy: "Write the rule in large letters: 'SINGLE RADICAL = SQUARE; RADICAL WITH OTHERS = ISOLATE!'"
      }
    ],

    classroomActivity: {
      title: "The Radical Isolator Speed Drill",
      duration: "10 minutes",
      materialsNeeded: "Chalkboard",
      instructions: [
        "Write 4 expressions on the board: 5 − √3, 3√2, 6 + √2, 7√5.",
        "Set a 60-second timer.",
        "Students race in their notebooks to perform the single-line isolation step for all four expressions.",
        "Check answers together: √3 = (5b-a)/b; √2 = a/(3b); √2 = (a-6b)/b; √5 = a/(7b)."
      ],
      teacherFacilitation: "Builds immense speed and algebraic confidence."
    },

    checkUnderstanding: {
      quickChecks: [
        "Ask: If 7√5 = a/b, what does √5 equal? (a / 7b).",
        "Ask: Why is a/(7b) rational? (a, 7, b are integers)."
      ],
      exitTicket: "Isolate √5 from 3 + 2√5 = a/b."
    },

    conclusion: "Summarize: We have mastered both types of irrationality proofs—single radicals via squaring & divisibility, and compound expressions via isolation. Now, let us review the complete chapter synthesis and summary points on pages 30–31!"
  },

  {
    lessonNumber: "10",
    slug: "summary-and-practice-assessment",
    chapter: "Real Numbers",
    chapterNumber: 1,
    section: "1.4 Summary & Pedagogical Assessment",
    title: "Chapter Summary, Assessment & Pedagogical Mastery",
    sourcePages: "30–31",
    estimatedMinutes: 45,
    difficulty: "Core",
    orderIndex: 10,

    objective: "Provide teachers with a comprehensive synthesis of all 5 textbook summary points (pages 30–31), classroom assessment rubrics, and diagnostic exit checks.",
    whyStudentsLearnIt: "Consolidates the entire chapter's mathematical journey into a coherent mental model before board examinations.",
    howToIntroduce: "Present the 5-point summary chart on the board and conduct a whole-class conceptual synthesis.",

    story: {
      headline: "The Grand Tapestry: What Have We Learned in Real Numbers?",
      narrative: "Think back to where we started on page 14: \nWe set out to investigate positive integers. \nWe discovered the Fundamental Theorem of Arithmetic—that every composite number is built from a unique set of prime atoms.\nWe applied this theorem to show that 4ⁿ can never end in zero, because it lacks prime 5.\nWe used prime powers to calculate HCF (smallest powers of common primes) and LCM (greatest powers of all primes).\nWe discovered that for two numbers, HCF × LCM = a × b, but cautioned ourselves that this simple rule does not hold for three numbers!\nThen we proved the master divisibility theorem: If p is prime and p divides a², then p divides a.\nArmed with that theorem, we used proof by contradiction to prove that √2 and √3 are irrational, and isolated radicals to prove 5 − √3 and 3√2 are irrational.\n\nThe entire chapter is a connected chain of deductive truth.",
      keyTakeaway: "All concepts in Chapter 1 flow logically from the prime factorisation of positive integers."
    },

    teacherScript: {
      english: "Class, let us review the 5 summary points from pages 30–31 of our textbook. 1. Fundamental Theorem of Arithmetic: Every composite number can be uniquely expressed as a product of primes, apart from order. 2. If p is a prime and p divides a², then p divides a. 3. √2, √3 are irrational. 4. For any two positive integers a and b, HCF(a, b) × LCM(a, b) = a × b. 5. For three numbers p, q, r, LCM and HCF follow the special pairwise formulas given on page 31. If you master these 5 points, you have mastered Chapter 1!",
      telugu: "విద్యార్థులారా, మన పాఠ్యపుస్తకంలోని పేజీలు 30–31 లోని 5 సారాంశ అంశాలను పునశ్చరణ చేసుకుందాం: 1. అంకగణిత ప్రాథమిక సిద్ధాంతం: ప్రతి సంయుక్త సంఖ్యను ప్రధాన కారణాంకాల లబ్దంగా అనన్యంగా రాయవచ్చు. 2. p ప్రధాన సంఖ్య అయ్యి, p అనేది a² ని భాగిస్తే, p అనేది a ని కూడా భాగిస్తుంది. 3. √2, √3 లు కరణీయ సంఖ్యలు. 4. ఏవైనా రెండు ధన పూర్ణ సంఖ్యలు a, b లకు HCF(a, b) × LCM(a, b) = a × b. 5. మూడు సంఖ్యలకు ప్రత్యేక సూత్రాలు వర్తిస్తాయి. ఈ 5 అంశాలు గుర్తున్నట్లయితే మొదటి అధ్యాయంలో పూర్తి మార్కులు సాధించవచ్చు!",
      tenglish: "Look at the 5 summary points on pages 30–31: 1. Fundamental Theorem of Arithmetic guarantees unique prime factorisation. 2. If prime p | a², then p | a. 3. √2, √3 are irrational. 4. HCF(a,b) × LCM(a,b) = a × b for 2 numbers. 5. For 3 numbers, product formula does NOT hold directly. Revise these 5 points thoroughly!"
    },

    boardPlan: [
      {
        stepNumber: 1,
        title: "Textbook Summary Point 1 & 2 (Page 30)",
        boardContent: "SUMMARY OF CHAPTER 1 (Pages 30–31):\n\n1. Fundamental Theorem of Arithmetic:\n   Every composite number can be expressed as a product of primes,\n   and this factorisation is UNIQUE, apart from the order of factors.\n\n2. Divisibility Theorem:\n   If p is a prime and p divides a², then p divides a (a ∈ ℤ⁺).",
        teacherAction: "Write points 1 and 2. Highlight 'UNIQUE' and 'p is prime'.",
        studentsAction: "Copy summary points 1 and 2."
      },
      {
        stepNumber: 2,
        title: "Textbook Summary Point 3 & 4 (Page 30)",
        boardContent: "3. Irrationality:\n   √2, √3 are irrational numbers.\n\n4. Two-Number Identity:\n   For any two positive integers a and b:\n   HCF(a, b) × LCM(a, b) = a × b",
        teacherAction: "Write points 3 and 4 on center panel.",
        studentsAction: "Copy points 3 and 4 into their revision sheets."
      },
      {
        stepNumber: 3,
        title: "Textbook Summary Point 5: Three-Number Identity (Page 31)",
        boardContent: "5. Three-Number Formulas (p, q, r):\n   LCM(p, q, r) = (p · q · r · HCF(p, q, r)) / [HCF(p, q) · HCF(q, r) · HCF(p, r)]\n\n   HCF(p, q, r) = (p · q · r · LCM(p, q, r)) / [LCM(p, q) · LCM(q, r) · LCM(p, r)]\n\n   ⚠️ Note: HCF(p,q,r) × LCM(p,q,r) ≠ p · q · r",
        teacherAction: "Reiterate the three-number formula and the inequality.",
        studentsAction: "Record the three-number formulas."
      }
    ],

    questions: [
      {
        category: "WARM-UP",
        question: "What is the only even prime number?",
        expectedAnswer: "2.",
        teacherGuidance: "Quick confidence builder."
      },
      {
        category: "THINK",
        question: "Can two numbers have an HCF of 18 and an LCM of 380?",
        expectedAnswer: "No, 380 is not divisible by 18 (380 / 18 = 21.11...). HCF must always divide LCM.",
        teacherGuidance: "Standard competitive exam diagnostic."
      },
      {
        category: "DISCUSS",
        question: "How did we use the Fundamental Theorem of Arithmetic to prove that 4ⁿ cannot end in 0?",
        expectedAnswer: "By showing 4ⁿ = 2²ⁿ, so 2 is the ONLY prime factor. By FTA uniqueness, prime 5 can never appear.",
        teacherGuidance: "Synthesizes Lesson 3."
      },
      {
        category: "CHECK",
        question: "What is the contradiction in the proof that √2 is irrational?",
        expectedAnswer: "Both a and b were proven divisible by 2, contradicting that a and b are coprime.",
        teacherGuidance: "Synthesizes Lesson 8."
      },
      {
        category: "EXIT QUESTION",
        question: "Recite the 5 summary points from page 30-31.",
        expectedAnswer: "FTA uniqueness, p|a² => p|a, √2 & √3 irrational, HCF×LCM=a×b, and 3-number formula.",
        teacherGuidance: "End of chapter mastery check."
      }
    ],

    examples: [
      {
        exampleNumber: "Summary Diagnostic",
        title: "All Core Formulas at a Glance",
        problem: "Verify the two-number formula for a = 12, b = 18.",
        solutionSteps: [
          { step: "HCF", math: "12 = 2² × 3, 18 = 2 × 3² ⟹ HCF = 2 × 3 = 6", explanation: "Smallest powers" },
          { step: "LCM", math: "LCM = 2² × 3² = 36", explanation: "Greatest powers" },
          { step: "Verification", math: "6 × 36 = 216 = 12 × 18", explanation: "Verified 216 = 216" }
        ],
        pedagogicalNote: "Have students verify this mentally in under 15 seconds."
      }
    ],

    interactiveType: "none",
    misconceptions: [
      {
        misconception: "Students think revision means solving every single exercise problem again.",
        whyStudentsThinkThis: "Rote learning habits.",
        correction: "True mathematical revision means understanding the 5 core conceptual pillars and the logical connections between them.",
        classroomRemedy: "Use concept mapping linking FTA → HCF/LCM → Theorem 1.3 → Proof by Contradiction."
      }
    ],

    classroomActivity: {
      title: "The Chapter 1 Concept Chain",
      duration: "15 minutes",
      materialsNeeded: "Chalkboard",
      instructions: [
        "Draw 5 interconnected links on the board:",
        "[Prime Numbers] ➔ [FTA Uniqueness] ➔ [HCF & LCM] ➔ [p|a² ⟹ p|a] ➔ [Contradiction Proofs].",
        "Have 5 students walk up and explain how each link connects to the next link using only textbook concepts.",
        "Demonstrate how Class 10 Chapter 1 forms a single unbroken chain of mathematical logic."
      ],
      teacherFacilitation: "Inspires students to see the beauty and unity of mathematics."
    },

    checkUnderstanding: {
      quickChecks: [
        "Ask: Are all 5 summary points clear? (Class choral review).",
        "Ask: What is the source page for the 3-number formula? (Page 31)."
      ],
      exitTicket: "Write down your personal top teaching takeaway for Chapter 1."
    },

    conclusion: "Congratulations! You have completed the comprehensive teaching guide for Class 10 Real Numbers (Pages 14–31). You are now ready to teach this chapter with absolute confidence and pedagogical mastery!"
  }
];

module.exports = lessonsData;
