import { QueryBase } from '@/common/query-base';
import {
  HeroBannerBuilding,
  HomeArmyBuilding,
  HomeBarracksBuilding,
  HomeBlacksmithBuilding,
  HomeHeroHallBuilding,
  HomePetHouseBuilding,
  HomeResearchBuilding,
  HomeSpellFactoryBuilding,
  HomeWorkshopBuilding,
} from '@/types';
import { armyCampData } from './army-camp';
import { barracksData } from './barracks';
import { blacksmithData } from './blacksmith';
import { darkBarracksData } from './dark-barracks';
import { darkSpellFactoryData } from './dark-spell-factory';
import { heroBannerData } from './hero-banner';
import { heroHallData } from './hero-hall';
import { laboratoryData } from './laboratory';
import { petHouseData } from './pet-house';
import { spellFactoryData } from './spell-factory';
import { workshopData } from './workshop';

const allArmyBuildings: HomeArmyBuilding[] = [armyCampData];

export class HomeVillageBarracks extends QueryBase<HomeBarracksBuilding> {
  constructor(data: HomeBarracksBuilding[] = [barracksData]) {
    super(data);
  }
}

export class HomeVillageDarkBarracks extends QueryBase<HomeBarracksBuilding> {
  constructor(data: HomeBarracksBuilding[] = [darkBarracksData]) {
    super(data);
  }
}

export class HomeVillageLaboratory extends QueryBase<HomeResearchBuilding> {
  constructor(data: HomeResearchBuilding[] = [laboratoryData]) {
    super(data);
  }
}

export class HomeVillageSpellFactory extends QueryBase<HomeSpellFactoryBuilding> {
  constructor(data: HomeSpellFactoryBuilding[] = [spellFactoryData]) {
    super(data);
  }
}

export class HomeVillageDarkSpellFactory extends QueryBase<HomeSpellFactoryBuilding> {
  constructor(data: HomeSpellFactoryBuilding[] = [darkSpellFactoryData]) {
    super(data);
  }
}

export class HomeVillageHeroBanner extends QueryBase<HeroBannerBuilding> {
  constructor(data: HeroBannerBuilding[] = [heroBannerData]) {
    super(data);
  }
}

export class HomeVillageHeroHall extends QueryBase<HomeHeroHallBuilding> {
  constructor(data: HomeHeroHallBuilding[] = [heroHallData]) {
    super(data);
  }
}

export class HomeVillageBlacksmith extends QueryBase<HomeBlacksmithBuilding> {
  constructor(data: HomeBlacksmithBuilding[] = [blacksmithData]) {
    super(data);
  }
}

export class HomeVillageWorkshop extends QueryBase<HomeWorkshopBuilding> {
  constructor(data: HomeWorkshopBuilding[] = [workshopData]) {
    super(data);
  }
}

export class HomeVillagePetHouse extends QueryBase<HomePetHouseBuilding> {
  constructor(data: HomePetHouseBuilding[] = [petHouseData]) {
    super(data);
  }
}

export class HomeVillageArmyBuildings extends QueryBase<HomeArmyBuilding> {
  constructor(data: HomeArmyBuilding[] = allArmyBuildings) {
    super(data);
  }

  // Per-building accessors
  armyCamp(): HomeVillageArmyBuildings {
    return new HomeVillageArmyBuildings([armyCampData]);
  }

  barracks(): HomeVillageBarracks {
    return new HomeVillageBarracks([barracksData]);
  }

  darkBarracks(): HomeVillageDarkBarracks {
    return new HomeVillageDarkBarracks([darkBarracksData]);
  }

  laboratory(): HomeVillageLaboratory {
    return new HomeVillageLaboratory([laboratoryData]);
  }

  spellFactory(): HomeVillageSpellFactory {
    return new HomeVillageSpellFactory([spellFactoryData]);
  }

  darkSpellFactory(): HomeVillageDarkSpellFactory {
    return new HomeVillageDarkSpellFactory([darkSpellFactoryData]);
  }

  heroBanner(): HomeVillageHeroBanner {
    return new HomeVillageHeroBanner([heroBannerData]);
  }

  heroHall(): HomeVillageHeroHall {
    return new HomeVillageHeroHall([heroHallData]);
  }

  blacksmith(): HomeVillageBlacksmith {
    return new HomeVillageBlacksmith([blacksmithData]);
  }

  workshop(): HomeVillageWorkshop {
    return new HomeVillageWorkshop([workshopData]);
  }

  petHouse(): HomeVillagePetHouse {
    return new HomeVillagePetHouse([petHouseData]);
  }

  // Category filters
  /** Filter to army buildings available (count > 0) at the given Town Hall level. */
  byTownHall(level: number): HomeVillageArmyBuildings {
    return new HomeVillageArmyBuildings(
      this.data.filter((b) =>
        b.availablePerTownHall.some((e) => e.townHallLevel === level && e.count > 0),
      ),
    );
  }
}
