"use client";

import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { Space_Grotesk } from "next/font/google";
import { useState, useEffect, useRef } from "react";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export function Layout({ children }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const menuRef = useRef(null);

    // Handle click outside to close menu
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        // Force a layout calculation to help with rendering
        window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
                document.body.style.opacity = "1";
            });
        });
    }, []);

    return (
        <div
            className={`min-h-screen bg-black text-white ${spaceGrotesk.className}`}
        >
            <header className="fixed top-0 left-0 right-0 z-50">
                <nav className="mx-4 my-4 bg-black/50 backdrop-blur-md rounded-lg border border-white/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                <Link
                                    href="/"
                                    className="flex items-center gap-2"
                                >
                                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                        <span className="text-xl font-bold">
                                            tf
                                        </span>
                                    </div>
                                    <span className="font-medium">
                                        tensorforest
                                    </span>
                                </Link>
                            </div>

                            {/* Desktop Menu */}
                            <div className="hidden md:block">
                                <div className="flex items-center gap-8">
                                    <Link
                                        href="/"
                                        className="hover:text-gray-300"
                                    >
                                        home
                                    </Link>
                                    <Link
                                        href="/about"
                                        className="hover:text-gray-300"
                                    >
                                        about
                                    </Link>
                                    <Link
                                        href="/blog"
                                        className="hover:text-gray-300"
                                    >
                                        blog
                                    </Link>
                                    <Link
                                        href="/join-us"
                                        className="hover:text-gray-300"
                                    >
                                        join us
                                    </Link>
                                </div>
                            </div>

                            {/* Mobile Menu Button and CTA */}
                            <div className="flex md:hidden gap-4 items-center">
                                <Link
                                    href="/join-us"
                                    className="flex items-center gap-1 bg-red-900/60 hover:bg-red-900/80 px-3 py-1.5 text-sm rounded-lg"
                                >
                                    <span>Join</span>
                                    <ArrowRight className="w-3 h-3" />
                                </Link>
                                <button
                                    onClick={() =>
                                        setIsMobileMenuOpen(!isMobileMenuOpen)
                                    }
                                    className="text-white p-2"
                                >
                                    {isMobileMenuOpen ? (
                                        <X className="h-5 w-5" />
                                    ) : (
                                        <Menu className="h-5 w-5" />
                                    )}
                                </button>
                            </div>

                            {/* Desktop CTA */}
                            <div className="hidden md:block">
                                <Link
                                    href="/join-us"
                                    className="flex items-center gap-2 bg-red-900/60 hover:bg-red-900/80 px-4 py-2 rounded-lg"
                                >
                                    <span>Stay updated</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 bg-black/95 backdrop-blur-lg z-40 md:hidden">
                        <div
                            ref={menuRef}
                            className="relative flex flex-col items-center justify-center h-full gap-8"
                        >
                            {/* Close button at top-right */}
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="absolute top-4 right-4 p-2 text-white"
                            >
                                <X className="h-6 w-6" />
                            </button>

                            {/* Menu Items */}
                            <Link
                                href="/"
                                className="text-2xl hover:text-gray-300"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                home
                            </Link>
                            <Link
                                href="/about"
                                className="text-2xl hover:text-gray-300"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                about
                            </Link>
                            <Link
                                href="/blog"
                                className="text-2xl hover:text-gray-300"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                blog
                            </Link>
                            <Link
                                href="/join-us"
                                className="text-2xl hover:text-gray-300"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                stay updated
                            </Link>
                        </div>
                    </div>
                )}
            </header>
            <main>{children}</main>
        </div>
    );
}

export default Layout;
