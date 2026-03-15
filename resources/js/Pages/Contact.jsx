import { useState } from "react";
import { Link } from "@inertiajs/react";

const contactMethods = [
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
        ),
        label: "Email",
        value: "hello@larablog.dev",
        description: "Drop us a line anytime.",
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
            </svg>
        ),
        label: "Community",
        value: "GitHub Discussions",
        description: "Ask questions or share ideas.",
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
        label: "Response time",
        value: "Within 24 hours",
        description: "We read every message.",
    },
];

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        // Placeholder — wire up to a backend route when ready
        setSubmitted(true);
    }

    return (
        <>
            {/* Hero */}
            <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
                <div className="max-w-2xl">
                    <span className="inline-block text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">
                        Contact
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-[1.15] mb-5">
                        Get in touch,
                        <br />
                        <span className="text-gray-400">we'd love to hear from you.</span>
                    </h1>
                    <p className="text-base text-gray-500 leading-relaxed max-w-lg">
                        Have a question, idea, or just want to say hello? Send us a message
                        and we'll get back to you as soon as we can.
                    </p>
                </div>
            </section>

            {/* Divider */}
            <div className="max-w-6xl mx-auto px-6">
                <div className="h-px bg-gray-100" />
            </div>

            {/* Contact methods row */}
            <section className="max-w-6xl mx-auto px-6 py-14">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {contactMethods.map((method, i) => (
                        <div
                            key={i}
                            className="group p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300 bg-white"
                        >
                            <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-700 mb-4 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300">
                                {method.icon}
                            </div>
                            <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-1">
                                {method.label}
                            </p>
                            <p className="text-base font-semibold text-gray-900 mb-1">
                                {method.value}
                            </p>
                            <p className="text-sm text-gray-500">{method.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Divider */}
            <div className="max-w-6xl mx-auto px-6">
                <div className="h-px bg-gray-100" />
            </div>

            {/* Form + Decorative block */}
            <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-start">

                {/* Form */}
                <div>
                    <span className="inline-block text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">
                        Send a message
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-8">
                        We read everything.
                    </h2>

                    {submitted ? (
                        <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8 text-center">
                            <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center mx-auto mb-4">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <p className="text-base font-semibold text-gray-900 mb-1">Message sent.</p>
                            <p className="text-sm text-gray-500">We'll be in touch within 24 hours.</p>
                            <button
                                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                                className="mt-6 px-5 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
                            >
                                Send another
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            {/* Name + Email row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="name" className="text-xs font-medium text-gray-500 uppercase tracking-widest">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        className="px-4 py-3 text-sm text-gray-900 bg-white border border-gray-200 rounded-xl placeholder-gray-300 focus:outline-none focus:border-gray-400 focus:ring-0 transition-colors duration-200"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="email" className="text-xs font-medium text-gray-500 uppercase tracking-widest">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        className="px-4 py-3 text-sm text-gray-900 bg-white border border-gray-200 rounded-xl placeholder-gray-300 focus:outline-none focus:border-gray-400 focus:ring-0 transition-colors duration-200"
                                    />
                                </div>
                            </div>

                            {/* Subject */}
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="subject" className="text-xs font-medium text-gray-500 uppercase tracking-widest">
                                    Subject
                                </label>
                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    required
                                    value={form.subject}
                                    onChange={handleChange}
                                    placeholder="What's this about?"
                                    className="px-4 py-3 text-sm text-gray-900 bg-white border border-gray-200 rounded-xl placeholder-gray-300 focus:outline-none focus:border-gray-400 focus:ring-0 transition-colors duration-200"
                                />
                            </div>

                            {/* Message */}
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="message" className="text-xs font-medium text-gray-500 uppercase tracking-widest">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Tell us what's on your mind..."
                                    className="px-4 py-3 text-sm text-gray-900 bg-white border border-gray-200 rounded-xl placeholder-gray-300 focus:outline-none focus:border-gray-400 focus:ring-0 transition-colors duration-200 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="mt-2 w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white bg-gray-900 rounded-xl hover:bg-gray-700 transition-all duration-200 shadow-sm"
                            >
                                Send message
                            </button>
                        </form>
                    )}
                </div>

                {/* Decorative block */}
                <div className="rounded-3xl bg-gray-50 border border-gray-100 p-10 flex flex-col gap-4 md:sticky md:top-24">
                    {[
                        "Questions welcome.",
                        "Feedback valued.",
                        "Every message read.",
                    ].map((phrase, i) => (
                        <p
                            key={i}
                            className={`text-lg font-semibold tracking-tight ${
                                i === 2 ? "text-gray-900" : "text-gray-300"
                            }`}
                        >
                            {phrase}
                        </p>
                    ))}

                    <div className="mt-6 h-px bg-gray-100" />

                    <p className="text-sm text-gray-500 leading-relaxed">
                        We're a small team building tools we love. Every message is read by a
                        real person, and we do our best to reply promptly.
                    </p>
                </div>
            </section>

            {/* Divider */}
            <div className="max-w-6xl mx-auto px-6">
                <div className="h-px bg-gray-100" />
            </div>

            {/* CTA Banner */}
            <section className="max-w-6xl mx-auto px-6 pb-24 pt-20">
                <div className="rounded-3xl bg-gray-900 px-8 py-14 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">
                        While you're here —
                    </h2>
                    <p className="text-gray-400 text-sm mb-8 max-w-sm mx-auto">
                        Explore the blog or start writing your own story today.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <Link
                            href="/posts"
                            className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-gray-900 bg-white rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-sm"
                        >
                            Browse posts
                        </Link>
                        <Link
                            href="/about"
                            className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-gray-400 bg-transparent border border-gray-700 rounded-xl hover:border-gray-500 hover:text-gray-200 transition-all duration-200"
                        >
                            Learn about us
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
