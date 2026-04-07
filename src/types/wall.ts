import { BuildTime, ResourceType, TownHallAvailability } from './common';

export interface WallLevel {
  level: number;
  hitpoints: number;
  buildCost: number;
  /** 'Gold' for levels 1–4; 'Gold or Elixir' for levels 5–19 (same cost either way). */
  buildCostResource: ResourceType;
  /** Wall Rings required as an alternative to Gold/Elixir. */
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
