import { QueryBase } from '@/common/query-base';
import rawData from '@/data/home/town-hall/town-hall.json';
import { TownHall } from '@/types';

export const townHallData: TownHall = rawData as unknown as TownHall;

/**
 * Query class wrapping the single Town Hall entity.
 * Returned by `home().townHall()`.
 */
export class HomeVillageTownHall extends QueryBase<TownHall> {
  constructor() {
    super([townHallData]);
  }
}
