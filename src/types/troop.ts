import { Building, BuildingLevel } from './building';
import { ResourceType } from './common';

export interface TroopModeStats {
  dps: number;
  damagePerShot: number;
  trainingCost: number;
  trainingCostResource: ResourceType;
  trainingTime: number;
  movementSpeed: number;
}

export interface HomeTroopLevel extends BuildingLevel {
  townHallRequired: number;
  laboratoryRequired: number;
  researchCost: number;
  researchCostResource: ResourceType;
  researchTime: number;
  stats: {
    normal: TroopModeStats;
  };
  images: {
    normal: string;
  };
}

export interface HomeTroop extends Building<HomeTroopLevel> {
  range: number;
  attackSpeed: number;
  damageType: 'single' | 'splash' | 'area';
  targetType: 'ground' | 'air' | 'both';
  troopType: 'regular' | 'dark';
  housingSpace: number;
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
