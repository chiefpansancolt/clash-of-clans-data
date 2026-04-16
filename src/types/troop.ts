import { BuildTime, DonationCost, ResourceType } from './common';

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
  firemitesSpawned?: number;
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
  range?: number;
  attackSpeed?: number;
  damageType: 'single' | 'splash' | 'area' | 'chain' | 'none';
  targetType: 'ground' | 'air' | 'both';
  barrackLevelRequired: number;
  donationCost: DonationCost;
  lifetime?: number;
  auraAttackSpeed?: number;
  auraRange?: number;
  wallAttackSpeed?: number;
  summonCooldown?: number;
  numberOfTargets?: number;
  evolveTime?: number;
  preferredTarget?: string;
  freezeRadiusOnOffense?: number;
  freezeRadiusOnDefense?: number;
  specialAbility?: string;
  images: { icon: string };
  levels: HomeTroopLevel[];
  superTroop?: HomeSuperTroop;
}

export interface TroopModeStats {
  dps: number;
  damagePerShot: number;
  trainingCost: number;
  trainingCostResource: ResourceType;
  trainingTime: number;
  movementSpeed: number;
}

export interface BuilderTroopLevel {
  level: number;
  hitpoints: number;
  dps?: number;
  damagePerShot?: number;
  unitsPerCamp: number;
  deathDamage?: number;
  skeletonBombDamage?: number;
  skeletonBombSkeletons?: number;
  cloakDurationSeconds?: number;
  rageDurationSeconds?: number;
  boxerBlockDurationSeconds?: number;
  powerPunchDamage?: number;
  powerShotAttacks?: number;
  powerShotDamagePerHit?: number;
  damageVsWalls?: number;
  bouncingBombDamage?: number;
  bouncingBombDamageVsWalls?: number;
  tantrumDamageBonus?: number;
  fierySneezeDamageMin?: number;
  fierySneezeDamageMax?: number;
  mortarDps?: number;
  mortarDamagePerShot?: number;
  batSummonCooldown?: number;
  batsPerSummon?: number;
  batsMax?: number;
  batSwarmCount?: number;
  overchargeDamage?: number;
  stunDuration?: number;
  infernoInitialDps?: number;
  infernoDpsAfter1_5s?: number;
  infernoDpsAfter3_0s?: number;
  electroDps?: number;
  electroDamagePerShot?: number;
  researchCost: number;
  researchCostResource: 'Builder Elixir';
  researchTime: BuildTime;
  starLabRequired: number;
  images: {
    normal: string;
    mortarMode?: string;
    electroMode?: string;
  };
}

export interface BuilderTroop {
  id: string;
  name: string;
  description?: string;
  base: 'builder';
  category: 'troop';
  housingSpace: number;
  movementSpeed: number;
  range: number;
  attackSpeed?: number;
  damageType: 'single' | 'splash' | 'area';
  targetType: 'ground' | 'air' | 'both';
  builderBarracksRequired?: number;
  specialAbility?: string;
  passiveAbility?: string;
  preferredTarget?: string;
  skeletonsSummoned?: number;
  skeletonsMax?: number;
  skeletonSummonCooldown?: number;
  abilityCooldown?: number;
  electroAttackSpeed?: number;
  electroNumberOfTargets?: number;
  electroChainDamageDecay?: number;
  rageSpeedIncrease?: number;
  rageDamageIncrease?: number;
  wallDamageMultiplier?: number;
  explodingRange?: number;
  mortarMovementSpeed?: number;
  mortarRange?: number;
  mortarAttackSpeed?: number;
  mortarDamageType?: 'single' | 'splash' | 'area';
  levels: BuilderTroopLevel[];
}

export interface ClanCapitalTroopStats {
  dps?: number;
  damagePerShot?: number;
  chainDamagePerShot?: number;
  damageVsWalls?: number;
  infernoInitialDps?: number;
  infernoDpsAfter1_7s?: number;
  infernoDpsAfter3_2s?: number;
  drillInitialDps?: number;
  drillDpsAfter1_5s?: number;
  drillDpsAfter3s?: number;
}

export interface ClanCapitalTroopLevel {
  level: number;
  hitpoints: number;
  districtHallRequired: number;
  deathDamage?: number;
  spawnedSkeletons?: number;
  spawnedSkeletonGliders?: number;
  spawnedSkeletonsOnDeath?: number;
  lastStandHitpoints?: number;
  stats: {
    normal: ClanCapitalTroopStats;
  };
  images: {
    normal: string;
  };
}

export interface ClanCapitalTroopSubUnitLevel {
  level: number;
  hitpoints: number;
  stats: {
    normal: ClanCapitalTroopStats;
  };
  images: {
    normal: string;
  };
}

export interface ClanCapitalTroopSubUnit {
  name: string;
  damageType: 'single' | 'splash' | 'area';
  targetType: 'ground' | 'air' | 'both';
  movementSpeed: number;
  attackSpeed?: number;
  range?: number;
  preferredTarget?: string;
  levels: ClanCapitalTroopSubUnitLevel[];
}

export interface ClanCapitalTroop {
  id: string;
  name: string;
  description?: string;
  /** Individual unit name when the troop deploys multiple units (e.g. "Minion" for Minion Horde). Absent for single-unit troops. */
  unitName?: string;
  /** Additional units deployed alongside the primary unit, each with their own level data. */
  subUnits?: ClanCapitalTroopSubUnit[];
  base: 'clan_capital';
  category: 'troop';
  damageType: 'single' | 'splash' | 'area';
  targetType: 'ground' | 'air' | 'both';
  housingSpace: number;
  movementSpeed: number;
  attackSpeed?: number;
  range?: number;
  preferredTarget?: string;
  specialAbility?: string;
  cloakDuration?: number;
  rageMovementSpeedIncrease?: number;
  rageDamageIncrease?: number;
  spawnedBarbarians?: number;
  wallDamageMultiplier?: number;
  boostDuration?: number;
  timeBetweenBursts?: number;
  images: { icon: string };
  levels: ClanCapitalTroopLevel[];
}
