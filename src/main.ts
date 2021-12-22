import { NAPWebSocket } from 'nap-portal';
import { createApp } from 'vue';
import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import App from './App.vue';
import HomePage from './pages/HomePage.vue';
import PortalPage from './pages/PortalPage.vue';

// Create NAPWebSocket connection
const napWebSocket = new NAPWebSocket({
  host: 'localhost',
  port: 2000,
  user: 'napuser',
  pass: 'letmein!',
  secure: false,
});

// Open NAPWebSocket connection
napWebSocket.open()
  .then(() => console.log('NAPWebSocket opened successfully'))
  .catch(error => console.error(`NAPWebSocket failed to open: ${error.message}`));

// Create Vue Router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/:portal',
      component: PortalPage,
      props: { napWebSocket }
    },
  ],
});

// Create Vue App
createApp(App).use(router).mount('#app');
