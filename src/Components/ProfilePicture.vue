<script setup lang="ts">
import { ref, computed } from "vue";

// const props = defineProps(["imageName"]);

interface Props {
  imageName: string;
  front: boolean;
  page: string;
}
const props = defineProps<Props>();
const imgSrc = computed(() => {
  return new URL(`../assets/${props.imageName}`, import.meta.url).href;
});
</script>

<template>
  <img
    v-if="page === 'main' && front === false"
    :src="imgSrc"
    alt="Dynamic Profile"
    class="back"
  />
  <img v-else :src="imgSrc" alt="Dynamic Profile" />
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

.back {
  padding-left: 5%;
}
</style>
