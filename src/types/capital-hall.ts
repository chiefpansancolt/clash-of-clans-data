import { BuildTime, ResourceType } from './common';

export interface CapitalHallWeaponMode {
  range: number;
  attackSpeed: number;
  damageType: string;
  targetType: 'ground' | 'air' | 'both';
}

export interface CapitalHallLevel {
  level: number;
  hitpoints: number;
  buildCost: number;
  buildCostResource: ResourceType;
  buildTime: BuildTime;
  xpGained: number;
  capitalUpgradesRequired?: number;
  newCapitalUpgradesRequired?: number;
  maxBuildings: number;
  dps?: number;
  damagePerShot?: number;
  images: {
    normal: string;
    active?: string;
  };
}

export interface CapitalHall {
  id: string;
  name: string;
  base: 'clan_capital';
  category: 'capital-hall';
  size: string;
  description?: string;
  weaponMode: CapitalHallWeaponMode;
  levels: CapitalHallLevel[];
}
