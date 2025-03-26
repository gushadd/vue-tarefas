<script setup>
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
