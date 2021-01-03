<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
//auth-login routes
Route::post('/register', 'AuthController@register');
Route::get('/image', 'AuthController@registerImage');
Route::post('/login', 'AuthController@login');
Route::post('/logout', 'AuthController@logout');
//Post routes
Route::post('/post/create', 'PostController@Create');
Route::get('/post/get', 'PostController@index');
Route::get('/post/subjects', 'PostController@getSubjects');
Route::post('/post/like', 'PostController@like');
Route::post('/post/likes/count', 'PostController@LikeCount');
//logs roues
Route::get('/logs/get/all', 'LogsController@index');


