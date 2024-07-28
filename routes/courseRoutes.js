const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const { protect, authorize } = require('../middleware/auth');
const upload = require('../config/multer');

// Add a new course (Teachers only)
router.post('/', protect, authorize(['teacher']), upload.array('materials', 10), courseController.addCourse);

// Get all courses
router.get('/', protect, authorize(['teacher', 'student']), courseController.getAllCourses);

// Get a course by ID
router.get('/:courseId', protect, authorize(['teacher', 'student']), courseController.getCourseById);

// Update a course (Teachers only)
router.put('/:courseId', protect, authorize(['teacher']), courseController.updateCourse);

// Delete a course (Teachers only)
router.delete('/:courseId', protect, authorize(['teacher']), courseController.deleteCourse);

module.exports = router;
