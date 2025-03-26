<script setup>
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
