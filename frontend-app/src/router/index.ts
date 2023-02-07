import { createRouter, createWebHistory } from 'vue-router';

import { artistsMngStore } from "@/stores/artistsMng";

import HomeView from '../views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/LoginView.vue'),
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: HomeView
        }
    ],
});

router.beforeEach((to) => {

    const store = artistsMngStore();

    // Redirect to login if not authenticated
    const publicPages = ['/login']; // Public pages that not need to be logged

    const authRequired = !publicPages.includes(to.path); // Check if is an auth required route

    const isAuthenticted = store.isAuthenticated();

    if (authRequired && !isAuthenticted) {
        return '/login';
    }
});

export default router;
