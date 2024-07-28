const User = require('../models/User');
const Class = require('../models/Class');
const Course = require('../models/Course');
const Attendance = require('../models/Attendance');
const Grade = require('../models/Grade');

// User Management
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Class Management
exports.getClasses = async (req, res) => {
    try {
        const classes = await Class.find().populate('teacher', 'name').populate('students', 'name');
        res.status(200).json(classes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addClass = async (req, res) => {
    try {
        const newClass = new Class(req.body);
        await newClass.save();
        res.status(201).json(newClass);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateClass = async (req, res) => {
    try {
        const updatedClass = await Class.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedClass) {
            return res.status(404).json({ message: 'Class not found' });
        }
        res.status(200).json(updatedClass);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteClass = async (req, res) => {
    try {
        const removedClass = await Class.findByIdAndDelete(req.params.id);
        if (!removedClass) {
            return res.status(404).json({ message: 'Class not found' });
        }
        res.status(200).json({ message: 'Class deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Course Management
exports.getCourses = async (req, res) => {
    try {
        const courses = await Course.find().populate('teacher', 'name');
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addCourse = async (req, res) => {
    try {
        const newCourse = new Course(req.body);
        await newCourse.save();
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateCourse = async (req, res) => {
    try {
        const updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCourse) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json(updatedCourse);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteCourse = async (req, res) => {
    try {
        const removedCourse = await Course.findByIdAndDelete(req.params.id);
        if (!removedCourse) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Attendance Management
exports.getAttendance = async (req, res) => {
    try {
        const attendance = await Attendance.find().populate('class', 'name').populate('student', 'name');
        res.status(200).json(attendance);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addAttendance = async (req, res) => {
    try {
        const newAttendance = new Attendance(req.body);
        await newAttendance.save();
        res.status(201).json(newAttendance);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateAttendance = async (req, res) => {
    try {
        const updatedAttendance = await Attendance.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedAttendance) {
            return res.status(404).json({ message: 'Attendance record not found' });
        }
        res.status(200).json(updatedAttendance);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteAttendance = async (req, res) => {
    try {
        const removedAttendance = await Attendance.findByIdAndDelete(req.params.id);
        if (!removedAttendance) {
            return res.status(404).json({ message: 'Attendance record not found' });
        }
        res.status(200).json({ message: 'Attendance record deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Grade Management
exports.getGrades = async (req, res) => {
    try {
        const grades = await Grade.find().populate('student', 'name').populate('course', 'name');
        res.status(200).json(grades);
    } catch (error) {

res.status(500).json({ message: error.message });
    }
};

exports.addGrade = async (req, res) => {
    try {
        const newGrade = new Grade(req.body);
        await newGrade.save();
        res.status(201).json(newGrade);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateGrade = async (req, res) => {
    try {
        const updatedGrade = await Grade.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedGrade) {
            return res.status(404).json({ message: 'Grade not found' });
        }
        res.status(200).json(updatedGrade);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteGrade = async (req, res) => {
    try {
        const removedGrade = await Grade.findByIdAndDelete(req.params.id);
        if (!removedGrade) {
            return res.status(404).json({ message: 'Grade not found' });
        }
        res.status(200).json({ message: 'Grade deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
