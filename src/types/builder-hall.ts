import { BuildTime, ResourceType } from './common';

export interface BuilderHallLevel {
  level: number;
  hitpoints: number;
  buildCost: number;
  buildCostResource: ResourceType;
  buildTime: BuildTime;
  xpGained: number;
  maxBuildings: number;
  images: {
    normal: string;
  };
}

export interface BuilderHall {
  id: string;
  name: string;
  base: 'builder';
  category: 'builder-hall';
  size: string;
  description?: string;
  levels: BuilderHallLevel[];
}
