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

export interface BuilderHallLevelCounts {
  /** count × maxLevel for defenses, army buildings, and resource buildings */
  structures: number;
  /** count × maxLevel for traps */
  traps: number;
  /** sum of all troop levels where starLabRequired <= max Star Lab level at bhLevel */
  starLab: number;
  /** sum of all hero levels where builderHallLevelRequired <= bhLevel */
  heroes: number;
  /** wallCount × max wall tier level at bhLevel */
  walls: number;
  /** sum of all five categories */
  total: number;
}

export interface ClanCapitalDistrictCounts {
  /** sum of count × maxLevel for all buildings in this district/zone */
  structures: number;
  /** wallCount × max wall level available in this district/zone */
  walls: number;
  /** structures + walls */
  total: number;
}

export interface ClanCapitalLevelCounts {
  /** Capital Peak zone: buildings gated by capitalHallLevel, walls gated by capitalHallLevel */
  capitalPeak: ClanCapitalDistrictCounts;
  /** Barbarian Camp district (unlocks at Capital Hall 2) */
  barbarianCamp: ClanCapitalDistrictCounts;
  /** Wizard Valley district (unlocks at Capital Hall 3) */
  wizardValley: ClanCapitalDistrictCounts;
  /** Balloon Lagoon district (unlocks at Capital Hall 4) */
  balloonLagoon: ClanCapitalDistrictCounts;
  /** Builder's Workshop district (unlocks at Capital Hall 5) */
  buildersWorkshop: ClanCapitalDistrictCounts;
  /** Dragon Cliffs district (unlocks at Capital Hall 6) */
  dragonCliffs: ClanCapitalDistrictCounts;
  /** Golem Quarry district (unlocks at Capital Hall 7) */
  golemQuarry: ClanCapitalDistrictCounts;
  /** Skeleton Park district (unlocks at Capital Hall 8) */
  skeletonPark: ClanCapitalDistrictCounts;
  /** Goblin Mines district (unlocks at Capital Hall 9) */
  goblinMines: ClanCapitalDistrictCounts;
  /** sum of max troop levels where districtHallRequired <= max DH level available */
  troops: number;
  /** sum of max spell levels where districtHallRequired <= max DH level available */
  spells: number;
  /** sum of all categories */
  total: number;
}

export interface TownHallLevelCounts {
  /** count × maxNormalLevel for defenses, army buildings, and resource buildings */
  structures: number;
  /** count × maxLevel for traps */
  traps: number;
  /** count × #superchargeLevel for defenses and resource buildings */
  superCharge: number;
  /** sum of all troop + spell + siege machine levels where townHallRequired <= thLevel */
  lab: number;
  /** sum of heroLevelCaps from the max Hero Hall level available at thLevel */
  heroes: number;
  /** count × maxLevel for guardians */
  guardians: number;
  /** sum of all hero equipment levels where blacksmithLevelRequired <= max blacksmith level at thLevel */
  equipment: number;
  /** sum of all pet levels where townHallRequired <= thLevel */
  pets: number;
  /** sum of all module upgrade levels across all currently active crafted defenses */
  craftedDefenses: number;
  /** wallCount × max wall tier level at thLevel */
  walls: number;
  /** sum of all ten categories */
  total: number;
}
