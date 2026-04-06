import rawData from '@/data/home/defenses/firespitter.json';
import { HomeDefense } from '@/types';

export const firespitterData: HomeDefense = rawData as unknown as HomeDefense;

/** Returns the complete Firespitter building entity with all 3 levels. */
export function firespitter(): HomeDefense {
  return firespitterData;
}
