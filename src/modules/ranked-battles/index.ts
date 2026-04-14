import { QueryBase } from '@/common/query-base';
import rawData from '@/data/ranked-battles/ranked-battles.json';
import {
  DifficultyModifier,
  LeagueFloorEntry,
  LeagueGroup,
  LowerThBonus,
  RankedBattleLeague,
  RankedBattleLootEntry,
} from '@/types';

const allLeagues: RankedBattleLeague[] = rawData.leagues as unknown as RankedBattleLeague[];
const allLeagueFloor: LeagueFloorEntry[] = rawData.leagueFloor as unknown as LeagueFloorEntry[];
const allDifficultyModifiers: DifficultyModifier[] =
  rawData.difficultyModifiers as unknown as DifficultyModifier[];
const rawLootByTownHall = rawData.lootByTownHall as Record<string, unknown[]>;
const allLowerThBonuses: LowerThBonus[] = rawData.lowerThBonuses as unknown as LowerThBonus[];

/**
 * Query class for ranked battle leagues.
 * Returned by `rankedBattles().leagues()`.
 */
export class RankedBattlesLeagues extends QueryBase<RankedBattleLeague> {
  /** Filter to leagues belonging to a specific group (e.g. `"Skeleton"`, `"Electro"`). */
  byGroup(group: LeagueGroup): RankedBattlesLeagues {
    return new RankedBattlesLeagues(this.data.filter((l) => l.leagueGroup === group));
  }

  /**
   * Filter leagues by a partial, case-insensitive name search.
   * e.g. `byName('Dragon')` returns Dragon 28, 29, 30.
   *      `byName('Dragon 30')` returns only Dragon 30.
   */
  byName(query: string): RankedBattlesLeagues {
    const q = query.toLowerCase();
    return new RankedBattlesLeagues(this.data.filter((l) => l.name.toLowerCase().includes(q)));
  }

  /** Filter to leagues that have a difficulty modifier (Electro 32, 33, Legend). */
  withDifficultyModifier(): RankedBattlesLeagues {
    const modifierIds = new Set(allDifficultyModifiers.map((m) => m.leagueId));
    return new RankedBattlesLeagues(this.data.filter((l) => modifierIds.has(l.id)));
  }
}

/**
 * Query class for all ranked battles data — leagues, floors, difficulty modifiers, and loot tables.
 * Returned by `rankedBattles()`.
 */
export class RankedBattles {
  /** All ranked leagues (Unranked, Skeleton 1–33, Legend). */
  leagues(): RankedBattlesLeagues {
    return new RankedBattlesLeagues(allLeagues);
  }

  /**
   * League floor entries — the minimum league each Town Hall level cannot be demoted below.
   * Covers TH7–18.
   */
  leagueFloor(): LeagueFloorEntry[] {
    return allLeagueFloor;
  }

  /**
   * Return the league floor for a specific Town Hall level, or `undefined` if not found.
   * Town Halls below 7 cannot participate in ranked battles.
   */
  floorForTownHall(townHallLevel: number): LeagueFloorEntry | undefined {
    return allLeagueFloor.find((e) => e.townHallLevel === townHallLevel);
  }

  /**
   * Difficulty modifiers for the top three leagues (Electro 32, Electro 33, Legend).
   * These apply defense and hero stat boosts/penalties during attacks.
   */
  difficultyModifiers(): DifficultyModifier[] {
    return allDifficultyModifiers;
  }

  /**
   * Loot data for a specific Town Hall level (7–18).
   * Each entry contains max available loot, league bonus, and star bonus for one league.
   * Returns an empty array for Town Hall levels without data.
   *
   * Note: TH8 data starts from Skeleton 2 (Skeleton 1 was not available in the source).
   */
  loot(townHallLevel: number): RankedBattleLootEntry[] {
    const entries = rawLootByTownHall[String(townHallLevel)];
    if (!entries) return [];
    return entries as unknown as RankedBattleLootEntry[];
  }

  /**
   * League bonus and star bonus data for Town Halls below 7 (TH2–6).
   * These Town Halls cannot participate in ranked leagues but still receive Gold/Elixir bonuses.
   */
  lowerThBonuses(): LowerThBonus[] {
    return allLowerThBonuses;
  }
}

/** Returns the RankedBattles namespace. */
export function rankedBattles(): RankedBattles {
  return new RankedBattles();
}
