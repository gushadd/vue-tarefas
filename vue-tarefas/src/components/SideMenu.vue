<script setup>

// Este componente é o menu lateral do app
// É nesse componente onde deve-se buscar, no banco,
// as listas, tags e prazos

import SideMenuItem from './SideMenuItem.vue';

import Button from 'primevue/button';
import { ref } from 'vue';

// Aqui, passo as listas para serem mostradas no menu lateral 
const lists = [
  { type: "list", title: "Trabalho", toDoQuantity: 5},
  { type: "list", title: "Estudos", toDoQuantity: 2},
];

// Aqui, passo as tags para serem mostradas no menu lateral 
const tags = [
  { type: "tag", title: "Doméstico", tagColor: "#aae6ba"},
  { type: "tag", title: "Importante", tagColor: "#d19fbb"},
];

// Aqui, passo os prazos para serem mostradas no menu lateral 
const deadlines = [
  { type: "deadline", title: "Hoje"},
  { type: "deadline", title: "Esta semana"},
  { type: "deadline", title: "Este mês"},
  { type: "deadline", title: "Calendário"},
];

let isDarkModeActivated = ref(false);

const changeTheme = () => {
  isDarkModeActivated.value = !isDarkModeActivated.value;
  document.documentElement.classList.toggle('app-dark');
};
</script>

<template>
  <div class="main-wrapper">
    <header>
      <h5>Vue Tarefas</h5>
      <Button @click="changeTheme" variant="text">
        <i class="pi" :class="isDarkModeActivated ? 'pi-moon' : 'pi-sun'"></i>
      </Button>
    </header>

    <main>

      <!-- Listas -->
      <SideMenuItem icon="pi pi-list" title="Listas" :content="lists"/>

      <!-- Tags -->
      <SideMenuItem icon="pi pi-bookmark" title="Tags" :content="tags"/>

      <!-- Prazos -->
      <SideMenuItem icon="pi pi-calendar" title="Prazos" :content="deadlines"/>

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
  overflow-y: scroll;
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
}
</style>
