const mongoose = require('mongoose');

const MaterialSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['pdf', 'video', 'link', 'text'],
        required: true,
    },
    filePath: {
        type: String,
        required: false,
    },
    dateAdded: {
        type: Date,
        default: Date.now,
    }
});

const CourseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true,
    },
    materials: [MaterialSchema],
    grades: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Grade',
    }],
});

module.exports = mongoose.model('Course', CourseSchema);
