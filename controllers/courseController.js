const Course = require('../models/Course');
const path = require('path');

// Add a new course
exports.addCourse = async (req, res) => {
    try {
        const { name, description, teacherId } = req.body;

        // Collect uploaded materials
        const materials = req.files.map(file => ({
            title: file.originalname,
            content: '',
            type: path.extname(file.originalname).substring(1),  // Extract file extension
            filePath: `/uploads/course_materials/${file.filename}`,
        }));

        const newCourse = new Course({
            name,
            description,
            teacher: teacherId,
            materials,
        });

        await newCourse.save();
        res.status(201).json({ message: 'Course added successfully', course: newCourse });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all courses
exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find().populate('teacher');
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get course by ID
exports.getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.courseId).populate('teacher');
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a course
exports.updateCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndUpdate(req.params.courseId, req.body, { new: true });
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json({ message: 'Course updated successfully', course });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a course
exports.deleteCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndDelete(req.params.courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
