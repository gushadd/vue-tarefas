<script setup>
// Este componente representa um item dentro do
// Accordion de prazos do menu lateral

defineProps({
  title: String,
});
</script>

<template>
  <main>
    <p>{{ title }}</p>
  </main>
</template>

<style scoped>
main {
  display: flex;
}
</style>
