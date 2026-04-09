import { BuildTime, ResourceType } from './common';

export interface HomeHeroLevel {
  level: number;
  damagePerSecond: number;
  damagePerHit: number;
  hitpoints: number;
  healthRecovery: number;
  heroHallLevelRequired: number;
  upgradeCost: number;
  upgradeCostResource: ResourceType;
  upgradeTime: BuildTime;
}

export interface HomeHero {
  id: string;
  name: string;
  description?: string;
  base: 'home';
  category: 'hero';
  preferredTarget: string;
  attackType: string;
  movementSpeed: number;
  attackSpeed: number;
  range: number;
  searchRadius: number;
  specialAbility?: string;
  images: { icon: string };
  levels: HomeHeroLevel[];
}
