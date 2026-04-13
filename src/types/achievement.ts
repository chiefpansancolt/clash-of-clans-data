/** The village or base an achievement belongs to. */
export type AchievementBase = 'home' | 'builder' | 'clan-capital';

/** A single tier within an achievement. */
export interface AchievementTier {
  tier: number;
  /** The threshold value required to complete this tier. */
  requirement: number;
  xpRewarded: number;
  gemsRewarded: number;
}

/** A single in-game achievement with one or more tiers. */
export interface Achievement {
  id: string;
  name: string;
  /** Which village/base this achievement belongs to. */
  base: AchievementBase;
  /** Description of what progress is tracked (e.g. "Total Gold looted"). */
  dataInvolved: string;
  tiers: AchievementTier[];
}
