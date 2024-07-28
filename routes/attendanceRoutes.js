const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');
const { protect, authorize } = require('../middleware/auth');

// Add attendance record (Teachers only)
router.post('/', protect, authorize(['teacher']), attendanceController.addAttendance);

// Get all attendance records for a specific course (Teachers only)
router.get('/course/:courseId', protect, authorize(['teacher']), attendanceController.getAttendanceByCourse);

// Get attendance records for a specific student (Students can view their attendance)
router.get('/student/:studentId', protect, authorize(['student']), attendanceController.getAttendanceByStudent);

// Update attendance record (Teachers only)
router.put('/:attendanceId', protect, authorize(['teacher']), attendanceController.updateAttendance);

// Delete attendance record (Teachers only)
router.delete('/:attendanceId', protect, authorize(['teacher']), attendanceController.deleteAttendance);

module.exports = router;
