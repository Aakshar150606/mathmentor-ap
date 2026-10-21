const express = require('express');
const router = express.Router();
const assistantController = require('../controllers/assistantController');
const authMiddleware = require('../middleware/auth');

router.post('/ask', authMiddleware, assistantController.askAssistant);

module.exports = router;
