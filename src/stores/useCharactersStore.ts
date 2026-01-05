import { defineStore } from "pinia";
import type { Character } from "@/types/character";
import { ref, computed } from "vue";

export const useCharacterStore = defineStore("characters", () => {
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

  const nonPartyMembers = computed(() => {
    return characters.value.filter((char) => !char.inParty);
  });

  return { characters, partyMembers, nonPartyMembers };
});
