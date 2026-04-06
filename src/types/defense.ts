import { Building, BuildingLevel } from './building';
import {
  BuilderHallAvailability,
  BuildTime,
  DistrictHallAvailability,
  ResourceType,
  TownHallAvailability,
} from './common';

export interface DefenseModeStats {
  dps?: number;
  damagePerShot?: number;
  pushStrength?: number;
}

export interface DefenseMode {
  range: number;
  attackSpeed: number;
  damageType: 'single' | 'splash' | 'none';
  splashRadius?: number;
  triggerRange?: number;
}

export interface BurstDefenseMode extends DefenseMode {
  shotsPerBurst: number;
  timeBetweenBursts: number;
  availableFromLevel: number;
}

export interface GearUp {
  cost: number;
  costResource: ResourceType;
  time: BuildTime;
  requiresLevel: number;
  requiresBuilderBuilding?: string;
  requiresBuilderBuildingLevel?: number;
}

// ── Home Village ──────────────────────────────────────────────────────────────

export interface HomeDefenseLevel extends BuildingLevel {
  townHallRequired: number;
  deathDamage?: number;
  stats: {
    normal: DefenseModeStats;
    gearedUpBurst?: DefenseModeStats;
    gearedUpFastAttack?: DefenseModeStats;
  };
  images: {
    normal: string;
    gearedUpNormal?: string;
    gearedUpBurst?: string;
    gearedUpFastAttack?: string;
    airAndGround?: string;
    groundDepleted?: string;
    airAndGroundDepleted?: string;
  };
}

export interface HomeDefense extends Building<HomeDefenseLevel> {
  targetType: 'ground' | 'air' | 'both';
  modes: {
    normal: DefenseMode;
    gearedUpBurst?: BurstDefenseMode;
    gearedUpFastAttack?: DefenseMode;
    airAndGround?: DefenseMode;
  };
  gearUp?: GearUp;
  availablePerTownHall: TownHallAvailability[];
}

// ── Builder Base ──────────────────────────────────────────────────────────────

export interface BuilderDefenseLevel extends BuildingLevel {
  builderHallRequired: number;
  stats: {
    normal: DefenseModeStats;
  };
  images: {
    normal: string;
  };
}

export interface BuilderDefense extends Building<BuilderDefenseLevel> {
  targetType: 'ground' | 'air' | 'both';
  modes: {
    normal: DefenseMode;
  };
  availablePerBuilderHall: BuilderHallAvailability[];
}

// ── Clan Capital ──────────────────────────────────────────────────────────────

export interface ClanCapitalDefenseLevel extends BuildingLevel {
  districtHallRequired: number;
  stats: {
    normal: DefenseModeStats;
  };
  images: {
    normal: string;
  };
}

export interface ClanCapitalDefense extends Building<ClanCapitalDefenseLevel> {
  targetType: 'ground' | 'air' | 'both';
  modes: {
    normal: DefenseMode;
  };
  availablePerDistrictHall: DistrictHallAvailability[];
}
