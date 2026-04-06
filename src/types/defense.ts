import { Building, BuildingLevel } from './building';
import {
  BuilderHallAvailability,
  BuildTime,
  DistrictHallAvailability,
  ResourceType,
  TownHallAvailability,
} from './common';

export interface BuilderStats {
  repairPerSecond: number;
  repairPerHit: number;
}

export interface BuilderMode {
  range: number;
  repairSpeed: number;
  movementSpeed: number;
}

export interface DefenseModeStats {
  dps?: number;
  damagePerShot?: number;
  bonusDamagePercent?: number;
  secondaryChainDamagePerShot?: number;
  pushStrength?: number;
  dpsInitial?: number;
  dpsAfter1p5s?: number;
  numberOfTargets?: number;
  shockwaveDamagePerHit?: number;
  damagePerShotMin?: number;
  splashDamageMax?: number;
  splashDamageMin?: number;
}

export interface DefenseMode {
  range: number;
  minRange?: number;
  attackSpeed: number;
  damageType: 'single' | 'splash' | 'none' | 'multiple' | 'ricochet';
  chainRange?: number;
  numberOfTargets?: number;
  splashRadius?: number;
  triggerRange?: number;
  shotsPerBurst?: number;
  timeBetweenBursts?: number;
  activationHousingSpace?: number;
  numberOfRounds?: number;
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

export interface HomeDefenseLevel extends BuildingLevel {
  townHallRequired: number;
  supercharge?: boolean;
  deathDamage?: number;
  unlocksSpell?: string;
  stats: {
    normal: DefenseModeStats;
    gearedUpBurst?: DefenseModeStats;
    gearedUpFastAttack?: DefenseModeStats;
    multiTarget?: DefenseModeStats;
    builder?: BuilderStats;
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
    headDown?: string;
    unloaded?: string;
    depleted?: string;
    active?: string;
    poison?: string;
    invisibility?: string;
    earthquake?: string;
  };
}

export interface SpellTowerMode {
  range: number;
  spellRadius: number;
  rechargeTime: number;
}

export interface RageSpellMode extends SpellTowerMode {
  spellDuration: number;
  damageIncrease: number;
}

export interface PoisonSpellMode extends SpellTowerMode {
  spellDuration: number;
  maxDps: number;
  speedDecrease: number;
  attackRateDecrease: number;
}

export interface InvisibilitySpellMode extends SpellTowerMode {
  spellDuration: number;
}

export interface EarthquakeSpellMode extends SpellTowerMode {
  troopDamagePercent: number;
}

export interface HomeDefense extends Building<HomeDefenseLevel> {
  targetType: 'ground' | 'air' | 'both';
  modes: {
    normal?: DefenseMode;
    gearedUpBurst?: BurstDefenseMode;
    gearedUpFastAttack?: DefenseMode;
    airAndGround?: DefenseMode;
    multiTarget?: DefenseMode;
    builder?: BuilderMode;
    rage?: RageSpellMode;
    poison?: PoisonSpellMode;
    invisibility?: InvisibilitySpellMode;
    earthquake?: EarthquakeSpellMode;
  };
  gearUp?: GearUp;
  availablePerTownHall: TownHallAvailability[];
  placementCosts?: Array<{ instance: number; cost: number; costResource: ResourceType }>;
}

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
