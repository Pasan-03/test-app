"use client";  // Add this line

import { useState } from 'react';

export default function Home() {
    const [formData, setFormData] = useState({
        fullName: '',
        location: '',
        email: '',
        phoneNumber: '',
        courseType: '',
        grade: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (response.ok) {
            alert('Registration successful');
        } else {
            alert(`Registration failed: ${data.message}`);
        }
    };

    return (
        <div className="bg-gradient-to-b from-purple-800 to-black h-screen flex items-center justify-center">
            <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg w-80">
                <h2 className="text-2xl font-semibold text-white mb-2">Registration Form</h2>
                <p className="text-white mb-4">Register now, enjoy free trial for one month</p>
                <form onSubmit={handleSubmit}>
                    {/* Full Name */}
                    <div className="mb-4">
                        <label className="block text-white mb-1" htmlFor="full-name">Full Name (Name with Initials)</label>
                        <input className="w-full p-2 rounded bg-white bg-opacity-20 text-white" type="text" id="fullName" value={formData.fullName} onChange={handleChange} placeholder="Name" />
                    </div>

                    {/* Location */}
                    <div className="mb-4">
                        <label className="block text-white mb-1" htmlFor="location">Location</label>
                        <select className="w-full p-2 rounded bg-white bg-opacity-20 text-white" id="location" value={formData.location} onChange={handleChange}>
                            <option>Select Location</option>
                            <option>Sri Lanka</option>
                            <option>India</option>
                            <option>Canada</option>
                            <option>Australia</option>
                            <option>UK</option>
                        </select>
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-white mb-1" htmlFor="email">Email</label>
                        <input className="w-full p-2 rounded bg-white bg-opacity-20 text-white" type="email" id="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
                    </div>

                    {/* Phone Number */}
                    <div className="mb-4">
                        <label className="block text-white mb-1" htmlFor="phoneNumber">Phone Number</label>
                        <input className="w-full p-2 rounded bg-white bg-opacity-20 text-white" type="text" id="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" />
                    </div>

                    {/* Course Type */}
                    <div className="mb-4">
                        <label className="block text-white mb-1" htmlFor="courseType">Course Type</label>
                        <select className="w-full p-2 rounded bg-white bg-opacity-20 text-white" id="courseType" value={formData.courseType} onChange={handleChange}>
                            <option>Select Course Type</option>
                            <option>IGCSE Computer Science Edexcel</option>
                            <option>IGCSE ICT Edexcel</option>
                            <option>GCE CS Edexcel</option>
                            <option>IA/L-IT</option>
                            <option>Computer Science AS</option>
                            <option>Computer Science A2</option>
                        </select>
                    </div>

                    {/* Grade */}
                    <div className="mb-4">
                        <label className="block text-white mb-1" htmlFor="grade">Grade</label>
                        <select className="w-full p-2 rounded bg-white bg-opacity-20 text-white" id="grade" value={formData.grade} onChange={handleChange}>
                            <option>Select Grade</option>
                            <option>AL</option>
                            <option>OL</option>
                        </select>
                    </div>

                    <button type="submit" className="w-full p-2 rounded bg-purple-600 text-white">Register</button>
                </form>
            </div>
        </div>
    );
}
