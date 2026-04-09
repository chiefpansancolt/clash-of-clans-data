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

/** Query class for the Barracks building. Returned by `home().armyBuildings().barracks()`. */
export class HomeVillageBarracks extends QueryBase<HomeBarracksBuilding> {
  constructor(data: HomeBarracksBuilding[] = [barracksData]) {
    super(data);
  }
}

/** Query class for the Dark Barracks building. Returned by `home().armyBuildings().darkBarracks()`. */
export class HomeVillageDarkBarracks extends QueryBase<HomeBarracksBuilding> {
  constructor(data: HomeBarracksBuilding[] = [darkBarracksData]) {
    super(data);
  }
}

/** Query class for the Laboratory building. Returned by `home().armyBuildings().laboratory()`. */
export class HomeVillageLaboratory extends QueryBase<HomeResearchBuilding> {
  constructor(data: HomeResearchBuilding[] = [laboratoryData]) {
    super(data);
  }
}

/** Query class for the Spell Factory building. Returned by `home().armyBuildings().spellFactory()`. */
export class HomeVillageSpellFactory extends QueryBase<HomeSpellFactoryBuilding> {
  constructor(data: HomeSpellFactoryBuilding[] = [spellFactoryData]) {
    super(data);
  }
}

/** Query class for the Dark Spell Factory building. Returned by `home().armyBuildings().darkSpellFactory()`. */
export class HomeVillageDarkSpellFactory extends QueryBase<HomeSpellFactoryBuilding> {
  constructor(data: HomeSpellFactoryBuilding[] = [darkSpellFactoryData]) {
    super(data);
  }
}

/** Query class for the Hero Banner building. Returned by `home().armyBuildings().heroBanner()`. */
export class HomeVillageHeroBanner extends QueryBase<HeroBannerBuilding> {
  constructor(data: HeroBannerBuilding[] = [heroBannerData]) {
    super(data);
  }
}

/** Query class for the Hero Hall building. Returned by `home().armyBuildings().heroHall()`. */
export class HomeVillageHeroHall extends QueryBase<HomeHeroHallBuilding> {
  constructor(data: HomeHeroHallBuilding[] = [heroHallData]) {
    super(data);
  }
}

/** Query class for the Blacksmith building. Returned by `home().armyBuildings().blacksmith()`. */
export class HomeVillageBlacksmith extends QueryBase<HomeBlacksmithBuilding> {
  constructor(data: HomeBlacksmithBuilding[] = [blacksmithData]) {
    super(data);
  }
}

/** Query class for the Workshop building. Returned by `home().armyBuildings().workshop()`. */
export class HomeVillageWorkshop extends QueryBase<HomeWorkshopBuilding> {
  constructor(data: HomeWorkshopBuilding[] = [workshopData]) {
    super(data);
  }
}

/** Query class for the Pet House building. Returned by `home().armyBuildings().petHouse()`. */
export class HomeVillagePetHouse extends QueryBase<HomePetHouseBuilding> {
  constructor(data: HomePetHouseBuilding[] = [petHouseData]) {
    super(data);
  }
}

/**
 * Query class for all Home Village army buildings.
 * Returned by `home().armyBuildings()`.
 *
 * Note: the generic `get()` / `count()` methods only include Army Camp (typed as `HomeArmyBuilding`).
 * Buildings with specific types (Barracks, Laboratory, etc.) are accessed via their own accessor methods.
 */
export class HomeVillageArmyBuildings extends QueryBase<HomeArmyBuilding> {
  constructor(data: HomeArmyBuilding[] = allArmyBuildings) {
    super(data);
  }

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

  /** Filter to army buildings available (count > 0) at the given Town Hall level. */
  byTownHall(level: number): HomeVillageArmyBuildings {
    return new HomeVillageArmyBuildings(
      this.data.filter((b) =>
        b.availablePerTownHall.some((e) => e.townHallLevel === level && e.count > 0),
      ),
    );
  }
}
