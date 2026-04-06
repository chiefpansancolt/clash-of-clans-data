import rawData from '@/data/home/defenses/cannon.json';
import { HomeDefense } from '@/types';

export const cannonData: HomeDefense = rawData as unknown as HomeDefense;

/** Returns the complete Cannon building entity with all 21 levels. */
export function cannon(): HomeDefense {
  return cannonData;
}
