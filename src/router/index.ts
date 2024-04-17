import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/modal',
            name: 'modal',
            component: () => import('../views/ModalView.vue')
        },
        {
            path: '/',
            name: 'homr',
            component: () => import('../views/HomeView.vue')
        }
    ]
});

export default router;

