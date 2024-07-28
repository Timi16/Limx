const express = require('express');
const router = express.Router();
const gradeController = require('../controllers/gradeController');
const { protect, authorize } = require('../middleware/auth');

// Add a new grade (Teachers only)
router.post('/', protect, authorize(['teacher']), gradeController.addGrade);

// Get grades for a course (Students and Teachers)
router.get('/course/:courseId', protect, gradeController.getGradesByCourse);

// Get grades for a student (Students and Teachers)
router.get('/student/:studentId', protect, gradeController.getGradesByStudent);

// Update a grade (Teachers only)
router.put('/:gradeId', protect, authorize(['teacher']), gradeController.updateGrade);

// Delete a grade (Teachers only)
router.delete('/:gradeId', protect, authorize(['teacher']), gradeController.deleteGrade);

module.exports = router;
