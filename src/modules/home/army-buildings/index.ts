import { QueryBase } from '@/common/query-base';
import { HomeArmyBuilding } from '@/types';
import { armyCampData } from './army-camp';

const allArmyBuildings: HomeArmyBuilding[] = [armyCampData];

export class HomeVillageArmyBuildings extends QueryBase<HomeArmyBuilding> {
  constructor(data: HomeArmyBuilding[] = allArmyBuildings) {
    super(data);
  }

  // Per-building accessors
  armyCamp(): HomeVillageArmyBuildings {
    return new HomeVillageArmyBuildings([armyCampData]);
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
