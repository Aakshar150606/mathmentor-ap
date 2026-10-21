const mongoose = require('mongoose');

const teacherNoteSchema = new mongoose.Schema({
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    required: true,
  },
  lessonId: {
    type: String, // lesson slug or lessonNumber
    required: true,
  },
  lessonTitle: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    enum: ['Pedagogy', 'Time Management', 'Student Doubts', 'Board Plan', 'Classroom Activity'],
    default: 'Pedagogy',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('TeacherNote', teacherNoteSchema);
