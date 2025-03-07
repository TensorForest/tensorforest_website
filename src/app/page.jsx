"use client";

import Image from "next/image";
import {
    ArrowRight,
    Send,
    Twitter,
    Linkedin,
    Instagram,
    Youtube,
    Globe,
} from "lucide-react";
import Link from "next/link";
import { Layout } from "./components/layout";
import { Footer } from "./components/Footer";
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

                {/* Using the Footer component instead of inline footer HTML */}
                <Footer />
            </div>
        </Layout>
    );
}

export default Home;
