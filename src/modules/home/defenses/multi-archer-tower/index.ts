import rawData from '@/data/home/defenses/multi-archer-tower.json';
import { HomeDefense } from '@/types';

export const multiArcherTowerData: HomeDefense = rawData as unknown as HomeDefense;

/** Returns the complete Multi-Archer Tower building entity with all 6 levels (4 regular + 2 supercharge). */
export function multiArcherTower(): HomeDefense {
  return multiArcherTowerData;
}
