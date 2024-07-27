require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/userRoutes');
//const studentRoutes = require('./routes/students');
//const teacherRoutes = require('./routes/teachers');
//const classRoutes = require('./routes/classes');
//const attendanceRoutes = require('./routes/attendance');

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

// Connect to MongoDB
connectDB();

// Routes
app.use('/api', authRoutes);

// Start the server
app.listen(3000, () => console.log('Server running on port 3000'));