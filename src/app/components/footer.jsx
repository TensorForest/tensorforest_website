"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { Space_Grotesk } from "next/font/google";
import { useState, useEffect, useRef } from "react";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export function Footer() {
    return (
        <div className="max-w-3xl text-left">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
                Lorem ipsum dolor
            </h2>
            <p className="font-mono text-gray-300 mb-8">
                CONSECTETUR ADIPISCING ELIT SED DO EIUSMOD TEMPOR INCIDIDUNT UT
                LABORE ET DOLORE MAGNA ALIQUA.
            </p>
            <Link
                href="/demo"
                className="inline-flex items-center gap-2 bg-black hover:bg-gray-900 px-4 py-2 rounded-full border border-white/10"
            >
                <span>get started</span>
                <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="mt-12">
                <p className="font-mono text-sm text-gray-400 mb-4">
                    TRUSTED BY LEADING COMPANIES:
                </p>
                <div className="grid grid-cols-3 gap-8 items-center">
                    <Image
                        src="/bloomberg.svg"
                        alt="Partner logo 1"
                        width={120}
                        height={40}
                        className="h-8 w-auto rounded-lg"
                    />
                    <Image
                        src="/siemens.png"
                        alt="Partner logo 2"
                        width={120}
                        height={40}
                        className="h-8 w-auto rounded-lg"
                    />
                    <Image
                        src="/oakville.png"
                        alt="Partner logo 3"
                        width={116}
                        height={40}
                        className="h-8 w-auto rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
}

export default Footer;
