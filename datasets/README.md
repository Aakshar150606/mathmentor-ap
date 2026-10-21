# MathMentor AP: Curriculum Datasets

This directory contains the pedagogical and textbook datasets powering **MathMentor AP** — the Teacher Guidance Platform for Government of Andhra Pradesh State Board Class 10 Mathematics (Semester 1, Chapter 1: REAL NUMBERS, Pages 14–31).

---

## 📁 Available Dataset Files

| File | Format | Records / Size | Description |
| :--- | :--- | :--- | :--- |
| [`lessons_dataset.json`](./lessons_dataset.json) | JSON | 5 Core Lessons (~119 KB) | Full structured pedagogical data including 5-phase teaching workflows, classroom story hooks, bilingual scripts (English, Telugu, Tenglish), blackboard plans, diagnostic questions, common student misconceptions, and exit tickets. |
| [`lessons_dataset.csv`](./lessons_dataset.csv) | CSV | 5 Rows (~23 KB) | Tabular export of the lesson objectives, narrative headlines, takeaways, and bilingual scripts for Excel / Google Sheets analysis. |
| [`exercises_dataset.json`](./exercises_dataset.json) | JSON | 20 Questions (~16.6 KB) | Complete textbook exercises (Exercises 1.1 & 1.2) containing problem statements, textbook source pages, step-by-step mathematical solutions, teaching approaches, and common student pitfalls. |
| [`exercises_dataset.csv`](./exercises_dataset.csv) | CSV | 20 Rows (~7.8 KB) | Tabular spreadsheet format of all textbook exercise problems, questions, solutions, and teaching tips. |

---

## 📊 Dataset Schema Overview

### 1. Lessons Dataset (`lessons_dataset.json`)
- `lessonNumber`: Sequential identifier (`"01"` to `"05"`)
- `slug`: URL routing slug (e.g., `"fundamental-theorem-of-arithmetic"`)
- `chapter`: `"Real Numbers"`
- `section`: Textbook section heading (e.g., `"1.2 The Fundamental Theorem of Arithmetic"`)
- `sourcePages`: Exact textbook page range (Pages 14 to 31)
- `estimatedMinutes`: Suggested teaching duration
- `difficulty`: Pedagogical level (`"Foundation"`, `"Core"`, `"Advanced"`)
- `objective`: Key learning outcome for the classroom session
- `whyStudentsLearnIt`: Real-world and exam importance
- `howToIntroduce`: Classroom entry strategy
- `story`:
  - `headline`: Dramatic story hook
  - `narrative`: Classroom analogy (e.g., "Prime DNA of Numbers", "The Clockwork Circular Track")
  - `keyTakeaway`: Core conceptual deduction
- `teacherScript`:
  - `english`: English classroom lecture script
  - `telugu`: Formal Telugu classroom script (ఆంధ్రప్రదేశ్ పాఠ్యపుస్తక శైలి)
  - `tenglish`: Conversational bilingual script
- `boardPlan`: Array of chronological blackboard layout steps (step number, title, board text layout, teacher action, student action)
- `questions`: Categorized classroom engagement prompts (`WARM-UP`, `CONCEPT-CHECK`, `CHALLENGE`, `SOCRATIC`) with sample student answers and teacher follow-up
- `misconceptions`: Common student errors, why they occur, and teacher remediation script
- `exitTicket`: Quick classroom assessment problem with solution

---

### 2. Exercises Dataset (`exercises_dataset.json`)
- `exerciseNumber`: `"Exercise 1.1"` or `"Exercise 1.2"`
- `questionNumber`: Textbook problem number (1, 2, 3, 4, 5, 6, 7)
- `subPart`: Problem sub-division (e.g. `"(i)"`, `"(ii)"`, etc.)
- `sourcePage`: Textbook page number (`"23"`, `"24"`, `"28"`, `"29"`)
- `questionText`: Original problem statement from AP Class 10 Mathematics Textbook
- `solutionText`: Final algebraic or arithmetic solution
- `mathSteps`: Array of sequential mathematical calculation steps
- `teachingApproach`: Pedagogical hint on how to guide students to solve the problem
- `commonPitfalls`: Common student arithmetic or conceptual mistakes to watch out for
