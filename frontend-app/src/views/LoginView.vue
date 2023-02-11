<script setup lang="ts">
import { onBeforeMount } from 'vue';

import { artistsMngStore } from '@/stores/artistsMng.store';

import LoginForm from '@/components/login/LoginForm.vue';

import type User from '@/interfaces/users/user.interface';

const login = async (user: User) => {
    console.log('[LoginView] [login] user: ', user);
    const store = artistsMngStore();

    await store.login(user);
};

onBeforeMount(() => {
    console.log('[LoginView] [onBeforeMount]');
});
</script>

<template>
    <LoginForm @attempt-login="login" />
</template>

<style></style>
