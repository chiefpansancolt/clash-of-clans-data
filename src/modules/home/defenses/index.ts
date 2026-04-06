import { QueryBase } from '@/common/query-base';
import { HomeDefense } from '@/types';
import { airDefenseData } from './air-defense';
import { archerTowerData } from './archer-tower';
import { cannonData } from './cannon';
import { mortarData } from './mortar';

const allHomeDefenses: HomeDefense[] = [cannonData, archerTowerData, mortarData, airDefenseData];

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

  /** Filter to buildings that can be geared up (any gear-up mode). */
  hasGearUp(): HomeDefenseQuery {
    return new HomeDefenseQuery(this.data.filter((d) => d.gearUp !== undefined));
  }
}

export function homeDefenses(source: HomeDefense[] = allHomeDefenses): HomeDefenseQuery {
  return new HomeDefenseQuery(source);
}

export * from './air-defense';
export * from './archer-tower';
export * from './cannon';
export * from './mortar';
