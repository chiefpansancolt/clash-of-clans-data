import { QueryBase } from '@/common/query-base';
import {
  HomeAlchemistHelper,
  HomeBuilderApprenticeHelper,
  HomeHelper,
  HomeHelperHutBuilding,
  HomeHelperLevel,
  HomeLabAssistantHelper,
  HomeOtherBuilding,
  HomeProspectorHelper,
} from '@/types';
import { bobsHutData } from './bobs-hut';
import { helperHutData } from './helper-hut';
import { alchemistData } from './helpers/alchemist';
import { buildersApprenticeData } from './helpers/builders-apprentice';
import { labAssistantData } from './helpers/lab-assistant';
import { prospectorData } from './helpers/prospector';

const allOtherBuildings: HomeOtherBuilding[] = [bobsHutData];

/** Query class for the Helper Hut building. Returned by `home().otherBuildings().helperHut()`. */
export class HomeVillageHelperHut extends QueryBase<HomeHelperHutBuilding> {
  constructor(data: HomeHelperHutBuilding[] = [helperHutData]) {
    super(data);
  }
}

/** Query class for the Lab Assistant helper. Returned by `home().otherBuildings().helpers().labAssistant()`. */
export class HomeVillageLabAssistant extends QueryBase<HomeLabAssistantHelper> {
  constructor(data: HomeLabAssistantHelper[] = [labAssistantData]) {
    super(data);
  }
}

/** Query class for the Builder's Apprentice helper. Returned by `home().otherBuildings().helpers().buildersApprentice()`. */
export class HomeVillageBuildersApprentice extends QueryBase<HomeBuilderApprenticeHelper> {
  constructor(data: HomeBuilderApprenticeHelper[] = [buildersApprenticeData]) {
    super(data);
  }
}

/** Query class for the Alchemist helper. Returned by `home().otherBuildings().helpers().alchemist()`. */
export class HomeVillageAlchemist extends QueryBase<HomeAlchemistHelper> {
  constructor(data: HomeAlchemistHelper[] = [alchemistData]) {
    super(data);
  }
}

/** Query class for the Prospector helper. Returned by `home().otherBuildings().helpers().prospector()`. */
export class HomeVillageProspector extends QueryBase<HomeProspectorHelper> {
  constructor(data: HomeProspectorHelper[] = [prospectorData]) {
    super(data);
  }
}

/**
 * Query class for all Home Village helper units (Lab Assistant, Builder's Apprentice, Alchemist, Prospector).
 * Returned by `home().otherBuildings().helpers()`.
 */
export class HomeVillageHelpers extends QueryBase<HomeHelper<HomeHelperLevel>> {
  constructor(
    data: HomeHelper<HomeHelperLevel>[] = [
      labAssistantData,
      buildersApprenticeData,
      alchemistData,
      prospectorData,
    ],
  ) {
    super(data);
  }

  labAssistant(): HomeVillageLabAssistant {
    return new HomeVillageLabAssistant([labAssistantData]);
  }

  buildersApprentice(): HomeVillageBuildersApprentice {
    return new HomeVillageBuildersApprentice([buildersApprenticeData]);
  }

  alchemist(): HomeVillageAlchemist {
    return new HomeVillageAlchemist([alchemistData]);
  }

  prospector(): HomeVillageProspector {
    return new HomeVillageProspector([prospectorData]);
  }

  /** Filter to helpers unlocked at or before the given Town Hall level. */
  byTownHall(level: number): HomeVillageHelpers {
    return new HomeVillageHelpers(this.data.filter((h) => h.townHallRequired <= level));
  }
}

/**
 * Query class for other Home Village buildings (Bob's Hut) and the helpers sub-namespace.
 * Returned by `home().otherBuildings()`.
 */
export class HomeVillageOtherBuildings extends QueryBase<HomeOtherBuilding> {
  constructor(data: HomeOtherBuilding[] = allOtherBuildings) {
    super(data);
  }

  bobsHut(): HomeVillageOtherBuildings {
    return new HomeVillageOtherBuildings([bobsHutData]);
  }

  helperHut(): HomeVillageHelperHut {
    return new HomeVillageHelperHut([helperHutData]);
  }

  /** Returns a query over all helper units (Lab Assistant, Builder's Apprentice, Alchemist, Prospector). */
  helpers(): HomeVillageHelpers {
    return new HomeVillageHelpers();
  }

  /** Filter to other buildings available (count > 0) at the given Town Hall level. */
  byTownHall(level: number): HomeVillageOtherBuildings {
    return new HomeVillageOtherBuildings(
      this.data.filter((b) =>
        b.availablePerTownHall.some((e) => e.townHallLevel === level && e.count > 0),
      ),
    );
  }
}
