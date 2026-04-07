import { BuildTime, ResourceType } from './common';

export interface CraftedDefenseModuleUpgrade {
  level: number;
  stat: number;
  buildCost: number;
  buildCostResource: ResourceType;
  buildTime: BuildTime;
  xpGained: number;
  sparkyStones: number;
}

export interface CraftedDefenseModule {
  name: string;
  controls: string;
  upgrades: CraftedDefenseModuleUpgrade[];
}

export interface CraftedDefenseImageEntry {
  fromEffectiveLevel: number;
  toEffectiveLevel: number;
  normal: string;
}

export interface CraftedDefense {
  id: string;
  name: string;
  description?: string;
  base: 'home';
  category: 'crafted-defense';
  size: string;
  craftingPhase: number;
  isCurrent: boolean;
  targetType: 'ground' | 'air' | 'both';
  modules: [CraftedDefenseModule, CraftedDefenseModule, CraftedDefenseModule];
  images: CraftedDefenseImageEntry[];
}
