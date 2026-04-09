import { QueryBase } from '@/common/query-base';
import { HomePet } from '@/types';
import { lassiData } from './lassi';

const allPets: HomePet[] = [lassiData];

export class HomeVillagePets extends QueryBase<HomePet> {
  constructor(data: HomePet[] = allPets) {
    super(data);
  }

  // Per-pet accessors
  lassi(): HomeVillagePets {
    return new HomeVillagePets([lassiData]);
  }

  // Category filters
  byPetHouse(level: number): HomeVillagePets {
    return new HomeVillagePets(this.data.filter((p) => p.petHouseLevelRequired <= level));
  }

  byTownHall(level: number): HomeVillagePets {
    return new HomeVillagePets(
      this.data.filter((p) => p.levels.some((l) => l.townHallRequired <= level)),
    );
  }
}
