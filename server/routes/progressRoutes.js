const express = require('express');
const router = express.Router();
const progressController = require('../controllers/progressController');
const authMiddleware = require('../middleware/auth');

router.get('/', authMiddleware, progressController.getProgress);
router.post('/update', authMiddleware, progressController.updateStatus);

module.exports = router;
