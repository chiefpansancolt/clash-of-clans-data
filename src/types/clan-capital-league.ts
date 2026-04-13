/** A Clan Capital league group name. */
export type ClanCapitalLeagueGroup =
  | 'Unranked'
  | 'Bronze'
  | 'Silver'
  | 'Gold'
  | 'Crystal'
  | 'Master'
  | 'Champion'
  | 'Titan'
  | 'Legend';

/** A single Clan Capital Raid Weekend league entry. */
export interface ClanCapitalLeague {
  /** Kebab-case identifier, e.g. `"bronze-iii"`, `"legend"`. */
  id: string;
  /** Display name, e.g. `"Bronze III"`, `"Legend"`. */
  name: string;
  /** The group this league belongs to. */
  group: ClanCapitalLeagueGroup;
  /**
   * Tier within the group (1 = I, 2 = II, 3 = III).
   * Null for Unranked and Legend which have no tier.
   */
  tier: 1 | 2 | 3 | null;
  /** Minimum Capital Trophies required to be in this league. */
  trophyMin: number;
  /** Maximum Capital Trophies for this league. Null for Legend (5000+). */
  trophyMax: number | null;
  /** Clan XP awarded to the clan at the end of a Raid Weekend in this league. */
  clanXpEarned: number;
  /** Path to the league badge image. */
  image: string;
}
