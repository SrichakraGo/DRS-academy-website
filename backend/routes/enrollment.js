const express = require('express');
const router = express.Router();
const Enrollment = require('../models/Enrollment');

router.post('/', async (req, res) => {
  try {
    const enrollment = new Enrollment(req.body);
    await enrollment.save();
    res.status(201).json({ message: 'Enrollment successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to enroll' });
  }
});

module.exports = router;
