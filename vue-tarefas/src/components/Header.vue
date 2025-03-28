<script setup>
import { inject } from 'vue';
import { Button } from 'primevue';

const toggleMenu = inject('toggleMenu');
const headerTitle = inject('headerTitle');
</script>

<template>
  <header>
    <Button @click="toggleMenu" variant="text">
      <i class="pi pi-bars"></i>
    </Button>
    <h3>{{ headerTitle }}</h3>
  </header>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  gap: 1vw;
  height: 7vh;
}
</style>
