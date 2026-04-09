import { QueryBase } from '@/common/query-base';
import { HomePet } from '@/types';
import { electroOwlData } from './electro-owl';
import { lassiData } from './lassi';
import { mightyYakData } from './mighty-yak';

const allPets: HomePet[] = [lassiData, electroOwlData, mightyYakData];

export class HomeVillagePets extends QueryBase<HomePet> {
  constructor(data: HomePet[] = allPets) {
    super(data);
  }

  // Per-pet accessors
  lassi(): HomeVillagePets {
    return new HomeVillagePets([lassiData]);
  }

  electroOwl(): HomeVillagePets {
    return new HomeVillagePets([electroOwlData]);
  }

  mightyYak(): HomeVillagePets {
    return new HomeVillagePets([mightyYakData]);
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
