<script setup></script>

<template>
  <div>
    <RouterLink to="/about">Items</RouterLink>
    <RouterLink>Materia</RouterLink>
    <RouterLink>Equip</RouterLink>
    <RouterLink>Status</RouterLink>
    <RouterLink>Order</RouterLink>
    <RouterLink>Limit</RouterLink>
    <RouterLink>About</RouterLink>
    <br></br>
    <RouterLink>Save</RouterLink>
    <RouterLink>Quit</RouterLink>
  </div>
</template>

<style scoped>
div {
  color: white;
}
RouterLink {
  font-style: "Reactor7", sans-serif;
  padding-bottom: 10px;
  font-size: 22px;
  list-style-type: none;
}
div {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-top: 5px;

}
</style>
