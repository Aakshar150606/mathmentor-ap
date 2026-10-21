const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Teacher = require('../models/Teacher');
const Otp = require('../models/Otp');
const { sendOtpEmail } = require('../utils/emailService');

const generateToken = (teacherId) => {
  return jwt.sign(
    { teacherId },
    process.env.JWT_SECRET || 'mathmentor_ap_super_secret_jwt_key_2026_class10_realnumbers',
    { expiresIn: '30d' }
  );
};

// Send 6-Digit Email OTP for Registration
exports.sendOtp = async (req, res) => {
  try {
    const { name, email, password, schoolName, district, teachingMedium, experienceYears } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email, and password are required.' });
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({ message: 'Please enter a valid email address (e.g., teacher@school.edu).' });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters long.' });
    }

    const existingTeacher = await Teacher.findOne({ email: email.toLowerCase().trim() });
    if (existingTeacher) {
      return res.status(400).json({ message: 'A teacher account with this email already exists. Please log in instead.' });
    }

    // Generate random 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // Upsert OTP record
    await Otp.findOneAndUpdate(
      { email: email.toLowerCase().trim() },
      {
        email: email.toLowerCase().trim(),
        otp,
        registrationData: {
          name: name.trim(),
          passwordHash,
          schoolName: schoolName || 'Z.P. High School / Model School',
          district: district || 'Andhra Pradesh',
          teachingMedium: teachingMedium || 'Bilingual',
          experienceYears: experienceYears || 5,
        },
        createdAt: new Date(),
      },
      { upsert: true, new: true }
    );

    // Send real email via Resend / Brevo / Dev Preview
    const emailResult = await sendOtpEmail(email.toLowerCase().trim(), otp, name.trim());

    return res.json({
      message: `A 6-digit verification code has been dispatched to ${email.trim()}.`,
      email: email.toLowerCase().trim(),
      provider: emailResult.provider,
      previewOtp: emailResult.previewOtp, // Available for testing
    });
  } catch (error) {
    console.error('Send OTP error:', error);
    return res.status(500).json({ message: 'Error dispatching verification email' });
  }
};

// Verify OTP and Complete Registration
exports.verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({ message: 'Email and 6-digit OTP code are required.' });
    }

    const otpRecord = await Otp.findOne({
      email: email.toLowerCase().trim(),
      otp: otp.trim(),
    });

    if (!otpRecord) {
      return res.status(400).json({ message: 'Invalid or expired verification code. Please check code or request a new one.' });
    }

    const { name, passwordHash, schoolName, district, teachingMedium, experienceYears } = otpRecord.registrationData;

    // Check again if teacher was created in meantime
    let teacher = await Teacher.findOne({ email: email.toLowerCase().trim() });
    if (teacher) {
      await Otp.deleteOne({ _id: otpRecord._id });
      return res.status(400).json({ message: 'An account with this email was already registered.' });
    }

    teacher = new Teacher({
      name,
      email: email.toLowerCase().trim(),
      passwordHash,
      role: 'TEACHER',
      schoolName,
      district,
      teachingMedium,
      experienceYears,
    });

    await teacher.save();
    await Otp.deleteOne({ _id: otpRecord._id });

    const token = generateToken(teacher._id);

    return res.status(201).json({
      message: 'Teacher email verified and account registered successfully!',
      token,
      teacher: {
        id: teacher._id,
        name: teacher.name,
        email: teacher.email,
        role: teacher.role,
        schoolName: teacher.schoolName,
        district: teacher.district,
        teachingMedium: teacher.teachingMedium,
        experienceYears: teacher.experienceYears,
      },
    });
  } catch (error) {
    console.error('Verify OTP error:', error);
    return res.status(500).json({ message: 'Error verifying code and registering teacher' });
  }
};

// Register Teacher
exports.register = async (req, res) => {
  try {
    const { name, email, password, schoolName, district, teachingMedium, experienceYears } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email, and password are required.' });
    }

    // Strict email format validation regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({ message: 'Please enter a valid email address (e.g., teacher@school.edu).' });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters long.' });
    }

    const existingTeacher = await Teacher.findOne({ email: email.toLowerCase().trim() });
    if (existingTeacher) {
      return res.status(400).json({ message: 'A teacher account with this email already exists.' });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const teacher = new Teacher({
      name,
      email: email.toLowerCase(),
      passwordHash,
      role: 'TEACHER',
      schoolName: schoolName || 'Z.P. High School / Model School',
      district: district || 'Andhra Pradesh',
      teachingMedium: teachingMedium || 'Bilingual',
      experienceYears: experienceYears || 5,
    });

    await teacher.save();

    const token = generateToken(teacher._id);

    return res.status(201).json({
      message: 'Teacher registered successfully',
      token,
      teacher: {
        id: teacher._id,
        name: teacher.name,
        email: teacher.email,
        role: teacher.role,
        schoolName: teacher.schoolName,
        district: teacher.district,
        teachingMedium: teacher.teachingMedium,
        experienceYears: teacher.experienceYears,
      },
    });
  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ message: 'Server error during registration' });
  }
};

