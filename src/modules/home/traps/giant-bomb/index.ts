import rawData from '@/data/home/traps/giant-bomb.json';
import { HomeTrap } from '@/types';

export const giantBombData: HomeTrap = rawData as unknown as HomeTrap;

export function giantBomb(): HomeTrap {
  return giantBombData;
}
