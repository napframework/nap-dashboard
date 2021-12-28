<script setup lang="ts">
import napConfig from '../../nap.config';
</script>

<template>
  <div id="app-menu">

    <router-link to="/" class="logo">
      <img alt="NAP logo" src="../assets/logo.png" />
    </router-link>

    <router-link v-for="portal in napConfig.portals" :to="`/${portal.path}`">
      {{ portal.name }}
    </router-link>

  </div>
</template>

<style scoped>
#app-menu {
  display: flex;
  align-items: flex-end;
  padding: 18px;
  gap: 18px
}
a:not(.logo) {
  color: #ffffff;
  padding: 12px;
  border-radius: 18px;
  border: 1px solid #ffffff;
  white-space: nowrap;
  text-decoration: none;
}
a:not(.logo):hover,
a:not(.logo).router-link-active {
  color: #000000;
  background: #ffffff;
}
a.logo img {
  height: 64px;
}
</style>
