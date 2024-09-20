'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();

    return (
        <div className="bg-gradient-to-b from-gray-800 to-black h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl text-white mb-6">Welcome to the App</h1>
            <button
                onClick={() => router.push('/login')}
                className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition"
            >
                Go to Login
            </button>
            <button
                onClick={() => router.push('/register')}
                className="bg-green-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-green-600 transition mt-4"
            >
                Register New Account
            </button>
        </div>
    );
}
