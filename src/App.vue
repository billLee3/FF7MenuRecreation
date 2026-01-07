<script setup lang="ts">
import GameStats from "./Components/GameStats.vue";
import Location from "./Components/Location.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
// Also need the players objects in global state.
// Global state not related to specific components more than 1 level down the DOM tree.
const location = ref("Nibelheim");
const timePlayed = ref("05:10:32");
const gil = ref(14510);
</script>

<template>
  <div class="container">
    <div class="menu-box party-members">
      <RouterView />
    </div>
    <div class="menu-box selections-list">
      <div class="navBar">
        <RouterLink to="/" class="routerLink">Home</RouterLink>
        <RouterLink to="/items" class="routerLink">Items</RouterLink>
        <RouterLink to="/materia" class="routerLink">Materia</RouterLink>
        <RouterLink to="/about" class="routerLink">About</RouterLink>
      </div>
    </div>
    <div class="menu-box time-stats">
      <GameStats :time-played="timePlayed" :gil />
    </div>
    <div class="menu-box location-box">
      <Location :location="location" />
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
  overflow: hidden;
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
  width: 21%;
  height: 12vh;
  position: absolute;
  right: 8vw;
  bottom: 13.5vh;
  margin-top: 0px;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
  padding: 0 0 0 0;
}

.location-box {
  z-index: 10;
  height: 3rem;
  width: 40%;
  position: absolute;
  right: 8vw;
  bottom: 5vh;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 2%;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
}
.routerLink {
  color: white;
  text-decoration: none;
  font-style: "Reactor7", sans-serif;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 2rem;
  font-size: 2rem;
  list-style-type: none;
}

.routerLink:hover {
  background-color: rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease-in;
}

.routerLink:active {
  background-color: rgba(0, 0, 0, 0.05);
  transition: background-color 0.2s ease-out;
}
.navBar {
  display: flex;
  flex-direction: column;
  /* margin-left: 3em; */
  margin-top: 5px;
  gap: 0;
}
</style>
