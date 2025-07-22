import PostCard from "@/components/PostCard";
import { Post } from "@/types/post";

export default async function HomePage() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  const posts = await res.json();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="text-3xl font-extrabold text-800 mb-6 text-center">
        📝 Explore All Blog Posts
      </h1>
      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No posts available. Be the first to create one!</p>
      ) : (
        <ul className="grid sm:grid-cols-2 gap-6">
          {posts.map((post: Post, index: number) => (
            <PostCard post={post} key={index} />
          ))}
        </ul>
      )}
    </div>
  );
}
