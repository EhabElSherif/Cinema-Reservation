<?php

use Illuminate\Http\Request;

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

Route::resource('/movies','Movie');
Route::resource('/genres','Genre');
Route::resource('/screens','Screen');
Route::post('/movies/{id}/screening','Movie@screening');
Route::get('/reservation/{screening_id}','Movie@get_reservations');
Route::post('/reserve','Ticket@store');