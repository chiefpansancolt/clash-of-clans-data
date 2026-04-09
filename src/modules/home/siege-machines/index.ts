import { QueryBase } from '@/common/query-base';
import { SiegeMachine } from '@/types';
import { battleBlimpData } from './battle-blimp';
import { battleDrillData } from './battle-drill';
import { flameFlingerData } from './flame-flinger';
import { logLauncherData } from './log-launcher';
import { siegeBarracksData } from './siege-barracks';
import { stoneSlammerData } from './stone-slammer';
import { troopLauncherData } from './troop-launcher';
import { wallWreckerData } from './wall-wrecker';

const allSiegeMachines: SiegeMachine[] = [
  wallWreckerData,
  battleBlimpData,
  stoneSlammerData,
  siegeBarracksData,
  logLauncherData,
  flameFlingerData,
  battleDrillData,
  troopLauncherData,
];

/**
 * Query class for all Home Village siege machines.
 * Returned by `home().siegeMachines()`.
 */
export class HomeVillageSiegeMachines extends QueryBase<SiegeMachine> {
  constructor(data: SiegeMachine[] = allSiegeMachines) {
    super(data);
  }

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

  flameFlinger(): HomeVillageSiegeMachines {
    return new HomeVillageSiegeMachines([flameFlingerData]);
  }

  battleDrill(): HomeVillageSiegeMachines {
    return new HomeVillageSiegeMachines([battleDrillData]);
  }

  troopLauncher(): HomeVillageSiegeMachines {
    return new HomeVillageSiegeMachines([troopLauncherData]);
  }

  /** Filter to siege machines unlocked at or below the given Workshop level. */
  byWorkshop(level: number): HomeVillageSiegeMachines {
    return new HomeVillageSiegeMachines(this.data.filter((m) => m.workshopLevelRequired <= level));
  }

  /** Filter to siege machines that have at least one level available at or before the given Town Hall level. */
  byTownHall(level: number): HomeVillageSiegeMachines {
    return new HomeVillageSiegeMachines(
      this.data.filter((m) => m.levels.some((l) => l.townHallRequired <= level)),
    );
  }
}
