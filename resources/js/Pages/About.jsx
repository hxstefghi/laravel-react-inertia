import { Link } from "@inertiajs/react";

const stats = [
    { label: "Posts published", value: "100+" },
    { label: "Built with", value: "Laravel" },
    { label: "Frontend", value: "React" },
    { label: "Bridge", value: "Inertia.js" },
];

const values = [
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
            </svg>
        ),
        title: "Simplicity first",
        description:
            "We strip away the clutter so you can focus entirely on your writing. No distractions, no noise — just your words on a clean canvas.",
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
        ),
        title: "Quality over quantity",
        description:
            "We believe a single thoughtful post is worth more than a hundred rushed ones. Take your time, make it count.",
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
            </svg>
        ),
        title: "Open & transparent",
        description:
            "Built in the open with modern open-source tools. The stack is honest, documented, and easy to extend.",
    },
];

export default function About() {
    return (
        <>
            {/* Hero */}
            <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
                <div className="max-w-2xl">
                    <span className="inline-block text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">
                        About
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-[1.15] mb-5">
                        A place for ideas
                        <br />
                        <span className="text-gray-400">worth sharing.</span>
                    </h1>
                    <p className="text-base text-gray-500 leading-relaxed max-w-lg">
                        Larablog is a minimal blogging platform built to get out of your way.
                        No algorithms, no ads, no noise — just clean reading and honest writing.
                    </p>
                </div>
            </section>

            {/* Divider */}
            <div className="max-w-6xl mx-auto px-6">
                <div className="h-px bg-gray-100" />
            </div>

            {/* Stats Row */}
            <section className="max-w-6xl mx-auto px-6 py-14">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <div key={i}>
                            <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                            <p className="text-sm text-gray-400">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Divider */}
            <div className="max-w-6xl mx-auto px-6">
                <div className="h-px bg-gray-100" />
            </div>

            {/* Mission */}
            <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <span className="inline-block text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">
                        Our mission
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-4">
                        Writing should feel effortless.
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                        We started Larablog because existing platforms had become too heavy —
                        bloated with features that got between the writer and the page.
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                        Our mission is simple: build the most friction-free writing experience
                        possible, without sacrificing speed, reliability, or craft. Every design
                        decision is made with the writer in mind.
                    </p>
                </div>

                {/* Decorative block */}
                <div className="rounded-3xl bg-gray-50 border border-gray-100 p-10 flex flex-col gap-4">
                    {["Design with intent.", "Build with care.", "Write without limits."].map(
                        (phrase, i) => (
                            <p
                                key={i}
                                className={`text-lg font-semibold tracking-tight ${
                                    i === 2 ? "text-gray-900" : "text-gray-300"
                                }`}
                            >
                                {phrase}
                            </p>
                        )
                    )}
                </div>
            </section>

            {/* Divider */}
            <div className="max-w-6xl mx-auto px-6">
                <div className="h-px bg-gray-100" />
            </div>

            {/* Values */}
            <section className="max-w-6xl mx-auto px-6 py-16">
                <div className="mb-10">
                    <span className="inline-block text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">
                        What we believe
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                        Our values
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {values.map((value, i) => (
                        <div
                            key={i}
                            className="group p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300 bg-white"
                        >
                            <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-700 mb-4 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300">
                                {value.icon}
                            </div>
                            <h3 className="text-base font-semibold text-gray-900 mb-2">
                                {value.title}
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Divider */}
            <div className="max-w-6xl mx-auto px-6">
                <div className="h-px bg-gray-100" />
            </div>

            {/* CTA */}
            <section className="max-w-6xl mx-auto px-6 py-20 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-3">
                    Ready to start writing?
                </h2>
                <p className="text-sm text-gray-500 mb-8 max-w-sm mx-auto">
                    Your ideas deserve a home. Start publishing today — it takes less than a minute.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                        href="/create"
                        className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white bg-gray-900 rounded-xl hover:bg-gray-700 transition-all duration-200 shadow-sm"
                    >
                        Create a post
                    </Link>
                    <Link
                        href="/"
                        className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
                    >
                        Back to home
                    </Link>
                </div>
            </section>
        </>
    );
}
