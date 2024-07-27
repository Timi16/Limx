const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
    grade: {
        type: String,
        required: true,
    },
    testScores: [{
        testName: {
            type: String,
            required: true,
        },
        score: {
            type: Number,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        }
    }]
});

const StudentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    courses: [CourseSchema], // Array of courses with their scores and grades
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class',
        required: true,
    },
});

module.exports = mongoose.model('Student', StudentSchema);
