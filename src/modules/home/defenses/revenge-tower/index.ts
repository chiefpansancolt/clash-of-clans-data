import rawData from '@/data/home/defenses/revenge-tower.json';
import { HomeDefense } from '@/types';

export const revengeTowerData: HomeDefense = rawData as unknown as HomeDefense;

/** Returns the complete Revenge Tower building entity with all 2 levels. */
export function revengeTower(): HomeDefense {
  return revengeTowerData;
}
