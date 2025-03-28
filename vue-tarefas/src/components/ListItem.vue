<script setup>
// Este componente representa um item dentro do
// Accordion de listas do menu lateral

import { inject } from 'vue';
import { Badge } from 'primevue';

defineProps({
  title: String,
  toDoQuantity: Number,
});

// Ao clicar no RouterLink, o nome da lista é enviado ao Header
const changeHeaderTitle = inject('changeHeaderTitle');
</script>

<template>
  <RouterLink class="list" :to="'/list'" @click="changeHeaderTitle(title)">
    <p>{{ title }}</p>
    <Badge :value="toDoQuantity" />
  </RouterLink>
</template>

<style scoped>
.list {
  display: flex;
  justify-content: space-between;
}
</style>
