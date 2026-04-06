import rawData from '@/data/home/defenses/scattershot.json';
import { HomeDefense } from '@/types';

export const scattershotData: HomeDefense = rawData as unknown as HomeDefense;

/** Returns the complete Scattershot building entity with all 6 levels. */
export function scattershot(): HomeDefense {
  return scattershotData;
}
