import { Link } from "@inertiajs/react";
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <span className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center">
                            <span className="text-white text-sm font-bold">L</span>
                        </span>
                        <span className="text-gray-900 font-semibold text-lg tracking-tight group-hover:text-gray-600 transition-colors duration-200">
                            Larablog
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        <Link
                            href="/"
                            className="px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
                        >
                            Contact
                        </Link>
                        <Link
                            href="/posts/create"
                            className="ml-2 px-4 py-2 text-sm font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-700 transition-all duration-200 shadow-sm"
                        >
                            New Post
                        </Link>
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden pb-4 pt-2 border-t border-gray-100 flex flex-col gap-1">
                        <Link
                            href="/"
                            onClick={() => setMenuOpen(false)}
                            className="px-4 py-2.5 text-sm font-medium text-gray-600 rounded-lg hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            onClick={() => setMenuOpen(false)}
                            className="px-4 py-2.5 text-sm font-medium text-gray-600 rounded-lg hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            onClick={() => setMenuOpen(false)}
                            className="px-4 py-2.5 text-sm font-medium text-gray-600 rounded-lg hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
                        >
                            Contact
                        </Link>
                        <Link
                            href="/posts/create"
                            onClick={() => setMenuOpen(false)}
                            className="mt-1 px-4 py-2.5 text-sm font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-700 transition-all duration-200 text-center"
                        >
                            New Post
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
}
