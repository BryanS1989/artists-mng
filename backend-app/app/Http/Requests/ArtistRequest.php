<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ArtistRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {

        return array_merge(
            $this->getPOSTRequestRules(),
            $this->getPUTRequestRules(),
        );
    }

    /**
     * Return rules for POST method
     */
    private function getPOSTRequestRules() {
        if ($this->method() !== 'POST') return [];

        return [

        ];
    }

    /**
     * Return rules for PUT method
     */
    private function getPUTRequestRules() {
        if ($this->method() !== 'PUT') return [];

        return [

        ];
    }
}
