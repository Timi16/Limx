const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    subjects: [{
        type: String,
        required: true,
    }],
    bio: {
        type: String,
        required: false,
    },
    profilePicture: {
        type: String,
        required: false,
    },
    dateJoined: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Teacher', TeacherSchema);
