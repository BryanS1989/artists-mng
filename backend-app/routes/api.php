<?php

use App\Http\Controllers\Artist\DeleteArtistByIdController;
use App\Http\Controllers\Artist\GetArtistByIdController;
use App\Http\Controllers\Artist\GetArtistsController;
use App\Http\Controllers\Artist\PostArtistController;
use App\Http\Controllers\Artist\UpdateArtistController;
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

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::controller(ArtistController::class)->group(function () {
        Route::get('/artists', GetArtistsController::class);
        Route::get('/artist/{id}', GetArtistByIdController::class);
        Route::post('/artist', PostArtistController::class);
        Route::put('/artist/{id}', UpdateArtistController::class);
        Route::delete('/artist/{id}', DeleteArtistByIdController::class);
    });
});

