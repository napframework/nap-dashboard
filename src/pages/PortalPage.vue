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
:deep(input) {
  padding: 6px;
  margin-bottom: 3px;
  margin-top: 3px;
  margin-left: 0px;
  margin-right: 0px;
  width: auto;
  border-style: none;
  color: #ffffff;
  background: #000000;
  font-family: "inconsolata";
  font-size: 0.8rem;
  display: block;
  outline: none
}

:deep(input)::selection {
  color: #000000;
  background: #8D8B84;
}

:deep(textarea),
:deep(input[type="text"]) {
  background: #000000;
  color: #ffffff;
  border-style: none;
  width: 100%;
  font-family: "manrope";
  font-size: 0.8rem;
  padding: 3px;
  outline: none;
}

:deep(textarea) {
  margin-bottom: 3px;
  margin-top: 3px;
  display: block;
}

:deep(textarea)::selection {
  color: #000000;
  background: #8D8B84;
}

:deep(input[type="range"]) {
  width: 386px;
}

:deep(input[type="color"]) {
  width: 24px;
  height: 24px;
  padding: 0px;
  border: 2px solid #CDCDC3;
  border-radius: 100%;
  outline: none;
}

:deep(input[type="color"])::-webkit-color-swatch-wrapper {
  padding: 0px;
}

:deep(input[type="color"])::-webkit-color-swatch {
  border: none;
  border-radius: 100%;
}

:deep(input[type="color"])::-moz-color-swatch {
  border: none;
  border-radius: 100%;
}

:deep(input[type="number"]) {
  -moz-appearance:textfield;
  width: 60px;
}

:deep(input[type="number"])::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

:deep(input[type="checkbox"]) {
  appearance: none;
  padding: 12px;
  margin-top: 3px;
  margin-bottom: 3px;
  display: inline-table;
}

:deep(input[type="checkbox"]):checked {
  background-color: #D6FFA3;
}

:deep(.PortalComponent button) {
  color: #ffffff;
  background: #8D8B84;
  border-style: none;
  padding: 6px;
  margin: 3px 0px 3px 0px;
  font-family: "manrope";
  font-size: 1.0rem;
  margin-top: 6px;
  margin-bottom: 6px;
}

:deep(.PortalComponent button):hover {
  background: #2958FF;
}

:deep(.PortalComponent button):active {
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
