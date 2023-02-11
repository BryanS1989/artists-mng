import { ref, computed } from 'vue';
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

    const isAuthenticated = computed(() => 'name' in authUser.value);

    function login(user: User) {
        console.log('[artistsMngStore] [actions] [login] user: ', user);

        // Call axios Login
        BackendApi.login(user)
            .then((response) => {
                BackendApi.getUser().then((response) => {
                    authUser.value = response.data;
                    localStorage.setItem(
                        'user',
                        JSON.stringify(authUser.value)
                    );
                    router.push({ name: 'home' });
                });
            })
            .catch((error) => {
                console.log(error);
                router.push({ name: 'login' });
            });
    }

    function logout() {
        console.log('[artistsMngStore] [actions] [logout]');

        // Call axios Logout
        BackendApi.logout()
            .then((response) => {
                localStorage.removeItem('user');
                authUser.value = {} as User;
                router.push({ name: 'login' });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function getUserFromLocalStorage() {
        const userLocalStorageInfo = localStorage.getItem('user');

        if (userLocalStorageInfo) {
            authUser.value = JSON.parse(userLocalStorageInfo);
        }
    }

    return {
        authUser,
        isAuthenticated,
        login,
        logout,
        getUserFromLocalStorage,
    };
});
