import { BuildTime, ResourceType } from './common';

export interface DistrictHallCapitalHallRequired {
  barbarianCamp: number;
  wizardValley: number;
  balloonLagoon: number;
  buildersWorkshop: number;
  dragonCliffs: number;
  golemQuarry: number;
  skeletonPark?: number;
  goblinMines?: number;
}

export interface DistrictHallLevel {
  level: number;
  hitpoints: number;
  buildCost: number;
  buildCostResource: ResourceType;
  buildTime: BuildTime;
  xpGained: number;
  capitalHallRequired: DistrictHallCapitalHallRequired;
  images: {
    normal: string;
  };
}

export interface DistrictHall {
  id: string;
  name: string;
  base: 'clan_capital';
  category: 'district-hall';
  size: string;
  description?: string;
  levels: DistrictHallLevel[];
}
