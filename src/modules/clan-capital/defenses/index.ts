import { QueryBase } from '@/common/query-base';
import { ClanCapitalDefense } from '@/types';
import { airBombsData } from './air-bombs';
import { airDefenseData } from './air-defense';
import { blastBowData } from './blast-bow';
import { bombTowerData } from './bomb-tower';
import { cannonData } from './cannon';
import { crusherData } from './crusher';
import { giantCannonData } from './giant-cannon';
import { goblinThrowerData } from './goblin-thrower';
import { hiddenMegaTeslaData } from './hidden-mega-tesla';
import { infernoTowerData } from './inferno-tower';
import { miniMinionHiveData } from './mini-minion-hive';
import { multiCannonData } from './multi-cannon';
import { multiMortarData } from './multi-mortar';
import { raidCartPostData } from './raid-cart-post';
import { rapidRocketsData } from './rapid-rockets';
import { reflectorData } from './reflector';
import { rocketArtilleryData } from './rocket-artillery';
import { spearThrowerData } from './spear-thrower';
import { superDragonPostData } from './super-dragon-post';
import { superGiantPostData } from './super-giant-post';
import { superWizardTowerData } from './super-wizard-tower';

const allDefenses: ClanCapitalDefense[] = [
  cannonData,
  spearThrowerData,
  airDefenseData,
  airBombsData,
  blastBowData,
  raidCartPostData,
  rapidRocketsData,
  crusherData,
  giantCannonData,
  goblinThrowerData,
  hiddenMegaTeslaData,
  infernoTowerData,
  miniMinionHiveData,
  multiCannonData,
  bombTowerData,
  multiMortarData,
  reflectorData,
  rocketArtilleryData,
  superDragonPostData,
  superGiantPostData,
  superWizardTowerData,
];

/**
 * Query class for all Clan Capital stationary defenses.
 * Returned by `clanCapital().defenses()`.
 */
export class ClanCapitalDefenses extends QueryBase<ClanCapitalDefense> {
  constructor(data: ClanCapitalDefense[] = allDefenses) {
    super(data);
  }

  cannon(): ClanCapitalDefenses {
    return new ClanCapitalDefenses([cannonData]);
  }

  spearThrower(): ClanCapitalDefenses {
    return new ClanCapitalDefenses([spearThrowerData]);
  }

  airDefense(): ClanCapitalDefenses {
    return new ClanCapitalDefenses([airDefenseData]);
  }

  multiCannon(): ClanCapitalDefenses {
    return new ClanCapitalDefenses([multiCannonData]);
  }

  bombTower(): ClanCapitalDefenses {
    return new ClanCapitalDefenses([bombTowerData]);
  }

  multiMortar(): ClanCapitalDefenses {
    return new ClanCapitalDefenses([multiMortarData]);
  }

  airBombs(): ClanCapitalDefenses {
    return new ClanCapitalDefenses([airBombsData]);
  }

  blastBow(): ClanCapitalDefenses {
    return new ClanCapitalDefenses([blastBowData]);
  }

  raidCartPost(): ClanCapitalDefenses {
    return new ClanCapitalDefenses([raidCartPostData]);
  }

  rapidRockets(): ClanCapitalDefenses {
    return new ClanCapitalDefenses([rapidRocketsData]);
  }

  crusher(): ClanCapitalDefenses {
    return new ClanCapitalDefenses([crusherData]);
  }

  giantCannon(): ClanCapitalDefenses {
    return new ClanCapitalDefenses([giantCannonData]);
  }

  goblinThrower(): ClanCapitalDefenses {
    return new ClanCapitalDefenses([goblinThrowerData]);
  }

  hiddenMegaTesla(): ClanCapitalDefenses {
    return new ClanCapitalDefenses([hiddenMegaTeslaData]);
  }

  infernoTower(): ClanCapitalDefenses {
    return new ClanCapitalDefenses([infernoTowerData]);
  }

  miniMinionHive(): ClanCapitalDefenses {
    return new ClanCapitalDefenses([miniMinionHiveData]);
  }

  superDragonPost(): ClanCapitalDefenses {
    return new ClanCapitalDefenses([superDragonPostData]);
  }

  superGiantPost(): ClanCapitalDefenses {
    return new ClanCapitalDefenses([superGiantPostData]);
  }

  superWizardTower(): ClanCapitalDefenses {
    return new ClanCapitalDefenses([superWizardTowerData]);
  }

  rocketArtillery(): ClanCapitalDefenses {
    return new ClanCapitalDefenses([rocketArtilleryData]);
  }

  reflector(): ClanCapitalDefenses {
    return new ClanCapitalDefenses([reflectorData]);
  }

  /** Filter to defenses that target the given unit type. */
  byTargetType(type: 'ground' | 'air' | 'both'): ClanCapitalDefenses {
    return new ClanCapitalDefenses(this.data.filter((d) => d.targetType === type));
  }

  /** Filter to defenses that have at least one level available at or below the given Capital Hall level. */
  byCapitalHall(level: number): ClanCapitalDefenses {
    return new ClanCapitalDefenses(
      this.data.filter((d) =>
        d.levels.some((l) => l.capitalHallRequired !== undefined && l.capitalHallRequired <= level),
      ),
    );
  }
}
