<?php

namespace App\Http\Controllers\Api;

use App\Models\State;
use App\Models\Country;
use App\Models\Departement;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class EmployeeDataController extends Controller
{
    //
    public function countries()
    {
        $Countries = Country::all();

        return response()->json($Countries);
    }

    public function states(Country $country)
    {
        return response()->json($country->states);
    }

    public function cities(State $state)
    {
        return response()->json($state->cities);
    }

    public function departments()
    {
        $Departments = Departement::all();

        return response()->json($Departments);
    }
}
