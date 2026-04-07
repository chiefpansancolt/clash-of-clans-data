import { HomeVillageCraftedDefenses } from './crafted-defenses';
import { HomeVillageDefenses } from './defenses';
import { HomeVillageGuardians } from './guardians';
import { HomeVillageTownHall } from './town-hall';
import { HomeVillageTraps } from './traps';
import { HomeVillageWalls } from './walls';

export { HomeVillageCraftedDefenses } from './crafted-defenses';
export { HomeVillageDefenses } from './defenses';
export { HomeVillageGuardians } from './guardians';
export { HomeVillageTownHall } from './town-hall';
export { HomeVillageTraps } from './traps';
export { HomeVillageWalls } from './walls';

export class HomeVillage {
  defenses(): HomeVillageDefenses {
    return new HomeVillageDefenses();
  }

  craftedDefenses(): HomeVillageCraftedDefenses {
    return new HomeVillageCraftedDefenses();
  }

  guardians(): HomeVillageGuardians {
    return new HomeVillageGuardians();
  }

  traps(): HomeVillageTraps {
    return new HomeVillageTraps();
  }

  walls(): HomeVillageWalls {
    return new HomeVillageWalls();
  }

  townHall(): HomeVillageTownHall {
    return new HomeVillageTownHall();
  }
}

export function home(): HomeVillage {
  return new HomeVillage();
}
