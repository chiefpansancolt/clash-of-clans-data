import { Building, BuildingLevel } from './building';
import { TownHallAvailability } from './common';

export interface ResearchBuildingLevel extends BuildingLevel {
  boostCost?: number;
  images: {
    normal: string;
  };
}

export interface HomeResearchBuildingLevel extends ResearchBuildingLevel {
  townHallRequired: number;
}

export interface HomeResearchBuilding extends Building<HomeResearchBuildingLevel> {
  availablePerTownHall: TownHallAvailability[];
}

export interface BuilderResearchBuildingLevel extends ResearchBuildingLevel {
  builderHallRequired: number;
}

export type BuilderResearchBuilding = Building<BuilderResearchBuildingLevel>;
