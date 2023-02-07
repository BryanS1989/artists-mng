<script setup lang="ts">
import { onBeforeMount } from "vue";

import LoginForm from "@/components/login/LoginForm.vue";

onBeforeMount(() => {
    console.log('[LoginView] [onBeforeMount]');
});
</script>

<template>
    <h1>Login</h1>
    <LoginForm/>
</template>

<style></style>
