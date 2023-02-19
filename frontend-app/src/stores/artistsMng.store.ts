import { ref, computed } from 'vue';
import type { Ref, ComputedRef } from 'vue';

import { defineStore } from 'pinia';

import { BackendApi } from '@/services/axios.service';

import router from '@/router/index';

import type User from '@/interfaces/users/user.interface';
import type { ArtistList } from '@/interfaces/artists/artist.interface';

/*
    In Setup Stores:

        - ref()s become state properties
        - computed()s become getters
        - function()s become actions
*/
export const artistsMngStore = defineStore('artistsMng', () => {
    const authUser: Ref<User> = ref({} as User);
    const artists: Ref<ArtistList> = ref({} as ArtistList);

    const isAuthenticated: ComputedRef<Boolean> = computed(
        () => 'name' in authUser.value
    );
    const artistsList: ComputedRef<ArtistList> = computed(() => artists.value);

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
                artists.value.artists = response.data.data;
                artists.value.count = response.data.data.length;
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return {
        authUser,
        isAuthenticated,
        artistsList,
        login,
        logout,
        getUserFromSessionStorage,
        getArtists,
    };
});
