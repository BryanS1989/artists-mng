<script setup lang="ts">
import { artistsMngStore } from '@/stores/artistsMng.store';
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink
            to="/"
            @click.prevent="artistsMngStore().logout"
        >
            Logout
        </RouterLink>
    </nav>
</template>

<style scoped>
nav {
    font-size: 12px;
    text-align: center;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    border-left: 1px solid var(--color-border);
    padding-left: 1rem;
    padding-right: 1rem;
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;
    }
}
</style>
