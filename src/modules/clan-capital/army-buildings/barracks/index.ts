import { QueryBase } from '@/common/query-base';
import { ClanCapitalBarracksBuilding } from '@/types';
import { battleRamBarracksData } from './battle-ram-barracks';
import { flyingFortressYardData } from './flying-fortress-yard';
import { hogRaiderBarracksData } from './hog-raider-barracks';
import { infernoDragonBarracksData } from './inferno-dragon-barracks';
import { megaSparkyWorkshopData } from './mega-sparky-workshop';
import { minionBarracksData } from './minion-barracks';
import { mountainGolemQuarryData } from './mountain-golem-quarry';
import { powerPekkaBarracksData } from './power-pekka-barracks';
import { raidCartBarracksData } from './raid-cart-barracks';
import { rocketBalloonBarracksData } from './rocket-balloon-barracks';
import { skeletonBarrelBarracksData } from './skeleton-barrel-barracks';
import { sneakyArcherBarracksData } from './sneaky-archer-barracks';
import { superBarbarianBarracksData } from './super-barbarian-barracks';
import { superDragonBarracksData } from './super-dragon-barracks';
import { superGiantBarracksData } from './super-giant-barracks';
import { superMinerBarracksData } from './super-miner-barracks';
import { superWizardBarracksData } from './super-wizard-barracks';

const allBarracks: ClanCapitalBarracksBuilding[] = [
  superBarbarianBarracksData,
  sneakyArcherBarracksData,
  superGiantBarracksData,
  battleRamBarracksData,
  minionBarracksData,
  superWizardBarracksData,
  rocketBalloonBarracksData,
  skeletonBarrelBarracksData,
  flyingFortressYardData,
  raidCartBarracksData,
  powerPekkaBarracksData,
  hogRaiderBarracksData,
  superDragonBarracksData,
  mountainGolemQuarryData,
  infernoDragonBarracksData,
  superMinerBarracksData,
  megaSparkyWorkshopData,
];

/**
 * Query class for all Clan Capital barracks buildings.
 * Returned by `clanCapital().armyBuildings().barracks()`.
 */
export class ClanCapitalBarracks extends QueryBase<ClanCapitalBarracksBuilding> {
  constructor(data: ClanCapitalBarracksBuilding[] = allBarracks) {
    super(data);
  }

  superBarbarianBarracks(): ClanCapitalBarracks {
    return new ClanCapitalBarracks([superBarbarianBarracksData]);
  }

  sneakyArcherBarracks(): ClanCapitalBarracks {
    return new ClanCapitalBarracks([sneakyArcherBarracksData]);
  }

  superGiantBarracks(): ClanCapitalBarracks {
    return new ClanCapitalBarracks([superGiantBarracksData]);
  }

  battleRamBarracks(): ClanCapitalBarracks {
    return new ClanCapitalBarracks([battleRamBarracksData]);
  }

  minionBarracks(): ClanCapitalBarracks {
    return new ClanCapitalBarracks([minionBarracksData]);
  }

  superWizardBarracks(): ClanCapitalBarracks {
    return new ClanCapitalBarracks([superWizardBarracksData]);
  }

  rocketBalloonBarracks(): ClanCapitalBarracks {
    return new ClanCapitalBarracks([rocketBalloonBarracksData]);
  }

  skeletonBarrelBarracks(): ClanCapitalBarracks {
    return new ClanCapitalBarracks([skeletonBarrelBarracksData]);
  }

  flyingFortressYard(): ClanCapitalBarracks {
    return new ClanCapitalBarracks([flyingFortressYardData]);
  }

  raidCartBarracks(): ClanCapitalBarracks {
    return new ClanCapitalBarracks([raidCartBarracksData]);
  }

  powerPekkaBarracks(): ClanCapitalBarracks {
    return new ClanCapitalBarracks([powerPekkaBarracksData]);
  }

  hogRaiderBarracks(): ClanCapitalBarracks {
    return new ClanCapitalBarracks([hogRaiderBarracksData]);
  }

  superDragonBarracks(): ClanCapitalBarracks {
    return new ClanCapitalBarracks([superDragonBarracksData]);
  }

  mountainGolemQuarry(): ClanCapitalBarracks {
    return new ClanCapitalBarracks([mountainGolemQuarryData]);
  }

  infernoDragonBarracks(): ClanCapitalBarracks {
    return new ClanCapitalBarracks([infernoDragonBarracksData]);
  }

  superMinerBarracks(): ClanCapitalBarracks {
    return new ClanCapitalBarracks([superMinerBarracksData]);
  }

  megaSparkyWorkshop(): ClanCapitalBarracks {
    return new ClanCapitalBarracks([megaSparkyWorkshopData]);
  }

  /** Filter to barracks available in the given district. */
  byDistrict(district: string): ClanCapitalBarracks {
    return new ClanCapitalBarracks(
      this.data.filter((b) => b.availablePerDistrict.some((d) => d.district === district)),
    );
  }
}
