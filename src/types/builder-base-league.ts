/** A Builder Base league group name. */
export type BuilderBaseLeagueGroup =
  | 'Wood'
  | 'Clay'
  | 'Stone'
  | 'Copper'
  | 'Brass'
  | 'Iron'
  | 'Steel'
  | 'Titanium'
  | 'Platinum'
  | 'Emerald'
  | 'Ruby'
  | 'Diamond';

/** Star Bonus for a Builder Base league. Earned once per day by reaching the required star count. */
export interface BuilderBaseStarBonus {
  /** Number of stars that must be earned to claim the bonus. */
  starsRequired: number;
  /** Amount of Builder Gold and Builder Elixir each awarded when claimed. */
  reward: number;
}

/**
 * Battle result rewards for a given star outcome in a Builder Base league.
 * Gold is earned by the attacker; Elixir is earned by the defender.
 */
export interface BuilderBaseBattleResult {
  /** Builder Gold earned by the attacker. */
  attackerGold: number;
  /** Builder Elixir earned by the defender. */
  defenderElixir: number;
}

/** A single Builder Base league entry. */
export interface BuilderBaseLeague {
  /** Kebab-case identifier, e.g. `"wood-v"`, `"diamond"`. */
  id: string;
  /** Display name, e.g. `"Wood V"`, `"Diamond"`. */
  name: string;
  /** The group this league belongs to. */
  group: BuilderBaseLeagueGroup;
  /**
   * Tier within the group (1 = I, 2 = II, 3 = III, 4 = IV, 5 = V).
   * Null for Diamond which has no tier.
   */
  tier: 1 | 2 | 3 | 4 | 5 | null;
  /** Minimum Builder Base trophies required to be in this league. */
  trophyMin: number;
  /** Maximum Builder Base trophies for this league. Null for Diamond (6200+). */
  trophyMax: number | null;
  /** Path to the league badge image. */
  image: string;
  /** Star Bonus earned once per day by reaching the required star count. */
  starBonus: BuilderBaseStarBonus;
  /**
   * Battle result rewards indexed by star count (0–6).
   * `battleResults[0]` = 0-star outcome, `battleResults[6]` = 6-star outcome.
   */
  battleResults: [
    BuilderBaseBattleResult,
    BuilderBaseBattleResult,
    BuilderBaseBattleResult,
    BuilderBaseBattleResult,
    BuilderBaseBattleResult,
    BuilderBaseBattleResult,
    BuilderBaseBattleResult,
  ];
}
