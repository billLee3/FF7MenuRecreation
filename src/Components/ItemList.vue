<script setup lang="ts">
import { ref } from "vue";
import type { Item } from "@/types/item";
import ItemRow from "./ItemRow.vue";
import { useItemStore } from "@/stores/useItemStore";

const store = useItemStore();
const { items, selectItem, itemsWithStock } = store;

const emits = defineEmits<{
  itemSelected: [id: number];
}>();
</script>

<template>
  <div class="column">
    <div v-for="item in itemsWithStock" class="row">
      <ItemRow :item="item" />
    </div>
  </div>
</template>

<style scoped>
.row {
  margin-top: 0;
  margin-bottom: 0;
}
</style>
