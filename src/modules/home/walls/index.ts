import { QueryBase } from '@/common/query-base';
import { HomeWall } from '@/types';
import { wallData } from './wall';

const allWalls: HomeWall[] = [wallData];

export class HomeVillageWalls extends QueryBase<HomeWall> {
  constructor(data: HomeWall[] = allWalls) {
    super(data);
  }

  // Per-building accessor
  wall(): HomeVillageWalls {
    return new HomeVillageWalls([wallData]);
  }

  // Category filters
  /** Filter to walls available (count > 0) at the given Town Hall level. */
  byTownHall(level: number): HomeVillageWalls {
    return new HomeVillageWalls(
      this.data.filter((w) =>
        w.availablePerTownHall.some((e) => e.townHallLevel === level && e.count > 0),
      ),
    );
  }
}
