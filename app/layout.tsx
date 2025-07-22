import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800 min-h-screen">
        <header className="bg-white shadow sticky top-0 z-50">
          <nav className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">Mini Blog</div>
            <div className="flex gap-4">
              <Link
                href="/"
                className="text-gray-700 font-medium hover:text-blue-600 px-3 py-2 rounded-md transition duration-200 hover:bg-blue-100"
              >
                Home
              </Link>
              <Link
                href="/new-post"
                className="text-gray-700 font-medium hover:text-blue-600 px-3 py-2 rounded-md transition duration-200 hover:bg-blue-100"
              >
                New Post
              </Link>
              <Link
                href="/ssr-example"
                className="text-gray-700 font-medium hover:text-blue-600 px-3 py-2 rounded-md transition duration-200 hover:bg-blue-100"
              >
                SSR
              </Link>
            </div>
          </nav>
        </header>

        <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
