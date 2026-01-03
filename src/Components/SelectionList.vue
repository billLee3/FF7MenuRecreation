<script setup lang="ts">
const props = defineProps<{ selections: string[] }>();
</script>

<template>
  <div>
    <RouterLink to="/about" class="routerLink">About</RouterLink>
  </div>

  <RouterView />
</template>

<style scoped>
.routerLink {
  color: white;
  text-decoration: none;
  font-style: "Reactor7", sans-serif;
  padding-bottom: 10px;
  font-size: 2rem;
  list-style-type: none;
}
div {
  display: flex;
  flex-direction: column;
  margin-left: 3em;
  margin-top: 5px;
  gap: 0;
}

p {
  height: 3em;
}
</style>
