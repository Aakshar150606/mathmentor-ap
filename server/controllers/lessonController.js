const Lesson = require('../models/Lesson');

// Get all lessons sorted by orderIndex
exports.getAllLessons = async (req, res) => {
  try {
    const lessons = await Lesson.find().sort({ orderIndex: 1 });
    return res.json({ lessons });
  } catch (error) {
    console.error('Error fetching lessons:', error);
    return res.status(500).json({ message: 'Error retrieving lessons' });
  }
};

// Get single lesson by slug
exports.getLessonBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const lesson = await Lesson.findOne({ slug });
    if (!lesson) {
      return res.status(404).json({ message: 'Lesson not found' });
    }
    return res.json({ lesson });
  } catch (error) {
    console.error('Error fetching lesson:', error);
    return res.status(500).json({ message: 'Error retrieving lesson' });
  }
};

// Search lessons, board plans, questions, examples, misconceptions
exports.searchContent = async (req, res) => {
  try {
    const { q } = req.query;
    if (!q || q.trim() === '') {
      return res.json({ results: [] });
    }

    const queryRegex = new RegExp(q.trim(), 'i');

    const lessons = await Lesson.find({
      $or: [
        { title: queryRegex },
        { section: queryRegex },
        { objective: queryRegex },
        { 'story.narrative': queryRegex },
        { 'boardPlan.boardContent': queryRegex },
        { 'questions.question': queryRegex },
        { 'examples.problem': queryRegex },
        { 'misconceptions.misconception': queryRegex },
      ],
    }).select('lessonNumber slug title section sourcePages difficulty estimatedMinutes objective');

    return res.json({ results: lessons, query: q });
  } catch (error) {
    console.error('Search error:', error);
    return res.status(500).json({ message: 'Error performing search' });
  }
};
