require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/userRoutes');
const gradeRoutes = require('./routes/gradeRoutes'); 
const path = require('path');
const courseRoutes=require('./routes/courseRoutes');
const studentRoutes = require('./routes/studentRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
//const classRoutes = require('./routes/classes');
//const attendanceRoutes = require('./routes/attendance');

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));  // Serve uploaded files

// Connect to MongoDB
connectDB();

// Routes
app.use('/api', authRoutes);
app.use('/api/grades', gradeRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/teachers', teacherRoutes); 
app.use('/api/students', studentRoutes);
// Start the server
app.listen(3000, () => console.log('Server running on port 3000'));