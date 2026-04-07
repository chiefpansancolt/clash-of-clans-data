import { BuildTime, ResourceType, TownHallAvailability } from './common';

export interface TrapLevel {
  level: number;
  damage: number;
  springCapacity?: number;
  damageRadius?: number;
  spawnedUnits?: number;
  skeletonLevel?: number;
  duration?: number;
  buildCost: number;
  buildCostResource: ResourceType;
  buildTime: BuildTime;
  xpGained: number;
  townHallRequired: number;
  images: { normal: string; air?: string };
}

export interface HomeTrap {
  id: string;
  name: string;
  description?: string;
  base: 'home';
  category: 'trap';
  size: string;
  triggerRadius: number;
  triggerHousingSpace?: number;
  damageRadius?: number;
  damageType: 'splash' | 'single';
  targetType: 'ground' | 'air' | 'both';
  favoriteTarget?: string;
  specialAbility?: string;
  levels: TrapLevel[];
  availablePerTownHall: TownHallAvailability[];
}
