<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateStateRequest;
use App\Http\Requests\EditStateRequest;
use App\Models\Country;
use App\Models\State;
use Illuminate\Http\Request;

class StateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //

    $states = State::all();

    $request->has('search') ? $states = State::where('name', 'like', "%{$request->search}%")->get() : '' ;

    return view('states.index', compact('states'));


    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $countries = Country::all();

        return view('states.create', compact('countries'));

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateStateRequest $request)
    {
        //
        State::create([

            'country_id' => $request->country_id,
            'name' => $request->name

        ]);

        return redirect()->route('states.index')->with('message', 'State created Succesfully');

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
        $countries = Country::all();

        $state = State::find($id);

        return view('states.edit', compact('countries', 'state'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(EditStateRequest $request, $id)
    {
        //
        $state = State::find($id);

        $state->update([

            'name' => $request->name,

            'country_id' => $request->country_id

        ]);

        return redirect()->route('states.index')->with('message', 'State Updated Succesfully');



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
        $state = State::find($id);

        $state->delete();

        return redirect()->route('states.index')->with('message', 'State Dropped Succesfully');



    }
}
