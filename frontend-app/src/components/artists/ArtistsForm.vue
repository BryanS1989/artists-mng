<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';

// import type { Artist } from '@/interfaces/artists/artist.interface';
import { ArtistDefault } from '@/interfaces/artists/artist.interface';
import { artistsMngStore } from '@/stores/artistsMng.store';
import { Countries } from '@/enums/countries.enum';

let artist = ref(ArtistDefault);
let countries = ref(Countries);

onBeforeMount(() => {
    console.log('[ArtistForm] [onBeforeMount()]');
});

function submitArtis(): void {
    console.log('[ArtistForm] [submitArtis()]');

    artistsMngStore().postArtist(artist.value);
}

function fileChange(event): void {
    console.log('[ArtistForm] [fileChange()] event: ', event);
}
</script>

<template>
    <h3>Artist Form:</h3>

    <form @submit.prevent="submitArtis">
        <fieldset>
            <input
                type="file"
                @change="fileChange"
            />

            <label>
                <p>Code:</p>
                <input
                    type="text"
                    v-model.trim="artist.code"
                />
            </label>

            <label>
                <p>Name:</p>
                <input
                    type="text"
                    v-model.trim="artist.name"
                />
            </label>

            <label>
                <p>Surname:</p>
                <input
                    type="text"
                    v-model.trim="artist.surname"
                />
            </label>

            <label>
                <p>Country:</p>
                <select
                    v-model="artist.country"
                    placeholder="Choose a country"
                >
                    <option
                        v-for="country in Object.keys(countries)"
                        :key="country"
                        :value="countries[country]"
                    >
                        {{ country }}
                    </option>
                </select>
            </label>
        </fieldset>

        <fieldset>
            <label>
                <p>Email:</p>
                <input
                    type="email"
                    v-model="artist.email"
                />
            </label>
            <label>
                <p>Phone:</p>
                <input
                    type="text"
                    v-model="artist.prefix"
                />
                <input
                    type="tel"
                    v-model="artist.phone"
                />
            </label>
        </fieldset>

        <button type="submit">Add artist</button>
    </form>
</template>

<style scoped></style>
