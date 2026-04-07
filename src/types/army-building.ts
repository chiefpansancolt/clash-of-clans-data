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

export interface BarracksBuildingLevel extends BuildingLevel {
  unlockedUnit: string;
  images: {
    normal: string;
  };
}

export interface HomeBarracksBuildingLevel extends BarracksBuildingLevel {
  townHallRequired: number;
}

export interface HomeBarracksBuilding extends Building<HomeBarracksBuildingLevel> {
  availablePerTownHall: TownHallAvailability[];
}

export interface SpellFactoryBuildingLevel extends BuildingLevel {
  unlockedSpell: string | string[];
  spellStorageCapacity: number;
  images: {
    normal: string;
  };
}

export interface HomeSpellFactoryBuildingLevel extends SpellFactoryBuildingLevel {
  townHallRequired: number;
}

export interface HomeSpellFactoryBuilding extends Building<HomeSpellFactoryBuildingLevel> {
  availablePerTownHall: TownHallAvailability[];
}

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
