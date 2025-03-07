import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import BlogCard from "../components/BlogCard";
import { Layout } from "../components/layout";

export default function BlogPage() {
    // Get list of all blog posts
    const blogDir = path.join(process.cwd(), "src/content/blog");
    const files = fs.readdirSync(blogDir);

    const posts = files
        .filter((filename) => filename.endsWith(".md"))
        .map((filename) => {
            const markdownWithMeta = fs.readFileSync(
                path.join(blogDir, filename),
                "utf-8"
            );
            const { data } = matter(markdownWithMeta);

            return {
                slug: filename.replace(".md", ""),
                title: data.title,
                date: data.date,
                excerpt: data.excerpt,
                coverImage: data.coverImage,
                featured: data.featured || false,
            };
        })
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    // Separate featured post
    const featuredPost = posts.find((post) => post.featured);
    const regularPosts = posts.filter((post) => !post.featured);

    return (
        <Layout>
            <div className="pt-28 px-4 md:px-6 max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
                <p className="text-xl text-gray-400 mb-12">
                    Thoughts, insights and explorations of AI, machine learning
                    and technology
                </p>

                {/* Featured Post */}
                {featuredPost && (
                    <div className="mb-16">
                        <h2 className="text-xl text-blue-400 mb-4">
                            Featured Article
                        </h2>
                        <Link
                            href={`/blog/${featuredPost.slug}`}
                            className="block"
                        >
                            <div className="grid md:grid-cols-5 gap-6 bg-gray-900/50 border border-gray-800 hover:border-gray-700 rounded-xl overflow-hidden transition-all">
                                <div className="md:col-span-3 h-64 md:h-96 relative">
                                    <Image
                                        src={
                                            featuredPost.coverImage ||
                                            "/images/blog/placeholder.jpg"
                                        }
                                        alt={featuredPost.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                <div className="md:col-span-2 p-6 flex flex-col justify-center">
                                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                        {featuredPost.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4">
                                        {featuredPost.excerpt}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {new Date(
                                            featuredPost.date
                                        ).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                )}

                {/* Regular Posts */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regularPosts.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>
            </div>
        </Layout>
    );
}