// Login Teacher
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({ message: 'Invalid email address format. Please enter a valid email.' });
    }

    const teacher = await Teacher.findOne({ email: email.toLowerCase().trim() });
    if (!teacher) {
      return res.status(401).json({ message: 'No registered teacher account found with this email. Please register first or check for typos.' });
    }

    if (teacher.role !== 'TEACHER') {
      return res.status(403).json({ message: 'Access denied. Only teachers can enter.' });
    }

    const isMatch = await bcrypt.compare(password, teacher.passwordHash);
    if (!isMatch) {
      return res.status(401).json({ message: 'Incorrect password for this email address. Please try again or use Demo Login.' });
    }

    const token = generateToken(teacher._id);

    return res.json({
      message: 'Teacher logged in successfully',
      token,
      teacher: {
        id: teacher._id,
        name: teacher.name,
        email: teacher.email,
        role: teacher.role,
        schoolName: teacher.schoolName,
        district: teacher.district,
        teachingMedium: teacher.teachingMedium,
        experienceYears: teacher.experienceYears,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Server error during login' });
  }
};

// Demo Teacher Quick Login
exports.demoLogin = async (req, res) => {
  try {
    let demoTeacher = await Teacher.findOne({ email: 'teacher@mathmentor.ap' });
    if (!demoTeacher) {
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash('Teacher@123', salt);
      demoTeacher = await Teacher.create({
        name: 'Smt. Lakshmi Prasanna (Senior Maths Teacher)',
        email: 'teacher@mathmentor.ap',
        passwordHash,
        role: 'TEACHER',
        schoolName: 'Z.P. High School, Guntur',
        district: 'Guntur, Andhra Pradesh',
        teachingMedium: 'Bilingual',
        experienceYears: 12,
      });
    }

    const token = generateToken(demoTeacher._id);

    return res.json({
      message: 'Demo teacher session started',
      token,
      teacher: {
        id: demoTeacher._id,
        name: demoTeacher.name,
        email: demoTeacher.email,
        role: demoTeacher.role,
        schoolName: demoTeacher.schoolName,
        district: demoTeacher.district,
        teachingMedium: demoTeacher.teachingMedium,
        experienceYears: demoTeacher.experienceYears,
      },
    });
  } catch (error) {
    console.error('Demo login error:', error);
    return res.status(500).json({ message: 'Error initializing demo teacher session' });
  }
};

// Forgot Password UI Handler
exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: 'Please provide teacher email address.' });
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({ message: 'Invalid email address format.' });
    }

    const teacher = await Teacher.findOne({ email: email.toLowerCase().trim() });
    if (!teacher) {
      return res.status(404).json({
        message: `No teacher account found with email "${email}". Please verify your email or register a new teacher account.`
      });
    }

    return res.json({
      message: `Password reset instructions dispatched to registered teacher email (${email}). For instant access, you may also use Demo Login.`
    });
  } catch (error) {
    console.error('Forgot password error:', error);
    return res.status(500).json({ message: 'Error processing password reset request' });
  }
};

// Get Current Teacher Profile
exports.getMe = async (req, res) => {
  return res.json({ teacher: req.teacher });
};

// Update Profile
exports.updateProfile = async (req, res) => {
  try {
    const { name, schoolName, district, teachingMedium, experienceYears } = req.body;
    const teacher = await Teacher.findById(req.teacher._id);
    if (!teacher) return res.status(404).json({ message: 'Teacher not found' });

    if (name) teacher.name = name;
    if (schoolName) teacher.schoolName = schoolName;
    if (district) teacher.district = district;
    if (teachingMedium) teacher.teachingMedium = teachingMedium;
    if (experienceYears !== undefined) teacher.experienceYears = experienceYears;

    await teacher.save();
    return res.json({ message: 'Profile updated successfully', teacher });
  } catch (error) {
    return res.status(500).json({ message: 'Error updating teacher profile' });
  }
};
