import { QueryBase } from '@/common/query-base';
import { BuilderTrap } from '@/types';
import { megaMineData } from './mega-mine';
import { mineData } from './mine';
import { pushTrapData } from './push-trap';
import { springTrapData } from './spring-trap';

const allTraps: BuilderTrap[] = [pushTrapData, springTrapData, mineData, megaMineData];

/**
 * Query class for all Builder Base traps.
 * Returned by `builder().traps()`.
 */
export class BuilderBaseTraps extends QueryBase<BuilderTrap> {
  constructor(data: BuilderTrap[] = allTraps) {
    super(data);
  }

  pushTrap(): BuilderBaseTraps {
    return new BuilderBaseTraps([pushTrapData]);
  }

  springTrap(): BuilderBaseTraps {
    return new BuilderBaseTraps([springTrapData]);
  }

  mine(): BuilderBaseTraps {
    return new BuilderBaseTraps([mineData]);
  }

  megaMine(): BuilderBaseTraps {
    return new BuilderBaseTraps([megaMineData]);
  }

  /** Filter to traps available (count > 0) at the given Builder Hall level. */
  byBuilderHall(level: number): BuilderBaseTraps {
    return new BuilderBaseTraps(
      this.data.filter((t) =>
        t.availablePerBuilderHall.some((e) => e.builderHallLevel === level && e.count > 0),
      ),
    );
  }
}
