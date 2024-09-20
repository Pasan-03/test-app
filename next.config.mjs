/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        MONGO_URI: process.env.MONGO_URI,
    },
    reactStrictMode: true, // Enables React's strict mode for better error checking
    webpack: (config) => {
        // Customize the webpack config here if needed
        return config;
    },
};

export default nextConfig;
