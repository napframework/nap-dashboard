<script setup lang="ts">
import {
  NAPPortal,
  NAPWebSocket,
} from 'nap-portal';
import {
  ref,
  onMounted,
  onBeforeUnmount,
} from 'vue';

// Define props
const props = defineProps({
  napWebSocket: NAPWebSocket,
});

// Expose portal element
const portal = ref(null);
defineExpose({ portal });

// NAPPortal variable
let napPortal: NAPPortal | null = null;

// Create portal on mount
onMounted(() => {
  if (napPortal === null) {
    napPortal = new NAPPortal({
      el: portal.value!,
      portalId: 'PortalComponent',
      napWebSocket: props.napWebSocket!,
    });
  }
});

// Destroy portal on unmount
onBeforeUnmount(() => {
  if (napPortal !== null) {
    napPortal.destroy();
    napPortal = null;
  }
});
</script>

<template>
  <div>
    Welcome to your NAP portal!
    <div ref="portal"></div>
  </div>
</template>
