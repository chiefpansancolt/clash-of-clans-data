import { QueryBase } from '@/common/query-base';
import { HomeHero } from '@/types';
import { archerQueenData } from './archer-queen';
import { barbarianKingData } from './barbarian-king';
import { grandWardenData } from './grand-warden';
import { minionPrinceData } from './minion-prince';
import { royalChampionData } from './royal-champion';

const allHeroes: HomeHero[] = [
  barbarianKingData,
  archerQueenData,
  grandWardenData,
  royalChampionData,
  minionPrinceData,
];

export class HomeVillageHeroes extends QueryBase<HomeHero> {
  constructor(data: HomeHero[] = allHeroes) {
    super(data);
  }

  // Per-hero accessors
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

  minionPrince(): HomeVillageHeroes {
    return new HomeVillageHeroes([minionPrinceData]);
  }

  // Category filters
  byHeroHall(level: number): HomeVillageHeroes {
    return new HomeVillageHeroes(
      this.data.filter((h) => h.levels.some((l) => l.heroHallLevelRequired <= level)),
    );
  }
}
