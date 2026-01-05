<script setup lang="ts">
import PartyMemberStats from "@/Components/PartyMemberStats.vue";
import ProfilePicture from "@/Components/ProfilePicture.vue";
import { useCharacterStore } from "@/stores/useCharactersStore";

const store = useCharacterStore();
const { characters, partyMembers, nonPartyMembers } = store;
</script>

<template>
  <div class="column">
    <div class="row headerRow">
      <div class="hdrColumnMain">
        <div class="row itemSelectionRow">
          <button>Use</button>
          <button>Arrange</button>
          <button>Key Items</button>
        </div>
      </div>
      <div class="pageNameCol">Items</div>
    </div>
    <div class="row descRow"></div>
    <div class="row bodyRow">
      <div class="subcolumn">
        <div v-for="character in partyMembers" class="row characterRow">
          <ProfilePicture :image-name="character.imagePath" />
          <div class="subcolumn stats">
            <PartyMemberStats
              :name="character.name"
              :level="character.level"
              :hp-max="character.maxHp"
              :hp-remaining="character.currentHp"
              :mp-max="character.maxMp"
              :mp-remaining="character.currentMp"
            />
          </div>
        </div>
      </div>
      <div class="subcolumn"></div>
    </div>
  </div>
</template>

<style scoped>
div {
  border: 1px solid white;
}

.column {
  display: flex;
  flex-direction: column;
  height: 82.5vh;
  width: 65vw;
}

.row {
  display: flex;
  flex-direction: row;
}

.bodyRow {
  height: 67.5vh;
}

.characterRow {
  justify-content: start;
  align-items: center;
  height: 33%;
  margin-left: 5%;
}

.headerRow,
.descRow,
.itemSelectionRow {
  height: 7.5vh;
}

.itemSelectionRow {
  align-items: center;
  justify-content: space-around;
}

.hdrColumnMain,
.pageNameCol,
.subcolumn {
  display: flex;
  flex-direction: column;
}

.pageNameCol {
  justify-content: center;
  align-items: start;
  padding-left: 2rem;
  font-size: 2.5rem;
}

.hdrColumnMain {
  width: 50vw;
}

.pageNameCol {
  width: 15vw;
}

.subcolumn {
  width: 35vw;
}

button {
  font-size: 2rem;
  height: 4rem;
  width: 10vw;
  background-color: transparent;
  color: white;
}

.stats {
  padding-left: 2rem;
}
</style>
