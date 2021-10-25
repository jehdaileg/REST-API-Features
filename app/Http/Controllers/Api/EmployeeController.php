<?php

namespace App\Http\Controllers\Api;

use App\Models\Employee;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\EmployeeResource;
use App\Http\Requests\EmployeeStoreRequest;
use App\Http\Resources\EmployeeSingleResource;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
            $employees = Employee::all();

            if($request->search)
            {
                $employees = Employee::where('first_name', "like", "%{$request->search}%")
                ->orWhere('last_name', "like", "%{$request->search}%")
                ->get();


            }
            else if($request->departement_id)
            {
                $employees = Employee::where('departement_id', "like", "%{$request->departement_id}%")->get();

            }

            return EmployeeResource::collection($employees);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(EmployeeStoreRequest $request)
    {
        //

        $employee = Employee::create($request->validated());

        //$message_success = 'Employee Created Successfully';

        return response()->json(['results' => $employee, 'message' => 'Employee created Successfully']);


        //return response()->json(['donnees' => $employee, 'message' => 'Yes']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Employee $employee)
    {
        //
       return new EmployeeSingleResource($employee);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(EmployeeStoreRequest $request, Employee $employee)
    {
        //
        $employee->update($request->validated());

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Employee $employee)
    {
        //
        $employee->delete();

        return response()->json('Employee Deleted Successfully');
    }
}
