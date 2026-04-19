<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Services\PostService;

class PostController extends Controller
{
    public function __construct(
        protected PostService $postService
    ) {}

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = $this->postService->getAllPosts();
        
        return inertia('Home', [
            'posts' => $posts
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePostRequest $request)
    {
        $this->postService->createPost($request->validated());

        return redirect()->back()->with('success', 'Post created successfully.');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePostRequest $request, Post $post)
    {
        $this->postService->updatePost($post, $request->validated());

        return redirect()->back()->with('success', 'Post updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        $this->postService->deletePost($post);

        return redirect()->back()->with('success', 'Post deleted successfully.');
    }
}
