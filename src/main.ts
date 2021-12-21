import { createApp } from 'vue';
import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import App from './App.vue';
import Home from './pages/Home.vue';
import Portal from './pages/Portal.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/:portal', component: Portal },
  ],
});

createApp(App).use(router).mount('#app');
