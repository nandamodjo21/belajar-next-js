"use client";

import Image from "next/image";
import { useState } from "react";
export default function Navbar() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="flex items-center justify-between bg-white p-3 h-16 shadow-md sticky top-0 z-50">
            {/* Search Box */}
            <div className="relative">
                <div className="p-3 rounded-xl bg-white">
                    <div className="flex items-center rounded-xl bg-gray-100 px-3 py-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30 30"
                            width="20px"
                            height="20px"
                            className="text-gray-500"
                        >
                            <path
                                d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"
                            />
                        </svg>
                        <input
                            type="text"
                            id="search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search..."
                            className="w-full px-3 border-none focus:outline-none bg-transparent"
                        />
                    </div>
                </div>
            </div>

            {/* Profile Image */}
            <Image
                src="/jeff.png"
                alt="Profile"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover mx-5"
            />
        </div>
    );
}
