// Character.ts

export interface Character {
  id: number;
  name: string;
  level: number;
  maxHp: number;
  currentHp: number;
  maxMp: number;
  currentMp: number;
  limitLvl: number;
  limitExpMax: number;
  limitExpCurrent: number;
  expTotalToNextLvl: number;
  currentExpToNextLvl: number;
  imagePath: string;
  inParty: boolean;
  front: boolean;
}
