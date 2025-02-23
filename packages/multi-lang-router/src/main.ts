import { createApp } from 'vue';
//
import { createWebHistory } from 'vue-router';
import App from './App.vue';
import { createMultiLangRouter } from './plugin';

const app = createApp(App);

app.use(
    //
    createMultiLangRouter(app, {
        history: createWebHistory(import.meta.env.BASE_URL),
        routes: [
            {
                path: '/',
                name: 'home',
                component: () => import('./views/HomeView.vue'),
                langAlias: { es: '/inicio', en: '/home' }
            },
            {
                name: 'first',
                path: '/first',
                component: () => import('./views/FirstView.vue'),
                langAlias: { es: '/primera', en: '/first' }
            },
            {
                name: '/second',
                path: '/second',
                component: () => import('./views/SecondView.vue'),
                langAlias: { es: '/segunda', en: '/second' }
            }
        ]
    })
);
app.mount('#app');
