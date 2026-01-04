<script setup lang="ts">
import router from "../router";

function goToAbout() {
  router.push("/about");
}
</script>

<template>
  <button @click="goToAbout">Here I am</button>
</template>
