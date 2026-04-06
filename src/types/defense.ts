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
  /** Inferno Tower single-target mode: DPS at start of beam before ramping. */
  dpsInitial?: number;
  /** Inferno Tower single-target mode: DPS after 1.5 seconds of continuous firing. */
  dpsAfter1p5s?: number;
  /** Inferno Tower multi-target mode: max number of targets hit simultaneously. */
  numberOfTargets?: number;
}

export interface DefenseMode {
  range: number;
  attackSpeed: number;
  damageType: 'single' | 'splash' | 'none' | 'multiple';
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
    multiTarget?: DefenseModeStats;
  };
  images: {
    normal: string;
    gearedUpNormal?: string;
    gearedUpBurst?: string;
    gearedUpFastAttack?: string;
    airAndGround?: string;
    groundDepleted?: string;
    airAndGroundDepleted?: string;
    multiTarget?: string;
    singleTargetDepleted?: string;
    multiTargetDepleted?: string;
  };
}

export interface HomeDefense extends Building<HomeDefenseLevel> {
  targetType: 'ground' | 'air' | 'both';
  modes: {
    normal: DefenseMode;
    gearedUpBurst?: BurstDefenseMode;
    gearedUpFastAttack?: DefenseMode;
    airAndGround?: DefenseMode;
    multiTarget?: DefenseMode;
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
