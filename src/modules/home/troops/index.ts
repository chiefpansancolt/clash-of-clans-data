import { QueryBase } from '@/common/query-base';
import { HomeTroop } from '@/types';
import { archerData } from './archer';
import { barbarianData } from './barbarian';
import { giantData } from './giant';
import { goblinData } from './goblin';

const allTroops: HomeTroop[] = [barbarianData, archerData, giantData, goblinData];

export class HomeVillageTroops extends QueryBase<HomeTroop> {
  constructor(data: HomeTroop[] = allTroops) {
    super(data);
  }

  // Per-troop accessors
  barbarian(): HomeVillageTroops {
    return new HomeVillageTroops([barbarianData]);
  }

  archer(): HomeVillageTroops {
    return new HomeVillageTroops([archerData]);
  }

  giant(): HomeVillageTroops {
    return new HomeVillageTroops([giantData]);
  }

  goblin(): HomeVillageTroops {
    return new HomeVillageTroops([goblinData]);
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
