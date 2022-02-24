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

@font-face {
    font-family: 'manrope';
    src: url('src/assets/Manrope-Regular.ttf') format('truetype');
}

body {
  margin: 0;
  padding: 0;
  color: #ffffff;
  background: #2D2D2D;
}

#app {
  font-family:  'manrope', sans-serif;
  color: #CDCDC3;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1em;
}

#page {
  border-top: 4px solid;
  border-color: #FFFFFF;
  padding: 48px;
}

</style>
