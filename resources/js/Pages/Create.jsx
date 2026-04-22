import { useForm, usePage } from "@inertiajs/react";
import { Link } from "@inertiajs/react";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        body: "",
    });

    const { flash } = usePage().props;

    function submit(e) {
        e.preventDefault();
        post("/posts");
    }

    return (
        <>
            {/* Hero / Header Section */}
            <section className="max-w-6xl mx-auto px-6 pt-20 pb-8">
                <div className="max-w-6xl flex justify-center flex-col items-center text-center">
                    <span className="inline-block text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">
                        New Post
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-[1.15] mb-5">
                        Share your thoughts.
                    </h1>
                    <p className="text-base text-gray-500 leading-relaxed max-w-lg mb-8">
                        Write something meaningful. No pressure, no noise — just a clean space for your ideas.
                    </p>
                </div>
            </section>

            {/* Divider */}
            <div className="max-w-6xl mx-auto px-6">
                <div className="h-px bg-gray-100" />
            </div>

            {/* Form Section */}
            <section className="max-w-6xl mx-auto px-6">
                <div className="max-w-2xl mx-auto">
                    {flash?.success && (
                        <div className="mb-8 rounded-xl bg-green-50 p-4 border border-green-100">
                            <div className="flex">
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-green-800">{flash.success}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    <form onSubmit={submit} className="space-y-6">
                        <div>
                            <label htmlFor="body" className="sr-only">Post Content</label>
                            <textarea
                                id="body"
                                rows={8}
                                value={data.body}
                                onChange={(e) => setData("body", e.target.value)}
                                className={`block w-full rounded-2xl border py-5 px-6 text-gray-900 placeholder:text-gray-400 sm:text-base sm:leading-relaxed resize-none transition-colors duration-200 focus:ring-0 ${errors.body
                                    ? 'border-red-300 focus:border-red-500 bg-red-50/50'
                                    : 'border-gray-200 focus:border-gray-900 bg-gray-50/50 hover:bg-white focus:bg-white'
                                    }`}
                                placeholder="What's on your mind? Write your post here..."
                            />
                            {errors.body && (
                                <p className="mt-2 text-sm text-red-600 flex items-center">
                                    {errors.body}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col justify-end sm:flex-row items-center gap-3 pt-4">
                            <button
                                type="submit"
                                disabled={processing || !data.body.trim()}
                                className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white bg-gray-900 rounded-xl hover:bg-gray-700 transition-all duration-200 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {processing ? 'Publishing...' : 'Publish post'}
                            </button>
                            <Link
                                href="/"
                                className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 text-center"
                            >
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}