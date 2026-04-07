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

export * from './air-bombs';
export * from './bomb-hive';
export * from './crusher-mortar';
export * from './flame-spinner';
export * from './hero-bell';
export * from './hook-tower';
export * from './lava-launcher';
export * from './light-beam';
export * from './roaster';

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

export class HomeCraftedDefenseQuery extends QueryBase<CraftedDefense> {
  constructor(data: CraftedDefense[] = allCraftedDefenses) {
    super(data);
  }

  /** Filter to a specific crafting phase (1, 2, 3, …). */
  byPhase(phase: number): HomeCraftedDefenseQuery {
    return new HomeCraftedDefenseQuery(this.data.filter((d) => d.craftingPhase === phase));
  }

  /** Filter to defenses in the currently active crafting phase. */
  current(): HomeCraftedDefenseQuery {
    return new HomeCraftedDefenseQuery(this.data.filter((d) => d.isCurrent));
  }

  /** Filter to defenses from previous (retired) crafting phases. */
  former(): HomeCraftedDefenseQuery {
    return new HomeCraftedDefenseQuery(this.data.filter((d) => !d.isCurrent));
  }

  /** Filter by target type. */
  byTargetType(type: CraftedDefense['targetType']): HomeCraftedDefenseQuery {
    return new HomeCraftedDefenseQuery(this.data.filter((d) => d.targetType === type));
  }
}

export function homeCraftedDefenses(
  source: CraftedDefense[] = allCraftedDefenses,
): HomeCraftedDefenseQuery {
  return new HomeCraftedDefenseQuery(source);
}
