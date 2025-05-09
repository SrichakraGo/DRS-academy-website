const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const Admin = require('../models/Admin');

const run = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  const hashedPassword = await bcrypt.hash('admin123', 10); // default password
  const admin = new Admin({ email: 'admin@drsacademy.com', password: hashedPassword });
  await admin.save();
  console.log('✅ Admin created!');
  process.exit();
};

run();
