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
