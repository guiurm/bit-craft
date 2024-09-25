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
            path: '/tabs',
            name: 'tabs',
            component: () => import('../views/TabsView.vue')
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
        },
        {
            path: '/dt',
            name: 'datatable',
            component: () => import('../views/DatatableView.vue')
        }
    ]
});

export default router;
