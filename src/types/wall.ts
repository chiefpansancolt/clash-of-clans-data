import { BuilderHallAvailability, BuildTime, ResourceType, TownHallAvailability } from './common';

export interface WallLevel {
  level: number;
  hitpoints: number;
  buildCost: number;
  buildCostResource: ResourceType;
  wallRings: number;
  buildTime: BuildTime;
  xpGained: number;
  townHallRequired: number;
  images: { normal: string };
}

export interface HomeWall {
  id: string;
  name: string;
  description?: string;
  base: 'home';
  category: 'wall';
  size: '1x1';
  levels: WallLevel[];
  availablePerTownHall: TownHallAvailability[];
}

export interface BuilderWallLevel {
  level: number;
  hitpoints: number;
  buildCost: number;
  buildCostResource: ResourceType;
  wallRings: number;
  buildTime: BuildTime;
  xpGained: number;
  builderHallRequired: number;
  images: { normal: string };
}

export interface BuilderWall {
  id: string;
  name: string;
  description?: string;
  base: 'builder';
  category: 'wall';
  size: '1x1';
  levels: BuilderWallLevel[];
  availablePerBuilderHall: BuilderHallAvailability[];
}
