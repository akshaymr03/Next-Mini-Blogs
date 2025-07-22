import { Post } from "@/types/post";

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${baseUrl}/api/posts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return (
      <div className="p-6 text-red-600 font-semibold bg-red-50 border border-red-200 rounded-xl max-w-xl mx-auto mt-10 text-center">
        Post not found.
      </div>
    );
  }

  const postData = await res.json();
  const post = postData.find((p: Post) => p.slug === slug);

  if (!post) {
    return (
      <div className="p-6 text-red-600 font-semibold bg-red-50 border border-red-200 rounded-xl max-w-xl mx-auto mt-10 text-center">
        Post with slug <strong>{slug}</strong> not found.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-xl border border-gray-100">
      <div className="mb-4 text-center">
        <h1 className="text-4xl font-bold text-blue-700">{post.title}</h1>
        <p className="text-sm text-gray-500 mt-1 italic">Slug: {post.slug}</p>
      </div>
      <div className="mt-6 text-gray-800 text-lg leading-relaxed">
        {post.content}
      </div>
    </div>
  );
}
