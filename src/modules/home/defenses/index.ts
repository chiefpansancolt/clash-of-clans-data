import { QueryBase } from '@/common/query-base';
import { DefenseMode, HomeDefense } from '@/types';
import { airDefenseData } from './air-defense';
import { airSweeperData } from './air-sweeper';
import { archerTowerData } from './archer-tower';
import { bombTowerData } from './bomb-tower';
import { buildersHutData } from './builders-hut';
import { cannonData } from './cannon';
import { eagleArtilleryData } from './eagle-artillery';
import { hiddenTeslaData } from './hidden-tesla';
import { infernoTowerData } from './inferno-tower';
import { monolithData } from './monolith';
import { mortarData } from './mortar';
import { multiArcherTowerData } from './multi-archer-tower';
import { firespitterData } from './firespitter';
import { multiGearTowerData } from './multi-gear-tower';
import { revengeTowerData } from './revenge-tower';
import { ricochetCannonData } from './ricochet-cannon';
import { superWizardTowerData } from './super-wizard-tower';
import { scattershotData } from './scattershot';
import { spellTowerData } from './spell-tower';
import { wizardTowerData } from './wizard-tower';
import { xBowData } from './x-bow';

const allHomeDefenses: HomeDefense[] = [
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
];

export class HomeDefenseQuery extends QueryBase<HomeDefense> {
  constructor(data: HomeDefense[] = allHomeDefenses) {
    super(data);
  }

  /** Filter to a specific building by name (case-insensitive). */
  byBuilding(name: string): HomeDefenseQuery {
    const q = name.toLowerCase();
    return new HomeDefenseQuery(this.data.filter((d) => d.name.toLowerCase() === q));
  }

  /**
   * Filter to buildings that have at least one level available at or before
   * the given Town Hall level.
   */
  byTownHall(level: number): HomeDefenseQuery {
    return new HomeDefenseQuery(
      this.data.filter((d) => d.levels.some((l) => l.townHallRequired <= level)),
    );
  }

  /** Filter by damage type of the normal mode (use 'none' for knockback-only buildings like Air Sweeper). Buildings without a normal mode (e.g. Spell Tower) are excluded. */
  byDamageType(type: DefenseMode['damageType']): HomeDefenseQuery {
    return new HomeDefenseQuery(this.data.filter((d) => d.modes.normal?.damageType === type));
  }

  /** Filter to buildings that can be geared up (any gear-up mode). */
  hasGearUp(): HomeDefenseQuery {
    return new HomeDefenseQuery(this.data.filter((d) => d.gearUp !== undefined));
  }
}

export function homeDefenses(source: HomeDefense[] = allHomeDefenses): HomeDefenseQuery {
  return new HomeDefenseQuery(source);
}

export * from './air-defense';
export * from './air-sweeper';
export * from './archer-tower';
export * from './bomb-tower';
export * from './builders-hut';
export * from './cannon';
export * from './eagle-artillery';
export * from './hidden-tesla';
export * from './inferno-tower';
export * from './monolith';
export * from './mortar';
export * from './multi-archer-tower';
export * from './firespitter';
export * from './multi-gear-tower';
export * from './revenge-tower';
export * from './ricochet-cannon';
export * from './super-wizard-tower';
export * from './scattershot';
export * from './spell-tower';
export * from './wizard-tower';
export * from './x-bow';
