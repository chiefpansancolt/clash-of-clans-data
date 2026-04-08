import { QueryBase } from '@/common/query-base';
import { HomeTroop } from '@/types';
import { archerData } from './archer';
import { babyDragonData } from './baby-dragon';
import { balloonData } from './balloon';
import { barbarianData } from './barbarian';
import { dragonData } from './dragon';
import { dragonRiderData } from './dragon-rider';
import { electroDragonData } from './electro-dragon';
import { electroTitanData } from './electro-titan';
import { giantData } from './giant';
import { goblinData } from './goblin';
import { healerData } from './healer';
import { meteorGolemData } from './meteor-golem';
import { minerData } from './miner';
import { pekkaData } from './pekka';
import { rootRiderData } from './root-rider';
import { throwerData } from './thrower';
import { wallBreakerData } from './wall-breaker';
import { wizardData } from './wizard';
import { yetiData } from './yeti';

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
  pekkaData,
  babyDragonData,
  minerData,
  electroDragonData,
  yetiData,
  dragonRiderData,
  electroTitanData,
  rootRiderData,
  throwerData,
  meteorGolemData,
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

  pekka(): HomeVillageTroops {
    return new HomeVillageTroops([pekkaData]);
  }

  babyDragon(): HomeVillageTroops {
    return new HomeVillageTroops([babyDragonData]);
  }

  miner(): HomeVillageTroops {
    return new HomeVillageTroops([minerData]);
  }

  electroDragon(): HomeVillageTroops {
    return new HomeVillageTroops([electroDragonData]);
  }

  yeti(): HomeVillageTroops {
    return new HomeVillageTroops([yetiData]);
  }

  dragonRider(): HomeVillageTroops {
    return new HomeVillageTroops([dragonRiderData]);
  }

  electroTitan(): HomeVillageTroops {
    return new HomeVillageTroops([electroTitanData]);
  }

  rootRider(): HomeVillageTroops {
    return new HomeVillageTroops([rootRiderData]);
  }

  thrower(): HomeVillageTroops {
    return new HomeVillageTroops([throwerData]);
  }

  meteorGolem(): HomeVillageTroops {
    return new HomeVillageTroops([meteorGolemData]);
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
