const TeacherNote = require('../models/TeacherNote');

// Get notes for current teacher
exports.getNotes = async (req, res) => {
  try {
    const teacherId = req.teacher._id;
    const { lessonId, tag } = req.query;

    const query = { teacherId };
    if (lessonId) query.lessonId = lessonId;
    if (tag) query.tag = tag;

    const notes = await TeacherNote.find(query).sort({ updatedAt: -1 });
    return res.json({ notes });
  } catch (error) {
    console.error('Notes fetch error:', error);
    return res.status(500).json({ message: 'Error retrieving notes' });
  }
};

// Create a new note
exports.createNote = async (req, res) => {
  try {
    const teacherId = req.teacher._id;
    const { lessonId, lessonTitle, title, content, tag } = req.body;

    if (!lessonId || !title || !content) {
      return res.status(400).json({ message: 'lessonId, title, and content are required' });
    }

    const note = new TeacherNote({
      teacherId,
      lessonId,
      lessonTitle: lessonTitle || 'General Real Numbers Note',
      title,
      content,
      tag: tag || 'Pedagogy',
    });

    await note.save();
    return res.status(201).json({ message: 'Note created successfully', note });
  } catch (error) {
    console.error('Note create error:', error);
    return res.status(500).json({ message: 'Error creating note' });
  }
};

// Update note
exports.updateNote = async (req, res) => {
  try {
    const teacherId = req.teacher._id;
    const { id } = req.params;
    const { title, content, tag } = req.body;

    const note = await TeacherNote.findOne({ _id: id, teacherId });
    if (!note) {
      return res.status(404).json({ message: 'Note not found or unauthorized' });
    }

    if (title) note.title = title;
    if (content) note.content = content;
    if (tag) note.tag = tag;
    note.updatedAt = new Date();

    await note.save();
    return res.json({ message: 'Note updated', note });
  } catch (error) {
    console.error('Note update error:', error);
    return res.status(500).json({ message: 'Error updating note' });
  }
};

// Delete note
exports.deleteNote = async (req, res) => {
  try {
    const teacherId = req.teacher._id;
    const { id } = req.params;

    const note = await TeacherNote.findOneAndDelete({ _id: id, teacherId });
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    return res.json({ message: 'Note deleted successfully' });
  } catch (error) {
    console.error('Note delete error:', error);
    return res.status(500).json({ message: 'Error deleting note' });
  }
};
