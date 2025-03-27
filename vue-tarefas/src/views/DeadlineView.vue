<script setup>
// Essa tela mostrará as tarefas referentes ao prazo
// selecionado no menu lateral

import { useRoute } from 'vue-router';

const route = useRoute();

// As seguintes linhas contém o código para encontrar a lista que foi passada como id na rota
// const id = parseInt(route.params.id);
//const deadline = deadlines.find(id);
</script>

<template>
  <h1>Essa é a página de prazo</h1>
</template>

<style scoped></style>
