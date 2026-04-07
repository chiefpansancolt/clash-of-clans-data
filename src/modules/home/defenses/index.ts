import { QueryBase } from '@/common/query-base';
import { DefenseMode, HomeDefense } from '@/types';
import { airDefenseData } from './air-defense';
import { airSweeperData } from './air-sweeper';
import { archerTowerData } from './archer-tower';
import { bombTowerData } from './bomb-tower';
import { buildersHutData } from './builders-hut';
import { cannonData } from './cannon';
import { craftingStationData } from './crafting-station';
import { eagleArtilleryData } from './eagle-artillery';
import { firespitterData } from './firespitter';
import { hiddenTeslaData } from './hidden-tesla';
import { infernoTowerData } from './inferno-tower';
import { monolithData } from './monolith';
import { mortarData } from './mortar';
import { multiArcherTowerData } from './multi-archer-tower';
import { multiGearTowerData } from './multi-gear-tower';
import { revengeTowerData } from './revenge-tower';
import { ricochetCannonData } from './ricochet-cannon';
import { scattershotData } from './scattershot';
import { spellTowerData } from './spell-tower';
import { superWizardTowerData } from './super-wizard-tower';
import { wizardTowerData } from './wizard-tower';
import { xBowData } from './x-bow';

const allDefenses: HomeDefense[] = [
  cannonData,
  archerTowerData,
  mortarData,
  airDefenseData,
  wizardTowerData,
  airSweeperData,
  hiddenTeslaData,
  bombTowerData,
  xBowData,
  infernoTowerData,
  eagleArtilleryData,
  scattershotData,
  buildersHutData,
  spellTowerData,
  monolithData,
  multiArcherTowerData,
  firespitterData,
  multiGearTowerData,
  revengeTowerData,
  ricochetCannonData,
  superWizardTowerData,
  craftingStationData,
];

export class HomeVillageDefenses extends QueryBase<HomeDefense> {
  constructor(data: HomeDefense[] = allDefenses) {
    super(data);
  }

  // Per-building accessors
  cannon(): HomeVillageDefenses {
    return new HomeVillageDefenses([cannonData]);
  }
  archerTower(): HomeVillageDefenses {
    return new HomeVillageDefenses([archerTowerData]);
  }
  mortar(): HomeVillageDefenses {
    return new HomeVillageDefenses([mortarData]);
  }
  airDefense(): HomeVillageDefenses {
    return new HomeVillageDefenses([airDefenseData]);
  }
  wizardTower(): HomeVillageDefenses {
    return new HomeVillageDefenses([wizardTowerData]);
  }
  airSweeper(): HomeVillageDefenses {
    return new HomeVillageDefenses([airSweeperData]);
  }
  hiddenTesla(): HomeVillageDefenses {
    return new HomeVillageDefenses([hiddenTeslaData]);
  }
  bombTower(): HomeVillageDefenses {
    return new HomeVillageDefenses([bombTowerData]);
  }
  xBow(): HomeVillageDefenses {
    return new HomeVillageDefenses([xBowData]);
  }
  infernoTower(): HomeVillageDefenses {
    return new HomeVillageDefenses([infernoTowerData]);
  }
  eagleArtillery(): HomeVillageDefenses {
    return new HomeVillageDefenses([eagleArtilleryData]);
  }
  scattershot(): HomeVillageDefenses {
    return new HomeVillageDefenses([scattershotData]);
  }
  buildersHut(): HomeVillageDefenses {
    return new HomeVillageDefenses([buildersHutData]);
  }
  spellTower(): HomeVillageDefenses {
    return new HomeVillageDefenses([spellTowerData]);
  }
  monolith(): HomeVillageDefenses {
    return new HomeVillageDefenses([monolithData]);
  }
  multiArcherTower(): HomeVillageDefenses {
    return new HomeVillageDefenses([multiArcherTowerData]);
  }
  firespitter(): HomeVillageDefenses {
    return new HomeVillageDefenses([firespitterData]);
  }
  multiGearTower(): HomeVillageDefenses {
    return new HomeVillageDefenses([multiGearTowerData]);
  }
  revengeTower(): HomeVillageDefenses {
    return new HomeVillageDefenses([revengeTowerData]);
  }
  ricochetCannon(): HomeVillageDefenses {
    return new HomeVillageDefenses([ricochetCannonData]);
  }
  superWizardTower(): HomeVillageDefenses {
    return new HomeVillageDefenses([superWizardTowerData]);
  }
  craftingStation(): HomeVillageDefenses {
    return new HomeVillageDefenses([craftingStationData]);
  }

  // Category filters
  /** Filter to a specific building by name (case-insensitive). */
  byBuilding(name: string): HomeVillageDefenses {
    const q = name.toLowerCase();
    return new HomeVillageDefenses(this.data.filter((d) => d.name.toLowerCase() === q));
  }

  /**
   * Filter to buildings that have at least one level available at or before
   * the given Town Hall level.
   */
  byTownHall(level: number): HomeVillageDefenses {
    return new HomeVillageDefenses(
      this.data.filter((d) => d.levels.some((l) => l.townHallRequired <= level)),
    );
  }

  /** Filter by damage type of the normal mode (use 'none' for knockback-only buildings like Air Sweeper). Buildings without a normal mode (e.g. Spell Tower) are excluded. */
  byDamageType(type: DefenseMode['damageType']): HomeVillageDefenses {
    return new HomeVillageDefenses(this.data.filter((d) => d.modes.normal?.damageType === type));
  }

  /** Filter to buildings that can be geared up (any gear-up mode). */
  hasGearUp(): HomeVillageDefenses {
    return new HomeVillageDefenses(this.data.filter((d) => d.gearUp !== undefined));
  }
}
