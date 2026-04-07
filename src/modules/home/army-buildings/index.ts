import { QueryBase } from '@/common/query-base';
import { HomeArmyBuilding, HomeBarracksBuilding } from '@/types';
import { armyCampData } from './army-camp';
import { barracksData } from './barracks';
import { darkBarracksData } from './dark-barracks';

const allArmyBuildings: HomeArmyBuilding[] = [armyCampData];

export class HomeVillageBarracks extends QueryBase<HomeBarracksBuilding> {
  constructor(data: HomeBarracksBuilding[] = [barracksData]) {
    super(data);
  }
}

export class HomeVillageDarkBarracks extends QueryBase<HomeBarracksBuilding> {
  constructor(data: HomeBarracksBuilding[] = [darkBarracksData]) {
    super(data);
  }
}

export class HomeVillageArmyBuildings extends QueryBase<HomeArmyBuilding> {
  constructor(data: HomeArmyBuilding[] = allArmyBuildings) {
    super(data);
  }

  // Per-building accessors
  armyCamp(): HomeVillageArmyBuildings {
    return new HomeVillageArmyBuildings([armyCampData]);
  }

  barracks(): HomeVillageBarracks {
    return new HomeVillageBarracks([barracksData]);
  }

  darkBarracks(): HomeVillageDarkBarracks {
    return new HomeVillageDarkBarracks([darkBarracksData]);
  }

  // Category filters
  /** Filter to army buildings available (count > 0) at the given Town Hall level. */
  byTownHall(level: number): HomeVillageArmyBuildings {
    return new HomeVillageArmyBuildings(
      this.data.filter((b) =>
        b.availablePerTownHall.some((e) => e.townHallLevel === level && e.count > 0),
      ),
    );
  }
}
