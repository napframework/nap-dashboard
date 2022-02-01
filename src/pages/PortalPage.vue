<script setup lang="ts">
// External Includes
import {
  NAPPortal,
  NAPWebSocket,
} from 'nap-portal';
import {
  ref,
  onMounted,
  onBeforeUnmount,
} from 'vue';
import {
  useRoute,
  useRouter,
  onBeforeRouteUpdate,
} from 'vue-router';

// Local Includes
import napConfig from '../../nap.config';

// Define props
const props = defineProps<{
  napWebSocket: NAPWebSocket,
}>();

// Expose portal element
const portal = ref(null);
defineExpose({ portal });

// NAPPortal variable
let napPortal: NAPPortal | null = null;

// Set portal from router path
function setPortal(path: string): boolean {
  const portalConfig = napConfig.portals.find(p => p.path === path);
  if (!portalConfig)
    return false;

  if (napPortal !== null)
    napPortal.destroy();

  napPortal = new NAPPortal({
    el: portal.value!,
    portalId: portalConfig.id,
    napWebSocket: props.napWebSocket,
  });

  return true;
}

// Create portal on mount
onMounted(() => {
  if (!setPortal(useRoute().params.portal as string))
    useRouter().push('/');
});

// Update portal on route change
onBeforeRouteUpdate(to => {
  if (!setPortal(to.params.portal as string))
    useRouter().push('/');
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
  <div ref="portal"></div>
</template>

<style scoped>
:deep(table) {
  white-space: nowrap;
  border-spacing: 0;
}
:deep(td) {
  height: 40px;
  padding-right: 24px;
}
:deep(td:last-child) {
  padding-right: 0;
}
:deep(textarea),
:deep(input[type="text"]),
:deep(input[type="range"]) {
  width: 240px;
}
:deep(input[type="number"]),
:deep(input[type="color"]) {
  width: 80px;
}
:deep(input[type="range"]) {
  margin: 0 12px 0 0;
}
</style>
