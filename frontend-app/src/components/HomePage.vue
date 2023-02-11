<script setup lang="ts">
import { onBeforeMount, computed } from 'vue';
import { artistsMngStore } from '@/stores/artistsMng.store';

const userName = computed(() => {
    const store = artistsMngStore();
    return store.authUser.name;
});

onBeforeMount(() => {
    console.log('[HomePage] [onBeforeMount]');
});
</script>

<template>
    <h1>Welcome {{ userName }}</h1>
</template>
