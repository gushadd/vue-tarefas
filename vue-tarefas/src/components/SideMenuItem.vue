<script setup>
// Esse componente engloba o Accordion do PrimeVue,
// e é usado no menu lateral, onde 3 instâncias dele
// são criadas: uma para as listas, uma para as tags
// e outra para os prazos.

import { defineAsyncComponent } from 'vue';

import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';

defineProps({
  icon: String,
  title: String,
  content: Array,
  isChangeable: Boolean,
});

// Definição de componentes dinâmicos
const componentMap = {
  list: defineAsyncComponent(() => import('./ListItem.vue')),
  tag: defineAsyncComponent(() => import('./TagItem.vue')),
  deadline: defineAsyncComponent(() => import('./DeadlineItem.vue')),
};
</script>

<template>
  <Accordion>
    <AccordionPanel value="0">
      <AccordionHeader>
        <span class="accordion-header">
          <i :class="icon"></i>
          {{ title }}
        </span>
      </AccordionHeader>

      <AccordionContent>
        <ul>
          <li v-for="(item, index) in content" :key="index">
            <component :is="componentMap[item.type]" v-bind="item" />
          </li>
        </ul>
      </AccordionContent>
    </AccordionPanel>
  </Accordion>
</template>

<style scoped>
li {
  list-style-type: none;
  margin-bottom: 0.5rem;
  margin-left: -2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 5px;
}

li:hover {
  background-color: var(--side-menu-item-hover-bg);
}

.accordion-header {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
