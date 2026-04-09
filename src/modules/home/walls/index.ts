import { QueryBase } from '@/common/query-base';
import { HomeWall } from '@/types';
import { wallData } from './wall';

const allWalls: HomeWall[] = [wallData];

/**
 * Query class for Home Village wall data.
 * Returned by `home().walls()`.
 */
export class HomeVillageWalls extends QueryBase<HomeWall> {
  constructor(data: HomeWall[] = allWalls) {
    super(data);
  }

  wall(): HomeVillageWalls {
    return new HomeVillageWalls([wallData]);
  }

  /** Filter to walls available (count > 0) at the given Town Hall level. */
  byTownHall(level: number): HomeVillageWalls {
    return new HomeVillageWalls(
      this.data.filter((w) =>
        w.availablePerTownHall.some((e) => e.townHallLevel === level && e.count > 0),
      ),
    );
  }
}
