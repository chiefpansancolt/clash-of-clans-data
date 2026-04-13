import rawData from '@/data/achievements/achievements.json';
import { QueryBase } from '@/common/query-base';
import { Achievement, AchievementBase } from '@/types';

const allAchievements: Achievement[] = rawData.achievements as unknown as Achievement[];

/**
 * Query class for all in-game achievements.
 * Returned by `achievements()`.
 */
export class Achievements extends QueryBase<Achievement> {
  /** Filter to achievements for a specific base (home, builder, clan-capital). */
  byBase(base: AchievementBase): Achievements {
    return new Achievements(this.data.filter((a) => a.base === base));
  }

  /** Filter to achievements that involve the given data description (case-insensitive substring). */
  byDataInvolved(keyword: string): Achievements {
    const q = keyword.toLowerCase();
    return new Achievements(this.data.filter((a) => a.dataInvolved.toLowerCase().includes(q)));
  }

  /** Filter to achievements that have exactly the given number of tiers. */
  byTierCount(count: number): Achievements {
    return new Achievements(this.data.filter((a) => a.tiers.length === count));
  }
}

/** Returns the Achievements query class. */
export function achievements(): Achievements {
  return new Achievements(allAchievements);
}
