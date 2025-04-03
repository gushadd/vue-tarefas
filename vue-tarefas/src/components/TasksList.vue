<script setup>
import Task from './Task.vue';

defineProps({
  tasks: Array,
});
</script>

<template>
  <main>
    <Task v-for="task in tasks" />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 2vh;
}
</style>
