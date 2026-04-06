import rawData from '@/data/home/defenses/eagle-artillery.json';
import { HomeDefense } from '@/types';

export const eagleArtilleryData: HomeDefense = rawData as unknown as HomeDefense;

/** Returns the complete Eagle Artillery building entity with all 7 levels. */
export function eagleArtillery(): HomeDefense {
  return eagleArtilleryData;
}
