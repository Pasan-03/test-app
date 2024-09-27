// File: /app/api/register/route.js

import connectToDatabase from '@/lib/mongodb';
import Registration from '@/models/Registration';

export async function POST(req) {
    await connectToDatabase();

    try {
        const { fullName, location, email, phoneNumber, courseType, grade, password } = await req.json();

        // Validate input fields
        if (!fullName || !location || !email || !phoneNumber || !courseType || !grade || !password) {
            return new Response(JSON.stringify({ message: 'Missing required fields' }), {
                status: 400,
            });
        }

        // Check if email already exists
        const existingUser = await Registration.findOne({ email });
        if (existingUser) {
            return new Response(JSON.stringify({ message: 'Email already in use' }), { status: 409 });
        }

        // Create new user
        const newRegistration = new Registration({
            fullName,
            location,
            email,
            phoneNumber,
            courseType,
            grade,
            password,
        });

        // Save user to database
        await newRegistration.save();

        return new Response(JSON.stringify({ message: 'Registration successful' }), {
            status: 201,
        });
    } catch (error) {
        console.error('Registration failed:', error);  // Log the error
        return new Response(JSON.stringify({ message: 'Registration failed', error: error.message }), {
            status: 500,
        });
    }
}
