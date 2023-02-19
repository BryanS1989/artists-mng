<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';

import type { Artist } from '@/interfaces/artists/artist.interface';
import { ArtistDefault } from '@/interfaces/artists/artist.interface';

let artist = ref(ArtistDefault);

onBeforeMount(() => {
    console.log('[ArtistForm] [onBeforeMount()]');
});

function submitArtis(): void {
    console.log('[ArtistForm] [submitArtis()]');
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
                <select v-model="artist.country">
                    <option :value="null">Choose a country</option>
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
