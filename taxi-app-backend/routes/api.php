<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\RideController;
use App\Models\Ride;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::controller(AuthController::class)->group(
    // [
    // 'middleware' => 'api',
    // 'prefix' => 'auth'
    // ]
    // ,
    function () {
        Route::post('login', 'login');
        Route::post('register', 'register');
        Route::post('logout', 'logout');
        Route::post('refresh', 'refresh');
    }
);


Route::get('/pending_rides', [RideController::class, 'pending_rides']);
Route::post('/accept_ride', [RideController::class, 'accept_ride']);

Route::post('/start_ride', [RideController::class, 'start_ride']);
Route::post('/end_ride', [RideController::class, 'end_ride']);

Route::post('/request_ride', [RideController::class, 'request_ride']);
Route::get('/get_ride/{id?}', [RideController::class, 'get_ride']);

