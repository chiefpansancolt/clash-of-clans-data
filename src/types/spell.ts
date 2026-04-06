import { Building, BuildingLevel } from './building';
import { ResourceType } from './common';

export interface SpellLevel extends BuildingLevel {
  brewingCost: number;
  brewingCostResource: ResourceType;
  /** Brewing time in seconds */
  brewingTime: number;
  images: {
    normal: string;
  };
}

export interface HomeSpellLevel extends SpellLevel {
  townHallRequired: number;
  laboratoryRequired: number;
  researchCost: number;
  researchCostResource: ResourceType;
  /** Research time in seconds */
  researchTime: number;
}

export interface HomeSpell extends Building<HomeSpellLevel> {
  /** Effect radius in tiles */
  radius: number;
  housingSpace: number;
}

export interface ClanCapitalSpellLevel extends SpellLevel {
  districtHallRequired: number;
}

export interface ClanCapitalSpell extends Building<ClanCapitalSpellLevel> {
  radius: number;
  housingSpace: number;
}
