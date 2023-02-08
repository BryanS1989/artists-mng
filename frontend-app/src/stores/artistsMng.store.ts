import { ref, computed } from 'vue';
import type { Ref } from 'vue';

import { defineStore } from 'pinia';

import { BackendApi } from '@/services/axios.service'

import type User from '@/interfaces/users/user.interface';

/*
    In Setup Stores:

        - ref()s become state properties
        - computed()s become getters
        - function()s become actions
*/
export const artistsMngStore = defineStore('artistsMng', () => {
    const authUser: Ref<User | null> = ref(null as User | null);

    const isAuthenticated = computed(() =>
        authUser.value !== null ? 'name' in authUser.value : false
    );

    async function login(user: User) {
        console.log('[artistsMngStore] [actions] [login] user: ', user);
        //authUser.value = user;

        // Call axios Login
        BackendApi.login(user);

        // Redirect to /
    }

    return {
        isAuthenticated,
        login,
    };
});
