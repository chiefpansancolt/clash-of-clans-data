import rawData from '@/data/home/defenses/ricochet-cannon.json';
import { HomeDefense } from '@/types';

export const ricochetCannonData: HomeDefense = rawData as unknown as HomeDefense;

/** Returns the complete Ricochet Cannon building entity with all 6 levels (4 regular + 2 supercharge). */
export function ricochetCannon(): HomeDefense {
  return ricochetCannonData;
}
