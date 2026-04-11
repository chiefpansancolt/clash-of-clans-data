import { QueryBase } from '@/common/query-base';
import { BuilderWall } from '@/types';
import { wallData } from './wall';

const allWalls: BuilderWall[] = [wallData];

/**
 * Query class for all Builder Base wall data.
 * Returned by `builder().walls()`.
 */
export class BuilderBaseWalls extends QueryBase<BuilderWall> {
  constructor(data: BuilderWall[] = allWalls) {
    super(data);
  }

  wall(): BuilderBaseWalls {
    return new BuilderBaseWalls([wallData]);
  }

  /** Filter to walls available (count > 0) at the given Builder Hall level. */
  byBuilderHall(level: number): BuilderBaseWalls {
    return new BuilderBaseWalls(
      this.data.filter((w) =>
        w.availablePerBuilderHall.some((e) => e.builderHallLevel === level && e.count > 0),
      ),
    );
  }
}
