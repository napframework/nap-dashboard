<script setup lang="ts">
// External Includes
import { NAPWebSocket } from 'nap-portal';

// Global styles
import './styles/fonts.css';
import './styles/colors.css';
import './styles/style.css';
import './styles/table.css';
import './styles/input.css';
import './styles/button.css';
import './styles/select.css';

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
  padding: 3em;
  border-top: 4px solid var(--gray-medium);
}
</style>
