// client/src/types/index.ts

export interface Teacher {
  id: string;
  name: string;
  email: string;
  role: 'TEACHER';
  schoolName: string;
  district: string;
  teachingMedium: 'English' | 'Telugu' | 'Bilingual';
  experienceYears: number;
}

export interface BoardPlanStep {
  stepNumber: number;
  title: string;
  boardContent: string;
  teacherAction: string;
  studentsAction: string;
}

export interface QuestionItem {
  category: 'WARM-UP' | 'THINK' | 'DISCUSS' | 'CHECK' | 'EXIT QUESTION';
  question: string;
  expectedAnswer: string;
  teacherGuidance: string;
}

export interface ExampleStep {
  step: string;
  math: string;
  explanation: string;
}

export interface ExampleItem {
  exampleNumber: string;
  title: string;
  problem: string;
  solutionSteps: ExampleStep[];
  pedagogicalNote: string;
}

export interface MisconceptionItem {
  misconception: string;
  whyStudentsThinkThis: string;
  correction: string;
  classroomRemedy: string;
}

export interface ClassroomActivity {
  title: string;
  duration: string;
  materialsNeeded: string;
  instructions: string[];
  teacherFacilitation: string;
}

export interface CheckUnderstanding {
  quickChecks: string[];
  exitTicket: string;
}

export interface Lesson {
  _id?: string;
  lessonNumber: string;
  slug: string;
  chapter: string;
  chapterNumber: number;
  section: string;
  title: string;
  sourcePages: string;
  estimatedMinutes: number;
  difficulty: 'Foundation' | 'Core' | 'Advanced';
  orderIndex: number;
  
  objective: string;
  whyStudentsLearnIt: string;
  howToIntroduce: string;
  
  story: {
    headline: string;
    narrative: string;
    keyTakeaway: string;
  };
  
  teacherScript: {
    english: string;
    telugu: string;
    tenglish: string;
  };
  
  boardPlan: BoardPlanStep[];
  questions: QuestionItem[];
  examples: ExampleItem[];
  
  interactiveType: string;
  interactiveConfig?: any;
  
  misconceptions: MisconceptionItem[];
  classroomActivity: ClassroomActivity;
  checkUnderstanding: CheckUnderstanding;
  conclusion: string;
}

export interface TeacherProgress {
  lessonSlug: string;
  status: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED';
  lastViewedAt?: string;
  completedAt?: string;
}

export interface TeacherNote {
  _id: string;
  lessonId: string;
  lessonTitle: string;
  title: string;
  content: string;
  tag: 'Pedagogy' | 'Time Management' | 'Student Doubts' | 'Board Plan' | 'Classroom Activity';
  createdAt: string;
  updatedAt: string;
}

export interface ExerciseItem {
  _id: string;
  exerciseNumber: string;
  questionNumber: number;
  subPart: string;
  sourcePage: string;
  questionText: string;
  solutionText: string;
  mathSteps: string[];
  teachingApproach: string;
  commonPitfalls: string;
  orderIndex: number;
}
