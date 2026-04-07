import { BuildTime, ResourceType, TownHallAvailability } from './common';

export interface TrapLevel {
  level: number;
  damage: number;
  springCapacity?: number;
  damageRadius?: number;
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
  triggerRadius: number;
  damageRadius?: number;
  damageType: 'splash' | 'single';
  targetType: 'ground' | 'air' | 'both';
  favoriteTarget?: string;
  specialAbility?: string;
  levels: TrapLevel[];
  availablePerTownHall: TownHallAvailability[];
}
