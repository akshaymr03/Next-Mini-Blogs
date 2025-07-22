"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PostForm() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const isValidSlug = (slug: string) => /^[a-zA-Z_-]+$/.test(slug);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();


    if (!slug) {
      alert("Please enter a slug.");
      return;
    }

    if (!isValidSlug(slug)) {
      alert("Invalid slug format. Only letters, hyphens, and underscores are allowed.");
      return;
    }

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, slug, content }),
      });

      if (!res.ok) throw new Error("Failed to add post");

      setTitle("");
      setSlug("");
      setContent("");
      router.push("/");
    } catch (error) {
      console.error("Error submitting post:", error);
      alert("Failed to add post");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-8 mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        ✍️ Create New Post
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            className="border border-gray-300 text-gray-500 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
          <input
            className="border border-gray-300 text-gray-500 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., my-post-slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
          <textarea
            className="border border-gray-300 text-gray-500 rounded-lg px-4 py-2 w-full h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your post content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-2 px-4 rounded-lg"
        >
          Add Post
        </button>
      </form>
    </div>
  );
}
