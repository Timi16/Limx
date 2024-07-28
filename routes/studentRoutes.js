const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const { protect, authorize } = require('../middleware/auth');

// Get all courses (Students can view all courses)
router.get('/courses', protect, authorize(['student']), courseController.getAllCourses);

// Get a course by ID (Students can view specific course details)
router.get('/courses/:courseId', protect, authorize(['student']), courseController.getCourseById);

module.exports = router;
