import { BuildTime, ResourceType } from './common';

export interface SiegeMachineLevel {
  level: number;
  damagePerSecond?: number;
  damagePerHit?: number;
  damageVsWalls?: number;
  damageWhenDestroyed?: number;
  damageWhenDestroyedHitbox1?: number;
  damageWhenDestroyedHitbox2?: number;
  pointBlankDamage?: number;
  pekkasSpawned?: number;
  wizardsSpawned?: number;
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
  preferredTarget?: string;
  attackType?: string;
  movementSpeed: number;
  attackSpeed?: number;
  lifetime?: number;
  hpDecayPerSecond?: number;
  images: { icon: string };
  levels: SiegeMachineLevel[];
}
