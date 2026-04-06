import { Building, BuildingLevel } from './building';
import { ResourceType } from './common';

export interface SpellLevel extends BuildingLevel {
  brewingCost: number;
  brewingCostResource: ResourceType;
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
  researchTime: number;
}

export interface HomeSpell extends Building<HomeSpellLevel> {
  radius: number;
  spellType: 'regular' | 'dark';
  housingSpace: number;
}

export interface ClanCapitalSpellLevel extends SpellLevel {
  districtHallRequired: number;
}

export interface ClanCapitalSpell extends Building<ClanCapitalSpellLevel> {
  radius: number;
  housingSpace: number;
}
