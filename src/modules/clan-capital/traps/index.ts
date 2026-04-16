import { QueryBase } from '@/common/query-base';
import { ClanCapitalTrap } from '@/types';
import { logTrapData } from './log-trap';
import { megaMineData } from './mega-mine';
import { mineData } from './mine';
import { spearTrapData } from './spear-trap';
import { zapTrapData } from './zap-trap';

const allTraps: ClanCapitalTrap[] = [
  mineData,
  megaMineData,
  logTrapData,
  zapTrapData,
  spearTrapData,
];

/**
 * Query class for all Clan Capital traps.
 * Returned by `clanCapital().traps()`.
 */
export class ClanCapitalTraps extends QueryBase<ClanCapitalTrap> {
  constructor(data: ClanCapitalTrap[] = allTraps) {
    super(data);
  }

  mine(): ClanCapitalTraps {
    return new ClanCapitalTraps([mineData]);
  }

  megaMine(): ClanCapitalTraps {
    return new ClanCapitalTraps([megaMineData]);
  }

  logTrap(): ClanCapitalTraps {
    return new ClanCapitalTraps([logTrapData]);
  }

  zapTrap(): ClanCapitalTraps {
    return new ClanCapitalTraps([zapTrapData]);
  }

  spearTrap(): ClanCapitalTraps {
    return new ClanCapitalTraps([spearTrapData]);
  }

  /** Filter to traps targeting the given type. */
  byTargetType(type: 'ground' | 'air' | 'both'): ClanCapitalTraps {
    return new ClanCapitalTraps(this.data.filter((t) => t.targetType === type));
  }

  /** Filter to traps available in the given district. */
  byDistrict(district: string): ClanCapitalTraps {
    return new ClanCapitalTraps(
      this.data.filter((t) => t.availablePerDistrict.some((e) => e.district === district)),
    );
  }
}
