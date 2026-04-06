import { Building, BuildingLevel } from './building';

export interface ResourceBuildingLevel extends BuildingLevel {
  capacity: number;
  productionRate: number;
  images: {
    normal: string;
  };
}

export interface HomeResourceBuildingLevel extends ResourceBuildingLevel {
  townHallRequired: number;
}

export interface HomeResourceBuilding extends Building<HomeResourceBuildingLevel> {}

export interface BuilderResourceBuildingLevel extends ResourceBuildingLevel {
  builderHallRequired: number;
}

export interface BuilderResourceBuilding extends Building<BuilderResourceBuildingLevel> {}

export interface ClanCapitalResourceBuildingLevel extends ResourceBuildingLevel {
  districtHallRequired: number;
}

export interface ClanCapitalResourceBuilding
  extends Building<ClanCapitalResourceBuildingLevel> {}
