import { Building, BuildingLevel } from './building';

export interface ArmyBuildingLevel extends BuildingLevel {
  /** Total housing space provided at this level */
  housingSpace: number;
  images: {
    normal: string;
  };
}

export interface HomeArmyBuildingLevel extends ArmyBuildingLevel {
  townHallRequired: number;
}

export interface HomeArmyBuilding extends Building<HomeArmyBuildingLevel> {}

export interface BuilderArmyBuildingLevel extends ArmyBuildingLevel {
  builderHallRequired: number;
}

export interface BuilderArmyBuilding extends Building<BuilderArmyBuildingLevel> {}
