const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class',
        required: true,
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        enum: ['present', 'absent', 'late'],
        required: true,
    },
});

module.exports = mongoose.model('Attendance', AttendanceSchema);
