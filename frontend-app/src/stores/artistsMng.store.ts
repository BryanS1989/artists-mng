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
            .then(() => {
                BackendApi.getUser().then((response) => {
                    authUser.value = response.data;
                    sessionStorage.setItem(
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
            .then(() => {
                sessionStorage.removeItem('user');
                authUser.value = {} as User;
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function getUserFromSessionStorage() {
        const userSessionStorageInfo = sessionStorage.getItem('user');

        if (userSessionStorageInfo) {
            authUser.value = JSON.parse(userSessionStorageInfo);
        }
    }

    function getArtists() {
        console.log('[artistsMngStore] [actions] [getArtists]');

        // Call axios Logout
        BackendApi.getArtists()
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return {
        authUser,
        isAuthenticated,
        login,
        logout,
        getUserFromSessionStorage,
        getArtists,
    };
});
