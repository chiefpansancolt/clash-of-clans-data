import { QueryBase } from '@/common/query-base';
import { HomeTroop } from '@/types';
import { apprenticeWardenData } from './apprentice-warden';
import { archerData } from './archer';
import { babyDragonData } from './baby-dragon';
import { balloonData } from './balloon';
import { barbarianData } from './barbarian';
import { bowlerData } from './bowler';
import { dragonData } from './dragon';
import { dragonRiderData } from './dragon-rider';
import { druidData } from './druid';
import { electroDragonData } from './electro-dragon';
import { electroTitanData } from './electro-titan';
import { furnaceData } from './furnace';
import { giantData } from './giant';
import { goblinData } from './goblin';
import { golemData } from './golem';
import { headhunterData } from './headhunter';
import { healerData } from './healer';
import { hogRiderData } from './hog-rider';
import { iceGolemData } from './ice-golem';
import { lavaHoundData } from './lava-hound';
import { meteorGolemData } from './meteor-golem';
import { minerData } from './miner';
import { minionData } from './minion';
import { pekkaData } from './pekka';
import { rootRiderData } from './root-rider';
import { throwerData } from './thrower';
import { valkyrieData } from './valkyrie';
import { wallBreakerData } from './wall-breaker';
import { witchData } from './witch';
import { wizardData } from './wizard';
import { yetiData } from './yeti';

const allTroops: HomeTroop[] = [
  apprenticeWardenData,
  barbarianData,
  druidData,
  furnaceData,
  archerData,
  giantData,
  goblinData,
  golemData,
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
  minionData,
  hogRiderData,
  valkyrieData,
  witchData,
  lavaHoundData,
  bowlerData,
  iceGolemData,
  headhunterData,
];

/**
 * Query class for all Home Village troops.
 * Returned by `home().troops()`.
 */
export class HomeVillageTroops extends QueryBase<HomeTroop> {
  constructor(data: HomeTroop[] = allTroops) {
    super(data);
  }

  apprenticeWarden(): HomeVillageTroops {
    return new HomeVillageTroops([apprenticeWardenData]);
  }

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

  golem(): HomeVillageTroops {
    return new HomeVillageTroops([golemData]);
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

  druid(): HomeVillageTroops {
    return new HomeVillageTroops([druidData]);
  }

  furnace(): HomeVillageTroops {
    return new HomeVillageTroops([furnaceData]);
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

  minion(): HomeVillageTroops {
    return new HomeVillageTroops([minionData]);
  }

  hogRider(): HomeVillageTroops {
    return new HomeVillageTroops([hogRiderData]);
  }

  valkyrie(): HomeVillageTroops {
    return new HomeVillageTroops([valkyrieData]);
  }

  witch(): HomeVillageTroops {
    return new HomeVillageTroops([witchData]);
  }

  lavaHound(): HomeVillageTroops {
    return new HomeVillageTroops([lavaHoundData]);
  }

  bowler(): HomeVillageTroops {
    return new HomeVillageTroops([bowlerData]);
  }

  iceGolem(): HomeVillageTroops {
    return new HomeVillageTroops([iceGolemData]);
  }

  headhunter(): HomeVillageTroops {
    return new HomeVillageTroops([headhunterData]);
  }

  /** Filter by troop type — `'regular'` (trained in Barracks) or `'dark'` (Dark Barracks). */
  byType(type: 'regular' | 'dark'): HomeVillageTroops {
    return new HomeVillageTroops(this.data.filter((t) => t.troopType === type));
  }

  /** Filter to troops that have at least one level available at or before the given Town Hall level. */
  byTownHall(level: number): HomeVillageTroops {
    return new HomeVillageTroops(
      this.data.filter((t) => t.levels.some((l) => l.townHallRequired <= level)),
    );
  }

  /** Filter to troops that have an associated Super Troop variant. */
  withSuperTroop(): HomeVillageTroops {
    return new HomeVillageTroops(this.data.filter((t) => t.superTroop !== undefined));
  }
}
