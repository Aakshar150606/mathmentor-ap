const mongoose = require('mongoose');

const teacherProgressSchema = new mongoose.Schema({
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    required: true,
  },
  lessonSlug: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['NOT_STARTED', 'IN_PROGRESS', 'COMPLETED'],
    default: 'NOT_STARTED',
  },
  notesCount: {
    type: Number,
    default: 0,
  },
  lastViewedAt: {
    type: Date,
    default: Date.now,
  },
  completedAt: {
    type: Date,
  },
});

teacherProgressSchema.index({ teacherId: 1, lessonSlug: 1 }, { unique: true });

module.exports = mongoose.model('TeacherProgress', teacherProgressSchema);
