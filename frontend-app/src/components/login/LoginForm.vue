<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';

import { onBeforeMount } from 'vue';

import type User from '@/interfaces/users/user.interface';

const emit = defineEmits<{
    (e: 'attemptLogin', user: User): void;
}>();

let user: Ref<User> = ref({} as User);

const submitForm = (): void => {
    console.log(
        '[LoginForm] [submitForm] email: ',
        user.value.email,
        ' password: ',
        user.value.password
    );
    emit('attemptLogin', user.value);
};

onBeforeMount(() => {
    console.log('[LoginView] [onBeforeMount]');
});
</script>

<template>
    <form @submit.prevent="submitForm">
        <input
            type="email"
            v-model.trim="user.email"
            placeholder="Enter your email"
        />
        <input
            type="password"
            v-model.trim="user.password"
            placeholder="******"
        />

        <button type="submit">LOGIN</button>
    </form>
</template>

<style></style>
