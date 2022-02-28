<script setup lang="ts">
// External Includes
import { NAPWebSocket } from 'nap-portal';

// Global styles
import './styles/fonts.css';
import './styles/colors.css';
import './styles/style.css';

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
#page {
  padding: 48px;
  border-top: 4px solid var(--gray-medium);
}
</style>
