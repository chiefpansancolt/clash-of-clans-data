import { BuildTime, DonationCost, ResourceType } from './common';

export interface HomeSpellLevel {
  level: number;
  damage?: number;
  totalHealing?: number;
  healingPerPulse?: number;
  totalHealingOnHeroes?: number;
  damageIncrease?: number;
  speedIncrease?: number;
  spellDuration?: number;
  clonedCapacity?: number;
  recalledCapacity?: number;
  heroHealPercent?: number;
  totemHitpoints?: number;
  maxDamagePerSecond?: number;
  speedDecrease?: number;
  attackRateDecrease?: number;
  radius?: number;
  buildingDamagePercent?: number;
  troopDamagePercent?: number;
  skeletonsGenerated?: number;
  batsGenerated?: number;
  incomingDamageReduction?: number;
  laboratoryRequired: number;
  townHallRequired: number;
  researchCost: number;
  researchCostResource: ResourceType;
  researchTime: BuildTime;
}

export interface SkeletonStats {
  preferredTarget: string;
  attackType: string;
  movementSpeed: number;
  attackSpeed: number;
  range: number;
  damagePerSecond: number;
  hitpoints: number;
  armorHitpoints: number;
}

export interface BatStats {
  preferredTarget: string;
  attackType: string;
  movementSpeed: number;
  attackSpeed: number;
  range: number;
  damagePerSecond: number;
  damageVsResources: number;
  hitpoints: number;
}

export interface HomeSpell {
  id: string;
  name: string;
  description?: string;
  base: 'home';
  category: 'spell';
  spellType: 'regular' | 'dark';
  skeletonStats?: SkeletonStats;
  batStats?: BatStats;
  radius?: number;
  housingSpace: number;
  donationCost: DonationCost;
  spellFactoryLevelRequired: number;
  stunTime?: number;
  numberOfPulses?: number;
  timeBetweenPulses?: number;
  targetType?: 'ground' | 'air' | 'both' | 'defenses';
  boostTime?: number;
  spellDuration?: number;
  clonedLifespan?: number;
  hitpointDecayPerSecond?: number;
  images: { icon: string };
  levels: HomeSpellLevel[];
}

export interface ClanCapitalSpellLevel {
  level: number;
  districtHallRequired: number;
  radius?: number;
  damage?: number;
  damageIncrease?: number;
  speedIncrease?: number;
  healingPerSecond?: number;
  healingPerPulse?: number;
  skeletonCount?: number;
  images: { normal: string };
}

export interface ClanCapitalSkeletonStats {
  preferredTarget: string;
  targetsType: 'ground' | 'both';
  damagePerSecond: number;
  damagePerHit: number;
  hitpoints: number;
  shieldHitpoints?: number;
  attackSpeed: number;
  movementSpeed: number;
}

export interface ClanCapitalSpell {
  id: string;
  name: string;
  description?: string;
  base: 'clan_capital';
  category: 'spell';
  radius?: number;
  housingSpace: number;
  durationAttacks?: number;
  timeBetweenPulses?: number;
  stunDuration?: number;
  requiredSpellFactory?: string;
  skeletonStatsGround?: ClanCapitalSkeletonStats;
  skeletonStatsAir?: ClanCapitalSkeletonStats;
  levels: ClanCapitalSpellLevel[];
}
