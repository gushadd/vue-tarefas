<script setup>
// Este componente representa um item dentro do
// Accordion de prazos do menu lateral

defineProps({
  title: String,
});
</script>

<template>
  <RouterLink class="deadline" :to="'/deadline'">
    <p>{{ title }}</p>
  </RouterLink>
</template>

<style scoped>
.deadline {
  display: flex;
}
</style>
