const Exercise = require('../models/Exercise');

// Get all exercises
exports.getAllExercises = async (req, res) => {
  try {
    const { exerciseNumber } = req.query;
    const query = {};
    if (exerciseNumber) {
      query.exerciseNumber = exerciseNumber;
    }
    const exercises = await Exercise.find(query).sort({ orderIndex: 1 });
    return res.json({ exercises });
  } catch (error) {
    console.error('Error fetching exercises:', error);
    return res.status(500).json({ message: 'Error retrieving exercises' });
  }
};
