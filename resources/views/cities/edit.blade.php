@extends('layouts.app')

@section('content_form')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Changing City') }}</div>

                <div class="card-body">
                    <form method="post" action="{{ route('cities.update', $city->id) }}">
                        @csrf
                        @method('put')

                        <div class="form-group row">
                            <label for="Country" class="col-md-4 col-form-label text-md-right">{{ __('Country') }}</label>

                            <div class="col-md-6">
                             <select name="state_id" id="state_id" class="form-control">

                                <option Selected>Choose a State</option>

                                @foreach($states as $state)

                                <option value="{{ $state->id }}" {{ $state->id == $city->state_id ? 'selected' : '' }}> {{ $state->name }} </option>

                                @endforeach
                             </select>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Name') }}</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name', $city->name) }}" required autocomplete="name" autofocus>

                                @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>



                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Register') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div class="m-2 p-2">
                <form action="{{ route('cities.destroy', $city->id) }}" method="post">
                    @csrf
                    @method('delete')
                    <button class="btn btn-danger">Delete {{ $city->name }}</button>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection
