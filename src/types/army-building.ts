import { Building, BuildingLevel } from './building';

export interface ArmyBuildingLevel extends BuildingLevel {
  housingSpace: number;
  images: {
    normal: string;
  };
}

export interface HomeArmyBuildingLevel extends ArmyBuildingLevel {
  townHallRequired: number;
}

export type HomeArmyBuilding = Building<HomeArmyBuildingLevel>;

export interface BuilderArmyBuildingLevel extends ArmyBuildingLevel {
  builderHallRequired: number;
}

export type BuilderArmyBuilding = Building<BuilderArmyBuildingLevel>;
