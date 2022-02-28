<script setup lang="ts">
// External Includes
import { ref } from 'vue';
import {
  NAPWebSocket,
  NAPWebSocketEvent,
} from 'nap-portal';

// Local Includes
import napConfig from '../../nap.config';
import LogoSvg from '../assets/logo.svg?component';

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
      <LogoSvg height="3em" />
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
  padding: 3em;
  gap: 1.5em;
}
a {
  flex: 0 0 auto;
}
a.logo {
  width: auto;
  margin-right: 1.5em;
}
a:not(.logo) {
  color: var(--white);
  background-color: var(--gray-medium);
  padding: 0 1em;
  line-height: 2.5em;
  white-space: nowrap;
  text-decoration: none;
}
a:not(.logo):hover {
  background-color: var(--gray-light);
}
a:not(.logo):active,
a:not(.logo).router-link-active {
  background-color: var(--blue);
}
.status {
  flex: 1 0 auto;
  text-align: right;
  color: var(--red);
  line-height: 2.5em;
}
.status.connected {
  color: var(--green-medium);
}
</style>
