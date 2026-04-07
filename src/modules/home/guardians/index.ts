import { QueryBase } from '@/common/query-base';
import { Guardian } from '@/types';
import { longshotData } from './longshot';
import { smasherData } from './smasher';

const allHomeGuardians: Guardian[] = [longshotData, smasherData];

export class HomeGuardianQuery extends QueryBase<Guardian> {
  constructor(data: Guardian[] = allHomeGuardians) {
    super(data);
  }

  /** Filter to a specific guardian variant by type (e.g. 'longshot', 'smasher'). */
  byGuardianType(type: string): HomeGuardianQuery {
    return new HomeGuardianQuery(this.data.filter((g) => g.guardianType === type));
  }

  /**
   * Filter to guardians that have at least one level available at or before
   * the given Town Hall level.
   */
  byTownHall(level: number): HomeGuardianQuery {
    return new HomeGuardianQuery(
      this.data.filter((g) => g.levels.some((l) => l.townHallRequired <= level)),
    );
  }
}

export function homeGuardians(source: Guardian[] = allHomeGuardians): HomeGuardianQuery {
  return new HomeGuardianQuery(source);
}

export * from './longshot';
export * from './smasher';
