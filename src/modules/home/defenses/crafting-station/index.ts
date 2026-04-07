import rawData from '@/data/home/defenses/crafting-station.json';
import { HomeDefense } from '@/types';

export const craftingStationData: HomeDefense = rawData as unknown as HomeDefense;

/** Returns the Crafting Station building entity. */
export function craftingStation(): HomeDefense {
  return craftingStationData;
}
