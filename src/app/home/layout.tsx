"use client";

import React, { useState } from "react";
import Footer from "@/app/components/footer";
import Profile from "@/app/profile/page";
import Master from "@/app/master/page";
import HomePage from "@/app/home/page";
import Sidebar from "@/app/components/Sidebar";
import Navbar from "@/app/components/Navbar";
import SubMaster from "@/app/master/submaster/SubMaster";

export default function RootLayout() {
    const [activePage, setActivePage] = useState("home");

    const renderPage = () => {
        switch (activePage) {
            case "profile":
                return <Profile />;
            case "master":
                return <Master />;
            case "submaster":
                return <SubMaster />;
            default:
                return <HomePage />;
        }
    };

    return (
        <div className="flex h-screen bg-gray-200">
            {/* Sidebar dengan lebar tetap */}
            <Sidebar setActivePage={setActivePage} />

            {/* Kontainer utama */}
            <div className="flex flex-col flex-1 ml-64 h-screen">
                {/* Navbar - Lebar penuh tetapi tidak full width */}
                <Navbar />

                {/* Main Content - Diberi padding agar tidak tertutup */}
                <main className="flex-1 overflow-auto p-5 bg-gray-200">
                    {renderPage()}
                </main>

                {/* Footer tetap di bawah */}
                <Footer />
            </div>
        </div>
    );
}
