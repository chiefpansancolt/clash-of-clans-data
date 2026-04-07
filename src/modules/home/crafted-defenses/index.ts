import { QueryBase } from '@/common/query-base';
import { CraftedDefense } from '@/types';
import { airBombsData } from './air-bombs';
import { bombHiveData } from './bomb-hive';
import { crusherMortarData } from './crusher-mortar';
import { flameSpinnerData } from './flame-spinner';
import { heroBellData } from './hero-bell';
import { hookTowerData } from './hook-tower';
import { lavaLauncherData } from './lava-launcher';
import { lightBeamData } from './light-beam';
import { roasterData } from './roaster';

/**
 * All crafted defenses across all phases, registered here as they are implemented.
 *
 * Phase 1 (former): Hook Tower, Flame Spinner, Crusher Mortar
 * Phase 2 (former): Hero Bell, Bomb Hive, Light Beam
 * Phase 3 (current): Roaster, Air Bombs, Lava Launcher
 */
const allCraftedDefenses: CraftedDefense[] = [
  hookTowerData,
  flameSpinnerData,
  crusherMortarData,
  heroBellData,
  bombHiveData,
  lightBeamData,
  roasterData,
  airBombsData,
  lavaLauncherData,
];

export class HomeVillageCraftedDefenses extends QueryBase<CraftedDefense> {
  constructor(data: CraftedDefense[] = allCraftedDefenses) {
    super(data);
  }

  // Per-building accessors
  hookTower(): HomeVillageCraftedDefenses {
    return new HomeVillageCraftedDefenses([hookTowerData]);
  }
  flameSpinner(): HomeVillageCraftedDefenses {
    return new HomeVillageCraftedDefenses([flameSpinnerData]);
  }
  crusherMortar(): HomeVillageCraftedDefenses {
    return new HomeVillageCraftedDefenses([crusherMortarData]);
  }
  heroBell(): HomeVillageCraftedDefenses {
    return new HomeVillageCraftedDefenses([heroBellData]);
  }
  bombHive(): HomeVillageCraftedDefenses {
    return new HomeVillageCraftedDefenses([bombHiveData]);
  }
  lightBeam(): HomeVillageCraftedDefenses {
    return new HomeVillageCraftedDefenses([lightBeamData]);
  }
  roaster(): HomeVillageCraftedDefenses {
    return new HomeVillageCraftedDefenses([roasterData]);
  }
  airBombs(): HomeVillageCraftedDefenses {
    return new HomeVillageCraftedDefenses([airBombsData]);
  }
  lavaLauncher(): HomeVillageCraftedDefenses {
    return new HomeVillageCraftedDefenses([lavaLauncherData]);
  }

  // Category filters
  /** Filter to a specific crafting phase (1, 2, 3, …). */
  byPhase(phase: number): HomeVillageCraftedDefenses {
    return new HomeVillageCraftedDefenses(this.data.filter((d) => d.craftingPhase === phase));
  }

  /** Filter to defenses in the currently active crafting phase. */
  current(): HomeVillageCraftedDefenses {
    return new HomeVillageCraftedDefenses(this.data.filter((d) => d.isCurrent));
  }

  /** Filter to defenses from previous (retired) crafting phases. */
  former(): HomeVillageCraftedDefenses {
    return new HomeVillageCraftedDefenses(this.data.filter((d) => !d.isCurrent));
  }

  /** Filter by target type. */
  byTargetType(type: CraftedDefense['targetType']): HomeVillageCraftedDefenses {
    return new HomeVillageCraftedDefenses(this.data.filter((d) => d.targetType === type));
  }
}
