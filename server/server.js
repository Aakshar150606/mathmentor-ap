require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const Teacher = require('./models/Teacher');
const Lesson = require('./models/Lesson');
const Exercise = require('./models/Exercise');

const lessonsData = require('./data/realNumbersLessons');
const exercisesData = require('./data/exercisesData');

const authRoutes = require('./routes/authRoutes');
const lessonRoutes = require('./routes/lessonRoutes');
const progressRoutes = require('./routes/progressRoutes');
const noteRoutes = require('./routes/noteRoutes');
const exerciseRoutes = require('./routes/exerciseRoutes');
const assistantRoutes = require('./routes/assistantRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mathmentor_ap';

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/lessons', lessonRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/notes', noteRoutes);
app.use('/api/exercises', exerciseRoutes);
app.use('/api/assistant', assistantRoutes);

// Health check endpoint
app.get('/', (req, res) => {
  res.json({
    status: 'online',
    platform: 'MathMentor AP Backend Server',
    curriculum: 'Andhra Pradesh Class 10 Real Numbers (Pages 14-31)',
    version: '1.0.0',
    timestamp: new Date(),
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    platform: 'MathMentor AP',
    curriculum: 'Andhra Pradesh Class 10 Real Numbers (Pages 14-31)',
    timestamp: new Date(),
  });
});

// Database Seeder
const seedDatabase = async () => {
  try {
    // 1. Seed Demo Teacher
    const existingDemo = await Teacher.findOne({ email: 'teacher@mathmentor.ap' });
    if (!existingDemo) {
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash('Teacher@123', salt);
      await Teacher.create({
        name: 'Smt. Lakshmi Prasanna (Senior Maths Teacher)',
        email: 'teacher@mathmentor.ap',
        passwordHash,
        role: 'TEACHER',
        schoolName: 'Z.P. High School, Guntur',
        district: 'Guntur, Andhra Pradesh',
        teachingMedium: 'Bilingual',
        experienceYears: 12,
      });
      console.log('✓ Demo Teacher account seeded: teacher@mathmentor.ap / Teacher@123');
    }

    // 2. Seed Lessons
    const lessonCount = await Lesson.countDocuments();
    if (lessonCount === 0) {
      await Lesson.insertMany(lessonsData);
      console.log(`✓ Seeded ${lessonsData.length} Real Numbers lessons (Pages 14-31)`);
    } else {
      // Refresh lessons if needed to ensure all latest fields exist
      for (const lesson of lessonsData) {
        await Lesson.findOneAndUpdate({ slug: lesson.slug }, lesson, { upsert: true });
      }
      console.log(`✓ Synchronized ${lessonsData.length} lessons with MongoDB`);
    }

    // 3. Seed Exercises
    const exerciseCount = await Exercise.countDocuments();
    if (exerciseCount === 0) {
      await Exercise.insertMany(exercisesData);
      console.log(`✓ Seeded ${exercisesData.length} Exercise questions (Exercises 1.1 & 1.2)`);
    } else {
      for (const ex of exercisesData) {
        await Exercise.findOneAndUpdate(
          { exerciseNumber: ex.exerciseNumber, questionNumber: ex.questionNumber, subPart: ex.subPart },
          ex,
          { upsert: true }
        );
      }
      console.log(`✓ Synchronized ${exercisesData.length} exercises with MongoDB`);
    }
  } catch (error) {
    console.error('Seeding error:', error);
  }
};

// Connect to MongoDB and start server
mongoose
  .connect(MONGODB_URI)
  .then(async () => {
    console.log('✓ Connected to MongoDB:', MONGODB_URI);
    await seedDatabase();
    app.listen(PORT, () => {
      console.log(`🚀 MathMentor AP Backend running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });
