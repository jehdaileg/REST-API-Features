<?php

namespace App\Http\Controllers\Backend;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\UserEditRequest;
use App\Http\Requests\UserStoreRequest;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $users = User::all();

        if($request->has('search'))
        {
            $users = User::where('name', 'like', "%{$request->search}%")->orWhere('email', 'like', "%{$request->search}%")->get();
        }

        return view('users.index', compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //

        return view('users.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserStoreRequest $request)
    {
        //
        User::create([

            'name'=> $request->name,
            'lastname'=> $request->lastname,
            'firstname'=> $request->firstname,
            'email'=> $request->email,
            'username' => $request->username,
            'password'=> Hash::make($request->password)

        ]);

        return redirect()->route('users.index')->with('message', 'User Created successfully');
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
        $user = User::find($id);

        return view('users.edit', compact('user'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UserEditRequest $request, $id)
    {
        //
        $user = User::find($id);

        $user->update([

            'name'=> $request->name,
            'lastname'=> $request->lastname,
            'firstname'=> $request->firstname,
            'email'=> $request->email,
            'username' => $request->username,

        ]);

        return redirect()->route('users.index')->with('message', 'User Updated successfully');

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
        $user = User::find($id);

        if(Auth::user()->id == $user->id)
        {
            return redirect()->route('users.index')->with('messageCancel', 'You are attempting to drop yourself, Canceling !');

        }

        $user->delete();

        return redirect()->route('users.index')->with('message', 'User dropped successfully');


    }
}
