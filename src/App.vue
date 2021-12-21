<script setup lang="ts">
import AppMenu from './components/AppMenu.vue';
</script>

<template>
  <AppMenu />
  <router-view id="page"></router-view>
</template>

<style>
body {
  margin: 0;
  color: #ffffff;
  background: #000000;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#page {
  padding: 24px;
}
</style>
