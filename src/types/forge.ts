import type { BuildTime } from './common';

export interface ClanCapitalDailyForgeEntry {
  /** Town Hall level (6–18). */
  townHallLevel: number;
  /** Capital Gold obtained from the daily forge at this Town Hall level. */
  capitalGoldObtained: number;
}

export interface ClanCapitalAvailableForgeEntry {
  /** Number of manual forge slots available. */
  slots: number;
  /** Town Hall level required to unlock this many slots. */
  townHallRequired: number;
}

/** Resource conversion entry for home-village Auto Forge or Forge (keyed by Town Hall level). */
export interface ClanCapitalHomeForgeEntry {
  /** Town Hall level (7–18). */
  townHallLevel: number;
  /** Gold or Elixir cost (standard). */
  goldElixirCost: number;
  /** Gold or Elixir cost with Gold Pass discount (Auto Forge only). */
  goldElixirCostGoldPass?: number;
  /** Dark Elixir cost (standard). Present from TH13+. */
  darkElixirCost?: number;
  /** Dark Elixir cost with Gold Pass discount (Auto Forge only). Present from TH13+. */
  darkElixirCostGoldPass?: number;
  /** Capital Gold obtained from this conversion. */
  capitalGoldObtained: number;
}

/** Resource conversion entry for builder-base Auto Forge or Forge (keyed by Builder Hall level). */
export interface ClanCapitalBuilderForgeEntry {
  /** Builder Hall level (8–10). */
  builderHallLevel: number;
  /** Builder Gold or Builder Elixir cost (standard). */
  builderGoldElixirCost: number;
  /** Builder Gold or Builder Elixir cost with Gold Pass discount (Auto Forge only). */
  builderGoldElixirCostGoldPass?: number;
  /** Capital Gold obtained from this conversion. */
  capitalGoldObtained: number;
}

export interface ClanCapitalForgeRates {
  home: ClanCapitalHomeForgeEntry[];
  builder: ClanCapitalBuilderForgeEntry[];
}

export interface ClanCapitalForgeData {
  dailyForge: ClanCapitalDailyForgeEntry[];
  craftingTime: BuildTime;
  availableForges: ClanCapitalAvailableForgeEntry[];
  autoForge: ClanCapitalForgeRates;
  forge: ClanCapitalForgeRates;
}
