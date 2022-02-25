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
      <img alt="NAP logo" src="../assets/logo.svg" />
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
  padding: 48px 48px;
  gap: 24px
}

a:not(.logo) {
  color: #ffffff;
  background: #8D8B84;
  padding: 7px;
  border-radius: 0px;
  white-space: nowrap;
  text-decoration: none;
}
a:not(.logo):hover {
  background: #CDCDC3;
}

a:not(.logo).router-link-active {
  background: #2958FF;
}


a.logo img {
  height: 48px;
  padding-right: 48px;
}

.status {
  text-align: right;
  flex-grow: 1;
  color: #FF5050;
  padding-top: 7px;
}
.status.connected {
  color: #D6FFA3;
}
</style>
