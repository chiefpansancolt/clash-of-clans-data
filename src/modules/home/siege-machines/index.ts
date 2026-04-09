import { QueryBase } from '@/common/query-base';
import { SiegeMachine } from '@/types';
import { wallWreckerData } from './wall-wrecker';

const allSiegeMachines: SiegeMachine[] = [wallWreckerData];

export class HomeVillageSiegeMachines extends QueryBase<SiegeMachine> {
  constructor(data: SiegeMachine[] = allSiegeMachines) {
    super(data);
  }

  // Per-machine accessors
  wallWrecker(): HomeVillageSiegeMachines {
    return new HomeVillageSiegeMachines([wallWreckerData]);
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
