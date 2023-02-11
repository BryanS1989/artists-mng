import { ref /*, computed */ } from 'vue';
import type { Ref } from 'vue';

import { defineStore } from 'pinia';

import { BackendApi } from '@/services/axios.service';

import router from '@/router/index';

import type User from '@/interfaces/users/user.interface';

/*
    In Setup Stores:

        - ref()s become state properties
        - computed()s become getters
        - function()s become actions
*/
export const artistsMngStore = defineStore('artistsMng', () => {
    const authUser: Ref<User> = ref({} as User);

    const isAuthenticated: Ref<Boolean> = ref(false);
    // const isAuthenticated = computed(() => 'name' in authUser.value);

    function login(user: User) {
        console.log('[artistsMngStore] [actions] [login] user: ', user);

        // Call axios Login
        BackendApi.login(user)
            .then((response) => {
                isAuthenticated.value = true;

                BackendApi.getUser().then((response) => {
                    authUser.value = response.data;
                    router.push({ name: 'home' });
                });
            })
            .catch((error) => {
                console.log(error);
                isAuthenticated.value = false;

                router.push({ name: '/login' });
            });
    }

    return {
        authUser,
        isAuthenticated,
        login,
    };
});
