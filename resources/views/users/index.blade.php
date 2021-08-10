@extends('layouts.main')

@section('content')

<div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h4 class="h3 mb-0 text-gray-800">Users Section</h4></div>

    @if(session('message'))

        <div class="alert alert-success">{{ session('message') }}</div>

    @endif

    @if(session('messageCancel'))

    <div class="alert alert-danger">{{ session('messageCancel') }}</div>

    @endif

    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between">
                        <form action="{{ route('users.index') }}" method="GET"
                        class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        @csrf
                        @method('get')
                        <div class="input-group">
                            <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..."
                                aria-label="Search" name="search" aria-describedby="basic-addon2">
                            <div class="input-group-append">
                                <button class="btn btn-outline-success" type="submit">
                                    <i class="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                    <a href="{{ route('users.create') }}" class="float-right btn btn-primary"><i class="fa fa-plus"></i> Create</a>
                </div>
            </div>
                <div class="card-body">
                    <table class="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>username</th>
                                <th>Email</th>
                                <th>Manage</th>

                            </tr>
                        </thead>

                        <tbody>
                            @if($users->count())
                                @foreach($users as $user)
                                <tr>
                                    <td>{{ $user->id }}</td>
                                    <td>{{ $user->username }}</td>
                                    <td>{{ $user->email }}</td>
                                    <td class="text-align-center">
                                        <a href="{{ route('users.edit', $user->id) }}" class="btn btn-success"> <i class="fa fa-edit"></i> Edit</a>

                                    </td>
                                </tr>
                                @endforeach
                            @else
                            <p>No Datas for the moment</p>

                            @endif

                        </tbody>
                    </table>
                </div>

                <div class="card-footer">
                    Something here
                </div>
            </div>
        </div>
    </div>

    @endsection
