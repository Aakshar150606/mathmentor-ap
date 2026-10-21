const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  otp: {
    type: String,
    required: true,
  },
  // Temporary storage of registration details until OTP is verified
  registrationData: {
    name: String,
    passwordHash: String,
    schoolName: String,
    district: String,
    teachingMedium: String,
    experienceYears: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 600, // Automatically deleted by MongoDB after 10 minutes (600 seconds)
  },
});

module.exports = mongoose.model('Otp', otpSchema);
