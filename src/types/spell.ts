import { BuildTime, ResourceType } from './common';

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

export interface HomeSpell {
  id: string;
  name: string;
  description?: string;
  base: 'home';
  category: 'spell';
  spellType: 'regular' | 'dark';
  skeletonStats?: SkeletonStats;
  radius?: number;
  housingSpace: number;
  spellFactoryLevelRequired: number;
  stunTime?: number;
  numberOfPulses?: number;
  timeBetweenPulses?: number;
  targetType?: 'ground' | 'air' | 'both';
  boostTime?: number;
  spellDuration?: number;
  clonedLifespan?: number;
  hitpointDecayPerSecond?: number;
  images: { icon: string };
  levels: HomeSpellLevel[];
}

// Placeholder for future Clan Capital spell implementation
export interface ClanCapitalSpellLevel {
  level: number;
  districtHallRequired: number;
  images: { normal: string };
}

export interface ClanCapitalSpell {
  id: string;
  name: string;
  description?: string;
  base: 'clan_capital';
  category: 'spell';
  radius: number;
  housingSpace: number;
  levels: ClanCapitalSpellLevel[];
}
