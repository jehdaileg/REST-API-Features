<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateDepartementRequest;
use App\Http\Requests\EditDepartementRequest;
use App\Models\Departement;
use GuzzleHttp\Promise\Create;
use Illuminate\Http\Request;

class DepartementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $dep = Departement::all();

        $request->has('search') ? $dep = Departement::where('name', 'like', "%{$request->search}%")->get() : '' ;

        return view('departements.index', compact('dep'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //

        return view('departements.create');

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateDepartementRequest $request)
    {
        //
        Departement::create([

            'name' => $request->name
        ]);

        return redirect()->route('departements.index')->with('message', 'Departement created Succesfully');

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
        $dep = Departement::find($id);

        return view('departements.edit', compact('dep'));

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(EditDepartementRequest $request, $id)
    {
        //
        $dep = Departement::find($id);

        $dep->update([

            'name' => $request->name

        ]);

        return redirect()->route('departements.index')->with('message', 'Departement Updated Succesfully');


    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //

        $dep = Departement::find($id);

        $dep->delete();

        return redirect()->route('departements.index')->with('message', 'Departement Dropped Succesfully');



    }
}
