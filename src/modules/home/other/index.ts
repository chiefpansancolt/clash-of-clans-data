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

export class HomeVillageHelperHut extends QueryBase<HomeHelperHutBuilding> {
  constructor(data: HomeHelperHutBuilding[] = [helperHutData]) {
    super(data);
  }
}

export class HomeVillageLabAssistant extends QueryBase<HomeLabAssistantHelper> {
  constructor(data: HomeLabAssistantHelper[] = [labAssistantData]) {
    super(data);
  }
}

export class HomeVillageBuildersApprentice extends QueryBase<HomeBuilderApprenticeHelper> {
  constructor(data: HomeBuilderApprenticeHelper[] = [buildersApprenticeData]) {
    super(data);
  }
}

export class HomeVillageAlchemist extends QueryBase<HomeAlchemistHelper> {
  constructor(data: HomeAlchemistHelper[] = [alchemistData]) {
    super(data);
  }
}

export class HomeVillageProspector extends QueryBase<HomeProspectorHelper> {
  constructor(data: HomeProspectorHelper[] = [prospectorData]) {
    super(data);
  }
}

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

  byTownHall(level: number): HomeVillageHelpers {
    return new HomeVillageHelpers(this.data.filter((h) => h.townHallRequired <= level));
  }
}

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

  helpers(): HomeVillageHelpers {
    return new HomeVillageHelpers();
  }

  byTownHall(level: number): HomeVillageOtherBuildings {
    return new HomeVillageOtherBuildings(
      this.data.filter((b) =>
        b.availablePerTownHall.some((e) => e.townHallLevel === level && e.count > 0),
      ),
    );
  }
}
