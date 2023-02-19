<script setup lang="ts">
import { onBeforeMount } from 'vue';

onBeforeMount(() => {
    console.log('[ArtistsView] [onBeforeMount]');
});
</script>

<template>
    <h2>Artists</h2>
    <router-view></router-view>
</template>
