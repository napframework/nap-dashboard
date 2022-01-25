<script setup lang="ts">
// External Includes
import { ref } from 'vue';
import {
  NAPWebSocket,
  NAPWebSocketEvent,
} from 'nap-portal';

// Local Includes
import napConfig from '../../nap.config';

// Define props
const props = defineProps<{
  napWebSocket: NAPWebSocket,
}>();

// Create reactive connected variable
const connected = ref(props.napWebSocket.isOpen);

// Subscribe to WebSocket open event
props.napWebSocket.addEventListener(NAPWebSocketEvent.Open, {
  handleEvent: (event: CustomEvent) => connected.value = true,
});

// Subscribe to WebSocket close event
props.napWebSocket.addEventListener(NAPWebSocketEvent.Close, {
  handleEvent: (event: CustomEvent) => connected.value = false,
});
</script>

<template>
  <div id="app-menu">

    <router-link to="/" class="logo">
      <img alt="NAP logo" src="../assets/logo.png" />
    </router-link>

    <router-link v-for="portal in napConfig.portals" :to="`/${portal.path}`">
      {{ portal.name }}
    </router-link>

    <span class="status" :class="{ connected }">
      {{ connected ? 'CONNECTED' : 'DISCONNECTED' }}
    </span>

  </div>
</template>

<style scoped>
#app-menu {
  display: flex;
  align-items: flex-start;
  padding: 32px 48px;
  gap: 18px
}
a:not(.logo) {
  color: #ffffff;
  padding: 12px;
  border-radius: 18px;
  border: 1px solid #ffffff;
  white-space: nowrap;
  text-decoration: none;
}
a:not(.logo):hover,
a:not(.logo).router-link-active {
  color: #000000;
  background: #ffffff;
}
a.logo img {
  height: 64px;
}
.status {
  text-align: right;
  flex-grow: 1;
  color: #ff0000;
}
.status.connected {
  color: #00ff00;
}
</style>
