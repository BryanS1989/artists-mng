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

<style scoped>
nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;

        padding: 1rem 0;
        margin-top: 1rem;
    }
}
</style>
