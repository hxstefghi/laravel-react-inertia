import { Link } from "@inertiajs/react";

export default function Home({ name }) {
    const features = [
        {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                </svg>
            ),
            title: "Share Your Thoughts",
            description: "Write and publish posts that matter to you. Express yourself freely with a clean, distraction-free editor.",
        },
        {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
            ),
            title: "Connect & Discover",
            description: "Explore posts from the community. Find inspiration and ideas across a wide range of topics.",
        },
        {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
            ),
            title: "Fast & Lightweight",
            description: "Built on Laravel and React with Inertia.js for a seamless, SPA-like experience without the complexity.",
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                {/* Subtle background pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-white to-white pointer-events-none" />

                <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20 text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 text-xs font-medium mb-8 border border-gray-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span>
                        Now live — Laravel + React + Inertia
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
                        Write without
                        <br />
                        <span className="text-gray-400">limits.</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="max-w-xl mx-auto text-lg text-gray-500 leading-relaxed mb-10">
                        {/* A minimal, fast blogging platform built for creators who care about the words,
                        not the tools. Start writing in seconds. */}

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sed aliquid magnam animi cum quam voluptatibus, atque cumque praesentium pariatur.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <Link
                            href="/create"
                            className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white bg-gray-900 rounded-xl hover:bg-gray-700 transition-all duration-200 shadow-sm"
                        >
                            Start writing
                        </Link>
                        <Link
                            href="/posts"
                            className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
                        >
                            Browse posts
                        </Link>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="max-w-6xl mx-auto px-6">
                <div className="h-px bg-gray-100" />
            </div>

            {/* Features Section */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <div className="text-center mb-14">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-3">
                        Everything you need, nothing you don't
                    </h2>
                    <p className="text-gray-500 text-base max-w-md mx-auto">
                        Simple by design. Powerful where it counts.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300 bg-white"
                        >
                            <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-700 mb-4 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-base font-semibold text-gray-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Banner */}
            <section className="max-w-6xl mx-auto px-6 pb-24">
                <div className="rounded-3xl bg-gray-900 px-8 py-14 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">
                        Ready to share your story?
                    </h2>
                    <p className="text-gray-400 text-sm mb-8 max-w-sm mx-auto">
                        Join the conversation. Your first post is just one click away.
                    </p>
                    <Link
                        href="/create"
                        className="inline-block px-6 py-3 text-sm font-semibold text-gray-900 bg-white rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-sm"
                    >
                        Create your first post
                    </Link>
                </div>
            </section>
        </>
    );
}
