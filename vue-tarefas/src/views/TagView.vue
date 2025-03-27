<script setup>
// Essa tela mostrará as tarefas referentes à tag
// selecionada no menu lateral

import { useRoute } from 'vue-router';

const route = useRoute();

// As seguintes linhas contém o código para encontrar a tag que foi passada como id na rota
// const id = parseInt(route.params.id);
//const tag = tags.find(id);
</script>

<template>
  <h1>Essa é a página de tag</h1>
</template>

<style scoped></style>
