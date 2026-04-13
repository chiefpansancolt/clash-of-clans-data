/** A ranked battles league group name (e.g. "Skeleton", "Electro"). */
export type LeagueGroup =
  | 'Unranked'
  | 'Skeleton'
  | 'Barbarian'
  | 'Archer'
  | 'Wizard'
  | 'Valkyrie'
  | 'Witch'
  | 'Golem'
  | 'PEKKA'
  | 'Titan'
  | 'Dragon'
  | 'Electro'
  | 'Legend';

/** A single ranked battles league (e.g. "Skeleton 1", "Legend"). */
export interface RankedBattleLeague {
  /** Kebab-case identifier, e.g. `"skeleton-1"`, `"pekka-22"`, `"legend"`. */
  id: string;
  /** Display name, e.g. `"Skeleton 1"`, `"P.E.K.K.A 22"`, `"Legend"`. */
  name: string;
  /** The group this league belongs to. */
  leagueGroup: LeagueGroup;
  /** Sequential number within the group (1–33). Null for Legend and Unranked. */
  leagueNumber: number | null;
  /** Path to the league badge image. */
  image: string;
  /** Number of attacks and defenses per weekly tournament. Null for Legend and Unranked. */
  attacksPerWeek: number | null;
  /** Percentage of players promoted at the end of the week. Null for the top league and Unranked. */
  percentPromoted: number | null;
  /** Percentage of players demoted at the end of the week. Null for the bottom league and Unranked. */
  percentDemoted: number | null;
}

/** The minimum league a player cannot be demoted below, based on Town Hall level. */
export interface LeagueFloorEntry {
  townHallLevel: number;
  /** ID of the floor league (e.g. `"skeleton-1"`). */
  leagueId: string;
}

/** A difficulty modifier applied to high-ranked leagues. */
export interface DifficultyModifier {
  /** ID of the league this modifier applies to. */
  leagueId: string;
  /** Modifier tier name: "Expert", "Master", or "Legend". */
  modifier: 'Expert' | 'Master' | 'Legend';
  /** Percentage bonus applied to all defense DPS. */
  defenseDpsBonus: number;
  /** Percentage bonus applied to defending hero DPS and HP. */
  defendingHeroDpsHpBonus: number;
  /** Percentage penalty applied to attacking hero DPS and HP. Null when not applicable. */
  attackingHeroDpsHpPenalty: number | null;
}

/** Combined Gold/Elixir and Dark Elixir loot amounts. */
export interface RankedBattleLootAmount {
  /** Gold and Elixir (same value). Null for Unranked (no available loot). */
  goldAndElixir: number | null;
  /** Dark Elixir amount. Null for Unranked. */
  darkElixir: number | null;
}

/** Ore rewards from the weekly Star Bonus. */
export interface StarBonusOre {
  goldAndElixir: number | null;
  darkElixir: number | null;
  shinyOre: number | null;
  glowyOre: number | null;
  starryOre: number | null;
}

/**
 * League bonus and star bonus for Town Halls below 7.
 * These Town Halls cannot participate in ranked leagues but still receive bonuses.
 */
export interface LowerThBonus {
  /** The Town Hall level (2–6). */
  townHallLevel: number;
  /** Maximum league bonus in Gold/Elixir (no dark elixir at these Town Hall levels). */
  maxLeagueBonus: number;
  /** Weekly Star Bonus in Gold/Elixir. */
  starBonus: number;
}

/** Loot available for a specific league at a given Town Hall level. */
export interface RankedBattleLootEntry {
  /** ID of the league this entry applies to. */
  leagueId: string;
  /**
   * Whether this league is below the Town Hall's league floor.
   * Below-floor leagues are shown in the game UI but cannot be reached in practice.
   */
  underfloor: boolean;
  /** Maximum loot available to steal from the opponent's base. */
  maxAvailableLoot: RankedBattleLootAmount;
  /** Maximum bonus earned from winning a ranked battle in this league. */
  maxLeagueBonus: RankedBattleLootAmount;
  /** Weekly Star Bonus rewards for completing 8 stars in this league. */
  starBonus: StarBonusOre;
}
