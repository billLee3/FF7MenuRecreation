<script setup>
import { ref } from "vue";

const location = ref("Nibelheim");
</script>

<template>
  <h3>{{ location }}</h3>
</template>

<style scoped>
h3 {
  font-size: 2rem;
  color: white;
}
</style>
