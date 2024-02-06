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

// Reference the portal DOM element
const portal = ref<HTMLElement | null>(null);

// NAPPortal variable
let napPortal: NAPPortal | null = null;

// Set portal from router path
function setPortal(path: string): boolean {
  const portalConfig = napConfig.portals.find((p: { path: string; }) => p.path === path);
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
