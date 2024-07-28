const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const AdminSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    dateJoined: {
        type: Date,
        default: Date.now,
    },
});

AdminSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

AdminSchema.methods.comparePassword = function (password) {
    return bcrypt.compare(password, this.password);
};

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;
