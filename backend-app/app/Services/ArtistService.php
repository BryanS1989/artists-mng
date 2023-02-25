<?php

namespace App\Services;

use App\Models\Artist;
use App\Repositories\ArtistRepository;
use Illuminate\Database\Eloquent\Collection;

class ArtistService
{
    protected ArtistRepository $artistRepository;

    /**
     * Constructor
     */
    public function __construct(ArtistRepository $artistRepository)
    {
        $this->artistRepository = $artistRepository;
    }

    /**
     * @return Collection
     */
    public function getAllArtists(): Collection
    {
        return $this->artistRepository->getArtists();
    }

    /**
     *
     */
    public function postArtist($artist) : Artist {
        return $this->artistRepository->postArtist($artist);
    }

}
