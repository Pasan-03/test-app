import mongoose from 'mongoose';

const registrationSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    location: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    courseType: { type: String, required: true },
    grade: { type: String, required: true },
});

const Registration = mongoose.models.Registration || mongoose.model('Registration', registrationSchema);

export default Registration;
