"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export function Layout({ children }) {
    return (
        <div
            className={`min-h-screen bg-black text-white ${spaceGrotesk.className}`}
        >
            <header className="fixed top-0 left-0 right-0 z-50">
                <nav className="mx-4 my-4 bg-black/50 backdrop-blur-md rounded-full border border-white/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                <Link
                                    href="/"
                                    className="flex items-center gap-2"
                                >
                                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                        <span className="text-xl font-bold">
                                            tf
                                        </span>
                                    </div>
                                    <span className="font-medium">
                                        tensorforest
                                    </span>
                                </Link>
                            </div>
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
                                    {/* <Link
                                        href="/earth"
                                        className="hover:text-gray-300"
                                    >
                                        earth
                                    </Link> */}
                                    {/* <Link
                                        href="/api"
                                        className="hover:text-gray-300"
                                    >
                                        API
                                    </Link> */}
                                    <Link
                                        href="/join-us"
                                        className="hover:text-gray-300"
                                    >
                                        join us
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <Link
                                    href="/demo"
                                    className="flex items-center gap-2 bg-red-900/60 hover:bg-red-900/80 px-4 py-2 rounded-full"
                                >
                                    <span>Book a demo</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <main className="pt-24">{children}</main>
        </div>
    );
}

export default Layout;
