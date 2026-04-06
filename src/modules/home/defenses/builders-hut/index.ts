import rawData from '@/data/home/defenses/builders-hut.json';
import { HomeDefense } from '@/types';

export const buildersHutData: HomeDefense = rawData as unknown as HomeDefense;

/** Returns the complete Builder's Hut building entity with all 7 levels. */
export function buildersHut(): HomeDefense {
  return buildersHutData;
}
