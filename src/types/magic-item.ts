export type MagicItemType = 'snack' | 'potion' | 'book' | 'hammer' | 'utility';

// ── Effect types ─────────────────────────────────────────────────────────────

/** Effect that reduces build or research time by a speed multiplier for 1 hour. */
export interface TimeReductionEffect {
  type: 'time-reduction';
  /** Speed multiplier (e.g. 2 = 2x speed → reduces 2 hours in 60 min). */
  multiplier: number;
  /** Duration in hours that the effect is active. */
  durationHours: number;
  /** Which queue the effect applies to. */
  appliesTo: 'builders' | 'research' | 'pets';
}

/** Effect that boosts units/equipment to max Town Hall level for a number of battles. */
export interface CombatBoostEffect {
  type: 'combat-boost';
  boostTo: 'max-town-hall-level';
  /** Number of battles the boost is active for. */
  battles: number;
  /** Which unit categories are boosted. */
  appliesTo: string[];
}

/** Effect that enables free Clan Castle reinforcements for a duration. */
export interface ClanCastleEffect {
  type: 'clan-castle';
  /** Duration in hours that the effect is active. */
  durationHours: number;
  appliesTo: 'clan-castle-reinforcements';
}

/** Effect that instantly completes any ongoing upgrade of the given type. Used by Books. */
export interface InstantCompleteEffect {
  type: 'instant-complete';
  /** Which upgrade queue the book can complete. */
  appliesTo: 'troops' | 'buildings' | 'spells' | 'heroes-and-pets' | 'any';
}

/** Effect that instantly upgrades a unit or building to the next level. Used by Hammers. */
export interface InstantUpgradeEffect {
  type: 'instant-upgrade';
  /** Which category of item the hammer applies to. */
  appliesTo: 'troops' | 'buildings' | 'spells' | 'heroes-and-pets';
}

/** Effect that boosts units/heroes to max Town Hall level for a duration. Used by Hero/Power Potions. */
export interface UnitLevelBoostEffect {
  type: 'unit-level-boost';
  boostTo: 'max-town-hall-level';
  /** Duration in hours that the boost is active. */
  durationHours: number;
  /** Which unit categories are boosted. */
  appliesTo: string[];
}

/** Effect that boosts resource collectors for a duration. Used by Resource Potion. */
export interface ResourceCollectorBoostEffect {
  type: 'resource-collector-boost';
  /** Speed multiplier applied to collectors (e.g. 2 = 2x production rate). */
  multiplier: number;
  /** Duration in days that the boost is active. */
  durationDays: number;
}

/** Effect that activates the Clock Tower boost for a duration. Used by Clock Tower Potion. */
export interface ClockTowerBoostEffect {
  type: 'clock-tower-boost';
  /** Duration in minutes that the Clock Tower is boosted. */
  durationMinutes: number;
}

/** Effect that boosts a single troop to its Super Troop version for a duration. Used by Super Potion. */
export interface SuperTroopEffect {
  type: 'super-troop';
  /** Duration in days the Super Troop boost is active. */
  durationDays: number;
}

/** Effect that upgrades a Wall piece without consuming resources. Used by Wall Ring. */
export interface WallUpgradeEffect {
  type: 'wall-upgrade';
  /** Gold/Elixir equivalent per ring in Home Village. */
  homeVillageGoldEquivalent: number;
  /** Builder Gold/Elixir equivalent per ring in Builder Base. */
  builderBaseGoldEquivalent: number;
}

/** Effect that makes a single obstacle permanently movable. Used by Shovel of Obstacles. */
export interface ObstacleMoveEffect {
  type: 'obstacle-move';
  /** What the shovel can be applied to. */
  targets: 'single-obstacle';
}

/** Effect that instantly resets the Star Bonus availability in the Builder Base. Used by Builder Star Jar. */
export interface StarBonusResetEffect {
  type: 'star-bonus-reset';
  appliesTo: 'builder-base-star-bonus';
}

export type MagicItemEffect =
  | TimeReductionEffect
  | CombatBoostEffect
  | ClanCastleEffect
  | InstantCompleteEffect
  | InstantUpgradeEffect
  | UnitLevelBoostEffect
  | ResourceCollectorBoostEffect
  | ClockTowerBoostEffect
  | SuperTroopEffect
  | WallUpgradeEffect
  | ObstacleMoveEffect
  | StarBonusResetEffect;

// ── Item interfaces ──────────────────────────────────────────────────────────

export interface MagicItem {
  id: string;
  name: string;
  description: string;
  itemType: MagicItemType;
  effect: MagicItemEffect;
  /** Path to the item image. */
  image: string;
}

export type MagicSnack = MagicItem & { itemType: 'snack' };
export type MagicPotion = MagicItem & { itemType: 'potion' };
export type MagicBook = MagicItem & { itemType: 'book' };
export type MagicHammer = MagicItem & { itemType: 'hammer' };
export type MagicUtility = MagicItem & { itemType: 'utility' };
