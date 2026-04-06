import rawData from '@/data/home/defenses/air-defense.json';
import { HomeDefense } from '@/types';

export const airDefenseData: HomeDefense = rawData as unknown as HomeDefense;

/** Returns the complete Air Defense building entity with all 16 levels. */
export function airDefense(): HomeDefense {
  return airDefenseData;
}
