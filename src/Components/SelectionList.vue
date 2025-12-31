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
    <p></p>
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
  font-size: 2.25rem;
  list-style-type: none;
}
div {
  display: flex;
  flex-direction: column;
  margin-left: 3em;
  margin-top: 5px;
}

p {
  height: 3em;
}
</style>
