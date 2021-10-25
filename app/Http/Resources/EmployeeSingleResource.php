<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class EmployeeSingleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [

            'id' => $this->id,
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'middle_name' => $this->middle_name,
            'address' => $this->address,
            'birthday' => $this->birthday,
            'date_hired' => $this->date_hired,
            'departement_id' => $this->departement_id,
            'country_id' => $this->country_id,
            'city_id' => $this->city_id,
            'state_id' => $this->state_id,
            'zip_code' => $this->zip_code


        ];

    }
}
