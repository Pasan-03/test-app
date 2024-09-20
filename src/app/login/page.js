"use client";

import { useState } from 'react';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                alert('Login successful');
                // Redirect or perform other actions on successful login
            } else {
                setErrorMessage(data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Login error:', error);
            setErrorMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div className="bg-gradient-to-b from-gray-800 to-black h-screen flex items-center justify-center">
            <div className="bg-gray-900 bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-sm overflow-y-auto">
                <h2 className="text-2xl font-semibold text-white mb-2">Login</h2>
                <p className="text-white mb-4">Access your account</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-white mb-1" htmlFor="username">Username or Email</label>
                        <input
                            className="w-full p-2 rounded bg-gray-700 text-white"
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Username or Email"
                            value={formData.username}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white mb-1" htmlFor="password">Password</label>
                        <div className="relative">
                            <input
                                className="w-full p-2 rounded bg-gray-700 text-white"
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 px-3 py-2 bg-gray-600 rounded-r"
                                onClick={() => setShowPassword((prev) => !prev)}
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded"
                    >
                        Login
                    </button>
                    {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
                </form>
                <div className="mt-4">
                    <a href="/forgot-password" className="text-blue-300">Forgot Password?</a>
                    <br />
                    <a href="/register" className="text-blue-300">Register New Account</a>
                </div>
            </div>
        </div>
    );
}
