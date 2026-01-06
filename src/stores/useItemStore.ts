import { defineStore } from "pinia";
import type { Item } from "@/types/item";
import { ref, computed } from "vue";

export const useItemStore = defineStore("items", () => {
  const selectedItemId = ref<number | null>(null);
  const selectItem = (id: number) => {
    selectedItemId.value = id;
    alert(`Select a character`);
  };

  const items = ref<Item[]>([
    {
      id: 1,
      name: "potion",
      description: "Heals one party member 20 hit points",
      stock: 99,
      statImpacted: "hp",
      statImpactNumber: 20,
      multiMember: false,
      keyItem: false,
    },
    {
      id: 2,
      name: "tent",
      description: "Heals all party members by 500 hit points",
      stock: 50,
      statImpacted: "hp",
      statImpactNumber: 500,
      multiMember: true,
      keyItem: false,
    },
    {
      id: 3,
      name: "ether",
      description: "Restores 20 mp for one party member",
      stock: 2,
      statImpacted: "mp",
      statImpactNumber: 20,
      multiMember: false,
      keyItem: false,
    },
    {
      id: 4,
      name: "coupon 1",
      description: "Used at Shinra HQ to retrieve a prize",
      stock: 1,
      statImpacted: "",
      statImpactNumber: 0,
      multiMember: false,
      keyItem: true,
    },
  ]);

  const decrementStock = (id: number) => {
    const itemToDecrement: Item | undefined = items.value.find(
      (item) => item.id === id
    );
    if (itemToDecrement) {
      if (itemToDecrement.stock === 0) {
        return items.value.filter((item) => item.stock > 0);
      }
      itemToDecrement.stock--;
      return items;
    }
    return items;
  };

  const itemsWithStock = computed(() => {
    return items.value.filter((i) => i.stock > 0);
  });

  return { items, decrementStock, selectedItemId, selectItem, itemsWithStock };
});
