<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\CountryCreateRequest;
use App\Http\Requests\CountryEditRequest;
use App\Models\Country;
use Illuminate\Http\Request;

class CountryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $countries = Country::all();


        if($request->has('search'))
        {
            $countries = Country::where('name', 'like', "%{$request->search}%")->orWhere('country_code', 'like', "%{$request->search}%")->get();
        }  // request('search')

       // $request->has('search') ?  : '' ;

        return view('countries.index', compact('countries'));

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view('countries.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CountryCreateRequest $request)
    {
        //
        Country::create([
            'country_code' => $request->country_code,
            'name' => $request->name

        ]);

        return redirect()->route('countries.index')->with('message', 'Country Created Successfully');


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
        $country = Country::find($id);

        return view('countries.edit', compact('country'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(CountryEditRequest $request, $id)
    {
        //
        $country = Country::find($id);

        $country->update([

            'country_code' => $request->country_code,
            'name' => $request->name

        ]);

        return redirect()->route('countries.index')->with('message', 'Country Updated Successfully');
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
        $country = Country::find($id);

        $country->delete();

        return redirect()->route('countries.index')->with('message', 'Country Deleted Successfully');



    }
}
