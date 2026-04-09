import { BuildTime, ResourceType } from './common';

export interface HomePetLevel {
  level: number;
  damagePerSecond: number;
  damagePerHit: number;
  damageVsWalls?: number;
  hitpoints: number;
  petHouseLevelRequired: number;
  townHallRequired: number;
  upgradeCost: number;
  upgradeCostResource: ResourceType;
  upgradeTime: BuildTime;
}

export interface HomePet {
  id: string;
  name: string;
  description?: string;
  base: 'home';
  category: 'pet';
  targetType: 'ground' | 'air' | 'both';
  preferredTarget?: string;
  attackType: string;
  movementSpeed: number;
  attackSpeed: number;
  range: number;
  petHouseLevelRequired: number;
  specialAbility?: string;
  numberOfTargets?: number;
  chainDamageDecay?: number;
  rageDuration?: number;
  rageSpeedIncrease?: number;
  rageDamageIncreasePercent?: number;
  images: { icon: string; normal: string };
  levels: HomePetLevel[];
}
