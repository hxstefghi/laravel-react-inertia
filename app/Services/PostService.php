<?php

namespace App\Services;

use App\Models\Post;
use Illuminate\Database\Eloquent\Collection;

class PostService
{
    /**
     * Get all posts, ordered by latest.
     */
    public function getAllPosts()
    {
        return Post::latest()->paginate(5);
    }

    /**
     * Create a new post.
     */
    public function createPost(array $data): Post
    {
        return Post::create($data);
    }

    /**
     * Update an existing post.
     */
    public function updatePost(Post $post, array $data): bool
    {
        return $post->update($data);
    }

    /**
     * Delete a post.
     */
    public function deletePost(Post $post): bool|null
    {
        return $post->delete();
    }
}
