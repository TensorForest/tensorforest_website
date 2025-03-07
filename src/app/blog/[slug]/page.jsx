import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Layout } from "../../components/layout";

// Configure marked for better rendering
marked.setOptions({
    breaks: true,
    gfm: true,
});

// Generate static params for all blog posts
export async function generateStaticParams() {
    const blogDir = path.join(process.cwd(), "src/content/blog");
    const files = fs.readdirSync(blogDir);

    return files.map((filename) => ({
        slug: filename.replace(".md", ""),
    }));
}

export default function BlogPost({ params }) {
    const { slug } = params;

    // Read the markdown file
    const markdownWithMeta = fs.readFileSync(
        path.join(process.cwd(), "src/content/blog", `${slug}.md`),
        "utf-8"
    );

    const { data, content } = matter(markdownWithMeta);

    // Process the markdown content with proper sanitization
    const htmlContent = marked.parse(content);

    return (
        <Layout>
            <div className="pt-28 px-4 md:px-6 max-w-4xl mx-auto pb-16">
                <Link
                    href="/blog"
                    className="flex items-center text-blue-400 mb-8 hover:underline"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" /> Back to all articles
                </Link>

                {/* Cover Image */}
                {data.coverImage && (
                    <div className="w-full h-64 md:h-96 relative mb-8 rounded-xl overflow-hidden">
                        <Image
                            src={data.coverImage}
                            alt={data.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                {/* Article Header */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                    {data.title}
                </h1>
                <div className="flex items-center mb-8">
                    <p className="text-gray-400">
                        {new Date(data.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </p>
                    {data.author && (
                        <>
                            <span className="mx-2">•</span>
                            <p className="text-gray-400">{data.author}</p>
                        </>
                    )}
                </div>

                {/* Article Content */}
                <article
                    className="prose prose-invert max-w-none blog-content
                      prose-headings:text-white prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                      prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
                      prose-strong:text-white
                      prose-img:rounded-lg
                      prose-code:bg-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-blue-300
                      prose-li:marker:text-blue-400
                      prose-hr:border-gray-800"
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
            </div>
        </Layout>
    );
}
