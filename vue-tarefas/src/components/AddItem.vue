<script setup>
// Esse componente serve como botão de adicionar um item
// no menu lateral. É usado para adicionar uma nova lista
// de tarefas ou uma nova tag de tarefas, e fica na parte inferior
// de cada Accordion
</script>

<template>
  <main>
    <i class="pi pi-plus"></i>
    <p>Adicionar</p>
  </main>
</template>

<style scoped>
main {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 5px;
}

main:hover {
  background-color: var(--side-menu-item-hover-bg);
}
</style>
