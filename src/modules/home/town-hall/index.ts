import rawData from '@/data/home/town-hall/town-hall.json';
import { TownHall } from '@/types';

export const townHallData: TownHall = rawData as unknown as TownHall;

export function townHall(): TownHall {
  return townHallData;
}
