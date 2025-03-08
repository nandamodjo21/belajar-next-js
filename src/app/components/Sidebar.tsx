"use client";

import { useState } from "react";

export default function Sidebar({ setActivePage }: { setActivePage: (page: string) => void }) {
    const [isMasterOpen, setIsMasterOpen] = useState(false);

    return (
        <div className="w-64 min-w-64 h-screen bg-gray-900 text-white p-5 fixed">
            <h2 className="text-2xl font-bold mb-4">MENU</h2>
            <ul className="space-y-3">
                {/* Home */}
                <li>
                    <button
                        onClick={() => setActivePage("home")}
                        className="flex items-center gap-2 p-2 w-full text-left hover:bg-gray-700 rounded"
                    >
                        🏠 Home
                    </button>
                </li>

                {/* Profile */}
                <li>
                    <button
                        onClick={() => setActivePage("profile")}
                        className="flex items-center gap-2 p-2 w-full text-left hover:bg-gray-700 rounded"
                    >
                        👤 Profile
                    </button>
                </li>

                {/* Master dengan Dropdown */}
                <li>
                    <button
                        onClick={() => setIsMasterOpen(!isMasterOpen)}
                        className="flex items-center justify-between p-2 w-full text-left hover:bg-gray-700 rounded"
                    >
                        <span>⚙️ Master</span>
                        <span>{isMasterOpen ? "▲" : "▼"}</span>
                    </button>

                    {isMasterOpen && (
                        <ul className="ml-5 mt-2 space-y-2">
                            <li>
                                <button
                                    onClick={() => setActivePage("master")}
                                    className="flex items-center gap-2 p-2 w-full text-left hover:bg-gray-600 rounded"
                                >
                                    📄 Master Page
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => setActivePage("submaster")}
                                    className="flex items-center gap-2 p-2 w-full text-left hover:bg-gray-600 rounded"
                                >
                                    📌 Sub Master
                                </button>
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    );
}
