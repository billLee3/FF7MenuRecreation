<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{ timePlayed: String; gil: number }>();
</script>

<template>
  <div class="row">
    <p>Time</p>
    <p class="timeValue">
      <b>{{ props.timePlayed }}</b>
    </p>
  </div>
  <div class="row gilRow">
    <p>Gil</p>
    <p class="gilValue">
      <b>{{ props.gil }}</b>
    </p>
  </div>
</template>

<style scoped>
.row {
  width: 100%;
  height: 2rem;
  color: white;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5rem;
  margin-top: 0;
  margin-left: 20px;
  background-color: transparent;
}

.gilRow {
  gap: 6.5rem;
}
p {
  font-size: 1.75rem;
}
</style>
