import { QueryBase } from '@/common/query-base';
import rawData from '@/data/clan-capital/leagues/clan-capital-leagues.json';
import { ClanCapitalLeague, ClanCapitalLeagueGroup } from '@/types';

const allLeagues: ClanCapitalLeague[] = rawData as unknown as ClanCapitalLeague[];

/**
 * Query class for Clan Capital Raid Weekend leagues.
 * Returned by `clanCapital().leagues()`.
 */
export class ClanCapitalLeagues extends QueryBase<ClanCapitalLeague> {
  /** Filter to leagues belonging to a specific group (e.g. `"Gold"`, `"Master"`). */
  byGroup(group: ClanCapitalLeagueGroup): ClanCapitalLeagues {
    return new ClanCapitalLeagues(this.data.filter((l) => l.group === group));
  }

  /**
   * Return the league that contains the given trophy count, or `undefined` if out of range.
   * Legend league matches any value ≥ 5000.
   */
  atTrophies(trophies: number): ClanCapitalLeague | undefined {
    return this.data.find(
      (l) => trophies >= l.trophyMin && (l.trophyMax === null || trophies <= l.trophyMax),
    );
  }
}

export function allClanCapitalLeagues(): ClanCapitalLeagues {
  return new ClanCapitalLeagues(allLeagues);
}
