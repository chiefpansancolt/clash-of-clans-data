import rawData from '@/data/home/traps/skeleton-trap.json';
import { HomeTrap } from '@/types';

export const skeletonTrapData: HomeTrap = rawData as unknown as HomeTrap;

export function skeletonTrap(): HomeTrap {
  return skeletonTrapData;
}
