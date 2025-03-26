<script setup>
defineProps({
  title: String,
  toDoQuantity: Number,
});
</script>

<template>
  <main>
    <p>{{ title }}</p>
    <p>{{ toDoQuantity }}</p>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: space-between;
}
</style>
