import { BuildTime, ResourceType, TownHallAvailability } from './common';

export interface TrapLevel {
  level: number;
  /** Damage dealt when triggered. */
  damage: number;
  /**
   * Spring Trap only — maximum total housing space of units it can eject.
   * Units exceeding this capacity are launched but take damage instead.
   */
  springCapacity?: number;
  buildCost: number;
  buildCostResource: ResourceType;
  buildTime: BuildTime;
  xpGained: number;
  townHallRequired: number;
  images: { normal: string };
}

export interface HomeTrap {
  id: string;
  name: string;
  description?: string;
  base: 'home';
  category: 'trap';
  size: string;
  /** Radius within which units trigger the trap (tiles). */
  triggerRadius: number;
  /** Radius of the damage area when triggered (tiles). Omitted for single-target traps. */
  damageRadius?: number;
  damageType: 'splash' | 'single';
  targetType: 'ground' | 'air' | 'both';
  favoriteTarget?: string;
  specialAbility?: string;
  levels: TrapLevel[];
  availablePerTownHall: TownHallAvailability[];
}
