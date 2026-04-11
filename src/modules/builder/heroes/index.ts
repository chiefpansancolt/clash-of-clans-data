import { QueryBase } from '@/common/query-base';
import { BuilderHero } from '@/types';
import { battleCopterData } from './battle-copter';
import { battleMachineData } from './battle-machine';

const allHeroes: BuilderHero[] = [battleMachineData, battleCopterData];

/**
 * Query class for all Builder Base heroes.
 * Returned by `builder().heroes()`.
 */
export class BuilderBaseHeroes extends QueryBase<BuilderHero> {
  constructor(data: BuilderHero[] = allHeroes) {
    super(data);
  }

  battleMachine(): BuilderBaseHeroes {
    return new BuilderBaseHeroes([battleMachineData]);
  }

  battleCopter(): BuilderBaseHeroes {
    return new BuilderBaseHeroes([battleCopterData]);
  }

  /** Filter to heroes that have at least one level available at or below the given Builder Hall level. */
  byBuilderHall(level: number): BuilderBaseHeroes {
    return new BuilderBaseHeroes(
      this.data.filter((h) => h.levels.some((l) => l.builderHallLevelRequired <= level)),
    );
  }
}
