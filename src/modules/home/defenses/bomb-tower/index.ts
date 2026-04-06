import rawData from '@/data/home/defenses/bomb-tower.json';
import { HomeDefense } from '@/types';

export const bombTowerData: HomeDefense = rawData as unknown as HomeDefense;

/** Returns the complete Bomb Tower building entity with all 13 levels. */
export function bombTower(): HomeDefense {
  return bombTowerData;
}
