<script setup>
import { ref, provide } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import SideMenu from '../src/components/SideMenu.vue';
import Header from './components/Header.vue';

// Envio de dados para outros componentes
const isMenuCollapsed = ref(false);
const headerTitle = ref('');

provide('headerTitle', headerTitle); // usado no Header.vue
provide('changeHeaderTitle', (newHeaderTitle) => {
  //usado no ListItem.vue e no TagItem.vue
  headerTitle.value = newHeaderTitle;
});

provide('isMenuCollapsed', isMenuCollapsed); // usado no SideMenu.vue
provide('toggleMenu', () => {
  // usado no Header.vue
  isMenuCollapsed.value = !isMenuCollapsed.value;
});
</script>

<template>
  <main>
    <SideMenu />
    <div class="main-content-wrapper">
      <Header />
      <RouterView class="routerview" />
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
}

.main-content-wrapper {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem;
}

.routerview {
  height: 100%;
}
</style>
