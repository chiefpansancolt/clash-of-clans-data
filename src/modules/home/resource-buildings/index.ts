import { QueryBase } from '@/common/query-base';
import { HomeResourceBuilding } from '@/types';
import { darkElixirDrillData } from './dark-elixir-drill';
import { elixirCollectorData } from './elixir-collector';
import { goldMineData } from './gold-mine';

const allResourceBuildings: HomeResourceBuilding[] = [
  goldMineData,
  elixirCollectorData,
  darkElixirDrillData,
];

export class HomeVillageResourceBuildings extends QueryBase<HomeResourceBuilding> {
  constructor(data: HomeResourceBuilding[] = allResourceBuildings) {
    super(data);
  }

  // Per-building accessors
  goldMine(): HomeVillageResourceBuildings {
    return new HomeVillageResourceBuildings([goldMineData]);
  }

  elixirCollector(): HomeVillageResourceBuildings {
    return new HomeVillageResourceBuildings([elixirCollectorData]);
  }

  darkElixirDrill(): HomeVillageResourceBuildings {
    return new HomeVillageResourceBuildings([darkElixirDrillData]);
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
