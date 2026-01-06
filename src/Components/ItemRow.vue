<script setup lang="ts">
import { useCharacterStore } from "@/stores/useCharactersStore";
import { useItemStore } from "@/stores/useItemStore";
import type { Item } from "@/types/item";

interface Props {
  item: Item;
}
const props = defineProps<Props>();
const itemStore = useItemStore();
const { selectItem } = itemStore;
// const emits = defineEmits<{
//   itemId: [id: number];
// }>();
</script>

<template>
  <div class="row" @click="selectItem(props.item.id)">
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
.stock {
  margin-left: 5rem;
}

p {
  font-size: 2rem;
  margin: 0.5;
}
</style>
