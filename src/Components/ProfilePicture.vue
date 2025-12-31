<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps(["imageName"]);
const imgSrc = computed(() => {
  return new URL(`../assets/${props.imageName}`, import.meta.url).href;
});
</script>

<template>
  <img :src="imgSrc" alt="Dynamic Profile" />
</template>

<style scoped>
img {
  height: 250px;
  width: 250px;
  object-fit: cover;
  object-position: top;
  image-rendering: pixelated;
  image-rendering: crisp-edges;
}
</style>
