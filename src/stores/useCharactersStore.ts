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
      front: true,
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
      front: true,
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
      front: true,
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
      front: false,
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
      front: true,
    },
    {
      id: 6,
      name: "Vincent",
      level: 30,
      maxHp: 500,
      currentHp: 400,
      maxMp: 250,
      currentMp: 150,
      limitLvl: 1,
      limitExpMax: 300,
      limitExpCurrent: 200,
      expTotalToNextLvl: 1000,
      currentExpToNextLvl: 600,
      imagePath: "Vincent.png",
      inParty: false,
      front: true,
    },
    {
      id: 7,
      name: "Cait Sith",
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
      imagePath: "CaitSith.png",
      inParty: false,
      front: true,
    },
    {
      id: 8,
      name: "Yuffie",
      level: 16,
      maxHp: 500,
      currentHp: 400,
      maxMp: 250,
      currentMp: 150,
      limitLvl: 1,
      limitExpMax: 300,
      limitExpCurrent: 200,
      expTotalToNextLvl: 1000,
      currentExpToNextLvl: 600,
      imagePath: "YuffieProfile.png",
      inParty: false,
      front: true,
    },
    {
      id: 9,
      name: "Cid",
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
      imagePath: "Cid.png",
      inParty: false,
      front: true,
    },
  ]);

  const partyMembers = computed(() => {
    return characters.value.filter((char) => char.inParty);
  });

  const nonPartyMembers = computed(() => {
    return characters.value.filter((char) => !char.inParty);
  });

  const useItem = (id: number, stat: string, value: number) => {
    if (value === 0) {
      return;
    }
    if (stat === "hp" || stat === "mp") {
      const character: Character | undefined = characters.value.find(
        (char) => char.id === id
      );
      if (character) {
        if (stat === "hp") {
          character.currentHp = Math.min(
            character.maxHp,
            character.currentHp + value
          );
        } else if (stat === "mp") {
          character.currentMp = Math.min(
            character.maxMp,
            character.currentMp + value
          );
        } else {
          return characters;
        }
      }
    }
    return characters;
  };

  const useItemsOnAllPartyMembers = (stat: string, value: number) => {
    for (const character of characters.value) {
      useItem(character.id, stat, value);
    }
    return characters;
  };

  const hoverCharacter = ref();
  const getCharacterById = (id: number) => {
    const character: Character | undefined = characters.value.find(
      (char) => char.id === id
    );
    if (character) {
      hoverCharacter.value = character;
    }
  };

  const hoverId = ref(-1);
  const toPartySelected = ref(-1);
  const toggleCharacterPartyStatus = (id: number) => {
    const partyMember = partyMembers.value.find((char) => char.id === id);
    if (partyMembers.value.length === 3) {
      if (partyMember) {
        partyMember.inParty = false;
      } else {
        alert("You can't have more than 3 party members.");
      }
    }
  };

  const moveNonPartyToParty = (id: number) => {
    if (partyMembers.value.length < 3) {
      if (id !== -1) {
        const character = characters.value.find((char) => char.id === id);
        if (character) {
          character.inParty = true;
        } else {
          alert("This id is out of bounds.");
        }
      }
    }
  };
  return {
    characters,
    partyMembers,
    nonPartyMembers,
    useItem,
    useItemsOnAllPartyMembers,
    hoverId,
    getCharacterById,
    hoverCharacter,
    toggleCharacterPartyStatus,
    moveNonPartyToParty,
  };
});
