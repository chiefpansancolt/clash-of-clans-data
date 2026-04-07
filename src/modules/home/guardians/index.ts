import { QueryBase } from '@/common/query-base';
import { Guardian } from '@/types';
import { longshotData } from './longshot';
import { smasherData } from './smasher';

const allGuardians: Guardian[] = [longshotData, smasherData];

export class HomeVillageGuardians extends QueryBase<Guardian> {
  constructor(data: Guardian[] = allGuardians) {
    super(data);
  }

  // Per-building accessors
  longshot(): HomeVillageGuardians {
    return new HomeVillageGuardians([longshotData]);
  }
  smasher(): HomeVillageGuardians {
    return new HomeVillageGuardians([smasherData]);
  }

  // Category filters
  /** Filter to a specific guardian variant by type (e.g. 'longshot', 'smasher'). */
  byGuardianType(type: string): HomeVillageGuardians {
    return new HomeVillageGuardians(this.data.filter((g) => g.guardianType === type));
  }

  /**
   * Filter to guardians that have at least one level available at or before
   * the given Town Hall level.
   */
  byTownHall(level: number): HomeVillageGuardians {
    return new HomeVillageGuardians(
      this.data.filter((g) => g.levels.some((l) => l.townHallRequired <= level)),
    );
  }
}
