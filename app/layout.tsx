"use client";
import { Source_Sans_3 } from "@next/font/google";
import React, { ReactNode } from "react";
import "./globals.css";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { GoogleAnalytics } from "@next/third-parties/google";
import NewsFooter from "@/components/NewsFooter";

interface RootLayoutProps {
    children: ReactNode;
}

const sourceSans3 = Source_Sans_3({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export default function RootLayout({ children }: RootLayoutProps) {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const isHomePage = pathname === "/";

    return (
        <html lang="en">
            <body className={`${sourceSans3.className}`}>
                <GoogleAnalytics gaId="G-V2HRG4W20Z" />
                {isHomePage && (
                    <div
                        id="hero"
                        className="relative bg-cover bg-center h-screen"
                        style={{ backgroundImage: "url('/img/hero.png')" }}
                    >
                        <div className="absolute inset-0 bg-black opacity-10 sm:hidden"></div>
                        <div
                            id="navbar"
                            className="relative flex flex-col md:flex-row justify-between p-4 mx-2 z-20"
                        >
                            <div
                                id="navbar-logo"
                                className="hidden md:flex items-center mb-4 md:mb-0"
                            >
                                <Link
                                    href="/"
                                    className="text-lg md:text-xl lg:text-2xl font-bold text-white"
                                >
                                    MORGAN LAB
                                </Link>
                            </div>
                            <div className="md:hidden flex items-center">
                                <button
                                    onClick={toggleDropdown}
                                    className="text-white focus:outline-none"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16m-7 6h7"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                            <div
                                className={`flex-col md:flex md:flex-row space-y-4 md:space-y-0 md:space-x-8 uppercase font-bold text-white ${
                                    isOpen ? "flex" : "hidden"
                                } md:flex`}
                            >
                                <Link
                                    href="/"
                                    className="hover:text-gray-400 text-sm md:text-base lg:text-lg"
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/research"
                                    className="hover:text-gray-400 text-sm md:text-base lg:text-lg"
                                >
                                    Research
                                </Link>
                                <Link
                                    href="/people"
                                    className="hover:text-gray-400 text-sm md:text-base lg:text-lg"
                                >
                                    People
                                </Link>
                                <Link
                                    href="/news"
                                    className="hover:text-gray-400 text-sm md:text-base lg:text-lg"
                                >
                                    News
                                </Link>
                                <Link
                                    href="#"
                                    className="hover:text-gray-400 text-sm md:text-base lg:text-lg"
                                >
                                    Publications
                                </Link>
                                <Link
                                    href="#"
                                    className="hover:text-gray-400 text-sm md:text-base lg:text-lg"
                                >
                                    Software
                                </Link>
                                <Link
                                    href="https://morganresearchlab.github.io/wiki/"
                                    className="hover:text-gray-400 text-sm md:text-base lg:text-lg"
                                >
                                    Wiki
                                </Link>
                            </div>
                        </div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-bold">
                                MORGAN LAB
                            </h1>
                            <p className="text-white text-xl md:text-2xl lg:text-3xl mt-4">
                                Life course engineering to promote healthy
                                ageing
                            </p>
                        </div>
                    </div>
                )}
                {!isHomePage && (
                    <>
                        <div className="absolute inset-0 bg-black opacity-10 sm:hidden"></div>
                        <div
                            id="navbar"
                            className="relative flex flex-col md:flex-row justify-between p-4 mx-2 z-20"
                        >
                            <div
                                id="navbar-logo"
                                className="hidden md:flex items-center mb-4 md:mb-0"
                            >
                                <Link
                                    href="/"
                                    className="text-lg md:text-xl lg:text-2xl font-bold text-white"
                                >
                                    MORGAN LAB
                                </Link>
                            </div>
                            <div className="md:hidden flex items-center">
                                <button
                                    onClick={toggleDropdown}
                                    className="text-white focus:outline-none"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16m-7 6h7"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                            <div
                                className={`flex-col md:flex md:flex-row space-y-4 md:space-y-0 md:space-x-8 uppercase font-bold text-white ${
                                    isOpen ? "flex" : "hidden"
                                } md:flex`}
                            >
                                <Link
                                    href="/"
                                    className="hover:text-gray-400 text-sm md:text-base lg:text-lg"
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/research"
                                    className="hover:text-gray-400 text-sm md:text-base lg:text-lg"
                                >
                                    Research
                                </Link>
                                <Link
                                    href="/people"
                                    className="hover:text-gray-400 text-sm md:text-base lg:text-lg"
                                >
                                    People
                                </Link>
                                <Link
                                    href="/news"
                                    className="hover:text-gray-400 text-sm md:text-base lg:text-lg"
                                >
                                    News
                                </Link>
                                <Link
                                    href="#"
                                    className="hover:text-gray-400 text-sm md:text-base lg:text-lg"
                                >
                                    Publications
                                </Link>
                                <Link
                                    href="#"
                                    className="hover:text-gray-400 text-sm md:text-base lg:text-lg"
                                >
                                    Software
                                </Link>
                                <Link
                                    href="https://morganresearchlab.github.io/wiki/"
                                    className="hover:text-gray-400 text-sm md:text-base lg:text-lg"
                                >
                                    Wiki
                                </Link>
                            </div>
                        </div>
                    </>
                )}
                {children}
                <hr className="border-t border-gray-600 w-3/4 mx-auto mt-8" />
                <div id="footer" className="flex flex-col w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-3/4 mx-auto mb-5">
                        <div className="flex flex-col items-start">
                            <p className="mt-8">
                                Morgan Laboratory
                                <br />
                                School of Medicine, Medical Sciences and
                                Nutrition
                                <br />
                                Institute of Medical Sciences
                                <br />
                                Ashgrove Road West
                                <br />
                                United Kingdom
                                <br />
                                AB25 2ZD
                                <br />
                            </p>
                            <img
                                src="/img/uoa_logo.png"
                                alt="University of Aberdeen Logo"
                                className="w-32 h-auto mt-4"
                            />
                        </div>
                        <NewsFooter/>    
                    </div>
                </div>
            </body>
        </html>
    );
}
