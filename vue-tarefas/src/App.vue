<script setup>
import { RouterLink, RouterView } from 'vue-router';
import SideMenu from '../src/components/SideMenu.vue';
</script>

<template>
  <main>
    <SideMenu/>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  display: flex;
}
</style>
