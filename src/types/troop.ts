import { Building, BuildingLevel } from './building';
import { BuildTime, ResourceType } from './common';

// ── Home Village Troops ───────────────────────────────────────────────────

export interface HomeTroopLevelStats {
  dps: number;
  damagePerShot: number;
  deathDamage?: number;
}

export interface HomeTroopLevel {
  level: number;
  hitpoints: number;
  townHallRequired: number;
  laboratoryRequired: number;
  researchCost: number;
  researchCostResource: ResourceType;
  researchTime: BuildTime;
  stats: {
    normal: HomeTroopLevelStats;
  };
  images: {
    normal: string;
  };
}

export interface HomeSuperTroopLevel {
  level: number;
  hitpoints: number;
  stats: {
    normal: HomeTroopLevelStats;
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
  damageType: 'single' | 'splash' | 'area';
  targetType: 'ground' | 'air' | 'both';
  barrackLevelRequired: number;
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
