'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Page() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [referral,setReferral] = useState("");
    const router = useRouter();

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
        router.push("/home");
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-white">
            <div className="w-full max-w-md px-6 py-8 bg-white rounded-lg shadow-lg">
                <h3 className="text-4xl font-bold text-black text-center mb-6">Sign Up</h3>
                <p className="text-base text-gray-600 text-center mb-8">Enter your email and password to sign Up!</p>

                <form onSubmit={handleSubmit}>
                    {/* Email Input */}
                    <div className="mb-4">
                        <label htmlFor="email" className="text-sm font-semibold text-black">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="email"
                            className="mt-2 w-full h-12 px-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-4">
                        <label htmlFor="password" className="text-sm font-semibold text-black">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="password"
                            className="mt-2 w-full h-12 px-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/*Referal*/}
                    <div className="mb-4">
                        <label htmlFor="referal" className="text-sm font-semibold text-black">Referral Code</label>
                        <input
                            type="text"
                            id="referral"
                            value={referral}
                            onChange={(e) => setReferral(e.target.value)}
                            placeholder="Referral Code"
                            className="mt-2 w-full h-12 px-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    {/* Checkbox */}

                    <div className="flex justify-between mb-6">
                        <div className="mb-6 flex items-center flex-row">
                            <input
                                type="checkbox"
                                name="weekly"
                                className="h-4 w-4 border-gray-300 rounded-md text-indigo-500 focus:ring-indigo-500"
                            />
                            <label htmlFor="weekly" className="ml-2 text-sm text-black">Keep me logged In</label>
                        </div>
                        <a href="#" className="text-sm text-indigo-500 hover:text-indigo-700">Forgot Password?</a>
                    </div>

                    {/* Sign In Button */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-500 transition duration-200"
                    >
                        Sign In
                    </button>
                </form>

                {/* Create Account */}
                <div className="mt-4 text-center">
                <span className="text-sm text-gray-600">Already have an account?</span>
                    <Link href="/auth/login" className="text-sm text-indigo-500 hover:text-indigo-700 ml-1">Sign In!</Link>
                </div>
            </div>
        </div>
    );
}
