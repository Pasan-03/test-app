import connectToDatabase from '@/lib/mongodb';
import Registration from '@/models/Registration';

export async function POST(req) {
    await connectToDatabase();

    const { fullName, location, email, phoneNumber, courseType, grade } = await req.json();

    if (!fullName || !location || !email || !phoneNumber || !courseType || !grade) {
        return new Response(JSON.stringify({ message: 'Missing required fields' }), {
            status: 400,
        });
    }

    try {
        const newRegistration = new Registration({
            fullName,
            location,
            email,
            phoneNumber,
            courseType,
            grade,
        });
        await newRegistration.save();

        return new Response(JSON.stringify({ message: 'Registration successful' }), {
            status: 201,
        });
    } catch (error) {
        return new Response(JSON.stringify({ message: 'Registration failed', error: error.message }), {
            status: 500,
        });
    }
}
