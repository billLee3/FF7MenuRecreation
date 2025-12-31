<script setup lang="ts">
import PartyMemberStats from "./PartyMemberStats.vue";
import ProfilePicture from "./ProfilePicture.vue";
import ProgressBar from "./ProgressBar.vue";
import type { Character } from "@/types/character";
import { ref } from "vue";

const props = defineProps<{ character: Character }>();

const lmtString = ref(`Limit level ${props.character.limitLvl}`);
const currentExp = ref(props.character.currentExpToNextLvl);
const expTotalToNextLvl = ref(props.character.expTotalToNextLvl);
const currentLmtExp = ref(props.character.limitExpCurrent);
const LmtExpMax = ref(props.character.limitExpMax);
const filePath = ref(props.character.imagePath);
</script>

<template>
  <ProfilePicture :image-name="filePath" />
  <PartyMemberStats />
  <div class="column">
    <ProgressBar
      title="next level"
      :current="currentExp"
      :max="expTotalToNextLvl"
    />
    <ProgressBar :title="lmtString" :current="currentLmtExp" :max="LmtExpMax" />
  </div>
</template>

<style scoped>
.column {
  width: 66%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
