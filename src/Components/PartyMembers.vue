<script setup lang="ts">
import PartyMember from "./PartyMember.vue";
import { computed, ref } from "vue";
import type { Character } from "@/types/character";
import { useCharacterStore } from "@/stores/useCharactersStore";
import { storeToRefs } from "pinia";

const store = useCharacterStore();
const { partyMembers, characters, hoverId, hoverCharacter } =
  storeToRefs(store);
const { toggleCharacterPartyStatus } = store;
// const props = defineProps(["page"]);
interface Props {
  page: string;
  full: boolean;
}
const props = defineProps<Props>();

// const handleRemoveFromParty = (id: number) {

// }
</script>

<template>
  <div v-for="(character, index) in partyMembers" :key="index" class="column">
    <div v-if="props.page === 'order'" class="row selectable">
      <PartyMember :full="props.full" :character :key="index" />
    </div>
    <div
      v-else-if="props.page === 'party'"
      class="row selectable"
      @click="toggleCharacterPartyStatus(character.id)"
    >
      <PartyMember :full="props.full" :character :key="index" />
    </div>
    <div v-else class="row">
      <PartyMember :full="props.full" :character :key="index" />
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

.selectable:hover {
  background-color: rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease;
}
.selectable:active {
  background-color: rgba(0, 0, 0, 0.05);
  transition: background-color 0.1s ease;
}
</style>
