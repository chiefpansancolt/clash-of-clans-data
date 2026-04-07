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
