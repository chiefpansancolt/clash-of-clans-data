export type Base = 'home' | 'builder' | 'clan_capital';

export type Category =
  | 'defense'
  | 'crafted-defense'
  | 'wall'
  | 'trap'
  | 'troop'
  | 'spell'
  | 'resource'
  | 'army'
  | 'research'
  | 'guardian'
  | 'siege-machine'
  | 'pet'
  | 'hero'
  | 'hero-equipment'
  | 'town-hall'
  | 'other';

export type ResourceType =
  | 'Gold'
  | 'Elixir'
  | 'Dark Elixir'
  | 'Gold or Elixir'
  | 'Builder Gold'
  | 'Builder Elixir'
  | 'Builder Gold or Builder Elixir'
  | 'Capital Gold'
  | 'Gems';

export interface BuildTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface DonationCost {
  amount: number;
  resource: 'Elixir' | 'Dark Elixir';
  gemsOrRaidMedals: number;
}

export interface TownHallAvailability {
  townHallLevel: number;
  count: number;
  countAfterMerges?: number;
}

export interface BuilderHallAvailability {
  builderHallLevel: number;
  count: number;
}

export interface DistrictHallAvailability {
  districtHallLevel: number;
  count: number;
}

export interface CapitalHallAvailability {
  capitalHallLevel: number;
  count: number;
}

export type ClanCapitalDistrict =
  | 'barbarianCamp'
  | 'wizardValley'
  | 'balloonLagoon'
  | 'buildersWorkshop'
  | 'dragonCliffs'
  | 'golemQuarry'
  | 'skeletonPark'
  | 'goblinMines';

/** Counts indexed by District Hall level minus 1 (index 0 = DH1, index 1 = DH2, etc.). */
export interface DistrictAvailability {
  district: ClanCapitalDistrict;
  countPerDistrictHall: number[];
}
