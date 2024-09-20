import './globals.css';

export const metadata = {
    title: 'Registration Form',
    description: 'A registration page with Tailwind styling',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
