import { QueryBase } from '@/common/query-base';
import { HomeHero } from '@/types';
import { archerQueenData } from './archer-queen';
import { barbarianKingData } from './barbarian-king';

const allHeroes: HomeHero[] = [barbarianKingData, archerQueenData];

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

  // Category filters
  byHeroHall(level: number): HomeVillageHeroes {
    return new HomeVillageHeroes(
      this.data.filter((h) => h.levels.some((l) => l.heroHallLevelRequired <= level)),
    );
  }
}
