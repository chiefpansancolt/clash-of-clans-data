import { BuildTime, ResourceType, TownHallAvailability } from './common';

export interface TrapLevel {
  level: number;
  /** Damage dealt when triggered. */
  damage: number;
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
  /** Radius of the damage area when triggered (tiles). */
  damageRadius: number;
  damageType: 'splash' | 'single';
  targetType: 'ground' | 'air' | 'both';
  favoriteTarget?: string;
  levels: TrapLevel[];
  availablePerTownHall: TownHallAvailability[];
}
