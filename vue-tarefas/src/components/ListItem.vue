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
  <main>
    <p>{{ title }}</p>
    <Badge :value="toDoQuantity" />
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: space-between;
}
</style>
