import rawData from '@/data/home/traps/air-bomb.json';
import { HomeTrap } from '@/types';

export const airBombData: HomeTrap = rawData as unknown as HomeTrap;

export function airBomb(): HomeTrap {
  return airBombData;
}
