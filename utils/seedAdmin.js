const mongoose = require('mongoose');
const Admin = require('../models/Admin');
require('dotenv').config();

const seedAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const adminExists = await Admin.findOne({ email: process.env.ADMIN_EMAIL });
        if (!adminExists) {
            const admin = new Admin({
                email: process.env.ADMIN_EMAIL,
                username: process.env.ADMIN_USERNAME,
                password: process.env.ADMIN_PASSWORD,
            });

            await admin.save();
            console.log('Admin user created');
        } else {
            console.log('Admin user already exists');
        }

        mongoose.disconnect();
    } catch (error) {
        console.error('Error seeding admin user: ', error);
    }
};

seedAdmin();
