import { QueryBase } from '@/common/query-base';
import { HomeResourceBuilding } from '@/types';
import { goldMineData } from './gold-mine';

const allResourceBuildings: HomeResourceBuilding[] = [goldMineData];

export class HomeVillageResourceBuildings extends QueryBase<HomeResourceBuilding> {
  constructor(data: HomeResourceBuilding[] = allResourceBuildings) {
    super(data);
  }

  // Per-building accessors
  goldMine(): HomeVillageResourceBuildings {
    return new HomeVillageResourceBuildings([goldMineData]);
  }

  // Category filters
  /** Filter to resource buildings available (count > 0) at the given Town Hall level. */
  byTownHall(level: number): HomeVillageResourceBuildings {
    return new HomeVillageResourceBuildings(
      this.data.filter((b) =>
        b.availablePerTownHall.some((e) => e.townHallLevel === level && e.count > 0),
      ),
    );
  }
}
