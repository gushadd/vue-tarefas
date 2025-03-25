<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SideMenu from '../src/components/SideMenu.vue'
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';


const changeTheme = () => {
  document.documentElement.classList.toggle('app-dark');
};

</script>

<template>
  <SideMenu/>
  <RouterView />
</template>

<style scoped>

</style>
