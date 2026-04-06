import rawData from '@/data/home/defenses/multi-gear-tower.json';
import { HomeDefense } from '@/types';

export const multiGearTowerData: HomeDefense = rawData as unknown as HomeDefense;

/** Returns the complete Multi-Gear Tower building entity with all 5 levels (3 regular + 2 supercharge). */
export function multiGearTower(): HomeDefense {
  return multiGearTowerData;
}
