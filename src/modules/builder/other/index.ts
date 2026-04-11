import { QueryBase } from '@/common/query-base';
import { BuilderOtherBuilding } from '@/types';
import { clockTowerData } from './clock-tower';

const allOtherBuildings: BuilderOtherBuilding[] = [clockTowerData];

/**
 * Query class for all Builder Base other buildings.
 * Returned by `builder().otherBuildings()`.
 */
export class BuilderBaseOtherBuildings extends QueryBase<BuilderOtherBuilding> {
  constructor(data: BuilderOtherBuilding[] = allOtherBuildings) {
    super(data);
  }

  clockTower(): BuilderBaseOtherBuildings {
    return new BuilderBaseOtherBuildings([clockTowerData]);
  }

  /** Filter to other buildings available (count > 0) at the given Builder Hall level. */
  byBuilderHall(level: number): BuilderBaseOtherBuildings {
    return new BuilderBaseOtherBuildings(
      this.data.filter((b) =>
        b.availablePerBuilderHall.some((e) => e.builderHallLevel === level && e.count > 0),
      ),
    );
  }
}
