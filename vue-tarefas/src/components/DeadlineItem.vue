<script setup>
// Este componente representa um item dentro do
// Accordion de prazos do menu lateral

import { inject } from 'vue';

defineProps({
  title: String,
});

// Ao clicar no RouterLink, o nome do prazo é enviado ao Header
const changeHeaderTitle = inject('changeHeaderTitle');
</script>

<template>
  <RouterLink class="deadline" :to="'/deadline'" @click="changeHeaderTitle(`Prazo: ${title}`)">
    <p>{{ title }}</p>
  </RouterLink>
</template>

<style scoped>
.deadline {
  display: flex;
}
</style>
