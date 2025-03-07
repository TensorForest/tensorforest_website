"use client";
import React from "react";
import Layout from "../components/layout";
// import Footer from "../components/Footer";
import "../globals.css";
import Image from "next/image";
import { SiLinkedin } from "react-icons/si";

const teamMembers = [
    {
        name: "Shayaan Azeem",
        title: "FOUNDER",
        bio: "Co-creator of ClimaX, the first foundation model for weather and climate, and co-author of Aurora. Previously, AI and simulations research at Microsoft. Stanford CS PhD.",
        imageUrl: "/shayaan.jpg",

        linkedinUrl: "https://www.linkedin.com/in/shayaan-azeem/",
    },
    {
        name: "Rohanth Marem",
        title: "FOUNDER",
        bio: "Co-creator of ClimaX, the first foundation model for weather and climate, and co-author of Aurora. Previously, AI and simulations research at Microsoft. Stanford CS PhD.",
        imageUrl: "/rohanth.jpeg",
        linkedinUrl: "https://www.linkedin.com/in/rohanth-marem/",
    },
    {
        name: "Arnnav Kudale",
        title: "FOUNDER",
        bio: "Co-creator of ClimaX, the first foundation model for weather and climate, and co-author of Aurora. Previously, AI and simulations research at Microsoft. Stanford CS PhD.",
        imageUrl: "/arnnav.jpg",

        linkedinUrl: "https://www.linkedin.com/in/arnnav-kudale-934b85285/",
    },
];

function TeamMemberCard({ member }) {
    return (
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 flex flex-col gap-6 border border-white/10 hover:border-white/20 transition-all">
            <div className="flex justify-between items-start">
                <div className="relative w-20 h-20">
                    <Image
                        src={member.imageUrl || "/placeholder.svg"}
                        alt={`${member.name}'s profile picture`}
                        fill
                        className="rounded-full object-cover"
                    />
                </div>
                <a
                    href={member.linkedinUrl}
                    className="text-white/60 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <SiLinkedin size={24} />
                </a>
            </div>
            <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-white">
                    {member.name}
                </h2>
                <p className="font-mono text-sm text-white/60">
                    {member.title}
                </p>
                <p className="text-sm leading-relaxed text-white/80">
                    {member.bio}
                </p>
            </div>
        </div>
    );
}

export default function TeamSection() {
    return (
        <Layout>
            <section className="py-24 px-4 max-w-7xl mx-auto">
                <h1 className="text-5xl font-bold text-white mb-16">
                    Our team
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member) => (
                        <TeamMemberCard key={member.name} member={member} />
                    ))}
                </div>
            </section>
        </Layout>
    );
}
