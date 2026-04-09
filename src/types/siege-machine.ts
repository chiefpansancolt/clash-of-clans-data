import { BuildTime, DonationCost, ResourceType } from './common';

export interface SiegeMachineLevel {
  level: number;
  damagePerSecond?: number;
  damagePerHit?: number;
  damageVsWalls?: number;
  damageWhenDestroyed?: number;
  damageWhenDestroyedHitbox1?: number;
  damageWhenDestroyedHitbox2?: number;
  pointBlankDamage?: number;
  flameMaxDps?: number;
  pekkasSpawned?: number;
  wizardsSpawned?: number;
  barrelCount?: number;
  troopLevel?: number;
  troopsSpawnedPerBarrel?: {
    barbarians?: number;
    archers?: number;
    giants?: number;
    wallBreakers?: number;
  };
  lifetime?: number;
  hitpoints: number;
  laboratoryRequired: number;
  townHallRequired: number;
  researchCost: number;
  researchCostResource: ResourceType;
  researchTime: BuildTime;
  images: { normal: string };
}

export interface SiegeMachine {
  id: string;
  name: string;
  description?: string;
  base: 'home';
  category: 'siege-machine';
  housingSpace: number;
  workshopLevelRequired: number;
  donationCost: DonationCost;
  preferredTarget?: string;
  attackType?: string;
  movementSpeed: number;
  attackSpeed?: number;
  range?: number;
  shotsPerBurst?: number;
  timeBetweenBursts?: number;
  lifetime?: number;
  hpDecayPerSecond?: number;
  images: { icon: string };
  levels: SiegeMachineLevel[];
}
