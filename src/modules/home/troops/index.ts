import { QueryBase } from '@/common/query-base';
import { HomeTroop } from '@/types';
import { archerData } from './archer';
import { balloonData } from './balloon';
import { barbarianData } from './barbarian';
import { dragonData } from './dragon';
import { giantData } from './giant';
import { goblinData } from './goblin';
import { healerData } from './healer';
import { wallBreakerData } from './wall-breaker';
import { wizardData } from './wizard';

const allTroops: HomeTroop[] = [
  barbarianData,
  archerData,
  giantData,
  goblinData,
  wallBreakerData,
  balloonData,
  wizardData,
  healerData,
  dragonData,
];

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

  wallBreaker(): HomeVillageTroops {
    return new HomeVillageTroops([wallBreakerData]);
  }

  balloon(): HomeVillageTroops {
    return new HomeVillageTroops([balloonData]);
  }

  wizard(): HomeVillageTroops {
    return new HomeVillageTroops([wizardData]);
  }

  healer(): HomeVillageTroops {
    return new HomeVillageTroops([healerData]);
  }

  dragon(): HomeVillageTroops {
    return new HomeVillageTroops([dragonData]);
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
