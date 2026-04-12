import { QueryBase } from '@/common/query-base';
import { ClanCapitalWall } from '@/types';
import { wallData } from './wall';

const allWalls: ClanCapitalWall[] = [wallData];

/**
 * Query class for Clan Capital wall data.
 * Returned by `clanCapital().walls()`.
 */
export class ClanCapitalWalls extends QueryBase<ClanCapitalWall> {
  constructor(data: ClanCapitalWall[] = allWalls) {
    super(data);
  }

  wall(): ClanCapitalWalls {
    return new ClanCapitalWalls([wallData]);
  }

  /** Filter to walls available (count > 0) at the given Capital Hall level. */
  byCapitalHall(level: number): ClanCapitalWalls {
    return new ClanCapitalWalls(
      this.data.filter((w) =>
        w.availablePerCapitalHall.some((e) => e.capitalHallLevel === level && e.count > 0),
      ),
    );
  }
}
