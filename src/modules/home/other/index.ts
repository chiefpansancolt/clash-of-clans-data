import { QueryBase } from '@/common/query-base';
import { HomeOtherBuilding } from '@/types';
import { bobsHutData } from './bobs-hut';

const allOtherBuildings: HomeOtherBuilding[] = [bobsHutData];

export class HomeVillageOtherBuildings extends QueryBase<HomeOtherBuilding> {
  constructor(data: HomeOtherBuilding[] = allOtherBuildings) {
    super(data);
  }

  // Per-building accessors
  bobsHut(): HomeVillageOtherBuildings {
    return new HomeVillageOtherBuildings([bobsHutData]);
  }

  // Category filters
  byTownHall(level: number): HomeVillageOtherBuildings {
    return new HomeVillageOtherBuildings(
      this.data.filter((b) =>
        b.availablePerTownHall.some((e) => e.townHallLevel === level && e.count > 0),
      ),
    );
  }
}
