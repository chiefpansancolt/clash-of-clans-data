import { BuildTime, ResourceType, TownHallAvailability } from './common';

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
