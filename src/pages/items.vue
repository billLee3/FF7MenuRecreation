<script setup lang="ts">
import ItemList from "@/Components/ItemList.vue";
import PartyMemberStats from "@/Components/PartyMemberStats.vue";
import ProfilePicture from "@/Components/ProfilePicture.vue";
import type { Item } from "@/types/item";
import type { Character } from "@/types/character";
import { useCharacterStore } from "@/stores/useCharactersStore";
import { useItemStore } from "@/stores/useItemStore";
import { ref, computed } from "vue";
import { storeToRefs } from "pinia";

const store = useCharacterStore();
const itemStore = useItemStore();
const { items, selectedItemId, itemsWithStock } = storeToRefs(itemStore);
const { decrementStock } = itemStore;
const { characters, partyMembers } = storeToRefs(store);
const { useItem, useItemsOnAllPartyMembers } = store;
const itemSelected = ref(-1);
const handleItemSelected = (id: number) => {
  itemSelected.value = id;
};

const showRadioButtons = computed(() => {
  return selectedItemId.value !== null && selectedItemId.value !== -1
    ? "visible"
    : "hidden";
});

const handleItemUsage = (charId: number) => {
  // 2. Check the .value of the ref
  if (selectedItemId.value === null || selectedItemId.value === -1) {
    return;
  }

  // 3. Use .value to access the actual array and the ID
  const item = items.value.find((i) => i.id === selectedItemId.value);
  const selectedCharacter = characters.value.find((char) => char.id === charId);

  if (item && selectedCharacter) {
    if (item.multiMember) {
      useItemsOnAllPartyMembers(item.statImpacted, item.statImpactNumber);
    } else {
      // Pass the actual ID
      useItem(selectedCharacter.id, item.statImpacted, item.statImpactNumber);
    }
    decrementStock(selectedItemId.value);
    selectedItemId.value = null;
  }
};
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
    <div class="row descRow">
      <p>Placeholder for description</p>
    </div>
    <div class="row bodyRow">
      <div class="subcolumn">
        <div
          v-for="character in partyMembers"
          class="row characterRow"
          @click="handleItemUsage(character.id)"
        >
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
      <div class="subcolumn">
        <ItemList />
      </div>
    </div>
  </div>
</template>

<style scoped>
.itemSelectionRow,
.pageNameCol,
.descRow,
.bodyRow,
.subcolumn {
  border: 1px solid white;
}
/* .column {
  display: flex;
  flex-direction: column;
  height: 82.5vh;
  width: 65vw;
} */

.stats {
  border: none;
}

.row {
  display: flex;
  flex-direction: row;
  margin-top: 0;
  margin-bottom: 0;
}

.bodyRow {
  height: 67.5vh;
}

.characterRow {
  justify-content: start;
  align-items: center;
  height: 33%;
  margin-left: 2%;
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
  border: 1px solid gray;
  border-radius: 5px;
}

.stats {
  padding-left: 2rem;
}

input {
  width: 30px;
  height: 30px;
  visibility: v-bind(showRadioButtons);
}

button:hover {
  background-color: white;
  color: darkblue;
  border: 1px solid darkblue;
}
</style>
