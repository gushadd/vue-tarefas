<script setup>
</script>

<template>
<div class="menu">

  <div class="header">
    <h3>Menu</h3>
    <i class="pi pi-bars"></i>
  </div>

  <div class="lists">

    <div class="title">
      <h3>Listas</h3>
      <i class="pi pi-plus"></i>
    </div>

    <ul class="list-items">
      <li class="list-item"> <!-- ligar a uma lista de listas -->
        <p>Pessoal</p>
        <p class="item-quantity">3</p>
      </li>
    </ul>

  </div>

  <div class="tags">
    
    <div class="title">
      <h3>Tags</h3>
      <i class="pi pi-plus"></i>
    </div>

    <ul class="tag-items">
      <li class="tag-item"> <!-- ligar a uma lista de tags -->
        <i class="pi pi-bookmark-fill"></i>
        <p>Esporte</p>
      </li>
    </ul>

  </div>

  <div class="deadlines">
   
    <div class="title">
      <h3>Prazos</h3>
    </div>

    <ul class="deadline-items">
      <li class="deadline-item">
        <p>Hoje</p>
      </li>

      <li class="deadline-item">
        <p>Esta semana</p>
      </li>

      <li class="deadline-item">
        <p>Este mês</p>
      </li>

      <li class="deadline-item">
        <p>Calendário</p>
      </li>
    </ul>
  </div>

</div>
</template>

<style scoped>

.menu{
  width: 20%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 50px;
  background-color: #F4F4F4;
}

.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3%;
  background-color: transparent;
}

.header h3{
  font-size: 20px;
  font-weight: 600;
}

.header i{
  font-size: 20px;
}

.lists, 
.tags,
.deadlines{
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 20%;
  max-height: 20%;
  background-color: transparent;
}

.title{
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.title h3{
  font-size: 16px;
  font-weight: 500;
  opacity: .5;
}

.title i{
  opacity: .5;
  font-size: 16px;
}

.list-items,
.tag-items{
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.list-item, 
.tag-item,
.deadline-item{
  display: flex;
  align-items: center;
  padding: 2px 2px 2px 10px;
  height: 40px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color .13s;
}

.list-item{
  justify-content: space-between;
}

.list-item p,
.tag-item p,
.deadline-item p{
  font-size: 16px;
  font-weight: 500;
}

.item-quantity{
  background-color: #E4E4E4;
  padding: 5px 13px;
  border-radius: 5px;
  transition: background-color .13s;
}

.list-item:hover,
.tag-item:hover,
.deadline-item:hover{
  background-color: #E4E4E4;
}

.list-item:hover .item-quantity {
  background-color: white; /* Cor da item-quantity */
}

.tag-item,
.deadline-item{
  gap: 15px;
}

.tag-item i{
  font-size: 16px;
  color: #A1DFFE;
}

</style>