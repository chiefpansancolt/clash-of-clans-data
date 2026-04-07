import { BuildTime, ResourceType, TownHallAvailability } from './common';

export interface TrapLevel {
  level: number;
  damage: number;
  springCapacity?: number; // Spring Trap: max housing space ejectable
  damageRadius?: number; // per-level override (Giant Bomb)
  spawnedUnits?: number; // Skeleton Trap: number of skeletons spawned
  skeletonLevel?: number; // Skeleton Trap: level of each spawned skeleton
  buildCost: number;
  buildCostResource: ResourceType;
  buildTime: BuildTime;
  xpGained: number;
  townHallRequired: number;
  images: { normal: string; air?: string }; // air variant for Skeleton Trap air mode
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
