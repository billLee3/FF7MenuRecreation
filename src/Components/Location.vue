<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{ location: String }>();
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
