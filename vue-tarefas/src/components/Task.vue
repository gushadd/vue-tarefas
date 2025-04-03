<script setup>
import Checkbox from 'primevue/checkbox';
import Tag from 'primevue/tag';

</script>

<template>
  <div class="task-wrapper">
    <div class="checkbox">
      <Checkbox binary  size="large"/>
    </div>
    <div class="task-info">
      <h5>Tarefa 1</h5>
      <p class="task-date"> <i class="pi pi-calendar"></i> 18/05/2025</p>
      <p class="task-time"> <i class="pi pi-clock"></i> 18:00</p>
      <div class="tags">
        <Tag rounded style="background-color: lightblue;"/>
        <Tag rounded style="background-color: lightcoral;"/>
      </div>
    </div>
    <div class="chevron-btn">
      <i class="pi pi-chevron-right"></i>
    </div>
  </div>
</template>

<style scoped>
.task-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  border: 1px solid var(--task-border-color);
  border-radius: 10px;
  height: 13vh;
  cursor: pointer;
}

.checkbox {
  flex: 0.05;
  display: flex;
  align-items: center;
  justify-content: center;
}

.task-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.task-date,
.task-time {
  display: flex;
  align-items: center;
  gap: .4vw;
  opacity: .7;
}

.tags{
  display: flex;
  padding-top: 5px;
  padding-bottom: 5px;
  gap: 5px;
  align-items: center;
}

.chevron-btn {
  flex: 0.05;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
