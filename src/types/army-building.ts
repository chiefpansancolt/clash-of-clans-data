import { Building, BuildingLevel } from './building';
import { TownHallAvailability } from './common';

export interface ArmyBuildingLevel extends BuildingLevel {
  housingSpace: number;
  images: {
    normal: string;
  };
}

export interface HomeArmyBuildingLevel extends ArmyBuildingLevel {
  townHallRequired: number;
}

export interface HomeArmyBuilding extends Building<HomeArmyBuildingLevel> {
  availablePerTownHall: TownHallAvailability[];
}

export interface BuilderArmyBuildingLevel extends ArmyBuildingLevel {
  builderHallRequired: number;
}

export type BuilderArmyBuilding = Building<BuilderArmyBuildingLevel>;

export interface ClanCastleLevel extends BuildingLevel {
  troopCapacity: number;
  spellCapacity: number;
  siegeMachineCapacity: number;
  labLevelCap: number;
  images: {
    normal: string;
  };
}

export interface HomeClanCastleLevel extends ClanCastleLevel {
  townHallRequired: number;
}

export interface HomeClanCastle extends Building<HomeClanCastleLevel> {
  triggerRadius: number;
  availablePerTownHall: TownHallAvailability[];
}
