import rawData from '@/data/home/defenses/air-sweeper.json';
import { HomeDefense } from '@/types';

export const airSweeperData: HomeDefense = rawData as unknown as HomeDefense;

/** Returns the complete Air Sweeper building entity with all 7 levels. */
export function airSweeper(): HomeDefense {
  return airSweeperData;
}
