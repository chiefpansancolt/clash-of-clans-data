import { Building, BuildingLevel } from './building';
import {
  Base,
  BuilderHallAvailability,
  BuildTime,
  Category,
  DistrictAvailability,
  ResourceType,
  TownHallAvailability,
} from './common';

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

export interface BuilderArmyBuilding extends Building<BuilderArmyBuildingLevel> {
  availablePerBuilderHall: BuilderHallAvailability[];
}

// Builder Army Camp is a single-level building (never upgrades).
// Each additional copy has its own construction cost tracked in `instances`.
export interface BuilderArmyCampLevel {
  level: number;
  hitpoints: number;
  housingSpace: number;
  images: { normal: string };
}

export interface BuilderArmyCampInstance {
  instance: number;
  buildCost: number;
  buildCostResource: ResourceType;
  buildTime: BuildTime;
  xpGained: number;
  builderHallRequired: number;
}

export interface BuilderArmyCampBuilding {
  id: string;
  name: string;
  description?: string;
  base: Base;
  category: Category;
  size: string;
  levels: BuilderArmyCampLevel[];
  instances: BuilderArmyCampInstance[];
  availablePerBuilderHall: BuilderHallAvailability[];
}

export interface BuilderHealingHutBuildingLevel extends BuildingLevel {
  healthRecovery: number;
  builderHallRequired: number;
  images: {
    normal: string;
  };
}

export interface BuilderHealingHutBuilding extends Building<BuilderHealingHutBuildingLevel> {
  availablePerBuilderHall: BuilderHallAvailability[];
}

export interface BuilderBarracksBuildingLevel extends BarracksBuildingLevel {
  builderHallRequired: number;
}

export interface BuilderBarracksBuilding extends Building<BuilderBarracksBuildingLevel> {
  availablePerBuilderHall: BuilderHallAvailability[];
}

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

export interface BlacksmithOreCapacity {
  shinyOre: number;
  glowyOre: number;
  starryOre: number;
}

export interface BlacksmithMaxEquipmentLevel {
  common: number;
  epic: number;
}

export interface HomeBlacksmithBuildingLevel extends BuildingLevel {
  equipmentUnlocked: string | string[] | null;
  oreCapacity: BlacksmithOreCapacity;
  maxEquipmentLevel: BlacksmithMaxEquipmentLevel;
  townHallRequired: number;
  images: { normal: string };
}

export interface HomeBlacksmithBuilding extends Building<HomeBlacksmithBuildingLevel> {
  availablePerTownHall: TownHallAvailability[];
}

export interface HeroLevelCaps {
  barbarianKing?: number;
  archerQueen?: number;
  minionPrince?: number;
  grandWarden?: number;
  royalChampion?: number;
  dragonDuke?: number;
}

export interface HomeHeroHallBuildingLevel extends BuildingLevel {
  unlockedHero: string | null;
  heroSlots: number;
  heroLevelCaps: HeroLevelCaps;
  townHallRequired: number;
  images: {
    normal: string;
    active: string;
  };
}

export interface HomeHeroHallBuilding extends Building<HomeHeroHallBuildingLevel> {
  availablePerTownHall: TownHallAvailability[];
}

export interface HeroBannerImages {
  empty: string;
  barbarianKing: string;
  archerQueen: string;
  minionPrince: string;
  grandWarden: string;
  royalChampion: string;
  dragonDuke: string;
}

export interface HeroBannerBuilding {
  id: string;
  name: string;
  description?: string;
  base: Base;
  category: Category;
  size: string;
  images: HeroBannerImages;
  availablePerTownHall: TownHallAvailability[];
}

export interface HomeWorkshopBuildingLevel extends BuildingLevel {
  unlockedSiegeMachine: string;
  siegeMachineCapacity: number;
  townHallRequired: number;
  images: { normal: string };
}

export interface HomeWorkshopBuilding extends Building<HomeWorkshopBuildingLevel> {
  availablePerTownHall: TownHallAvailability[];
}

export interface HomePetHouseBuildingLevel extends BuildingLevel {
  unlockedPet: string;
  townHallRequired: number;
  images: { normal: string };
}

export interface HomePetHouseBuilding extends Building<HomePetHouseBuildingLevel> {
  availablePerTownHall: TownHallAvailability[];
}

export interface ClanCapitalArmyBuildingLevel extends BuildingLevel {
  housingSpace: number;
  districtHallRequired: number;
  images: { normal: string };
}

export interface ClanCapitalArmyBuilding extends Building<ClanCapitalArmyBuildingLevel> {
  availablePerDistrict: DistrictAvailability[];
}

export interface ClanCapitalSpellStorageBuildingLevel extends BuildingLevel {
  spellCapacity: number;
  districtHallRequired: number;
  images: { normal: string };
}

export interface ClanCapitalSpellStorageBuilding extends Building<ClanCapitalSpellStorageBuildingLevel> {
  availablePerDistrict: DistrictAvailability[];
}

export interface ClanCapitalBarracksBuildingLevel extends BuildingLevel {
  districtHallRequired: number;
  images: { normal: string };
}

export interface ClanCapitalBarracksBuilding extends Building<ClanCapitalBarracksBuildingLevel> {
  troopUnlocked: string;
  availablePerDistrict: DistrictAvailability[];
}

export interface ClanCapitalSpellFactoryLevel extends BuildingLevel {
  districtHallRequired: number;
  images: { normal: string };
}

export interface ClanCapitalSpellFactory extends Building<ClanCapitalSpellFactoryLevel> {
  spellUnlocked: string;
  availablePerDistrict: DistrictAvailability[];
}
