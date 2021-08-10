@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header"><div class="d-flex justify-content-between"><h5>{{ __('Changing Country') }}</h5>
                    <p><a href="{{ route('departements.index') }}">Back</a></p>

                </div></div>

                <div class="card-body">
                    <form method="post" action="{{ route('departements.update', $dep->id) }}">
                        @csrf
                        @method('put')


                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Name') }}</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name', $dep->name) }}" required autocomplete="name" autofocus>

                                @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>


                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-success">
                                    {{ __('Save') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="m-2 p-2">
                <form action="{{ route('departements.destroy', $dep->id) }}" method="post">
                    @csrf
                    @method('delete')
                    <button class="btn btn-danger">Delete {{ $dep->name }}</button>
                </form>
            </div>
        </div>



@endsection
