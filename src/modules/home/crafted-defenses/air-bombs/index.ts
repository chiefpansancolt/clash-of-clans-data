import rawData from '@/data/home/crafted-defenses/air-bombs.json';
import { CraftedDefense } from '@/types';

export const airBombsData: CraftedDefense = rawData as unknown as CraftedDefense;

export function airBombs(): CraftedDefense {
  return airBombsData;
}
