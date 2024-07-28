const Attendance = require('../models/Attendance');

// Add attendance record
exports.addAttendance = async (req, res) => {
    try {
        const { courseId, studentId, status } = req.body;

        const newAttendance = new Attendance({
            course: courseId,
            student: studentId,
            status,
        });

        await newAttendance.save();
        res.status(201).json({ message: 'Attendance record added successfully', attendance: newAttendance });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all attendance records for a course
exports.getAttendanceByCourse = async (req, res) => {
    try {
        const attendances = await Attendance.find({ course: req.params.courseId }).populate('student', 'name').populate('course', 'name');
        res.status(200).json(attendances);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get attendance records for a student
exports.getAttendanceByStudent = async (req, res) => {
    try {
        const attendances = await Attendance.find({ student: req.params.studentId }).populate('student', 'name').populate('course', 'name');
        res.status(200).json(attendances);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update attendance record
exports.updateAttendance = async (req, res) => {
    try {
        const { status } = req.body;
        const attendance = await Attendance.findByIdAndUpdate(req.params.attendanceId, { status }, { new: true });
        if (!attendance) {
            return res.status(404).json({ message: 'Attendance record not found' });
        }
        res.status(200).json({ message: 'Attendance record updated successfully', attendance });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete attendance record
exports.deleteAttendance = async (req, res) => {
    try {
        const attendance = await Attendance.findByIdAndDelete(req.params.attendanceId);
        if (!attendance) {
            return res.status(404).json({ message: 'Attendance record not found' });
        }
        res.status(200).json({ message: 'Attendance record deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
