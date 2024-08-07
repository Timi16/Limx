const mongoose = require('mongoose');
const User = require('../models/User');
const connectDB = require('../config/db');
require('dotenv').config();

const seedAdmin = async () => {
    try {
        await connectDB();

        const adminExists = await User.findOne({ email: process.env.ADMIN_EMAIL, role: 'admin' });
        if (!adminExists) {
            const admin = new User({
                email: process.env.ADMIN_EMAIL,
                username: process.env.ADMIN_USERNAME,
                password: process.env.ADMIN_PASSWORD,
                role: 'admin'
            });

            await admin.save();
            console.log('Admin user created');
        } else {
            console.log('Admin user already exists');
        }

        mongoose.disconnect();
    } catch (error) {
        console.error('Error seeding admin user: ', error);
        process.exit(1);
    }
};

seedAdmin();
