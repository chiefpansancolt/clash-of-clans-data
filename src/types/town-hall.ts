import { BuildTime, ResourceType } from './common';

export interface TownHallStorageCapacity {
  gold: number;
  elixir: number;
  darkElixir: number;
}

export interface TownHallWeaponLevel {
  level: number;
  dps: number;
  damagePerHit: number;
  buildCost: number;
  buildCostResource: ResourceType;
  buildTime: BuildTime;
  xpGained: number;
  images: {
    normal: string;
    townHall?: string;
  };
}

export interface TownHallWeapon {
  name: string;
  hitpoints: number;
  targets: number;
  range: number;
  attackSpeed: number;
  targetType: 'ground' | 'air' | 'both';
  damageType: string;
  deathDamage?: number;
  deathDamageRadius?: number;
  deathSpeedDecrease?: number;
  deathAttackRateDecrease?: number;
  deathPoisonMaxDps?: number;
  deathPoisonDuration?: number;
  flameMaxDps?: number;
  flameDuration?: number;
  levels: TownHallWeaponLevel[];
}

export interface TownHallLevel {
  level: number;
  hitpoints: number;
  buildCost: number;
  buildCostResource: ResourceType;
  buildTime: BuildTime;
  xpGained: number;
  maxBuildings: number;
  maxTraps: number;
  storageCapacity: TownHallStorageCapacity;
  weapon: TownHallWeapon | null;
  images: {
    normal: string;
  };
}

export interface TownHall {
  id: string;
  name: string;
  base: 'home';
  category: 'town-hall';
  size: string;
  description?: string;
  levels: TownHallLevel[];
}
