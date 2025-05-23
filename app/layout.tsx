import type { Metadata } from 'next';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Alexander Haga | Infinite Possibilities',
    description: 'Portfolio website for Alexander H',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}
            <SpeedInsights />
            </body>
        </html>
    );
}
