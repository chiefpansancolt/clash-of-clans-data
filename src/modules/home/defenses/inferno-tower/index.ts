import rawData from '@/data/home/defenses/inferno-tower.json';
import { HomeDefense } from '@/types';

export const infernoTowerData: HomeDefense = rawData as unknown as HomeDefense;

/** Returns the complete Inferno Tower building entity with all 12 levels. */
export function infernoTower(): HomeDefense {
  return infernoTowerData;
}
