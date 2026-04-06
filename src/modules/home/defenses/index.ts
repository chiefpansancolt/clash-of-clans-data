import { QueryBase } from '@/common/query-base';
import { HomeDefense } from '@/types';
import { cannonData } from './cannon';

const allHomeDefenses: HomeDefense[] = [cannonData];

export class HomeDefenseQuery extends QueryBase<HomeDefense> {
  constructor(data: HomeDefense[] = allHomeDefenses) {
    super(data);
  }

  /** Filter to a specific building by name (case-insensitive). */
  byBuilding(name: string): HomeDefenseQuery {
    const q = name.toLowerCase();
    return new HomeDefenseQuery(this.data.filter((d) => d.name.toLowerCase() === q));
  }

  /**
   * Filter to buildings that have at least one level available at or before
   * the given Town Hall level.
   */
  byTownHall(level: number): HomeDefenseQuery {
    return new HomeDefenseQuery(
      this.data.filter((d) => d.levels.some((l) => l.townHallRequired <= level)),
    );
  }

  /** Filter by damage type of the normal mode. */
  byDamageType(type: HomeDefense['modes']['normal']['damageType']): HomeDefenseQuery {
    return new HomeDefenseQuery(this.data.filter((d) => d.modes.normal.damageType === type));
  }

  /** Filter to buildings that support the geared-up burst mode. */
  hasGearedUpBurst(): HomeDefenseQuery {
    return new HomeDefenseQuery(this.data.filter((d) => d.modes.gearedUpBurst !== undefined));
  }
}

export function homeDefenses(source: HomeDefense[] = allHomeDefenses): HomeDefenseQuery {
  return new HomeDefenseQuery(source);
}

export * from './cannon';
