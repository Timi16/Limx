const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const adminController = require('../controllers/adminController');

// User Management
router.route('/users')
    .get(protect, authorize(['admin']), adminController.getUsers)
    .post(protect, authorize(['admin']), adminController.addUser);

router.route('/users/:id')
    .put(protect, authorize(['admin']), adminController.updateUser)
    .delete(protect, authorize(['admin']), adminController.deleteUser);

// Class Management
router.route('/classes')
    .get(protect, authorize(['admin']), adminController.getClasses)
    .post(protect, authorize(['admin']), adminController.addClass);

router.route('/classes/:id')
    .put(protect, authorize(['admin']), adminController.updateClass)
    .delete(protect, authorize(['admin']), adminController.deleteClass);

// Course Management
router.route('/courses')
    .get(protect, authorize(['admin']), adminController.getCourses)
    .post(protect, authorize(['admin']), adminController.addCourse);

router.route('/courses/:id')
    .put(protect, authorize(['admin']), adminController.updateCourse)
    .delete(protect, authorize(['admin']), adminController.deleteCourse);

// Attendance Management
router.route('/attendance')
    .get(protect, authorize(['admin']), adminController.getAttendance)
    .post(protect, authorize(['admin']), adminController.addAttendance);

router.route('/attendance/:id')
    .put(protect, authorize(['admin']), adminController.updateAttendance)
    .delete(protect, authorize(['admin']), adminController.deleteAttendance);

// Grade Management
router.route('/grades')
    .get(protect, authorize(['admin']), adminController.getGrades)
    .post(protect, authorize(['admin']), adminController.addGrade);

router.route('/grades/:id')
    .put(protect, authorize(['admin']), adminController.updateGrade)
    .delete(protect, authorize(['admin']), adminController.deleteGrade);

module.exports = router;
