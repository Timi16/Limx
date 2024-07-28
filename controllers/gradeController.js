const Grade = require('../models/Grade');
const Course = require('../models/Course');
const Student = require('../models/Student');

// Add a new grade
exports.addGrade = async (req, res) => {
    const { studentId, courseId, score, grade, feedback } = req.body;
    try {
        const course = await Course.findById(courseId);
        const student = await Student.findById(studentId);

        if (!course || !student) {
            return res.status(404).json({ message: 'Course or Student not found' });
        }

        const newGrade = new Grade({
            student: studentId,
            course: courseId,
            score,
            grade,
            feedback,
        });

        await newGrade.save();

        course.grades.push(newGrade._id);
        await course.save();

        res.status(201).json({ message: 'Grade added successfully', grade: newGrade });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get grades for a course
exports.getGradesByCourse = async (req, res) => {
    try {
        const course = await Course.findById(req.params.courseId).populate('grades');
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json(course.grades);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get grades for a student
exports.getGradesByStudent = async (req, res) => {
    try {
        const grades = await Grade.find({ student: req.params.studentId }).populate('course');
        if (!grades) {
            return res.status(404).json({ message: 'Grades not found' });
        }
        res.status(200).json(grades);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a grade
exports.updateGrade = async (req, res) => {
    try {
        const grade = await Grade.findByIdAndUpdate(req.params.gradeId, req.body, { new: true });
        if (!grade) {
            return res.status(404).json({ message: 'Grade not found' });
        }
        res.status(200).json({ message: 'Grade updated successfully', grade });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a grade
exports.deleteGrade = async (req, res) => {
    try {
        const grade = await Grade.findByIdAndDelete(req.params.gradeId);
        if (!grade) {
            return res.status(404).json({ message: 'Grade not found' });
        }
        res.status(200).json({ message: 'Grade deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
