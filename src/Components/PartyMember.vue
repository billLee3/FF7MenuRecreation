<script setup lang="ts">
import PartyMemberStats from "./PartyMemberStats.vue";
import ProfilePicture from "./ProfilePicture.vue";
import ProgressBar from "./ProgressBar.vue";
import type { Character } from "@/types/character";
import { ref, computed } from "vue";

interface Props {
  character: Character;
  full: boolean;
}
const props = defineProps<Props>();
// const lmtString = ref(`Limit level ${props.character.limitLvl}`);

const lmtString = computed(() => {
  return `Limit level ${props.character.limitLvl}`;
});
</script>

<template>
  <ProfilePicture
    :image-name="props.character.imagePath"
    :front="props.character.front"
    page="main"
  />
  <div v-if="props.full === true" class="statsColumn">
    <PartyMemberStats
      :name="props.character.name"
      :level="props.character.level"
      :hp-max="props.character.maxHp"
      :hp-remaining="props.character.currentHp"
      :mp-max="props.character.maxMp"
      :mp-remaining="props.character.currentMp"
    />
  </div>
  <div v-else class="statsColumnExpand">
    <PartyMemberStats
      :name="props.character.name"
      :level="props.character.level"
      :hp-max="props.character.maxHp"
      :hp-remaining="props.character.currentHp"
      :mp-max="props.character.maxMp"
      :mp-remaining="props.character.currentMp"
    />
  </div>

  <div v-if="props.full === true" class="column">
    <ProgressBar
      title="next level"
      :current="props.character.currentExpToNextLvl"
      :max="props.character.expTotalToNextLvl"
    />
    <ProgressBar
      :title="lmtString"
      :current="props.character.limitExpCurrent"
      :max="props.character.limitExpMax"
    />
  </div>
</template>

<style scoped>
.column {
  width: 66%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.statsColumn {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-left: 2rem;
}

.statsColumnExpand {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 75%;
  padding-left: 2rem;
}
</style>
