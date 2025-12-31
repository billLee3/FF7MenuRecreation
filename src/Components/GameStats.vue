<script setup>
import { ref } from "vue";
const timePlayed = ref("05:10:32");
const gil = ref(14510);
</script>

<template>
  <div class="row">
    <p>Time</p>
    <p class="timeValue">
      <b>{{ timePlayed }}</b>
    </p>
  </div>
  <div class="row gilRow">
    <p>Gil</p>
    <p class="gilValue">
      <b>{{ gil }}</b>
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
