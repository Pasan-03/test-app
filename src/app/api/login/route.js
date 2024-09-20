// File: /pages/api/login.js or /app/api/login/route.js

import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import Registration from '@/models/Registration'; // Adjust the path as needed

async function connectToDatabase() {
    if (mongoose.connection.readyState === 1) return;

    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
}

export async function POST(req) {
    await connectToDatabase();

    const { username, password } = await req.json();

    if (!username || !password) {
        return new Response(JSON.stringify({ message: 'Missing required fields' }), {
            status: 400,
        });
    }

    try {
        const user = await Registration.findOne({ email: username }); // Find user by email

        if (!user) {
            return new Response(JSON.stringify({ message: 'Invalid username or password' }), {
                status: 401,
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return new Response(JSON.stringify({ message: 'Invalid username or password' }), {
                status: 401,
            });
        }

        return new Response(JSON.stringify({ message: 'Login successful' }), {
            status: 200,
        });
    } catch (error) {
        return new Response(JSON.stringify({ message: 'Login failed', error: error.message }), {
            status: 500,
        });
    }
}
