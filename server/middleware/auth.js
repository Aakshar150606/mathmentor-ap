const jwt = require('jsonwebtoken');
const Teacher = require('../models/Teacher');

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Authorization token missing. Teacher access only.' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'mathmentor_ap_super_secret_jwt_key_2026_class10_realnumbers');
    
    const teacher = await Teacher.findById(decoded.teacherId).select('-passwordHash');
    if (!teacher) {
      return res.status(401).json({ message: 'Teacher profile not found.' });
    }

    if (teacher.role !== 'TEACHER') {
      return res.status(403).json({ message: 'Access denied. Only registered teachers can access this guidance platform.' });
    }

    req.teacher = teacher;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired session. Please log in again.' });
  }
};

module.exports = authMiddleware;
