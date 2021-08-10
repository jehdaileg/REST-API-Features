<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Backend\CityController;
use App\Http\Controllers\Backend\TestController;
use App\Http\Controllers\Backend\UserController;
use App\Http\Controllers\Backend\StateController;
use App\Http\Controllers\Backend\CountryController;
use App\Http\Controllers\Backend\DepartementController;
use App\Http\Controllers\Backend\ChangePasswordController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');



Route::get('/dashboard', function(){

    return view('dashboard');

})->name('dashboard');

/* User management with resource */

Route::resource('users', UserController::class);

/*-- Change password fot the user */

Route::post('users/{user}/change.password', [ChangePasswordController::class, 'change_password'])->name('users.change.password');

//***************************** */

/* Country  */

Route::resource('countries', CountryController::class);

//***************************** */

/* State  */

Route::resource('states', StateController::class);

/* City */

Route::resource('cities', CityController::class);


/* Departement */

Route::resource('departements', DepartementController::class);


/* Employees */













