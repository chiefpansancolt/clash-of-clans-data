import { Building, BuildingLevel } from './building';
import { TownHallAvailability } from './common';

export interface OtherBuildingLevel extends BuildingLevel {
  townHallRequired?: number;
  builderHallRequired?: number;
  districtHallRequired?: number;
  images: {
    normal: string;
  };
}

export type OtherBuilding = Building<OtherBuildingLevel>;

export interface HomeOtherBuilding extends Building<OtherBuildingLevel> {
  availablePerTownHall: TownHallAvailability[];
}

export interface HomeHelperHutBuildingLevel extends BuildingLevel {
  townHallRequired: number;
  images: { normal: string; active: string };
}

export interface HomeHelperHutBuilding extends Building<HomeHelperHutBuildingLevel> {
  availablePerTownHall: TownHallAvailability[];
}

export interface HomeHelperLevel {
  level: number;
  townHallRequired: number;
  upgradeCost: number;
}

export interface HomeHelper<L extends HomeHelperLevel = HomeHelperLevel> {
  id: string;
  name: string;
  description?: string;
  base: 'home';
  category: 'other';
  recruitmentCost: number;
  recruitmentCostResource: 'Gems' | 'Season Challenge Points';
  townHallRequired: number;
  images: { normal: string };
  levels: L[];
}

export interface HomeWorkRateHelperLevel extends HomeHelperLevel {
  workRate: number;
}

export interface HomeAlchemistHelperLevel extends HomeHelperLevel {
  goldElixirConversionMax: number;
  darkElixirConversionMax: number;
  conversionBonusPercent: number;
}

export interface HomeProspectorHelperLevel extends HomeHelperLevel {
  shinyOreConversionMax: number;
  glowyOreConversionMax: number;
  starryOreConversionMax: number;
}

export type HomeLabAssistantHelper = HomeHelper<HomeWorkRateHelperLevel>;
export type HomeBuilderApprenticeHelper = HomeHelper<HomeWorkRateHelperLevel>;
export type HomeAlchemistHelper = HomeHelper<HomeAlchemistHelperLevel>;
export type HomeProspectorHelper = HomeHelper<HomeProspectorHelperLevel>;
