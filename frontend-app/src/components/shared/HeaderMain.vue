<script setup lang="ts">
import Navbar from '@/components/shared/NavBar.vue';
import { artistsMngStore } from '@/stores/artistsMng.store';
</script>

<template>
    <header>
        <h1>Artists Management</h1>
        <hr />
        <Navbar v-if="artistsMngStore().isAuthenticated" />
    </header>
</template>

<style scoped></style>
