import type { NextApiRequest, NextApiResponse } from "next";

// Mock data (in-memory array)
let posts = [
  {
    title: "First Post",
    slug: "first-post",
    content: "This is the content of the first post.",
  },
  {
    title: "Second Post",
    slug: "second-post",
    content: "More content from another post.",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    // Return the list of posts
    res.status(200).json(posts);
  } else if (req.method === "POST") {
    const { title, slug, content } = req.body;

    if (!title || !slug || !content) {
      return res.status(400).json({ message: "Missing fields in request body." });
    }

    const newPost = { title, slug, content };
    posts.push(newPost);

    console.log("New post added:", newPost);
    res.status(201).json({ message: "Post received", post: newPost });
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
