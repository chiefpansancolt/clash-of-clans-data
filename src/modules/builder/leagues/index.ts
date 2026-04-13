import { QueryBase } from '@/common/query-base';
import rawData from '@/data/builder/leagues/builder-base-leagues.json';
import { BuilderBaseLeague, BuilderBaseLeagueGroup } from '@/types';

const allLeagues: BuilderBaseLeague[] = rawData as unknown as BuilderBaseLeague[];

/**
 * Query class for Builder Base leagues.
 * Returned by `builder().leagues()`.
 */
export class BuilderBaseLeagues extends QueryBase<BuilderBaseLeague> {
  /** Filter to leagues belonging to a specific group (e.g. `"Wood"`, `"Diamond"`). */
  byGroup(group: BuilderBaseLeagueGroup): BuilderBaseLeagues {
    return new BuilderBaseLeagues(this.data.filter((l) => l.group === group));
  }

  /**
   * Return the league that contains the given trophy count, or `undefined` if out of range.
   * Diamond league matches any value ≥ 6200.
   */
  atTrophies(trophies: number): BuilderBaseLeague | undefined {
    return this.data.find(
      (l) => trophies >= l.trophyMin && (l.trophyMax === null || trophies <= l.trophyMax),
    );
  }
}

export function allBuilderBaseLeagues(): BuilderBaseLeagues {
  return new BuilderBaseLeagues(allLeagues);
}
