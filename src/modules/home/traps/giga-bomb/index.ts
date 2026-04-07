import rawData from '@/data/home/traps/giga-bomb.json';
import { HomeTrap } from '@/types';

export const gigaBombData: HomeTrap = rawData as unknown as HomeTrap;

export function gigaBomb(): HomeTrap {
  return gigaBombData;
}
