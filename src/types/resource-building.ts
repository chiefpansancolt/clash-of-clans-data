import { Building, BuildingLevel } from './building';
import { TownHallAvailability } from './common';

export interface ResourceBuildingLevel extends BuildingLevel {
  capacity: number;
  productionRate: number;
  images: {
    normal: string;
  };
}

export interface HomeResourceBuildingLevel extends ResourceBuildingLevel {
  townHallRequired: number;
  supercharge?: boolean;
}

export interface HomeResourceBuilding extends Building<HomeResourceBuildingLevel> {
  availablePerTownHall: TownHallAvailability[];
}

export interface BuilderResourceBuildingLevel extends ResourceBuildingLevel {
  builderHallRequired: number;
}

export type BuilderResourceBuilding = Building<BuilderResourceBuildingLevel>;

export interface ClanCapitalResourceBuildingLevel extends ResourceBuildingLevel {
  districtHallRequired: number;
}

export type ClanCapitalResourceBuilding = Building<ClanCapitalResourceBuildingLevel>;
