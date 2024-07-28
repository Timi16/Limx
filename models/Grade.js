const mongoose = require('mongoose');

const GradeSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true,
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true,
    },
    assignments: [{
        title: {
            type: String,
            required: true,
        },
        score: {
            type: Number,
            required: true,
        },
        maxScore: {
            type: Number,
            required: true,
        },
        feedback: {
            type: String,
            required: false,
        }
    }],
    tests: [{
        title: {
            type: String,
            required: true,
        },
        score: {
            type: Number,
            required: true,
        },
        maxScore: {
            type: Number,
            required: true,
        },
        feedback: {
            type: String,
            required: false,
        }
    }],
    finalGrade: {
        type: String,
        required: true,
    },
    dateAssigned: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Grade', GradeSchema);
