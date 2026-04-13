// ── Boost ────────────────────────────────────────────────────────────────────

/** Valid Builder Boost / Research Boost tier percentages. */
export type BoostTier = 10 | 15 | 20;

/** Resource types that can have their build or research cost reduced by a boost. */
export type BuildCostResource = 'Gold' | 'Elixir' | 'Dark Elixir';

// ── Clock Tower ───────────────────────────────────────────────────────────────

/** Valid Clock Tower levels (1–10). */
export type ClockTowerLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Valid Lab Assistant levels (1–12). */
export type LabAssistantLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

/** Valid Builder's Apprentice levels (1–8). */
export type BuildersApprenticeLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

/** Valid Alchemist levels (1–7). */
export type AlchemistLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7;

/** Valid Prospector levels (currently only level 1). */
export type ProspectorLevel = 1;

/** Result returned by `calculators().helpers().alchemist()`. */
export interface AlchemistResult {
  /** Amount of Gold/Elixir actually used (capped at the level's conversion max). */
  input: number;
  /** Dark Elixir before the bonus is applied. */
  base: number;
  /** Bonus Dark Elixir from the Alchemist's conversionBonusPercent. */
  bonus: number;
  /** Total Dark Elixir received (base + bonus). */
  total: number;
}

/** Result returned by `calculators().helpers().prospector()`. */
export interface ProspectorResult {
  shinyOre: number;
  glowyOre: number;
  starryOre: number;
}
