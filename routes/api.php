<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\EmployeeController;
use App\Http\Controllers\Api\EmployeeDataController;

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

//API  fror getting datas from database in order to register a new Employee

Route::get('/employees/get-countries', [EmployeeDataController::class, 'countries']);
Route::get('/employees/{country}/get-states', [EmployeeDataController::class, 'states']);
Route::get('/employees/{state}/get-cities', [EmployeeDataController::class, 'cities']);
Route::get('/employees/get-departments', [EmployeeDataController::class, 'departments']);

//Manage employee

/*Route::get('/employees', [EmployeeController::class, 'index']);

Route::post('/employees', [EmployeeController::class, 'store']);

Route::delete('/employees/{employee}', [EmployeeController::class, 'destroy']); */

Route::apiResource('/employees', EmployeeController::class) ;








