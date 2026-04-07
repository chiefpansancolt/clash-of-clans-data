import rawData from '@/data/home/traps/spring-trap.json';
import { HomeTrap } from '@/types';

export const springTrapData: HomeTrap = rawData as unknown as HomeTrap;

export function springTrap(): HomeTrap {
  return springTrapData;
}
