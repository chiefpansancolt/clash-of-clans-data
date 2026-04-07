import { Building, BuildingLevel } from './building';
import { TownHallAvailability } from './common';
import { DefenseModeStats } from './defense';

export interface GuardianMode {
  attackSpeed: number;
  damageType: 'splash' | 'single';
  range: number;
  damageRadius?: number;
  deathDamageRadius?: number;
  movementSpeed: number;
  patrolRadius?: number;
  searchRadius?: number;
  triggerRadius: number;
}

export interface GuardianLevel extends BuildingLevel {
  townHallRequired: number;
  deathDamage?: number;
  stats: {
    normal: DefenseModeStats;
  };
  images: {
    normal: string;
  };
}

export interface Guardian extends Building<GuardianLevel> {
  guardianType: string;
  targetType: 'ground' | 'air' | 'both';
  mode: GuardianMode;
  specialAbility?: string;
  availablePerTownHall: TownHallAvailability[];
}

export interface LongshotGuardian extends Guardian {
  guardianType: 'longshot';
}

export interface SmasherGuardian extends Guardian {
  guardianType: 'smasher';
  rageSpeedIncrease: number;
  rageDamageIncrease: number;
}
