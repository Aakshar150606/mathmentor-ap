const express = require('express');
const router = express.Router();
const exerciseController = require('../controllers/exerciseController');
const authMiddleware = require('../middleware/auth');

router.get('/', authMiddleware, exerciseController.getAllExercises);

module.exports = router;
