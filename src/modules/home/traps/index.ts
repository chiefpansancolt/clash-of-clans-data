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

const allTraps: HomeTrap[] = [
  bombData,
  springTrapData,
  giantBombData,
  airBombData,
  seekingAirMineData,
  skeletonTrapData,
  tornadoTrapData,
  gigaBombData,
];

export class HomeVillageTraps extends QueryBase<HomeTrap> {
  constructor(data: HomeTrap[] = allTraps) {
    super(data);
  }

  // Per-building accessors
  bomb(): HomeVillageTraps {
    return new HomeVillageTraps([bombData]);
  }
  springTrap(): HomeVillageTraps {
    return new HomeVillageTraps([springTrapData]);
  }
  giantBomb(): HomeVillageTraps {
    return new HomeVillageTraps([giantBombData]);
  }
  airBomb(): HomeVillageTraps {
    return new HomeVillageTraps([airBombData]);
  }
  seekingAirMine(): HomeVillageTraps {
    return new HomeVillageTraps([seekingAirMineData]);
  }
  skeletonTrap(): HomeVillageTraps {
    return new HomeVillageTraps([skeletonTrapData]);
  }
  tornadoTrap(): HomeVillageTraps {
    return new HomeVillageTraps([tornadoTrapData]);
  }
  gigaBomb(): HomeVillageTraps {
    return new HomeVillageTraps([gigaBombData]);
  }

  // Category filters
  /** Filter to a specific trap by name (case-insensitive). */
  byTrap(name: string): HomeVillageTraps {
    const q = name.toLowerCase();
    return new HomeVillageTraps(this.data.filter((t) => t.name.toLowerCase() === q));
  }

  /** Filter to traps available (count > 0) at the given Town Hall level. */
  byTownHall(level: number): HomeVillageTraps {
    return new HomeVillageTraps(
      this.data.filter((t) =>
        t.availablePerTownHall.some((e) => e.townHallLevel === level && e.count > 0),
      ),
    );
  }

  /** Filter by target type. */
  byTargetType(type: HomeTrap['targetType']): HomeVillageTraps {
    return new HomeVillageTraps(this.data.filter((t) => t.targetType === type));
  }
}
