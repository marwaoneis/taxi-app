<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\MessageController;

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

Route::get('get-drivers',[UserController::class,'getAcceptedDrivers']);
Route::get('get-pending-drivers',[UserController::class,'getPendingDrivers']);
Route::get('get-pending-drivers-count',[UserController::class,'getPendingDriversCount']);
Route::post('accept-pending-driver',[UserController::class,'acceptPendingDriver']);
Route::post('reject-pending-driver',[UserController::class,'rejectPendingDriver']);
Route::post('remove-accepted-driver',[UserController::class,'removeAcceptedDriver']);
Route::get('get-all-passengers',[UserController::class,'getAllPassengers']);
Route::post('update-passenger-picture',[UserController::class,'updatePassengerPicture']);
Route::post('update-driver-picture',[UserController::class,'updateDriverPicture']);
Route::get('get-user-info',[UserController::class,'getUserInfo']);
Route::post('send-message',[MessageController::class,'sendMessageToAnotherUser']);
Route::get('get-messages-between-two-users',[MessageController::class,'getMessagesBetweenTwoUsers']);//admin panel should use this || and conversation between two users should use this
Route::post('get-messages-between-user-and-admin',[MessageController::class,'getMessagesBetweenUserAndAdmin']);//any user contacting admin should use this

