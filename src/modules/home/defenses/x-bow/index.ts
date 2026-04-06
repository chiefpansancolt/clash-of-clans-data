import rawData from '@/data/home/defenses/x-bow.json';
import { HomeDefense } from '@/types';

export const xBowData: HomeDefense = rawData as unknown as HomeDefense;

/** Returns the complete X-Bow building entity with all 12 levels. */
export function xBow(): HomeDefense {
  return xBowData;
}
