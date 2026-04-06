import rawData from '@/data/home/defenses/archer-tower.json';
import { HomeDefense } from '@/types';

export const archerTowerData: HomeDefense = rawData as unknown as HomeDefense;

/** Returns the complete Archer Tower building entity with all 21 levels. */
export function archerTower(): HomeDefense {
  return archerTowerData;
}
