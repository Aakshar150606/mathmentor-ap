const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  exerciseNumber: { type: String, required: true }, // "Exercise 1.1", "Exercise 1.2"
  questionNumber: { type: Number, required: true },
  subPart: { type: String, default: '' },
  sourcePage: { type: String, required: true }, // "23", "24", "28", "29"
  questionText: { type: String, required: true },
  solutionText: { type: String, required: true },
  mathSteps: [String],
  teachingApproach: { type: String, required: true },
  commonPitfalls: { type: String, required: true },
  orderIndex: { type: Number, default: 0 },
});

module.exports = mongoose.model('Exercise', exerciseSchema);
