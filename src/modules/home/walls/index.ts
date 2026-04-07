import { QueryBase } from '@/common/query-base';
import { HomeWall } from '@/types';
import { wallData } from './wall';

const allHomeWalls: HomeWall[] = [wallData];

export class HomeWallQuery extends QueryBase<HomeWall> {
  constructor(data: HomeWall[] = allHomeWalls) {
    super(data);
  }

  /** Filter to walls available (count > 0) at the given Town Hall level. */
  byTownHall(level: number): HomeWallQuery {
    return new HomeWallQuery(
      this.data.filter((w) =>
        w.availablePerTownHall.some((e) => e.townHallLevel === level && e.count > 0),
      ),
    );
  }
}

export function homeWalls(source: HomeWall[] = allHomeWalls): HomeWallQuery {
  return new HomeWallQuery(source);
}

export * from './wall';
