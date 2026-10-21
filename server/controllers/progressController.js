const TeacherProgress = require('../models/TeacherProgress');
const Lesson = require('../models/Lesson');

// Get teacher progress for all lessons
exports.getProgress = async (req, res) => {
  try {
    const teacherId = req.teacher._id;
    const progressRecords = await TeacherProgress.find({ teacherId });
    const totalLessons = await Lesson.countDocuments();
    
    const completedCount = progressRecords.filter(p => p.status === 'COMPLETED').length;
    const inProgressCount = progressRecords.filter(p => p.status === 'IN_PROGRESS').length;
    
    const percent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

    return res.json({
      progress: progressRecords,
      stats: {
        totalLessons,
        completedCount,
        inProgressCount,
        notStartedCount: totalLessons - completedCount - inProgressCount,
        percent,
      },
    });
  } catch (error) {
    console.error('Progress fetch error:', error);
    return res.status(500).json({ message: 'Error retrieving progress' });
  }
};

// Update status of a lesson for teacher
exports.updateStatus = async (req, res) => {
  try {
    const teacherId = req.teacher._id;
    const { lessonSlug, status } = req.body;

    if (!lessonSlug || !['NOT_STARTED', 'IN_PROGRESS', 'COMPLETED'].includes(status)) {
      return res.status(400).json({ message: 'Valid lessonSlug and status required' });
    }

    const updateFields = {
      status,
      lastViewedAt: new Date(),
    };

    if (status === 'COMPLETED') {
      updateFields.completedAt = new Date();
    }

    const record = await TeacherProgress.findOneAndUpdate(
      { teacherId, lessonSlug },
      updateFields,
      { new: true, upsert: true }
    );

    return res.json({ message: 'Status updated', record });
  } catch (error) {
    console.error('Update status error:', error);
    return res.status(500).json({ message: 'Error updating status' });
  }
};
