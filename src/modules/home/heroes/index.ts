import { QueryBase } from '@/common/query-base';
import { HomeHero } from '@/types';
import { archerQueenData } from './archer-queen';
import { barbarianKingData } from './barbarian-king';
import { dragonDukeData } from './dragon-duke';
import { grandWardenData } from './grand-warden';
import { minionPrinceData } from './minion-prince';
import { royalChampionData } from './royal-champion';

const allHeroes: HomeHero[] = [
  barbarianKingData,
  archerQueenData,
  grandWardenData,
  royalChampionData,
  minionPrinceData,
  dragonDukeData,
];

/**
 * Query class for all Home Village heroes.
 * Returned by `home().heroes()`.
 */
export class HomeVillageHeroes extends QueryBase<HomeHero> {
  constructor(data: HomeHero[] = allHeroes) {
    super(data);
  }

  barbarianKing(): HomeVillageHeroes {
    return new HomeVillageHeroes([barbarianKingData]);
  }

  archerQueen(): HomeVillageHeroes {
    return new HomeVillageHeroes([archerQueenData]);
  }

  grandWarden(): HomeVillageHeroes {
    return new HomeVillageHeroes([grandWardenData]);
  }

  royalChampion(): HomeVillageHeroes {
    return new HomeVillageHeroes([royalChampionData]);
  }

  dragonDuke(): HomeVillageHeroes {
    return new HomeVillageHeroes([dragonDukeData]);
  }

  minionPrince(): HomeVillageHeroes {
    return new HomeVillageHeroes([minionPrinceData]);
  }

  /** Filter to heroes that have at least one level available at or below the given Hero Hall level. */
  byHeroHall(level: number): HomeVillageHeroes {
    return new HomeVillageHeroes(
      this.data.filter((h) => h.levels.some((l) => l.heroHallLevelRequired <= level)),
    );
  }
}
