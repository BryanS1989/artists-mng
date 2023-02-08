<script setup lang="ts">
import { onBeforeMount } from 'vue';

import HomePage from '../components/HomePage.vue';

onBeforeMount(() => {
    console.log('[HomeView] [onBeforeMount]');
});
</script>

<template>
    <main>
        <HomePage />
    </main>
</template>
