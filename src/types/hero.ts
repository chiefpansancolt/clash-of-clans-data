import { BuildTime, ResourceType } from './common';

export interface BuilderHeroAbilityChargeLevel {
  attackType: string;
  /** For Chain Lightning: damage decay between targets */
  chainDamageDecay?: number;
  /** For continuous-attack modes: damage per second */
  dps?: number;
  /** For continuous-attack modes: damage per hit */
  dph?: number;
  /** For bomb-drop modes: total damage of the bomb */
  damage?: number;
  /** For splash/bomb modes: blast radius in tiles */
  damageRadius?: number;
  healthRecovery: number;
  targets?: number;
}

export interface BuilderHeroAbilityLevel {
  abilityLevel: number;
  chargeLevel1: BuilderHeroAbilityChargeLevel;
  chargeLevel2: BuilderHeroAbilityChargeLevel;
  chargeLevel3: BuilderHeroAbilityChargeLevel;
}

export interface BuilderHeroAbility {
  name: string;
  cooldownPerChargeLevel: number;
  /** Ability ends after this many hits (Electric Hammer). */
  durationHits?: number;
  /** Movement speed while ability is active (Bomb Rush). */
  movementSpeedDuringAbility?: number;
  levels: BuilderHeroAbilityLevel[];
}

export interface BuilderHeroLevel {
  level: number;
  damagePerSecond: number;
  damagePerHit: number;
  hitpoints: number;
  abilityLevel: number | null;
  builderHallLevelRequired: number;
  upgradeCost: number;
  upgradeCostResource: 'Builder Elixir';
  upgradeTime: BuildTime;
}

export interface BuilderHero {
  id: string;
  name: string;
  description?: string;
  base: 'builder';
  category: 'hero';
  preferredTarget: string;
  attackType: string;
  movementSpeed: number;
  attackSpeed: number;
  range: number;
  specialAbility?: string;
  ability?: BuilderHeroAbility;
  images: { icon: string };
  levels: BuilderHeroLevel[];
}

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
