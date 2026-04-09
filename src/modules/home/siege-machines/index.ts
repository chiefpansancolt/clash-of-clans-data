import { QueryBase } from '@/common/query-base';
import { SiegeMachine } from '@/types';
import { battleBlimpData } from './battle-blimp';
import { logLauncherData } from './log-launcher';
import { siegeBarracksData } from './siege-barracks';
import { stoneSlammerData } from './stone-slammer';
import { wallWreckerData } from './wall-wrecker';

const allSiegeMachines: SiegeMachine[] = [
  wallWreckerData,
  battleBlimpData,
  stoneSlammerData,
  siegeBarracksData,
  logLauncherData,
];

export class HomeVillageSiegeMachines extends QueryBase<SiegeMachine> {
  constructor(data: SiegeMachine[] = allSiegeMachines) {
    super(data);
  }

  // Per-machine accessors
  wallWrecker(): HomeVillageSiegeMachines {
    return new HomeVillageSiegeMachines([wallWreckerData]);
  }

  battleBlimp(): HomeVillageSiegeMachines {
    return new HomeVillageSiegeMachines([battleBlimpData]);
  }

  stoneSlammer(): HomeVillageSiegeMachines {
    return new HomeVillageSiegeMachines([stoneSlammerData]);
  }

  siegeBarracks(): HomeVillageSiegeMachines {
    return new HomeVillageSiegeMachines([siegeBarracksData]);
  }

  logLauncher(): HomeVillageSiegeMachines {
    return new HomeVillageSiegeMachines([logLauncherData]);
  }

  // Category filters
  byWorkshop(level: number): HomeVillageSiegeMachines {
    return new HomeVillageSiegeMachines(this.data.filter((m) => m.workshopLevelRequired <= level));
  }

  byTownHall(level: number): HomeVillageSiegeMachines {
    return new HomeVillageSiegeMachines(
      this.data.filter((m) => m.levels.some((l) => l.townHallRequired <= level)),
    );
  }
}
