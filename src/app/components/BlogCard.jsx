import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ post }) {
    return (
        <Link href={`/blog/${post.slug}`} className="block">
            <div className="h-full flex flex-col bg-gray-900/50 border border-gray-800 hover:border-gray-700 rounded-xl overflow-hidden transition-all">
                <div className="h-48 relative">
                    <Image
                        src={post.coverImage || "/images/blog/placeholder.jpg"}
                        alt={post.title}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-400 mb-4 flex-grow">
                        {post.excerpt}
                    </p>
                    <p className="text-sm text-gray-500">
                        {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </p>
                </div>
            </div>
        </Link>
    );
}
