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

export type HomeResourceBuilding = Building<HomeResourceBuildingLevel>;

export interface BuilderResourceBuildingLevel extends ResourceBuildingLevel {
  builderHallRequired: number;
}

export type BuilderResourceBuilding = Building<BuilderResourceBuildingLevel>;

export interface ClanCapitalResourceBuildingLevel extends ResourceBuildingLevel {
  districtHallRequired: number;
}

export type ClanCapitalResourceBuilding = Building<ClanCapitalResourceBuildingLevel>;
