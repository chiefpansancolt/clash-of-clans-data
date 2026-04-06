import { Base, BuildTime, Category, ResourceType } from './common';

export interface BuildingLevel {
  level: number;
  hitpoints: number;
  buildCost: number;
  buildCostResource: ResourceType;
  buildTime: BuildTime;
  /** XP awarded to the player when this upgrade completes */
  xpGained: number;
}

export interface Building<L extends BuildingLevel = BuildingLevel> {
  /** Unique building ID e.g. "cannon" */
  id: string;
  /** Display name e.g. "Cannon" */
  name: string;
  base: Base;
  category: Category;
  /** Building footprint e.g. "3x3" */
  size: string;
  levels: L[];
}
