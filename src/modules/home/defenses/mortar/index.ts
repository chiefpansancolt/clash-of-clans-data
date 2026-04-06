import rawData from '@/data/home/defenses/mortar.json';
import { HomeDefense } from '@/types';

export const mortarData: HomeDefense = rawData as unknown as HomeDefense;

/** Returns the complete Mortar building entity with all 18 levels. */
export function mortar(): HomeDefense {
  return mortarData;
}
