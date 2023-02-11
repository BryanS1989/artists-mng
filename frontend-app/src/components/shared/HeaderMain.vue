<script setup lang="ts">
import Navbar from '@/components/shared/NavBar.vue';
import { artistsMngStore } from '@/stores/artistsMng.store';
</script>

<template>
    <header>
        <h1>Artists Management</h1>
        <Navbar v-if="artistsMngStore().isAuthenticated" />
    </header>
    <hr />
</template>

<style scoped>
header {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
}
h1 {
    margin-right: auto;
}
</style>
