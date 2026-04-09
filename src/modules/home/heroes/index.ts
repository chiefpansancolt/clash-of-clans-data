import { QueryBase } from '@/common/query-base';
import { HomeHero } from '@/types';
import { barbarianKingData } from './barbarian-king';

const allHeroes: HomeHero[] = [barbarianKingData];

export class HomeVillageHeroes extends QueryBase<HomeHero> {
  constructor(data: HomeHero[] = allHeroes) {
    super(data);
  }

  // Per-hero accessors
  barbarianKing(): HomeVillageHeroes {
    return new HomeVillageHeroes([barbarianKingData]);
  }

  // Category filters
  byHeroHall(level: number): HomeVillageHeroes {
    return new HomeVillageHeroes(
      this.data.filter((h) => h.levels.some((l) => l.heroHallLevelRequired <= level)),
    );
  }
}
