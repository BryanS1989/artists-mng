import { ref } from 'vue';
import { defineStore } from 'pinia';

export const artistsMngStore = defineStore('artistsMng', () => {
    const authUser = ref({ user: undefined });

    function isAuthenticated() {
        return authUser.value.user !== undefined;
    }

    return {
        authUser,
        isAuthenticated
    };
});
