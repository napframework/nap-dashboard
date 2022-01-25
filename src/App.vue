<script setup lang="ts">
// External Includes
import { NAPWebSocket } from 'nap-portal';

// Local Includes
import AppMenu from './components/AppMenu.vue';

// Define props
const props = defineProps<{
  napWebSocket: NAPWebSocket,
}>();
</script>

<template>
  <AppMenu :nap-web-socket="props.napWebSocket" />
  <router-view id="page"></router-view>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  color: #ffffff;
  background: #000000;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#page {
  padding: 48px;
}
</style>
