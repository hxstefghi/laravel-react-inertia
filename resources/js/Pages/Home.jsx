import { useForm, usePage } from "@inertiajs/react";

export default function Home({ posts }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        body: "",
    });

    const { flash } = usePage().props;

    function submit(e) {
        e.preventDefault();
        post("/posts", {
            onSuccess: () => reset("body"),
        });
    }

    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-10 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                    Community Feed
                </h1>
                <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                    Share your thoughts or see what others are saying.
                </p>
            </div>

            {flash?.success && (
                <div className="mb-6 rounded-md bg-green-50 p-4 shadow-sm border border-green-200">
                    <div className="flex">
                        <div className="ml-3">
                            <p className="text-sm font-medium text-green-800">{flash.success}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Create Post Form */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-8">
                <div className="px-6 py-5 border-b border-slate-100 bg-slate-50/50">
                    <h2 className="text-lg font-semibold text-slate-800">Create a New Post</h2>
                </div>
                <form onSubmit={submit} className="p-6">
                    <div>
                        <label htmlFor="body" className="sr-only">Post Content</label>
                        <textarea
                            id="body"
                            rows={4}
                            value={data.body}
                            onChange={(e) => setData("body", e.target.value)}
                            className={`block w-full rounded-lg border-0 py-3 px-4 text-slate-900 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 resize-none transition-colors duration-200 ease-in-out ${
                                errors.body 
                                    ? 'ring-red-300 focus:ring-red-500 bg-red-50/50' 
                                    : 'ring-slate-200 focus:ring-indigo-600 bg-slate-50/50 hover:bg-white focus:bg-white'
                            }`}
                            placeholder="What's on your mind? Write your post here..."
                        />
                        {errors.body && (
                            <p className="mt-2 text-sm text-red-600 flex items-center">
                                {errors.body}
                            </p>
                        )}
                    </div>
                    <div className="mt-4 flex justify-end">
                        <button
                            type="submit"
                            disabled={processing || !data.body.trim()}
                            className="inline-flex items-center rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                        >
                            {processing ? 'Posting...' : 'Publish Post'}
                        </button>
                    </div>
                </form>
            </div>

            {/* Posts List */}
            <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-800 flex items-center">
                    Recent Posts
                </h3>
                
                {posts && posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-200 group">
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold border border-indigo-200">
                                        A
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-slate-900">Anonymous User</p>
                                        <p className="text-xs text-slate-500">
                                            {new Date(post.created_at).toLocaleDateString(undefined, {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}
                                        </p>
                                    </div>
                                </div>
                                <div className="prose prose-slate max-w-none text-slate-700">
                                    <p className="whitespace-pre-wrap">{post.body}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-16 bg-slate-50 rounded-xl border border-dashed border-slate-300">
                        <h3 className="mt-4 text-sm font-semibold text-slate-900">No posts yet</h3>
                        <p className="mt-1 text-sm text-slate-500">Get started by creating a new post above.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
