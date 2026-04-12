import { SeasonPassChallenges, createSeasonPassChallenges } from './challenges';

export { SeasonPassChallenges } from './challenges';

/**
 * Top-level Season Pass namespace.
 * Returned by `seasonPass()`.
 */
export class SeasonPass {
  /** All Season Pass challenge task types. */
  challenges(): SeasonPassChallenges {
    return createSeasonPassChallenges();
  }
}

/** Returns the SeasonPass namespace. */
export function seasonPass(): SeasonPass {
  return new SeasonPass();
}
