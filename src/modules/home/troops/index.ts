import { QueryBase } from '@/common/query-base';
import { HomeTroop } from '@/types';
import { barbarianData } from './barbarian';

const allTroops: HomeTroop[] = [barbarianData];

export class HomeVillageTroops extends QueryBase<HomeTroop> {
  constructor(data: HomeTroop[] = allTroops) {
    super(data);
  }

  // Per-troop accessors
  barbarian(): HomeVillageTroops {
    return new HomeVillageTroops([barbarianData]);
  }

  // Category filters
  byType(type: 'regular' | 'dark'): HomeVillageTroops {
    return new HomeVillageTroops(this.data.filter((t) => t.troopType === type));
  }

  byTownHall(level: number): HomeVillageTroops {
    return new HomeVillageTroops(
      this.data.filter((t) => t.levels.some((l) => l.townHallRequired <= level)),
    );
  }

  withSuperTroop(): HomeVillageTroops {
    return new HomeVillageTroops(this.data.filter((t) => t.superTroop !== undefined));
  }
}
