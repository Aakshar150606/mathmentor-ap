const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'TEACHER',
    enum: ['TEACHER'],
  },
  schoolName: {
    type: String,
    default: 'Z.P. High School / Model School',
  },
  district: {
    type: String,
    default: 'Andhra Pradesh',
  },
  teachingMedium: {
    type: String,
    enum: ['English', 'Telugu', 'Bilingual'],
    default: 'Bilingual',
  },
  experienceYears: {
    type: Number,
    default: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Teacher', teacherSchema);
