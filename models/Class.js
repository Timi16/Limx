const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true,
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
    }],
});

module.exports = mongoose.model('Class', ClassSchema);
