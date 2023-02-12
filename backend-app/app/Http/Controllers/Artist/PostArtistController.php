<?php

namespace App\Http\Controllers\Artist;

use App\Http\Controllers\Controller;
use App\Http\Requests\ArtistRequest;
use App\Services\ArtistService;
use Illuminate\Http\Request;

class PostArtistController extends Controller
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
     *  @param App\Http\Requests\ArtistRequest $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(ArtistRequest $request)
    {
        //
    }
}
