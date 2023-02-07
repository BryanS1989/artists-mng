<script setup lang="ts">
import { onBeforeMount } from "vue";

onBeforeMount(() => {
    console.log('[LoginView] [onBeforeMount]');
});
</script>

<template>
    <form>
        <input type="email">
        <input type="password">

        <button type="submit">LOGIN</button>
    </form>
</template>

<style></style>
