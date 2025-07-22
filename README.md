# Next.js Mini Blog

A simple Next.js 13 project demonstrating dynamic routing, API routes, server-side rendering, and client-side forms — styled with Tailwind CSS.

---

## 🚀 Project Features

- Display a list of blog posts on the homepage
- View individual posts using dynamic routes (`/posts/[slug]`)
- Create new posts via a client-side form with slug validation
- REST API routes to fetch and add posts (`GET` and `POST`)
- Server-Side Rendering (SSR) with no caching for up-to-date content
- Middleware example for request logging
- Styled using Tailwind CSS with modern UI/UX

---

## 🛠️ Setup Instructions

### Prerequisites

- Node.js v16 or higher
- Package manager: npm, yarn, pnpm, or bun

### Installation

1. Clone the repository

```bash
git clone 
cd nextjs-mini-blog

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
