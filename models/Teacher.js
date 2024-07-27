const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    courses: [{
        type: String,
        required: true,
    }],
});

module.exports = mongoose.model('Teacher', TeacherSchema);
