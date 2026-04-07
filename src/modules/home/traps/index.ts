import { QueryBase } from '@/common/query-base';
import { HomeTrap } from '@/types';
import { airBombData } from './air-bomb';
import { bombData } from './bomb';
import { giantBombData } from './giant-bomb';
import { gigaBombData } from './giga-bomb';
import { seekingAirMineData } from './seeking-air-mine';
import { skeletonTrapData } from './skeleton-trap';
import { springTrapData } from './spring-trap';
import { tornadoTrapData } from './tornado-trap';

const allHomeTraps: HomeTrap[] = [
  bombData,
  springTrapData,
  giantBombData,
  airBombData,
  seekingAirMineData,
  skeletonTrapData,
  tornadoTrapData,
  gigaBombData,
];

export class HomeTrapQuery extends QueryBase<HomeTrap> {
  constructor(data: HomeTrap[] = allHomeTraps) {
    super(data);
  }

  /** Filter to a specific trap by name (case-insensitive). */
  byTrap(name: string): HomeTrapQuery {
    const q = name.toLowerCase();
    return new HomeTrapQuery(this.data.filter((t) => t.name.toLowerCase() === q));
  }

  /** Filter to traps available (count > 0) at the given Town Hall level. */
  byTownHall(level: number): HomeTrapQuery {
    return new HomeTrapQuery(
      this.data.filter((t) =>
        t.availablePerTownHall.some((e) => e.townHallLevel === level && e.count > 0),
      ),
    );
  }

  /** Filter by target type. */
  byTargetType(type: HomeTrap['targetType']): HomeTrapQuery {
    return new HomeTrapQuery(this.data.filter((t) => t.targetType === type));
  }
}

export function homeTraps(source: HomeTrap[] = allHomeTraps): HomeTrapQuery {
  return new HomeTrapQuery(source);
}

export * from './air-bomb';
export * from './bomb';
export * from './giga-bomb';
export * from './giant-bomb';
export * from './seeking-air-mine';
export * from './skeleton-trap';
export * from './spring-trap';
export * from './tornado-trap';
