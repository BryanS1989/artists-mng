<script setup lang="ts">
import { artistsMngStore } from '@/stores/artistsMng.store';
import { onBeforeMount } from 'vue';

onBeforeMount(() => {
    console.log('[ArtistsView] [onBeforeMount]');
    artistsMngStore().getArtists();
});
</script>

<template>
    <main></main>
</template>
