const mongoose = require('mongoose');

const boardPlanStepSchema = new mongoose.Schema({
  stepNumber: Number,
  title: String,
  boardContent: String,
  teacherAction: String,
  studentsAction: String,
});

const questionSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ['WARM-UP', 'THINK', 'DISCUSS', 'CHECK', 'EXIT QUESTION'],
    required: true,
  },
  question: { type: String, required: true },
  expectedAnswer: { type: String, required: true },
  teacherGuidance: { type: String, required: true },
});

const exampleSchema = new mongoose.Schema({
  exampleNumber: String,
  title: String,
  problem: String,
  solutionSteps: [{
    step: String,
    math: String,
    explanation: String,
  }],
  pedagogicalNote: String,
});

const misconceptionSchema = new mongoose.Schema({
  misconception: String,
  whyStudentsThinkThis: String,
  correction: String,
  classroomRemedy: String,
});

const lessonSchema = new mongoose.Schema({
  lessonNumber: { type: String, required: true, unique: true }, // e.g. "01", "02", ...
  slug: { type: String, required: true, unique: true },
  chapter: { type: String, default: 'Real Numbers' },
  chapterNumber: { type: Number, default: 1 },
  section: { type: String, required: true },
  title: { type: String, required: true },
  sourcePages: { type: String, required: true }, // e.g. "14–15", "16–20"
  estimatedMinutes: { type: Number, default: 45 },
  difficulty: { type: String, enum: ['Foundation', 'Core', 'Advanced'], default: 'Core' },
  
  // Pedagogical framework
  objective: { type: String, required: true },
  whyStudentsLearnIt: { type: String, required: true },
  howToIntroduce: { type: String, required: true },
  
  // Story Mode
  story: {
    headline: String,
    narrative: String,
    keyTakeaway: String,
  },
  
  // Teacher Classroom Script in 3 linguistic options
  teacherScript: {
    english: String,
    telugu: String,
    tenglish: String,
  },
  
  // Digital Blackboard Plan
  boardPlan: [boardPlanStepSchema],
  
  // Pedagogical Questions
  questions: [questionSchema],
  
  // Authentic Textbook Examples
  examples: [exampleSchema],
  
  // Interactive Math Component configuration
  interactiveType: {
    type: String,
    enum: [
      'none',
      'factor-tree',
      'hcf-lcm',
      'three-number-comparison',
      'sports-field',
      'divisibility-theorem',
      'contradiction-proof-sqrt2',
      'contradiction-proof-sqrt3',
      'irrational-expressions',
    ],
    default: 'none',
  },
  interactiveConfig: mongoose.Schema.Types.Mixed,
  
  // Common Misconceptions & Corrections
  misconceptions: [misconceptionSchema],
  
  // Classroom Activity
  classroomActivity: {
    title: String,
    duration: String,
    materialsNeeded: String,
    instructions: [String],
    teacherFacilitation: String,
  },
  
  // Check Understanding
  checkUnderstanding: {
    quickChecks: [String],
    exitTicket: String,
  },
  
  // How to Conclude
  conclusion: { type: String, required: true },
  
  orderIndex: { type: Number, default: 0 },
});

module.exports = mongoose.model('Lesson', lessonSchema);
