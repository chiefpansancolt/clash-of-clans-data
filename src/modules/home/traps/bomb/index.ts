import rawData from '@/data/home/traps/bomb.json';
import { HomeTrap } from '@/types';

export const bombData: HomeTrap = rawData as unknown as HomeTrap;

export function bomb(): HomeTrap {
  return bombData;
}
