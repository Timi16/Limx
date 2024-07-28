const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');
const { protect, authorize } = require('../middleware/auth');
const upload = require('../config/multer');

// Add a new teacher (Admin only)
router.post('/', protect, authorize(['admin']), upload.single('profilePicture'), teacherController.addTeacher);

// Get all teachers
router.get('/', protect, authorize(['admin', 'teacher', 'student']), teacherController.getAllTeachers);

// Get teacher by ID
router.get('/:teacherId', protect, authorize(['admin', 'teacher', 'student']), teacherController.getTeacherById);

// Update teacher profile (Teachers only)
router.put('/:teacherId', protect, authorize(['teacher']), upload.single('profilePicture'), teacherController.updateTeacher);

// Delete teacher (Admin only)
router.delete('/:teacherId', protect, authorize(['admin']), teacherController.deleteTeacher);

module.exports = router;
