const mongoose = require('mongoose');
const User = require('./models/User'); // Adjust the path based on your structure
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB connected successfully.");
        seedDatabase();
    })
    .catch(err => {
        console.error("MongoDB connection error:", err);
    });

const seedDatabase = async () => {
    // Sample users
    const users = [
        {
            username: "admin",
            password: "adminpassword", // Hash passwords for production
            role: "admin"
        },
        {
            username: "regularuser",
            password: "userpassword", // Hash passwords for production
            role: "regular"
        }
    ];

    try {
        // Clear existing users
        await User.deleteMany({});
        // Insert sample users
        await User.insertMany(users);
        console.log("Sample users seeded successfully.");
    } catch (error) {
        console.error("Error seeding users:", error);
    } finally {
        mongoose.connection.close();
    }
};
