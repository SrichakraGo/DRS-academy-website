const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
  fullName: String,
  parentName: String,
  email: String,
  phone: String,
  currentClass: String,
  course: String,
  message: String,
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Enrollment', enrollmentSchema);
