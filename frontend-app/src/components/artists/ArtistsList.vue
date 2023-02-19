<script setup lang="ts">
import { artistsMngStore } from '@/stores/artistsMng.store';
import { ref, onBeforeMount } from 'vue';

let artists = ref();

onBeforeMount(() => {
    console.log('[ArtistsList] [onBeforeMount]');
    artistsMngStore().getArtists();
    artists.value = artistsMngStore().artistsList;
});
</script>

<template>
    <table v-if="artists.count !== 0">
        <thead>
            <tr>
                <th>PICTURE</th>
                <th>CODE</th>
                <th>NAME</th>
                <th>CONTRY</th>
                <th>ACTIONS</th>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="(artist, index) in artists.artists"
                :key="index"
            >
                <td>
                    {{ artist.picture }}
                </td>
                <td>
                    {{ artist.code }}
                </td>
                <td>
                    {{ artist.name + ' ' + artist.surname }}
                </td>
                <td>
                    {{ artist.country }}
                </td>
                <td></td>
            </tr>
        </tbody>
    </table>
    <section v-else>
        <h3>THERE IS NO ARTISTS REGISTERED</h3>
        <RouterLink to="artists/create">
            CREATE YOUR FIRST ARTISTS!!!
        </RouterLink>
    </section>
</template>
