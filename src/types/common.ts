export type Base = 'home' | 'builder' | 'clan_capital';

export type Category =
  | 'defense'
  | 'troop'
  | 'spell'
  | 'resource'
  | 'army'
  | 'research'
  | 'other';

export type ResourceType =
  | 'Gold'
  | 'Elixir'
  | 'Dark Elixir'
  | 'Builder Gold'
  | 'Builder Elixir'
  | 'Capital Gold';

export interface BuildTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
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
