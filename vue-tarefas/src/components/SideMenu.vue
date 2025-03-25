<script setup>

import ListsItem from '../components/ListsItem.vue';
import Button from 'primevue/button';
import { ref } from 'vue';

let isDarkModeActivated = ref(false);

const changeTheme = () => {
  isDarkModeActivated.value = !isDarkModeActivated.value;
  document.documentElement.classList.toggle('app-dark');
};
</script>

<template>
  <div class="main-wrapper">
    <header>
      <h4>Vue Tarefas</h4>
      <Button @click="changeTheme" variant="text">
        <i class="pi" :class="isDarkModeActivated ? 'pi-moon' : 'pi-sun'"></i>
      </Button>
    </header>

    <main>
      <div class="lists">
      </div>
      <div class="tags"></div>
      <div class="deadlines"></div>
    </main>
  </div class="main-wrapper">
</template>

<style scoped>
.main-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--main-bg);
  width: 20vw;
  height: 100vh;
  padding: 1rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5vh;
}

main{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
}

.lists,
.tags,
.deadlines{
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  height: 100%;
}
</style>
