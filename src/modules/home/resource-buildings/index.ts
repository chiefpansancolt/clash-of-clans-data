import { QueryBase } from '@/common/query-base';
import { HomeClanCastle, HomeResourceBuilding } from '@/types';
import { clanCastleData } from './clan-castle';
import { darkElixirDrillData } from './dark-elixir-drill';
import { darkElixirStorageData } from './dark-elixir-storage';
import { elixirCollectorData } from './elixir-collector';
import { elixirStorageData } from './elixir-storage';
import { goldMineData } from './gold-mine';
import { goldStorageData } from './gold-storage';

export class HomeVillageClanCastle extends QueryBase<HomeClanCastle> {
  constructor(data: HomeClanCastle[] = [clanCastleData]) {
    super(data);
  }
}

const allResourceBuildings: HomeResourceBuilding[] = [
  goldMineData,
  elixirCollectorData,
  darkElixirDrillData,
  goldStorageData,
  elixirStorageData,
  darkElixirStorageData,
];

export class HomeVillageResourceBuildings extends QueryBase<HomeResourceBuilding> {
  constructor(data: HomeResourceBuilding[] = allResourceBuildings) {
    super(data);
  }

  goldMine(): HomeVillageResourceBuildings {
    return new HomeVillageResourceBuildings([goldMineData]);
  }

  elixirCollector(): HomeVillageResourceBuildings {
    return new HomeVillageResourceBuildings([elixirCollectorData]);
  }

  darkElixirDrill(): HomeVillageResourceBuildings {
    return new HomeVillageResourceBuildings([darkElixirDrillData]);
  }

  goldStorage(): HomeVillageResourceBuildings {
    return new HomeVillageResourceBuildings([goldStorageData]);
  }

  elixirStorage(): HomeVillageResourceBuildings {
    return new HomeVillageResourceBuildings([elixirStorageData]);
  }

  darkElixirStorage(): HomeVillageResourceBuildings {
    return new HomeVillageResourceBuildings([darkElixirStorageData]);
  }

  clanCastle(): HomeVillageClanCastle {
    return new HomeVillageClanCastle([clanCastleData]);
  }

  /** Filter to resource buildings available (count > 0) at the given Town Hall level. */
  byTownHall(level: number): HomeVillageResourceBuildings {
    return new HomeVillageResourceBuildings(
      this.data.filter((b) =>
        b.availablePerTownHall.some((e) => e.townHallLevel === level && e.count > 0),
      ),
    );
  }
}
