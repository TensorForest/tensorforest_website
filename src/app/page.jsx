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

                {/* Footer - Redesigned with removed separator line and improved spacing */}
                <footer className="bg-black pt-16 pb-8">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
                            {/* Company info and socials */}
                            <div className="md:max-w-xs">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center">
                                        <span className="text-sm font-bold">
                                            tf
                                        </span>
                                    </div>
                                    <span className="font-medium">
                                        tensorforest
                                    </span>
                                </div>
                                <p className="text-gray-400 text-sm mb-4">
                                    Advancing AI research and development for a
                                    better tomorrow.
                                </p>
                                <div className="flex space-x-3">
                                    <Link
                                        href="#"
                                        aria-label="Twitter"
                                        className="w-8 h-8 rounded-full bg-gray-900/70 flex items-center justify-center hover:bg-gray-800 transition-colors"
                                    >
                                        <Twitter className="w-4 h-4 text-gray-300" />
                                    </Link>
                                    <Link
                                        href="#"
                                        aria-label="LinkedIn"
                                        className="w-8 h-8 rounded-full bg-gray-900/70 flex items-center justify-center hover:bg-gray-800 transition-colors"
                                    >
                                        <Linkedin className="w-4 h-4 text-gray-300" />
                                    </Link>
                                    <Link
                                        href="#"
                                        aria-label="Instagram"
                                        className="w-8 h-8 rounded-full bg-gray-900/70 flex items-center justify-center hover:bg-gray-800 transition-colors"
                                    >
                                        <Instagram className="w-4 h-4 text-gray-300" />
                                    </Link>
                                    <Link
                                        href="#"
                                        aria-label="Youtube"
                                        className="w-8 h-8 rounded-full bg-gray-900/70 flex items-center justify-center hover:bg-gray-800 transition-colors"
                                    >
                                        <Youtube className="w-4 h-4 text-gray-300" />
                                    </Link>
                                </div>
                            </div>

                            {/* Navigation and other links in columns */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-8">
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3">
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
                                                href="/blog"
                                                className="text-gray-400 hover:text-white text-sm"
                                            >
                                                Blog
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3">
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

                                {/* Newsletter signup - restyled */}
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3">
                                        Stay updated
                                    </h4>
                                    <p className="text-gray-400 text-sm mb-3">
                                        Subscribe for the latest updates.
                                    </p>
                                    <form className="relative">
                                        <input
                                            type="email"
                                            placeholder="Your email address"
                                            className="w-full bg-gray-900/50 backdrop-blur-sm text-gray-200 px-4 py-2.5 rounded-lg text-sm border border-gray-800/50 focus:outline-none focus:ring-1 focus:ring-red-900/50"
                                            required
                                        />
                                        <button
                                            type="submit"
                                            className="absolute right-2 top-1/2 -translate-y-1/2 text-red-500 hover:text-red-400 p-1"
                                            aria-label="Subscribe"
                                        >
                                            <Send className="h-4 w-4" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* Bottom copyright bar - removed border and increased spacing */}
                        <div className="pt-8 mt-10 flex flex-col md:flex-row justify-between items-center">
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
