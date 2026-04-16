import { QueryBase } from '@/common/query-base';
import { ClanCapitalTroop } from '@/types';
import { battleRamData } from './battle-ram';
import { flyingFortressData } from './flying-fortress';
import { hogRaidersData } from './hog-raiders';
import { infernoDragonData } from './inferno-dragon';
import { megaSparkyData } from './mega-sparky';
import { minionHordeData } from './minion-horde';
import { mountainGolemData } from './mountain-golem';
import { powerPekkaData } from './power-pekka';
import { raidCartData } from './raid-cart';
import { rocketBalloonData } from './rocket-balloon';
import { skeletonBarrelsData } from './skeleton-barrels';
import { sneakyArcherData } from './sneaky-archer';
import { superBarbarianData } from './super-barbarian';
import { superDragonData } from './super-dragon';
import { superGiantData } from './super-giant';
import { superMinerData } from './super-miner';
import { superWizardData } from './super-wizard';

export { ClanCapitalTroops };

const allTroops: ClanCapitalTroop[] = [
  superBarbarianData,
  sneakyArcherData,
  superGiantData,
  battleRamData,
  minionHordeData,
  superWizardData,
  rocketBalloonData,
  skeletonBarrelsData,
  flyingFortressData,
  raidCartData,
  powerPekkaData,
  hogRaidersData,
  infernoDragonData,
  megaSparkyData,
  mountainGolemData,
  superDragonData,
  superMinerData,
];

/**
 * Query class for all Clan Capital troops.
 * Returned by `clanCapital().troops()`.
 */
class ClanCapitalTroops extends QueryBase<ClanCapitalTroop> {
  constructor(data: ClanCapitalTroop[] = allTroops) {
    super(data);
  }

  superBarbarian(): ClanCapitalTroops {
    return new ClanCapitalTroops([superBarbarianData]);
  }

  sneakyArcher(): ClanCapitalTroops {
    return new ClanCapitalTroops([sneakyArcherData]);
  }

  superGiant(): ClanCapitalTroops {
    return new ClanCapitalTroops([superGiantData]);
  }

  battleRam(): ClanCapitalTroops {
    return new ClanCapitalTroops([battleRamData]);
  }

  minionHorde(): ClanCapitalTroops {
    return new ClanCapitalTroops([minionHordeData]);
  }

  superWizard(): ClanCapitalTroops {
    return new ClanCapitalTroops([superWizardData]);
  }

  rocketBalloon(): ClanCapitalTroops {
    return new ClanCapitalTroops([rocketBalloonData]);
  }

  skeletonBarrels(): ClanCapitalTroops {
    return new ClanCapitalTroops([skeletonBarrelsData]);
  }

  flyingFortress(): ClanCapitalTroops {
    return new ClanCapitalTroops([flyingFortressData]);
  }

  raidCart(): ClanCapitalTroops {
    return new ClanCapitalTroops([raidCartData]);
  }

  powerPekka(): ClanCapitalTroops {
    return new ClanCapitalTroops([powerPekkaData]);
  }

  hogRaiders(): ClanCapitalTroops {
    return new ClanCapitalTroops([hogRaidersData]);
  }

  infernoDragon(): ClanCapitalTroops {
    return new ClanCapitalTroops([infernoDragonData]);
  }

  megaSparky(): ClanCapitalTroops {
    return new ClanCapitalTroops([megaSparkyData]);
  }

  mountainGolem(): ClanCapitalTroops {
    return new ClanCapitalTroops([mountainGolemData]);
  }

  superDragon(): ClanCapitalTroops {
    return new ClanCapitalTroops([superDragonData]);
  }

  superMiner(): ClanCapitalTroops {
    return new ClanCapitalTroops([superMinerData]);
  }
}
