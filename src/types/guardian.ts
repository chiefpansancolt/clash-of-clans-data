import { Building, BuildingLevel } from './building';
import { TownHallAvailability } from './common';
import { DefenseModeStats } from './defense';

export interface GuardianMode {
  /** Seconds between attacks. */
  attackSpeed: number;
  damageType: 'splash' | 'single';
  /** Attack range in tiles. */
  range: number;
  /** Splash damage radius in tiles. */
  damageRadius?: number;
  /** Explosion radius on death in tiles (e.g. Longshot Final Blow). */
  deathDamageRadius?: number;
  /** Tiles per second movement speed. */
  movementSpeed: number;
  /** How far Longshot patrols while on the Town Hall before jumping off (tiles). */
  patrolRadius?: number;
  /** How far Smasher will search for enemies before jumping off (tiles). */
  searchRadius?: number;
  /** Range at which the Guardian jumps off the Town Hall (tiles). */
  triggerRadius: number;
}

export interface GuardianLevel extends BuildingLevel {
  townHallRequired: number;
  /** Fixed death damage dealt to nearby units on defeat (e.g. Longshot Final Blow). */
  deathDamage?: number;
  stats: {
    normal: DefenseModeStats;
  };
  images: {
    normal: string;
  };
}

/** Base Guardian type shared by all guardian variants. */
export interface Guardian extends Building<GuardianLevel> {
  /** Discriminant field identifying the specific guardian variant. */
  guardianType: string;
  targetType: 'ground' | 'air' | 'both';
  mode: GuardianMode;
  specialAbility?: string;
  availablePerTownHall: TownHallAvailability[];
}

/** Longshot — long-range splash Guardian. Final Blow deals death damage on defeat. */
export interface LongshotGuardian extends Guardian {
  guardianType: 'longshot';
}

/** Smasher — melee splash Guardian. Enrages when Town Hall is destroyed; drops Rage Spell on defeat. */
export interface SmasherGuardian extends Guardian {
  guardianType: 'smasher';
  /** Movement speed bonus (tiles/s) while enraged. */
  rageSpeedIncrease: number;
  /** Damage increase (%) while enraged. */
  rageDamageIncrease: number;
}
