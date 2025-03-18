'use client';
export default function Contact() {
    return (
        <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center">
            <div className="p-8 bg-[#f5f0ea] rounded-3xl shadow-[8px_8px_16px_#d1ccc0,-8px_-8px_16px_#ffffff]">
                <h1 className="text-6xl font-bold text-black animate-[shake_1s_infinite] mb-4">
                    Contact
                </h1>
                <p className="text-xl text-gray-700 mb-6">
                    [Insert your contact details or a contact form here...]
                </p>
                <button className="px-6 py-2 bg-gray-700 text-white rounded-full hover:bg-black transition-colors">
                    Get in Touch
                </button>
            </div>
        </div>
    );
}
