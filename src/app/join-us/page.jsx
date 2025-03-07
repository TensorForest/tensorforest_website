"use client";

import { useState } from "react";
import { Layout } from "../components/layout";
import { supabase } from "../../lib/supabaseClient";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";

export default function JoinUs() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const [subscribed, setSubscribed] = useState(false);
    const [error, setError] = useState(null);
    const [consent, setConsent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!consent) {
            setError("Please agree to our terms & privacy policy to continue.");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            // Save email to Supabase
            const { error } = await supabase
                .from("subscribers")
                .insert([{ email, name, subscribed_at: new Date() }]);

            if (error) throw error;

            setSubscribed(true);
            setEmail("");
            setName("");
        } catch (err) {
            console.error("Error subscribing:", err);
            setError("There was an error subscribing. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout>
            <div className="pt-32 px-4 md:px-6 max-w-5xl mx-auto pb-20">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Join the TensorForest Community
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Stay updated with the latest advancements in AI and
                        machine learning, exclusive tutorials, and early access
                        to our tools and resources.
                    </p>
                </div>

                <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 md:p-12 mb-16">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">
                                Why Join Us?
                            </h2>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <div className="bg-blue-500/20 p-2 rounded-full mr-3 mt-1">
                                        <CheckCircle className="h-4 w-4 text-blue-400" />
                                    </div>
                                    <div>
                                        <span className="font-medium text-blue-400">
                                            Exclusive Content
                                        </span>
                                        <p className="text-gray-400 mt-1">
                                            Get early access to tutorials,
                                            research papers, and code samples.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-blue-500/20 p-2 rounded-full mr-3 mt-1">
                                        <CheckCircle className="h-4 w-4 text-blue-400" />
                                    </div>
                                    <div>
                                        <span className="font-medium text-blue-400">
                                            Community Updates
                                        </span>
                                        <p className="text-gray-400 mt-1">
                                            Be the first to know about our
                                            events, workshops, and community
                                            initiatives.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-blue-500/20 p-2 rounded-full mr-3 mt-1">
                                        <CheckCircle className="h-4 w-4 text-blue-400" />
                                    </div>
                                    <div>
                                        <span className="font-medium text-blue-400">
                                            Beta Access
                                        </span>
                                        <p className="text-gray-400 mt-1">
                                            Test our latest tools and features
                                            before theyre released to the
                                            public.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div>
                            {!subscribed ? (
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-4"
                                >
                                    <h2 className="text-2xl font-bold mb-4">
                                        Subscribe to our Newsletter
                                    </h2>

                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-300 mb-1"
                                        >
                                            Name (optional)
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Your name"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-300 mb-1"
                                        >
                                            Email address*
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            required
                                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="you@example.com"
                                        />
                                    </div>

                                    <div className="flex items-start mt-4">
                                        <input
                                            type="checkbox"
                                            id="consent"
                                            checked={consent}
                                            onChange={(e) =>
                                                setConsent(e.target.checked)
                                            }
                                            className="mt-1 h-4 w-4 text-blue-600 rounded border-gray-600 focus:ring-blue-500"
                                        />
                                        <label
                                            htmlFor="consent"
                                            className="ml-2 text-sm text-gray-400"
                                        >
                                            I agree to receive emails from
                                            TensorForest and acknowledge that I
                                            have read and understand the{" "}
                                            <a
                                                href="/privacy-policy"
                                                className="text-blue-400 hover:underline"
                                            >
                                                Privacy Policy
                                            </a>
                                            . You can unsubscribe at any time.
                                        </label>
                                    </div>

                                    {error && (
                                        <div className="flex items-center text-red-400 text-sm mt-2">
                                            <XCircle className="h-4 w-4 mr-1" />
                                            {error}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={loading || !email}
                                        className={`mt-4 w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3 rounded-lg font-medium ${
                                            loading || !email
                                                ? "opacity-70 cursor-not-allowed"
                                                : ""
                                        }`}
                                    >
                                        {loading ? (
                                            "Subscribing..."
                                        ) : (
                                            <>
                                                Subscribe{" "}
                                                <ArrowRight className="h-4 w-4" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            ) : (
                                <div className="bg-blue-900/30 border border-blue-800 rounded-lg p-6 text-center">
                                    <CheckCircle className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        Thank you for subscribing!
                                    </h3>
                                    <p className="text-gray-300 mb-4">
                                        Weve sent a confirmation email to your
                                        inbox. Please check your email to
                                        complete the subscription process.
                                    </p>
                                    <button
                                        onClick={() => setSubscribed(false)}
                                        className="text-blue-400 hover:underline"
                                    >
                                        Subscribe another email
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-6">What to Expect</h2>
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-gray-900/30 p-6 rounded-xl">
                            <h3 className="font-bold mb-2 text-lg">
                                Weekly Updates
                            </h3>
                            <p className="text-gray-400">
                                Curated news, research papers, and resources
                                delivered to your inbox.
                            </p>
                        </div>
                        <div className="bg-gray-900/30 p-6 rounded-xl">
                            <h3 className="font-bold mb-2 text-lg">
                                Monthly Newsletter
                            </h3>
                            <p className="text-gray-400">
                                Deep dives into AI topics, tutorials, and
                                community highlights.
                            </p>
                        </div>
                        <div className="bg-gray-900/30 p-6 rounded-xl">
                            <h3 className="font-bold mb-2 text-lg">
                                Special Announcements
                            </h3>
                            <p className="text-gray-400">
                                Be the first to know about new features, events,
                                and opportunities.
                            </p>
                        </div>
                    </div>

                    <div className="text-sm text-gray-500 max-w-2xl mx-auto">
                        <h3 className="text-gray-400 font-medium mb-2">
                            Our Commitment to Your Privacy
                        </h3>
                        <p className="mb-4">
                            We take your privacy seriously. Your information
                            will never be sold to third parties. We use your
                            email only to send you the content youve requested.
                            You can unsubscribe anytime with a single click.
                        </p>
                        <p>
                            © {new Date().getFullYear()} TensorForest. All
                            rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
