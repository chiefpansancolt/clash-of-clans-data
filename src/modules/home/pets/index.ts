import { QueryBase } from '@/common/query-base';
import { HomePet } from '@/types';
import { angryJellyData } from './angry-jelly';
import { diggyData } from './diggy';
import { electroOwlData } from './electro-owl';
import { frostyData } from './frosty';
import { greedyRavenData } from './greedy-raven';
import { lassiData } from './lassi';
import { mightyYakData } from './mighty-yak';
import { phoenixData } from './phoenix';
import { poisonLizardData } from './poison-lizard';
import { sneezyData } from './sneezy';
import { spiritFoxData } from './spirit-fox';
import { unicornData } from './unicorn';

const allPets: HomePet[] = [
  lassiData,
  electroOwlData,
  mightyYakData,
  unicornData,
  frostyData,
  diggyData,
  poisonLizardData,
  phoenixData,
  spiritFoxData,
  angryJellyData,
  sneezyData,
  greedyRavenData,
];

export class HomeVillagePets extends QueryBase<HomePet> {
  constructor(data: HomePet[] = allPets) {
    super(data);
  }

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

  frosty(): HomeVillagePets {
    return new HomeVillagePets([frostyData]);
  }

  diggy(): HomeVillagePets {
    return new HomeVillagePets([diggyData]);
  }

  poisonLizard(): HomeVillagePets {
    return new HomeVillagePets([poisonLizardData]);
  }

  phoenix(): HomeVillagePets {
    return new HomeVillagePets([phoenixData]);
  }

  spiritFox(): HomeVillagePets {
    return new HomeVillagePets([spiritFoxData]);
  }

  angryJelly(): HomeVillagePets {
    return new HomeVillagePets([angryJellyData]);
  }

  sneezy(): HomeVillagePets {
    return new HomeVillagePets([sneezyData]);
  }

  greedyRaven(): HomeVillagePets {
    return new HomeVillagePets([greedyRavenData]);
  }

  byPetHouse(level: number): HomeVillagePets {
    return new HomeVillagePets(this.data.filter((p) => p.petHouseLevelRequired <= level));
  }

  byTownHall(level: number): HomeVillagePets {
    return new HomeVillagePets(
      this.data.filter((p) => p.levels.some((l) => l.townHallRequired <= level)),
    );
  }
}
