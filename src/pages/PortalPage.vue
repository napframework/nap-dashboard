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
  vertical-align: center;
}

:deep(td:last-child) {
  padding-right: 0;
}

:deep(input) {
  padding: 6px;
  width: auto;
  border-style: none;
  color: #ffffff;
  background: #000000;
}

:deep(textarea),
:deep(input[type="text"]) {
  background: #000000;
  color: #ffffff;
  border-style: none;
  width: 100%;
  padding: 6px;
  font-family: "manrope";
  font-size: 0.8rem;
}

:deep(input[type="range"]) {
  width: 386px;
}

:deep(input[type="color"]) {
  width: 80px;
  padding: 0px;
  border: 2px solid #FFFFFF;
  outline: none;
}

:deep(input[type="number"]) {
  width: 80px;
}

:deep(input[type="number"])::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

:deep(input[type="checkbox"]) {
  padding: 12px;
  appearance: none;
}

:deep(input[type="checkbox"]):checked {
  background-color: #D6FFA3;
}

:deep(#PortalItemButton) {
  color: #ffffff;
  background: #8D8B84;
  border-style: none;
  padding: 12px;
  margin: 12px 0px 12px 0px;
  font-family: "manrope";
  font-size: 1rem;
}

:deep(#PortalItemButton):hover {
  background: #2958FF;
}

:deep(#PortalItemButton):active {
  background: #CDCDC3;
}

:deep(input[type="range"]) {
  -webkit-appearance: none;
  height: 12px;
}

:deep(input[type="range"])::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 8px;
  border-radius: 0%;
  background: #FFFFFF;
  border: none;
}

:deep(input[type="range"])::-moz-range-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 8px;
  border-radius: 0%;
  background: #FFFFFF;
  border: none;
}

:deep(input[type="range"])::-webkit-slider-runnable-track  {
  -webkit-appearance: none;
  box-shadow: none;
  border: none;
  background: transparent;
}

</style>
