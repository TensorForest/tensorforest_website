"use client";
import React from "react";
import { Layout } from "../components/layout";
import "../globals.css";

const JoinPage = () => {
    const [isSubscribed, setIsSubscribed] = React.useState(false);
    const handleSubscribe = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        setIsSubscribed(true);

        // Add your subscription logic here
        console.log(`Subscribed with email: ${email}`);
    };

    return (
        <div className="join-page bg-black min-h-screen">
            <Layout>
                <div className="h-screen flex items-center justify-center">
                    {isSubscribed ? (
                        <div className="text-green-500 text-2xl font-bold">
                            Thank you for subscribing!
                        </div>
                    ) : (
                        <div className="form-container bg-zinc-900 p-8 rounded-lg shadow-lg border border-zinc-800">
                            <h2 className="text-3xl font-bold mb-6 text-center text-white">
                                Subscribe to our Newsletter
                            </h2>
                            <form
                                onSubmit={handleSubscribe}
                                className="flex flex-col items-center"
                            >
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    required
                                    className="email-input mb-4 w-full max-w-md px-4 py-2 bg-zinc-800 text-white border border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-zinc-400"
                                />
                                <button
                                    type="submit"
                                    className="subscribe-button bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition duration-300"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </Layout>
        </div>
    );
};

export default JoinPage;
