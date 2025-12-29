<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="menu-box party-members">Menu Box</div>
    <div class="menu-box selections-list">Selections Box</div>
    <div class="menu-box time-stats">Time Stats Box</div>
    <div class="menu-box location-box">Location</div>
  </div>
</template>

<style scoped>
template {
  background-color: darkblue;
}

.container {
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: darkblue;
}
.menu-box {
  background-color: darkblue;
  color: white;
  border: 1px solid white;
}

.party-members {
  width: 80vw;
  height: 85vh;
  position: absolute;
  top: 5vh;
  left: 3.5vw;
}

.selections-list {
  z-index: 10;
  width: 35%;
  height: 68%;
  position: absolute;
  right: 8vw;
  top: 2.5vh;
}

.time-stats {
  z-index: 10;
  width: 35%;
  height: 60px;
  position: absolute;
  right: 8vw;
  bottom: 13.5vh;
}

.location-box {
  z-index: 10;
  height: 30px;
  width: 50%;
  position: absolute;
  right: 8vw;
  bottom: 8vh;
}
</style>
