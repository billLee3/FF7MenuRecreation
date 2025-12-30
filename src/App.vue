<script setup lang="ts">
import PartyMembers from "./Components/PartyMembers.vue";
import SelectionList from "./Components/SelectionList.vue";
import GameStats from "./Components/GameStats.vue";
import Location from "./Components/Location.vue";
</script>

<template>
  <div class="container">
    <div class="menu-box party-members">
      <PartyMembers />
    </div>
    <div class="menu-box selections-list">
      <SelectionList />
    </div>
    <div class="menu-box time-stats">
      <GameStats />
    </div>
    <div class="menu-box location-box">
      <Location />
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: black;
}
.menu-box {
  background: linear-gradient(to bottom right, #0000ad, #000050, #000000);
  color: white;
  border: 3px solid white;
  border-radius: 5px;
  padding-left: 1%;
  padding-top: 1%;
  font-family: "Reactor7", sans-serif;
}

.party-members {
  width: 70vw;
  height: 85vh;
  position: absolute;
  top: 5vh;
  left: 3.5vw;
}

.selections-list {
  z-index: 10;
  width: 20%;
  height: 60%;
  position: absolute;
  right: 8vw;
  top: 2.5vh;
}

.time-stats {
  z-index: 10;
  width: 20%;
  height: 80px;
  position: absolute;
  right: 8vw;
  bottom: 13.5vh;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-top: 0%;
}

.location-box {
  z-index: 10;
  height: 30px;
  width: 40%;
  position: absolute;
  right: 8vw;
  bottom: 6vh;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 2%;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
}
</style>
