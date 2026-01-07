<script setup lang="ts">
import { useCharacterStore } from "@/stores/useCharactersStore";
import { useItemStore } from "@/stores/useItemStore";
import type { Item } from "@/types/item";
import { storeToRefs } from "pinia";
import { ref } from "vue";

interface Props {
  item: Item;
}

let hover = ref(false);
let hoveredId = ref(-1);
const props = defineProps<Props>();
const itemStore = useItemStore();
const { selectItem } = itemStore;
const { itemHover, selectedItemId, isSelectable } = storeToRefs(itemStore);
const toggleHover = (id: number) => {
  hover.value = !hover.value;
  if (hover.value === false) {
    hoveredId.value = -1;
  } else {
    hoveredId.value = id;
  }
};

// const toggleAndUpdateStore = (id: number) => {
//   toggleHover(id);
//   itemHover.value = hover.value;
//   if (hoveredId.value > 0) {
//     itemHovered(itemHover.value, hoveredId.value);
//   } else {
//     itemHovered(itemHover.value, hoveredId.value);
//   }
// };
</script>

<template>
  <div v-if="!isSelectable" class="row" @click="selectItem(props.item.id)">
    <p>{{ props.item.name }}</p>
    <p class="stock">:{{ props.item.stock }}</p>
  </div>
  <div
    v-if="isSelectable"
    class="row selectable"
    @click="selectItem(props.item.id)"
  >
    <p>{{ props.item.name }}</p>
    <p class="stock">:{{ props.item.stock }}</p>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20%;
  padding-right: 50%;
  margin-top: 0;
  margin-bottom: 0;
}

.selectable:hover {
  background-color: rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease;
}
.selectable:active {
  background-color: rgba(0, 0, 0, 0.05);
  transition: background-color 0.1s ease;
}
.stock {
  margin-left: 5rem;
}

p {
  font-size: 2rem;
  margin: 0.5;
}
</style>
