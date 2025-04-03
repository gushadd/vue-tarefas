<script setup>
// Essa tela mostrará as tarefas referentes à lista
// selecionada no menu lateral

import TasksList from '@/components/TasksList.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// As seguintes linhas contém o código para encontrar a lista que foi passada como id na rota
// const id = parseInt(route.params.id);
//const list = lists.find(id);

// adicionar tags
const tasks = [
  {
    title: 'Correr na praia',
    description: 'Correr na praia por 5km',
    date: '10/01/2025',
    time: '18:00',
  },
  {
    title: 'Correr na praia',
    description: 'Correr na praia por 5km',
    date: '10/01/2025',
    time: '18:00',
  },
  {
    title: 'Correr na praia',
    description: 'Correr na praia por 5km',
    date: '10/01/2025',
    time: '18:00',
  },
];
</script>

<template>
  <TasksList :tasks="tasks" />
</template>

<style scoped></style>
