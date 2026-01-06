// item.ts

//Examples: Tent, Potion, Ether
export interface Item {
  id: number;
  name: string;
  description: string;
  stock: number;
  statImpacted: string;
  statImpactNumber: number;
  multiMember: boolean;
  keyItem: boolean;
}
