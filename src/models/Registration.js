import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';  // Use bcryptjs instead of bcrypt

const registrationSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    location: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    courseType: { type: String, required: true },
    grade: { type: String, required: true },
    password: { type: String, required: true },  // Added password field
});

// Pre-save hook to hash password before saving
registrationSchema.pre('save', async function (next) {
    if (this.isModified('password') || this.isNew) {
        try {
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(this.password, salt);
            this.password = hash;
            next();
        } catch (error) {
            next(error);
        }
    } else {
        return next();
    }
});

const Registration = mongoose.models.Registration || mongoose.model('Registration', registrationSchema);

export default Registration;
