import { QueryBase } from '@/common/query-base';
import { BuilderResourceBuilding } from '@/types';
import { bobControlData } from './bob-control';
import { elixirCollectorData } from './elixir-collector';
import { elixirStorageData } from './elixir-storage';
import { gemMineData } from './gem-mine';
import { goldMineData } from './gold-mine';
import { goldStorageData } from './gold-storage';

const allResourceBuildings: BuilderResourceBuilding[] = [
  goldMineData,
  elixirCollectorData,
  goldStorageData,
  elixirStorageData,
  gemMineData,
  bobControlData,
];

/**
 * Query class for all Builder Base resource buildings.
 * Returned by `builder().resourceBuildings()`.
 */
export class BuilderBaseResourceBuildings extends QueryBase<BuilderResourceBuilding> {
  constructor(data: BuilderResourceBuilding[] = allResourceBuildings) {
    super(data);
  }

  goldMine(): BuilderBaseResourceBuildings {
    return new BuilderBaseResourceBuildings([goldMineData]);
  }

  elixirCollector(): BuilderBaseResourceBuildings {
    return new BuilderBaseResourceBuildings([elixirCollectorData]);
  }

  goldStorage(): BuilderBaseResourceBuildings {
    return new BuilderBaseResourceBuildings([goldStorageData]);
  }

  elixirStorage(): BuilderBaseResourceBuildings {
    return new BuilderBaseResourceBuildings([elixirStorageData]);
  }

  gemMine(): BuilderBaseResourceBuildings {
    return new BuilderBaseResourceBuildings([gemMineData]);
  }

  bobControl(): BuilderBaseResourceBuildings {
    return new BuilderBaseResourceBuildings([bobControlData]);
  }

  /** Filter to resource buildings available (count > 0) at the given Builder Hall level. */
  byBuilderHall(level: number): BuilderBaseResourceBuildings {
    return new BuilderBaseResourceBuildings(
      this.data.filter((b) =>
        b.availablePerBuilderHall.some((e) => e.builderHallLevel === level && e.count > 0),
      ),
    );
  }
}
