import { BuildTime, ResourceType } from './common';

/**
 * A single upgrade level for one module of a Crafted Defense.
 * Each module has 10 levels (level 1 is the starting state — no cost to reach it).
 */
export interface CraftedDefenseModuleUpgrade {
  level: number;
  stat: number;
  buildCost: number;
  buildCostResource: ResourceType;
  buildTime: BuildTime;
  xpGained: number;
  sparkyStones: number;
}

/**
 * One of the three modules of a Crafted Defense.
 * Each module controls a specific aspect (e.g. hitpoints, damage, attack speed).
 */
export interface CraftedDefenseModule {
  name: string;
  controls: string;
  upgrades: CraftedDefenseModuleUpgrade[];
}

/**
 * Maps a range of effective levels to a visual image.
 * Effective level = sum of all three module levels (min 3, max 30).
 */
export interface CraftedDefenseImageEntry {
  fromEffectiveLevel: number;
  toEffectiveLevel: number;
  normal: string;
}

/**
 * A Crafted Defense entity — the seasonal rotating defense installed in the Crafting Station.
 *
 * Unlike regular buildings, Crafted Defenses use a 3-module upgrade system rather than
 * sequential levels. Each module is upgraded independently (levels 1–10), giving an
 * overall effective level of 3–30 (sum of all three module levels).
 *
 * All Crafted Defenses are TH18-only and available in the Crafting Station for the
 * duration of their crafting phase (approximately 4 months per phase).
 */
export interface CraftedDefense {
  id: string;
  name: string;
  description?: string;
  base: 'home';
  category: 'crafted-defense';
  size: string;
  craftingPhase: number;
  isCurrent: boolean;
  targetType: 'ground' | 'air' | 'both';
  modules: [CraftedDefenseModule, CraftedDefenseModule, CraftedDefenseModule];
  images: CraftedDefenseImageEntry[];
}
