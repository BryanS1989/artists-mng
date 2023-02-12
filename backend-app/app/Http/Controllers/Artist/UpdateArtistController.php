<?php

namespace App\Http\Controllers\Artist;

use App\Http\Controllers\Controller;
use App\Http\Requests\ArtistRequest;
use App\Models\Artist;
use App\Services\ArtistService;

class UpdateArtistController extends Controller
{
    protected ArtistService $artistService;

    /**
     * Constructor
     */
    public function __construct(ArtistService $artistService)
    {
        $this->artistService = $artistService;
    }

    /**
     * Handle the incoming request.
     *
     * @param  App\Http\Requests\ArtistRequest  $request
     * @param  App\Models\Artist  $artist
     * @return \Illuminate\Http\Response
     */
    public function __invoke(ArtistRequest $request, Artist $artist)
    {
        //
    }
}
