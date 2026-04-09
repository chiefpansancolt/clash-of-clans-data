import { QueryBase } from '@/common/query-base';
import { HomePet } from '@/types';
import { electroOwlData } from './electro-owl';
import { lassiData } from './lassi';
import { mightyYakData } from './mighty-yak';
import { unicornData } from './unicorn';

const allPets: HomePet[] = [lassiData, electroOwlData, mightyYakData, unicornData];

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

  unicorn(): HomeVillagePets {
    return new HomeVillagePets([unicornData]);
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
