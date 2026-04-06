import rawData from '@/data/home/defenses/spell-tower.json';
import { HomeDefense } from '@/types';

export const spellTowerData: HomeDefense = rawData as unknown as HomeDefense;

/** Returns the complete Spell Tower building entity with all 4 levels. */
export function spellTower(): HomeDefense {
  return spellTowerData;
}
