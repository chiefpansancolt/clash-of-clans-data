import { Building, BuildingLevel } from './building';
import { BuildTime, ResourceType } from './common';

// ── Home Village Troops ───────────────────────────────────────────────────

export interface HomeTroopLevelStats {
  dps?: number;
  damagePerShot?: number;
  dpsOnHeroes?: number;
  deathDamage?: number;
  chainDamagePerShot?: number;
  healingPerSecond?: number;
  healingPerPulse?: number;
  healingPerSecondOnHeroes?: number;
  healingPerPulseOnHeroes?: number;
}

export interface HomeTroopLevel {
  level: number;
  hitpoints: number;
  townHallRequired: number;
  laboratoryRequired: number;
  researchCost: number;
  researchCostResource: ResourceType;
  researchTime: BuildTime;
  golemitesSpawned?: number;
  skeletonsPerSummon?: number;
  maxSkeletons?: number;
  skeletonLevel?: number;
  pupsOnOffense?: number;
  pupsOnDefense?: number;
  deathFreezeTimeOnOffense?: number;
  deathFreezeTimeOnDefense?: number;
  poisonMaxDps?: number;
  poisonSpeedDecrease?: number;
  poisonAttackRateDecrease?: number;
  auraHpIncrease?: number;
  stats: {
    normal: HomeTroopLevelStats;
    enraged?: HomeTroopLevelStats;
    aura?: HomeTroopLevelStats;
    wall?: HomeTroopLevelStats;
  };
  images: {
    normal: string;
  };
}

export interface HomeSuperTroopLevel {
  level: number;
  hitpoints: number;
  townHallRequired?: number;
  pupsOnOffense?: number;
  pupsOnDefense?: number;
  freezeTime?: number;
  stats: {
    normal: HomeTroopLevelStats;
    stage2?: HomeTroopLevelStats;
    stage3?: HomeTroopLevelStats;
  };
  images: {
    normal: string;
  };
}

export interface HomeSuperTroop {
  id: string;
  name: string;
  description?: string;
  housingSpace: number;
  movementSpeed: number;
  attackSpeed: number;
  shotsPerBurst?: number;
  timeBetweenBursts?: number;
  range: number;
  boostCost: number;
  boostCostResource: 'Dark Elixir';
  boostDuration: BuildTime;
  regularLevelRequired: number;
  specialAbility?: string;
  images: { icon: string };
  levels: HomeSuperTroopLevel[];
}

export interface HomeTroop {
  id: string;
  name: string;
  description?: string;
  base: 'home';
  category: 'troop';
  troopType: 'regular' | 'dark';
  housingSpace: number;
  movementSpeed: number;
  range: number;
  attackSpeed: number;
  damageType: 'single' | 'splash' | 'area' | 'chain' | 'none';
  targetType: 'ground' | 'air' | 'both';
  barrackLevelRequired: number;
  auraAttackSpeed?: number;
  auraRange?: number;
  wallAttackSpeed?: number;
  summonCooldown?: number;
  preferredTarget?: string;
  freezeRadiusOnOffense?: number;
  freezeRadiusOnDefense?: number;
  specialAbility?: string;
  images: { icon: string };
  levels: HomeTroopLevel[];
  superTroop?: HomeSuperTroop;
}

// ── Builder Base Troops (typed for future implementation) ─────────────────

export interface TroopModeStats {
  dps: number;
  damagePerShot: number;
  trainingCost: number;
  trainingCostResource: ResourceType;
  trainingTime: number;
  movementSpeed: number;
}

export interface BuilderTroopLevel extends BuildingLevel {
  builderHallRequired: number;
  stats: {
    normal: TroopModeStats;
  };
  images: {
    normal: string;
  };
}

export interface BuilderTroop extends Building<BuilderTroopLevel> {
  range: number;
  attackSpeed: number;
  damageType: 'single' | 'splash' | 'area';
  targetType: 'ground' | 'air' | 'both';
  housingSpace: number;
}

// ── Clan Capital Troops (typed for future implementation) ─────────────────

export interface ClanCapitalTroopLevel extends BuildingLevel {
  districtHallRequired: number;
  stats: {
    normal: TroopModeStats;
  };
  images: {
    normal: string;
  };
}

export interface ClanCapitalTroop extends Building<ClanCapitalTroopLevel> {
  range: number;
  attackSpeed: number;
  damageType: 'single' | 'splash' | 'area';
  targetType: 'ground' | 'air' | 'both';
  housingSpace: number;
}
