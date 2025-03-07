"use client";

import Image from "next/image";
import {
    ArrowRight,
    Send,
    Mail,
    Instagram,
    Twitter,
    Linkedin,
    Facebook,
    Youtube,
    Globe,
} from "lucide-react";
import Link from "next/link";
import { Layout } from "./components/layout";
import { useEffect, useState } from "react";

export function Home() {
    // Add state to track if the component is hydrated
    const [isHydrated, setIsHydrated] = useState(false);

    // Set hydration state once component mounts
    useEffect(() => {
        setIsHydrated(true);
    }, []);

    // Show a simple loading state until hydration completes
    if (!isHydrated) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">TensorForest</h1>
                    <p>Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <Layout>
            <div className="space-y-32">
                {/* Hero Section */}
                <section className="relative h-screen w-screen">
                    <Image
                        src="/hero.png"
                        alt="Hero image placeholder"
                        width={1200}
                        height={600}
                        className="w-full h-full object-cover rounded-lg"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/20 p-12 flex flex-col justify-end">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            Lorem ipsum dolor sit amet
                        </h1>
                        <p className="font-mono text-lg text-gray-300">
                            CONSECTETUR ADIPISCING ELIT SED DO EIUSMOD TEMPOR
                            INCIDIDUNT UT LABORE ET DOLORE MAGNA.
                        </p>
                    </div>
                </section>

                {/* Research Section */}
                <section className="grid md:grid-cols-2 gap-12 items-center px-4 max-w-7xl mx-auto">
                    <Image
                        src="/hero2.png"
                        alt="Placeholder image"
                        width={600}
                        height={600}
                        className="rounded-lg w-full"
                    />
                    <div className="space-y-6">
                        <h2 className="text-5xl font-bold">Our Vision</h2>
                        <p className="font-mono text-gray-300">
                            LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING
                            ELIT, SED DO EIUSMOD TEMPOR.
                        </p>
                        <Link
                            href="/about"
                            className="inline-flex items-center gap-2 text-white hover:text-gray-300"
                        >
                            <span>learn more about us</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </section>

                {/* Features Section */}
                <section className="grid md:grid-cols-2 gap-12 items-center px-4 max-w-7xl mx-auto">
                    <div className="space-y-6">
                        <h2 className="text-5xl font-bold">
                            Lorem ipsum dolor sit amet
                        </h2>
                        <p className="font-mono text-gray-300">
                            CONSECTETUR ADIPISCING ELIT SED DO EIUSMOD TEMPOR
                            INCIDIDUNT UT LABORE.
                        </p>
                        <Link
                            href="/api"
                            className="inline-flex items-center gap-2 bg-black hover:bg-gray-900 px-4 py-2 rounded-full border border-white/10"
                        >
                            <span>Try now</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <Image
                        src="/hero4.png"
                        alt="Placeholder image"
                        width={600}
                        height={600}
                        className="rounded-lg w-full"
                    />
                </section>

                {/* CTA Section */}
                <section className="relative overflow-hidden rounded-lg mx-4 bg-gradient-to-br from-red-900/80 to-black p-12 min-h-[600px] flex flex-col justify-between">
                    <div className="max-w-3xl">
                        <h2 className="text-5xl md:text-7xl font-bold mb-6">
                            Lorem ipsum dolor
                        </h2>
                        <p className="font-mono text-gray-300 mb-8">
                            CONSECTETUR ADIPISCING ELIT SED DO EIUSMOD TEMPOR
                            INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA.
                        </p>
                        <Link
                            href="/demo"
                            className="inline-flex items-center gap-2 bg-black hover:bg-gray-900 px-4 py-2 rounded-full border border-white/10"
                        >
                            <span>get started</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="mt-12">
                        <p className="font-mono text-sm text-gray-400 mb-4">
                            TRUSTED BY LEADING COMPANIES:
                        </p>
                        <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center">
                            <Image
                                src="/bloomberg.svg"
                                alt="Partner logo 1"
                                width={150}
                                height={50}
                                className="h-10 w-auto"
                            />
                            <Image
                                src="/siemens.png"
                                alt="Partner logo 2"
                                width={150}
                                height={50}
                                className="h-10 w-auto"
                            />
                            <Image
                                src="/oakville.png"
                                alt="Partner logo 3"
                                width={150}
                                height={50}
                                className="h-10 w-auto"
                            />
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-black border-t border-gray-800 mt-24">
                    <div className="max-w-7xl mx-auto px-4 py-12">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold">
                                    TensorForest
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    Advancing AI research and development for a
                                    better tomorrow.
                                </p>
                                <div className="flex space-x-4">
                                    <Link href="#" aria-label="Twitter">
                                        <Twitter className="w-5 h-5 text-gray-400 hover:text-white" />
                                    </Link>
                                    <Link href="#" aria-label="LinkedIn">
                                        <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
                                    </Link>
                                    <Link href="#" aria-label="Instagram">
                                        <Instagram className="w-5 h-5 text-gray-400 hover:text-white" />
                                    </Link>
                                    <Link href="#" aria-label="Youtube">
                                        <Youtube className="w-5 h-5 text-gray-400 hover:text-white" />
                                    </Link>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400">
                                    Navigation
                                </h4>
                                <ul className="space-y-2">
                                    <li>
                                        <Link
                                            href="/"
                                            className="text-gray-400 hover:text-white text-sm"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/about"
                                            className="text-gray-400 hover:text-white text-sm"
                                        >
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/api"
                                            className="text-gray-400 hover:text-white text-sm"
                                        >
                                            API
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/demo"
                                            className="text-gray-400 hover:text-white text-sm"
                                        >
                                            Demo
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/join-us"
                                            className="text-gray-400 hover:text-white text-sm"
                                        >
                                            Join Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400">
                                    Legal
                                </h4>
                                <ul className="space-y-2">
                                    <li>
                                        <Link
                                            href="/terms"
                                            className="text-gray-400 hover:text-white text-sm"
                                        >
                                            Terms of Service
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/privacy"
                                            className="text-gray-400 hover:text-white text-sm"
                                        >
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/cookies"
                                            className="text-gray-400 hover:text-white text-sm"
                                        >
                                            Cookie Policy
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400">
                                    Stay updated
                                </h4>
                                <p className="text-gray-400 text-sm">
                                    Subscribe to our newsletter for the latest
                                    updates.
                                </p>
                                <form className="flex">
                                    <input
                                        type="email"
                                        placeholder="Your email"
                                        className="bg-gray-900 text-gray-200 px-4 py-2 rounded-l-md text-sm flex-grow border border-gray-800 focus:outline-none focus:border-gray-600"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="bg-red-900 hover:bg-red-800 px-4 py-2 rounded-r-md"
                                        aria-label="Subscribe"
                                    >
                                        <Send className="h-4 w-4" />
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
                            <p className="text-gray-500 text-sm">
                                &copy; {new Date().getFullYear()} TensorForest.
                                All rights reserved.
                            </p>
                            <div className="flex items-center mt-4 md:mt-0">
                                <Globe className="h-4 w-4 text-gray-500 mr-2" />
                                <span className="text-gray-500 text-sm">
                                    English
                                </span>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </Layout>
    );
}

export default Home;
