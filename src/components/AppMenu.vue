<template>
  <div id="app-menu">

    <router-link to="/">
      <img alt="NAP logo" src="../assets/logo.png" />
    </router-link>

    <router-link to="/portal-component">
      Portal Component
    </router-link>

  </div>
</template>

<style scoped>
#app-menu {
  display: flex;
  align-items: flex-end;
  border-bottom: solid 1px #ffffff;
}
a {
  color: white;
  padding: 12px;
  white-space: nowrap;
  text-decoration: none;
}
a:hover,
a.router-link-active {
  color: #c86969;
}
img {
  height: 48px;
}
</style>
