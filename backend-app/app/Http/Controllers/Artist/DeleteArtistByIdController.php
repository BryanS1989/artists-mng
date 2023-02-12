<?php

namespace App\Http\Controllers\Artist;

use App\Http\Controllers\Controller;
use App\Models\Artist;
use App\Services\ArtistService;
use Illuminate\Http\Request;

class DeleteArtistByIdController extends Controller
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
     * @param  App\Models\Artist  $artist
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Artist $artist)
    {
        //
    }
}
