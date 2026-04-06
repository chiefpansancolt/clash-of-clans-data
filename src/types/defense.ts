import { Building, BuildingLevel } from './building';
import {
  BuilderHallAvailability,
  BuildTime,
  DistrictHallAvailability,
  ResourceType,
  TownHallAvailability,
} from './common';

/** Builder's Hut: per-level stats for the builder unit's repair action. */
export interface BuilderStats {
  repairPerSecond: number;
  repairPerHit: number;
}

/** Builder's Hut: fixed properties of the builder unit that exits to repair nearby buildings. */
export interface BuilderMode {
  range: number;
  repairSpeed: number;
  movementSpeed: number;
}

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
  /** Eagle Artillery: damage dealt by the shockwave ring on impact (separate from main hit). */
  shockwaveDamagePerHit?: number;
  /** Scattershot: minimum primary-zone damage (dealt 1 tile behind the point of impact). */
  damagePerShotMin?: number;
  /** Scattershot: maximum secondary splash zone damage (dealt within 1 tile of impact). */
  splashDamageMax?: number;
  /** Scattershot: minimum secondary splash zone damage (dealt 5 tiles from impact). */
  splashDamageMin?: number;
}

export interface DefenseMode {
  range: number;
  /** Minimum attack range in tiles (e.g. Eagle Artillery has a blind spot within 7 tiles). */
  minRange?: number;
  attackSpeed: number;
  damageType: 'single' | 'splash' | 'none' | 'multiple';
  splashRadius?: number;
  triggerRange?: number;
  /** Number of shots fired per burst (e.g. Eagle Artillery fires 3 per burst). */
  shotsPerBurst?: number;
  /** Seconds between the end of one burst and the start of the next. */
  timeBetweenBursts?: number;
  /** Housing space of deployed troops required before this weapon activates (Eagle Artillery: 200). */
  activationHousingSpace?: number;
  /** Total rounds available before the weapon becomes depleted (Eagle Artillery/Scattershot). */
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

// ── Home Village ──────────────────────────────────────────────────────────────

export interface HomeDefenseLevel extends BuildingLevel {
  townHallRequired: number;
  deathDamage?: number;
  /** Spell Tower only: the spell newly unlocked at this level. */
  unlocksSpell?: string;
  stats: {
    normal: DefenseModeStats;
    gearedUpBurst?: DefenseModeStats;
    gearedUpFastAttack?: DefenseModeStats;
    multiTarget?: DefenseModeStats;
    /** Builder's Hut: per-level repair stats for the builder unit. */
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
    /** Eagle Artillery: head-down (active/firing) appearance. */
    headDown?: string;
    /** Eagle Artillery: depleted/unloaded appearance after consuming all rounds. */
    unloaded?: string;
    /** Scattershot: depleted appearance after consuming all rounds. */
    depleted?: string;
    /** Builder's Hut: appearance when the builder is out repairing or the turret is active. */
    active?: string;
    /** Spell Tower: visual when casting Poison Spell (from level 2). */
    poison?: string;
    /** Spell Tower: visual when casting Invisibility Spell (from level 3). */
    invisibility?: string;
    /** Spell Tower: visual when casting Earthquake Spell (level 4 only). */
    earthquake?: string;
  };
}

// ── Spell Tower modes ─────────────────────────────────────────────────────────

export interface SpellTowerMode {
  range: number;
  spellRadius: number;
  rechargeTime: number;
}

export interface RageSpellMode extends SpellTowerMode {
  spellDuration: number;
  /** Percentage damage boost applied to friendly defenses within the spell radius. */
  damageIncrease: number;
}

export interface PoisonSpellMode extends SpellTowerMode {
  spellDuration: number;
  /** Maximum poison DPS applied to troops in the radius. */
  maxDps: number;
  /** Troop movement speed reduction (percentage). */
  speedDecrease: number;
  /** Troop attack rate reduction (percentage). */
  attackRateDecrease: number;
}

export interface InvisibilitySpellMode extends SpellTowerMode {
  spellDuration: number;
}

export interface EarthquakeSpellMode extends SpellTowerMode {
  /** Percentage of max HP dealt as damage to troops in the spell radius. */
  troopDamagePercent: number;
}

// ─────────────────────────────────────────────────────────────────────────────

export interface HomeDefense extends Building<HomeDefenseLevel> {
  targetType: 'ground' | 'air' | 'both';
  modes: {
    /** Traditional attack mode. Absent on the Spell Tower, which uses spell modes instead. */
    normal?: DefenseMode;
    gearedUpBurst?: BurstDefenseMode;
    gearedUpFastAttack?: DefenseMode;
    airAndGround?: DefenseMode;
    multiTarget?: DefenseMode;
    /** Builder's Hut: the builder unit that exits to repair nearby buildings. */
    builder?: BuilderMode;
    /** Spell Tower: Rage Spell mode (available from level 1). */
    rage?: RageSpellMode;
    /** Spell Tower: Poison Spell mode (available from level 2). */
    poison?: PoisonSpellMode;
    /** Spell Tower: Invisibility Spell mode (available from level 3). */
    invisibility?: InvisibilitySpellMode;
    /** Spell Tower: Earthquake Spell mode (available from level 4). */
    earthquake?: EarthquakeSpellMode;
  };
  gearUp?: GearUp;
  availablePerTownHall: TownHallAvailability[];
  /**
   * Builder's Hut only: the cost to place each of the 5 builder instances.
   * The 1st is free; the 2nd–5th cost increasing amounts of Gems.
   */
  placementCosts?: Array<{ instance: number; cost: number; costResource: ResourceType }>;
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
