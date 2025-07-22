import Link from "next/link";
import { FaArrowRight } from "react-icons/fa"; // Optional: for icon
import { Post } from "@/types/post";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/posts/${post.slug}`}
      className="block bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-200 p-5 group"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
          {post.title}
        </h2>
        <FaArrowRight className="text-gray-400 group-hover:text-blue-500 transition-transform duration-200 group-hover:translate-x-1" />
      </div>
      <p className="text-sm text-gray-500 mt-1">Slug: {post.slug}</p>
    </Link>
  );
}
