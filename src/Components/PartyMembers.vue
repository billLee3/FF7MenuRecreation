<script setup lang="ts">
import PartyMember from "./PartyMember.vue";
import { computed, ref } from "vue";
import type { Character } from "@/types/character";

const characters = ref<Character[]>([
  {
    id: 1,
    name: "Cloud",
    level: 23,
    maxHp: 500,
    currentHp: 400,
    maxMp: 250,
    currentMp: 150,
    limitLvl: 4,
    limitExpMax: 300,
    limitExpCurrent: 150,
    expTotalToNextLvl: 1000,
    currentExpToNextLvl: 200,
    imagePath: "CloudProfile.png",
    inParty: true,
  },
  {
    id: 2,
    name: "Aerith",
    level: 21,
    maxHp: 500,
    currentHp: 400,
    maxMp: 250,
    currentMp: 150,
    limitLvl: 1,
    limitExpMax: 300,
    limitExpCurrent: 200,
    expTotalToNextLvl: 1000,
    currentExpToNextLvl: 200,
    imagePath: "AerithProfile.png",
    inParty: false,
  },
  {
    id: 3,
    name: "RedXIII",
    level: 21,
    maxHp: 600,
    currentHp: 300,
    maxMp: 400,
    currentMp: 110,
    limitLvl: 1,
    limitExpMax: 300,
    limitExpCurrent: 200,
    expTotalToNextLvl: 1000,
    currentExpToNextLvl: 200,
    imagePath: "RedXIIIProfile.png",
    inParty: true,
  },
  {
    id: 4,
    name: "Barrett",
    level: 21,
    maxHp: 500,
    currentHp: 500,
    maxMp: 250,
    currentMp: 150,
    limitLvl: 1,
    limitExpMax: 300,
    limitExpCurrent: 200,
    expTotalToNextLvl: 1000,
    currentExpToNextLvl: 200,
    imagePath: "BarrettProfile.png",
    inParty: true,
  },
  {
    id: 5,
    name: "Tifa",
    level: 21,
    maxHp: 500,
    currentHp: 400,
    maxMp: 250,
    currentMp: 150,
    limitLvl: 1,
    limitExpMax: 300,
    limitExpCurrent: 200,
    expTotalToNextLvl: 1000,
    currentExpToNextLvl: 600,
    imagePath: "TifaProfile.png",
    inParty: false,
  },
]);

const partyMembers = computed(() => {
  return characters.value.filter((char) => char.inParty);
});
</script>

<template>
  <div v-for="(character, index) in partyMembers" :key="index" class="column">
    <div class="row">
      <PartyMember :character :key="index" />
    </div>
  </div>
</template>

<style scoped>
div {
  color: white;
}
.column {
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
  height: 100%;
  margin-left: 1%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
