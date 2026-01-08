<script setup lang="ts">
import PartyMember from "@/Components/PartyMember.vue";
import PartyMembers from "@/Components/PartyMembers.vue";
import ProfilePicture from "@/Components/ProfilePicture.vue";
import { useCharacterStore } from "@/stores/useCharactersStore";
import { ref } from "vue";
import { storeToRefs } from "pinia";
import type { Character } from "@/types/character";

const store = useCharacterStore();
const { nonPartyMembers, hoverId, hoverCharacter } = storeToRefs(store);
const { getCharacterById } = store;
const fullVar = false;

const page = ref("");
const hoverHandler = (id: number) => {
  hoverId.value = id;
  getCharacterById(id);
};
const full = ref(false);
</script>

<template>
  <div class="column">
    <div class="row CharacterMateriaRow">
      <div class="hdrColumnMain">
        <b>
          Please select a party member in the bottom right quadrant followed by
          the character you'd like to swap out
        </b>
      </div>
      <div class="pageNameCol"><b>Party</b></div>
    </div>

    <div class="row bodyRow">
      <div class="subcolumn partyMemCol">
        <PartyMembers :full="fullVar" :page="page" />
      </div>
      <div class="subcolumn">
        <div class="row materiaRow sudivided">
          <div v-if="hoverCharacter" class="row hoverChar">
            <PartyMember :character="hoverCharacter" :full="full" />
          </div>
        </div>
        <div class="row subdivided">
          <div class="nonPartyCol">
            <div
              v-for="character in nonPartyMembers"
              class="imageContainer"
              @mouseenter="hoverHandler(character.id)"
            >
              <ProfilePicture
                :image-name="character.imagePath"
                :front="character.front"
                :page="page"
                :key="character.id"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.column {
  display: flex;
  flex-direction: column;
  height: 82.5vh;
  width: 93%;
}

.subcolumn,
.CharacterMateriaRow,
.itemSelectionRow,
.descRow,
.bodyRow {
  border: 1px solid white;
}

.row {
  display: flex;
  flex-direction: row;
  margin-top: 0;
  margin-bottom: 0;
}

.itemSelectionRow {
  align-items: center;
  justify-content: space-between;
  padding-left: 5%;
  padding-right: 5%;
  height: 100%;
}

.CharacterMateriaRow {
  height: 5vh;
  justify-content: center;
  align-items: center;
  padding-left: 0%;
  padding-right: 0%;
}

.descRow,
.materiaRow {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.apRow,
.nxtLvlRow {
  justify-content: flex-end;
  padding-right: 5%;
  gap: 100px;
}

.pageNameCol {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 4rem;
  padding-right: 2rem;
  font-size: 2.5rem;
  height: 100%;
  width: 8%;

  border-left: solid 1px white;
}

.bodyRow {
  height: 90%;
}

.subcolumn {
  width: 35vw;
  display: flex;
  flex-direction: column;
}

.materiaRow {
  height: 40%;
  border: 1px solid white;
}

.subdivided {
  height: 60%;
  border: 1px solid white;
}

.abilityListColumn,
.equipListColumn {
  height: 30vh;
}

.hdrColumnMain {
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 2rem;
}

.nonPartyCol {
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
  display: inline;
  margin: 5%;
}

.imageContainer {
  display: inline;
}

.imageContainer:hover {
  background-color: aqua;
}

.imageContainer:active {
  background-color: white;
}
.space {
  width: 5px;
  height: 1px;
}
.hoverChar {
  padding-left: 5%;
  height: 50%;
}

.partyMemCol {
  padding-left: 2%;
  padding-right: 2%;
}
</style>
