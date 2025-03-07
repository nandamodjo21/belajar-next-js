"use client";

import { useState } from "react";

export default function HomePage()  {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
      <div className="flex flex-col min-h-screen bg-gray-100">
        {/* Navbar */}
        <nav className="bg-violet-700 text-white p-4 flex justify-between items-center shadow-md">
          <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 bg-white text-violet-700 rounded-lg shadow-md"
          >
            ☰
          </button>
          <h1 className="text-xl font-bold">Home</h1>
        </nav>

        <div className="flex flex-1">
          {/* Sidebar */}
          {isSidebarOpen && (
              <aside className="w-64 bg-white shadow-lg p-5">
                <ul className="space-y-4">
                  <li className="p-3 bg-gray-200 rounded-lg">🏠 Dashboard</li>
                  <li className="p-3 bg-gray-200 rounded-lg">📜 Reports</li>
                  <li className="p-3 bg-gray-200 rounded-lg">⚙️ Settings</li>
                </ul>
              </aside>
          )}

          {/* Main Content */}
          <main className="flex-1 p-6">
            <h2 className="text-2xl font-bold mb-4">Welcome to Home Page</h2>
            <p>This is the content area.</p>
          </main>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
          &copy; 2025 My Website
        </footer>
      </div>
  );
}
