'use client';
export default function About() {
    return (
        <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center">
            <div className="p-8 bg-[#f5f0ea] rounded-3xl shadow-[8px_8px_16px_#d1ccc0,-8px_-8px_16px_#ffffff]">
                <h1 className="text-6xl font-bold text-black animate-pulse mb-4">About Me</h1>
                <p className="text-xl text-gray-700">
                    [Insert your bio and details about you here...]
                </p>
            </div>
        </div>
    );
}
