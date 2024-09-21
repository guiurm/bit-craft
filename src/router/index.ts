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
            path: '/d&d',
            name: 'drop',
            component: () => import('../views/DropView.vue')
        },
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue')
        },
        {
            path: '/carousel',
            name: 'carousel',
            component: () => import('../views/CarouselView.vue')
        }
    ]
});

export default router;
