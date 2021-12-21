import { createApp } from 'vue';
import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import App from './App.vue';
import HomePage from './pages/HomePage.vue';
import PortalPage from './pages/PortalPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/:portal', component: PortalPage },
  ],
});

createApp(App).use(router).mount('#app');
