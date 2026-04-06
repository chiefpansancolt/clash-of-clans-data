import { Base, BuildTime, Category, ResourceType } from './common';

export interface BuildingLevel {
  level: number;
  hitpoints: number;
  buildCost: number;
  buildCostResource: ResourceType;
  buildTime: BuildTime;
  xpGained: number;
}

export interface Building<L extends BuildingLevel = BuildingLevel> {
  id: string;
  name: string;
  base: Base;
  category: Category;
  size: string;
  levels: L[];
}
