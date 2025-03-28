<script setup>
// Este componente representa um item dentro do
// Accordion de tags do menu lateral

import { inject } from 'vue';

defineProps({
  title: String,
  tagColor: String, // usar hex
});

// Ao clicar no RouterLink, o nome da tag é enviado ao Header
const changeHeaderTitle = inject('changeHeaderTitle');
</script>

<template>
  <RouterLink class="tag" :to="'/tag'" @click="changeHeaderTitle(title)">
    <i class="pi pi-bookmark-fill" :style="{ color: tagColor }"></i>
    <p>{{ title }}</p>
  </RouterLink>
</template>

<style scoped>
.tag {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
