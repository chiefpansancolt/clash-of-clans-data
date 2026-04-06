import { Building, BuildingLevel } from './building';

export interface ResearchBuildingLevel extends BuildingLevel {
  boostCost: number;
  images: {
    normal: string;
  };
}

export interface HomeResearchBuildingLevel extends ResearchBuildingLevel {
  townHallRequired: number;
}

export interface HomeResearchBuilding extends Building<HomeResearchBuildingLevel> {}

export interface BuilderResearchBuildingLevel extends ResearchBuildingLevel {
  builderHallRequired: number;
}

export interface BuilderResearchBuilding extends Building<BuilderResearchBuildingLevel> {}
