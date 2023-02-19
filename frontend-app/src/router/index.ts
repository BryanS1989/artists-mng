import { createRouter, createWebHistory } from 'vue-router';

import { artistsMngStore } from '@/stores/artistsMng.store';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue'),
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/LoginView.vue'),
        },
        {
            path: '/logout',
            name: 'logout',
            component: () => import('../views/LoginView.vue'),
        },
        {
            path: '/artists',
            name: 'artists',
            component: () => import('../views/ArtistsView.vue'),
            children: [
                {
                    path: '',
                    name: 'artistsList',
                    component: () =>
                        import('../components/artists/ArtistsList.vue'),
                },
                {
                    path: ':action(create)',
                    name: 'artistsCreate',
                    component: () =>
                        import('../components/artists/ArtistsForm.vue'),
                },
                {
                    path: ':id(\\d+)',
                    sensitive: true,
                    name: 'artistsProfile',
                    component: () =>
                        import('../components/artists/ArtistsProfile.vue'),
                },
                {
                    path: ':action(edit|detail)/:id(\\d+)',
                    name: 'artistsDetailOrEdit',
                    component: () =>
                        import('../components/artists/ArtistsForm.vue'),
                },
                {
                    path: ':pathMatch(.*)*',
                    name: 'NotFound',
                    component: () => import('../views/HomeView.vue'),
                },
            ],
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('../views/HomeView.vue'),
        },
    ],
});

router.beforeEach((to, from) => {
    const store = artistsMngStore();

    console.log('[ROUTER] [beforeEach] from: ', from, ' to: ', to);

    // Redirect to login if not authenticated
    const publicPages = ['/login']; // Public pages that not need to be logged

    const authRequired = !publicPages.includes(to.path); // Check if is an auth required route

    if (authRequired && !store.isAuthenticated) {
        return '/login';
    }
});

export default router;
