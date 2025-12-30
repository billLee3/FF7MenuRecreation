<script setup>
import PartyMember from "./PartyMember.vue";
</script>

<template>
  <div class="container">
    <div class="row">
      <PartyMember />
    </div>
  </div>
</template>

<style scoped>
div {
  color: white;
}
.container {
  display: flex;
  display: column;
  align-items: center;
  width: 92.5%;
  height: 33%;
  background-color: transparent;
}
.row {
  display: flex;
  width: 100%;
  height: 160px;
  margin-left: 1%;
  flex-direction: row;
  align-items: center;
  border: 1px solid white;
}
</style>
