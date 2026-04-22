import { usePage, Link } from "@inertiajs/react";

export default function Home({ posts }) {
    const { flash } = usePage().props;

    return (
        <>
            {/* Hero / Landing Section */}
            <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
                <div className="max-w-2xl">
                    <span className="inline-block text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">
                        Community
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-[1.15] mb-5">
                        Discover & Share
                        <br />
                        <span className="text-gray-400">great ideas.</span>
                    </h1>
                    <p className="text-base text-gray-500 leading-relaxed max-w-lg mb-8">
                        Join the Larablog community. A minimal space to read thoughtful posts, write without distraction, and connect with other writers.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                        <Link
                            href="/posts/create"
                            className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white bg-gray-900 rounded-xl hover:bg-gray-700 transition-all duration-200 shadow-sm text-center"
                        >
                            Create a post
                        </Link>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="max-w-6xl mx-auto px-6">
                <div className="h-px bg-gray-100" />
            </div>

            <div className="max-w-4xl mx-auto px-6 py-16">
                {flash?.success && (
                    <div className="mb-10 rounded-xl bg-green-50 p-4 border border-green-100">
                        <div className="flex">
                            <div className="ml-3">
                                <p className="text-sm font-medium text-green-800">{flash.success}</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Posts List */}
                <div className="space-y-8">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                            Recent Posts
                        </h2>
                        <span className="text-sm font-medium text-gray-400 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                            Latest
                        </span>
                    </div>
                    
                    {posts.data && posts.data.length > 0 ? (
                        <>
                            <div className="grid gap-6">
                                {posts.data.map((post) => (
                                    <div key={post.id} className="group p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300 bg-white">
                                        <div className="flex items-center mb-5">
                                            <div className="h-10 w-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-700 font-bold group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300">
                                                A
                                            </div>
                                            <div className="ml-4">
                                                <p className="text-sm font-semibold text-gray-900">Anonymous Writer</p>
                                                <p className="text-xs text-gray-400 mt-0.5">
                                                    {new Date(post.created_at).toLocaleDateString(undefined, {
                                                        year: 'numeric',
                                                        month: 'short',
                                                        day: 'numeric',
                                                    })}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="prose prose-gray max-w-none">
                                            <p className="whitespace-pre-wrap text-sm text-gray-500 leading-relaxed">{post.body}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            {/* Pagination */}
                            {posts.links && posts.links.length > 3 && (
                                <div className="mt-12 flex items-center justify-center space-x-2">
                                    {posts.links.map((link, index) => (
                                        <Link
                                            key={index}
                                            href={link.url || '#'}
                                            className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                                                link.active
                                                    ? 'bg-gray-900 text-white shadow-sm'
                                                    : 'text-gray-500 bg-white border border-gray-100 hover:bg-gray-50 hover:border-gray-200'
                                            } ${!link.url ? 'opacity-50 cursor-not-allowed' : ''}`}
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                        />
                                    ))}
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-gray-400 mx-auto mb-4 border border-gray-100 shadow-sm">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>
                            </div>
                            <h3 className="text-sm font-semibold text-gray-900">No posts yet</h3>
                            <p className="mt-1 text-sm text-gray-500 max-w-sm mx-auto">Be the first to share your thoughts with the community. Get started by creating a new post.</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
