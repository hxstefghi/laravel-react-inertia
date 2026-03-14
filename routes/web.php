<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;


Route::get('/', [PostController::class, 'index']);

Route::get('/about', function () {
    return inertia('About');
});

Route::resource('/posts', PostController::class)->except('index');

// Route::get('/', function () {
//     sleep(2);
//     return inertia('Home', ['name' => 'Christian']);
// });
