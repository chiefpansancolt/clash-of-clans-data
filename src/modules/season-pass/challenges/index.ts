import { QueryBase } from '@/common/query-base';
import rawData from '@/data/season-pass/challenges.json';
import { SeasonPassChallenge } from '@/types';

const allChallenges: SeasonPassChallenge[] = rawData as unknown as SeasonPassChallenge[];

/**
 * Query class for all Season Pass challenge task types.
 * Returned by `seasonPass().challenges()`.
 */
export class SeasonPassChallenges extends QueryBase<SeasonPassChallenge> {
  buildingUpgrade(): SeasonPassChallenges {
    return new SeasonPassChallenges(allChallenges.filter((c) => c.id === 'building-upgrade'));
  }

  troopUpgrade(): SeasonPassChallenges {
    return new SeasonPassChallenges(allChallenges.filter((c) => c.id === 'troop-upgrade'));
  }

  heroPetUpgrade(): SeasonPassChallenges {
    return new SeasonPassChallenges(allChallenges.filter((c) => c.id === 'hero-pet-upgrade'));
  }

  donateReinforcements(): SeasonPassChallenges {
    return new SeasonPassChallenges(allChallenges.filter((c) => c.id === 'donate-reinforcements'));
  }

  starBonus(): SeasonPassChallenges {
    return new SeasonPassChallenges(allChallenges.filter((c) => c.id === 'star-bonus'));
  }

  winBattle(): SeasonPassChallenges {
    return new SeasonPassChallenges(allChallenges.filter((c) => c.id === 'win-battle'));
  }

  destroyTownHall(): SeasonPassChallenges {
    return new SeasonPassChallenges(allChallenges.filter((c) => c.id === 'destroy-town-hall'));
  }

  requestReinforcements(): SeasonPassChallenges {
    return new SeasonPassChallenges(allChallenges.filter((c) => c.id === 'request-reinforcements'));
  }
}

export function createSeasonPassChallenges(): SeasonPassChallenges {
  return new SeasonPassChallenges(allChallenges);
}
