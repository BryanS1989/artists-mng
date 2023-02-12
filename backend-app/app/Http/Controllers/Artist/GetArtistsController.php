<?php

namespace App\Http\Controllers\Artist;

use App\Http\Controllers\Controller;
use App\Services\ArtistService;

class GetArtistsController extends Controller
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
     * @return \Illuminate\Http\Response
     */
    public function __invoke()
    {
        $result = ['status' => 200];

        $result['data'] = $this->artistService->getAllArtists();

        return response()->json($result, $result['status']);
    }
}
