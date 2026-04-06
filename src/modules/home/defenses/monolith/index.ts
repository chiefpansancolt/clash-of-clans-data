import rawData from '@/data/home/defenses/monolith.json';
import { HomeDefense } from '@/types';

export const monolithData: HomeDefense = rawData as unknown as HomeDefense;

/** Returns the complete Monolith building entity with all 6 levels (4 regular + 2 supercharge). */
export function monolith(): HomeDefense {
  return monolithData;
}
