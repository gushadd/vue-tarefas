<script setup>
// Este componente representa um item dentro do
// Accordion de listas do menu lateral

import { Badge } from 'primevue';

defineProps({
  title: String,
  toDoQuantity: Number,
});
</script>

<template>
  <RouterLink class="list" :to="'/list'">
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
