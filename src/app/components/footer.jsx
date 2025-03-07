import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-black text-white py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                <span className="text-xl font-bold">tf</span>
                            </div>
                            <span className="font-medium">tensorforest</span>
                        </Link>
                        <p className="text-gray-400 text-sm">
                            Building intelligent systems through community and
                            collaboration.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-medium mb-4">Links</h3>
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
                                    href="/blog"
                                    className="text-gray-400 hover:text-white text-sm"
                                >
                                    Blog
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

                    <div>
                        <h3 className="font-medium mb-4">Connect</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="https://github.com/tensorforest"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white text-sm"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com/tensorforest"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white text-sm"
                                >
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:contact@tensorforest.com"
                                    className="text-gray-400 hover:text-white text-sm"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                    <p className="text-gray-400 text-sm text-center">
                        © {new Date().getFullYear()} Tensorforest. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
