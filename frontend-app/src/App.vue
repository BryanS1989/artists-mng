<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { RouterView } from 'vue-router';
import HeaderMain from '@/components/shared/HeaderMain.vue';
import { artistsMngStore } from '@/stores/artistsMng.store';

onBeforeMount(() => {
    console.log('[APP] [onBeforeMount]');
    artistsMngStore().getUserFromSessionStorage();
});
</script>

<template>
    <HeaderMain />

    <RouterView />
</template>

<style scoped></style>
