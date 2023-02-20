<?php

namespace App\Http\Requests;

use App\Enums\Countries;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;
use Illuminate\Validation\Rules\File;

class ArtistRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        // TODO Check if user is allowed to create artists
        return true;
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
            'picture' => ['bail', 'nullable',  File::image()],
            'code' => 'bail|required|unique:artists,code|max:50',
            'name' => 'bail|required|max:50',
            'surname' => 'bail|nullable|max:100',
            'country' => ['bail', 'required', new Enum(Countries::class)],
            'email' => 'bail|nullable|email|max:100',
            'prefix' => 'bail|nullable|string|max:5',
            'phone' => 'bail|required|string|max:20',
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
