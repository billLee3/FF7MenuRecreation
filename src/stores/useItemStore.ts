import { defineStore } from "pinia";
import type { Item } from "@/types/item";
import { ref, computed } from "vue";

export const useItemStore = defineStore("items", () => {
  const selectedItemId = ref<number | null>(null);
  const selectItem = (id: number) => {
    selectedItemId.value = id;
    getSelectedItemDescription(id);
  };

  const items = ref<Item[]>([
    {
      id: 1,
      name: "potion",
      description: "Select one party member to restore 20 hit points",
      stock: 99,
      statImpacted: "hp",
      statImpactNumber: 20,
      multiMember: false,
      keyItem: false,
    },
    {
      id: 2,
      name: "tent",
      description:
        "Select any character to restore 500 hit points to all party members",
      stock: 50,
      statImpacted: "hp",
      statImpactNumber: 500,
      multiMember: true,
      keyItem: false,
    },
    {
      id: 3,
      name: "ether",
      description: "Select one party member to restore 20 magic points",
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

  const itemDescription = ref("");

  const getSelectedItemDescription = (id: number) => {
    const itemToDescribe: Item | undefined = items.value.find(
      (item) => item.id === id
    );
    if (itemToDescribe) {
      itemDescription.value = `${itemToDescribe.name.toUpperCase()}: ${
        itemToDescribe.description
      }`;
    } else {
      itemDescription.value = "";
    }
  };

  const itemsWithStock = computed(() => {
    const itemsWithStock: Item[] = items.value.filter((i) => i.stock > 0);
    if (isArranged.value === true && isKeyItems.value === true) {
      const keyItems = itemsWithStock.filter((i) => i.keyItem === true);
      keyItems.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      return keyItems;
    } else if (isArranged.value === true && isKeyItems.value === false) {
      itemsWithStock.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      return itemsWithStock.filter((i) => i.keyItem === false);
    } else if (isArranged.value === false && isKeyItems.value === true) {
      return itemsWithStock.filter((i) => i.keyItem === true);
    }
    return itemsWithStock.filter((i) => i.keyItem === false);
  });

  const isSelectable = ref(false);
  let itemHover: boolean = false;

  const isArranged = ref(false);
  const isKeyItems = ref(false);
  return {
    items,
    decrementStock,
    selectedItemId,
    selectItem,
    itemsWithStock,
    itemHover,
    isSelectable,
    isArranged,
    isKeyItems,
    itemDescription,
  };
});
