import { Building, BuildingLevel } from './building';
import { BuildTime, BuilderHallAvailability, DistrictHallAvailability, ResourceType, TownHallAvailability } from './common';

export interface DefenseModeStats {
  dps: number;
  damagePerShot: number;
}

export interface DefenseMode {
  range: number;
  /** Seconds between shots (or between shots within a burst) */
  attackSpeed: number;
  damageType: 'single' | 'splash';
  /** Splash radius in tiles — only present for splash-damage buildings */
  splashRadius?: number;
}

export interface BurstDefenseMode extends DefenseMode {
  shotsPerBurst: number;
  /** Seconds between last shot of one burst and first shot of the next */
  timeBetweenBursts: number;
  /** Building level at which this mode becomes available */
  availableFromLevel: number;
}

export interface GearUp {
  cost: number;
  costResource: ResourceType;
  time: BuildTime;
  /** Minimum building level required to gear up */
  requiresLevel: number;
  /** Builder Base building needed to unlock gear up */
  requiresBuilderBuilding?: string;
  requiresBuilderBuildingLevel?: number;
}

// ── Home Village ──────────────────────────────────────────────────────────────

export interface HomeDefenseLevel extends BuildingLevel {
  townHallRequired: number;
  stats: {
    normal: DefenseModeStats;
    /** Cannon: burst-fire mode stats (available from gear-up level) */
    gearedUpBurst?: DefenseModeStats;
    /** Archer Tower: fast-attack mode stats (available from gear-up level) */
    gearedUpFastAttack?: DefenseModeStats;
  };
  images: {
    /** Ungeared appearance */
    normal: string;
    /** Geared-up appearance while firing in normal/long-range mode */
    gearedUpNormal?: string;
    /** Geared-up appearance while firing in burst mode (Cannon) */
    gearedUpBurst?: string;
    /** Geared-up appearance while firing in fast-attack mode (Archer Tower) */
    gearedUpFastAttack?: string;
  };
}

export interface HomeDefense extends Building<HomeDefenseLevel> {
  targetType: 'ground' | 'air' | 'both';
  modes: {
    normal: DefenseMode;
    /** Cannon: burst-fire alternate mode */
    gearedUpBurst?: BurstDefenseMode;
    /** Archer Tower: fast-attack alternate mode */
    gearedUpFastAttack?: DefenseMode;
  };
  /** Present only on buildings that can be geared up */
  gearUp?: GearUp;
  /** Number of this building available to place at each Town Hall level */
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
