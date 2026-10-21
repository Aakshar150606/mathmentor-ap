const express = require('express');
const router = express.Router();
const lessonController = require('../controllers/lessonController');
const authMiddleware = require('../middleware/auth');

// All lesson routes protected for TEACHER role
router.get('/', authMiddleware, lessonController.getAllLessons);
router.get('/search', authMiddleware, lessonController.searchContent);
router.get('/:slug', authMiddleware, lessonController.getLessonBySlug);

module.exports = router;
