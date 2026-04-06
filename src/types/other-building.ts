import { Building, BuildingLevel } from './building';

export interface OtherBuildingLevel extends BuildingLevel {
  townHallRequired?: number;
  builderHallRequired?: number;
  districtHallRequired?: number;
  images: {
    normal: string;
  };
}

export type OtherBuilding = Building<OtherBuildingLevel>;
