<?php

namespace App\Repositories;

use App\Models\Artist;
use Illuminate\Database\Eloquent\Collection;

class ArtistRepository
{
    /**
     * @return Collection
     */
    public function getArtists(): Collection
    {
        return Artist::all();
    }

    /**
     * @param int $artistId
     * @return Artist
     */
    public function getArtistById(int $artistId): Artist
    {
        return Artist::find($artistId);
    }

    /**
     * @param string $email
     * @return Artist
     */
    public function getArtistByEmail(string $email): Artist
    {
        return Artist::where('email', $email)->first();
    }

    /**
     * @param array $data
     * @return Artist
     */
    public function postArtist(array $data): Artist
    {
        $artist = new Artist();

        $artist->picture    = $data['picture'];
        $artist->code       = $data['code'];
        $artist->name       = $data['name'];
        $artist->surname    = $data['surname'];
        $artist->country    = $data['country'];
        $artist->email      = $data['email'];
        $artist->prefix     = $data['prefix'];
        $artist->phone      = $data['phone'];

        $artist->save();

        return $artist->fresh();
    }
}
