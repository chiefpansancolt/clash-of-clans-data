import rawData from '@/data/home/defenses/hidden-tesla.json';
import { HomeDefense } from '@/types';

export const hiddenTeslaData: HomeDefense = rawData as unknown as HomeDefense;

/** Returns the complete Hidden Tesla building entity with all 17 levels. */
export function hiddenTesla(): HomeDefense {
  return hiddenTeslaData;
}
