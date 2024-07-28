const Teacher = require('../models/Teacher');
const User = require('../models/User');
const path = require('path');

// Add a new teacher
exports.addTeacher = async (req, res) => {
    try {
        const { userId, subjects, bio } = req.body;

        const newTeacher = new Teacher({
            user: userId,
            subjects,
            bio,
            profilePicture: req.file ? `/uploads/profile_pics/${req.file.filename}` : null,
        });

        await newTeacher.save();
        res.status(201).json({ message: 'Teacher added successfully', teacher: newTeacher });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all teachers
exports.getAllTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find().populate('user');
        res.status(200).json(teachers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get teacher by ID
exports.getTeacherById = async (req, res) => {
    try {
        const teacher = await Teacher.findById(req.params.teacherId).populate('user');
        if (!teacher) {
            return res.status(404).json({ message: 'Teacher not found' });
        }
        res.status(200).json(teacher);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update teacher profile
exports.updateTeacher = async (req, res) => {
    try {
        const { subjects, bio } = req.body;
        const updateData = {
            subjects,
            bio,
            profilePicture: req.file ? `/uploads/profile_pics/${req.file.filename}` : undefined,
        };

        const teacher = await Teacher.findByIdAndUpdate(req.params.teacherId, updateData, { new: true });
        if (!teacher) {
            return res.status(404).json({ message: 'Teacher not found' });
        }
        res.status(200).json({ message: 'Teacher updated successfully', teacher });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete teacher
exports.deleteTeacher = async (req, res) => {
    try {
        const teacher = await Teacher.findByIdAndDelete(req.params.teacherId);
        if (!teacher) {
            return res.status(404).json({ message: 'Teacher not found' });
        }
        res.status(200).json({ message: 'Teacher deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
