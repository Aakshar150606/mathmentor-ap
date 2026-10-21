# MathMentor AP 📐
### *"Learn the concept. Learn how to teach it."*

**MathMentor AP** is a specialized teacher-training and instructor guidance platform developed strictly in accordance with the **Government of Andhra Pradesh, Department of School Education, Mathematics Class 10 Semester 1 Textbook, Chapter 1 – REAL NUMBERS (Pages 14 to 31)**.

Unlike typical student learning portals, MathMentor AP is designed from the ground up for **teachers**. It answers the fundamental question for every mathematics topic:
> *"I understand the concept, but HOW exactly should I teach it to my students in the classroom?"*

---

## 🔒 Strict Source Boundary (Pages 14 to 31)

This platform strictly adheres to the provided source material and does NOT introduce external topics:
* **Section 1.1 (Pages 14–15):** Introduction to Real Numbers; recalling rational & irrational numbers; the two pillars of positive integers (Euclid's division algorithm and Fundamental Theorem of Arithmetic).
* **Section 1.2 (Pages 16–20):** The Fundamental Theorem of Arithmetic; factor trees; uniqueness apart from order; Carl Friedrich Gauss (*Disquisitiones Arithmeticae*); landmark prime factorisation of **32760** ($2^3 \times 3^2 \times 5 \times 7 \times 13$).
* **Applications (Pages 20–23):** Why $4^n$ can never end in digit zero; HCF & LCM via prime factorisation (Example 2: 6 and 20; Example 3: 96 and 404; Example 4: 6, 72 and 120); the two-number identity $\text{HCF}(a, b) \times \text{LCM}(a, b) = a \times b$; the crucial warning that $\text{HCF}(p, q, r) \times \text{LCM}(p, q, r) \neq p \cdot q \cdot r$.
* **Classroom Word Problem (Page 24):** Circular sports field problem with Sonia (18 min) and Ravi (12 min) meeting at the starting point after $\text{LCM}(18, 12) = 36$ minutes.
* **Section 1.3 (Pages 24–25):** Revisiting irrational numbers; definition of irrational; **Theorem 1.3**: *"If $p$ is a prime number and $p$ divides $a^2$, then $p$ divides $a$"*.
* **Contradiction Proofs (Pages 25–28):** **Theorem 1.4** (proving $\sqrt{2}$ is irrational); Example 5 (proving $\sqrt{3}$ is irrational); Example 6 ($5 - \sqrt{3}$); Example 7 ($3\sqrt{2}$).
* **Exercises (Pages 23–24 & 28–29):** Full teacher solutions and pedagogical approaches for **Exercise 1.1** and **Exercise 1.2**.
* **Chapter Summary (Pages 30–31):** Synthesis of all 5 textbook summary points and the true 3-number formula.

---

## 🛠 Technology Stack

* **Frontend:**
  * React 18 with TypeScript & Vite
  * Tailwind CSS (Custom Dark Slate & Cyan EdTech theme)
  * Framer Motion & Lucide React
  * Responsive 3-Column Teaching Layout
* **Backend:**
  * Node.js & Express
  * MongoDB with Mongoose ODM
  * Role-Based Access Control (Role: `TEACHER`)
  * JWT Authentication & BCrypt Password Hashing
* **Database:**
  * Local MongoDB Server running at `mongodb://127.0.0.1:27017/mathmentor_ap`

---

## 🚀 Quick Start Guide

### 1. Prerequisites
* **Node.js** (v18+ or v24)
* **MongoDB** Server installed and running locally on port 27017

### 2. Backend Setup
```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Start the Express server
npm run dev
# Server runs on http://localhost:5000
```
*Note: On first startup, the server automatically connects to MongoDB and seeds all 10 Real Numbers lessons, 20 exercise items, and the pre-configured Demo Teacher account.*

### 3. Frontend Setup
```bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Start the Vite dev server
npm run dev
# Client runs on http://localhost:5173
```

---

## 🔑 Demo Teacher Credentials

For instant prototype review, you can click **"1-Click Teacher Demo Login"** on the landing page or enter:
* **Email:** `teacher@mathmentor.ap`
* **Password:** `Teacher@123`
* **Role:** `TEACHER`
* **Profile:** Smt. Lakshmi Prasanna (Senior Maths Teacher, Z.P. High School, Guntur)

---

## 🌟 Key Platform Features

### 1. The 10-Phase Teaching Mode
When clicking **"Start Teaching"** on any lesson, instructors get an interactive 3-column cockpit:
1. **Understand:** Objective, why students learn it, and how to introduce the concept.
2. **Story Mode:** Faithful classroom narratives framing numbers as architectural discoveries.
3. **Teacher Script:** Spoken classroom dialogue toggleable between **English**, **Telugu (తెలుగు)**, and **Tenglish**.
4. **Board Plan:** Digital chalkboard simulator showing what to write, what students copy, with Step-by-Step reveals.
5. **Interactive Math:** Embedded live simulators (Factor Tree, Venn powers, Sports track, Contradiction proofs).
6. **Ask Students:** Question cards categorized into **WARM-UP**, **THINK**, **DISCUSS**, **CHECK**, and **EXIT QUESTION** with hidden expected answers.
7. **Common Misconceptions:** Exact diagnostic pitfalls (e.g. applying HCF × LCM = product to 3 numbers, or omitting the coprime assumption in proofs) with classroom remedies.
8. **Classroom Activity:** Guided student activities with durations and teacher facilitation tips.
9. **Check Understanding:** Diagnostic checks and exit tickets.
10. **Lesson Conclusion:** Memorable classroom wrap-ups.

### 2. Interactive Mathematics Lab
* **Factor Tree Explorer:** Interactive step-by-step branching for $32760$, $96$, $404$, and $140$.
* **HCF & LCM Studio:** Two-number identity verification ($120 = 120$) vs Three-number disproof ($2,160 \neq 51,840$) with the true page 31 formula.
* **Sports Field Simulator:** Live animated circular track demonstrating Sonia (18m) and Ravi (12m) running until they reunite at minute 36 (LCM).
* **Proof Mode:** Step-by-step Contradiction Proof visualizer with *"Reveal Next Step"* for $\sqrt{2}$, $\sqrt{3}$, Theorem 1.3, and $5 - \sqrt{3}$.

### 3. Classroom Lesson Planner
Select period duration (**30m**, **45m**, **60m**) and teaching style (**Story-First**, **Board-First**, **Activity-First**, **Problem-First**) to instantly generate a timed, print-ready classroom schedule.

### 4. Teacher Notes Manager
Full CRUD personal reflection notebook allowing instructors to attach pedagogical insights and timing notes to specific textbook concepts.

### 5. MathMentor AI Assistant
Teacher-only assistant drawer strictly bounded to Pages 14–31. Provides natural pedagogical advice, story hooks, and board ideas, while refusing out-of-scope questions.

---

## 📁 Project Structure

```
csp project/
├── server/
│   ├── models/
│   │   ├── Teacher.js
│   │   ├── Lesson.js
│   │   ├── TeacherNote.js
│   │   ├── TeacherProgress.js
│   │   └── Exercise.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── lessonController.js
│   │   ├── progressController.js
│   │   ├── noteController.js
│   │   ├── exerciseController.js
│   │   └── assistantController.js
│   ├── routes/
│   ├── data/
│   │   ├── realNumbersLessons.js  (10 Complete Lesson Guides)
│   │   └── exercisesData.js       (Exercises 1.1 & 1.2 Keys)
│   ├── middleware/
│   │   └── auth.js                (JWT & Role: TEACHER verification)
│   ├── .env
│   └── server.js
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── BlackboardViewer.tsx
│   │   │   ├── TeacherScriptViewer.tsx
│   │   │   ├── QuestionCards.tsx
│   │   │   ├── MisconceptionHelp.tsx
│   │   │   ├── InteractiveFactorTree.tsx
│   │   │   ├── InteractiveHcfLcm.tsx
│   │   │   ├── InteractiveSportsField.tsx
│   │   │   ├── InteractiveProofMode.tsx
│   │   │   ├── AIAssistantDrawer.tsx
│   │   │   └── SearchModal.tsx
│   │   ├── pages/
│   │   │   ├── LandingPage.tsx
│   │   │   ├── LoginPage.tsx
│   │   │   ├── RegisterPage.tsx
│   │   │   ├── DashboardPage.tsx
│   │   │   ├── TeachingModePage.tsx
│   │   │   ├── StoryModePage.tsx
│   │   │   ├── ProofModePage.tsx
│   │   │   ├── InteractiveLabPage.tsx
│   │   │   ├── ExercisesPage.tsx
│   │   │   ├── LessonPlannerPage.tsx
│   │   │   ├── TeacherNotesPage.tsx
│   │   │   └── ProfilePage.tsx
│   │   ├── context/AuthContext.tsx
│   │   ├── services/api.ts
│   │   ├── types/index.ts
│   │   ├── index.css
│   │   └── App.tsx
│   ├── tailwind.config.js
│   ├── vite.config.ts
│   └── package.json
└── README.md
```

---

## 🏛 Official Citation
Content source: **Government of Andhra Pradesh, Department of School Education, Mathematics Class 10 Semester 1, Chapter 1 – REAL NUMBERS (Pages 14 to 31)**.
