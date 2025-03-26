<script setup>
defineProps({
  title: String,
  tagColor: String, // usar hex
});
</script>

<template>
  <main>
    <i class="pi pi-bookmark-fill" :style="{ color: tagColor }"></i>
    <p>{{ title }}</p>
  </main>
</template>

<style scoped>
main {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
