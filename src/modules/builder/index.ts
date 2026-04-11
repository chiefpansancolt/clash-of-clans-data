import { BuilderBaseArmyBuildings } from './army-buildings';
import { BuilderBaseDefenses } from './defenses';
import { BuilderBaseOtherBuildings } from './other';
import { BuilderBaseResourceBuildings } from './resource-buildings';
import { BuilderBaseTraps } from './traps';
import { BuilderBaseTroops } from './troops';
import { BuilderBaseWalls } from './walls';

export { BuilderBaseArmyBuildings } from './army-buildings';
export { BuilderBaseDefenses } from './defenses';
export { BuilderBaseOtherBuildings } from './other';
export { BuilderBaseResourceBuildings } from './resource-buildings';
export { BuilderBaseTraps } from './traps';
export { BuilderBaseTroops } from './troops';
export { BuilderBaseWalls } from './walls';

/** Namespace for all Builder Base entity queries. Use the {@link builder} factory to create an instance. */
export class BuilderBase {
  /** Returns a query over all stationary defenses (Cannon, etc.). */
  defenses(): BuilderBaseDefenses {
    return new BuilderBaseDefenses();
  }

  /** Returns a query over Builder Base traps. */
  traps(): BuilderBaseTraps {
    return new BuilderBaseTraps();
  }

  /** Returns a query over Builder Base wall data. */
  walls(): BuilderBaseWalls {
    return new BuilderBaseWalls();
  }

  /** Returns a query over Builder Base resource buildings. */
  resourceBuildings(): BuilderBaseResourceBuildings {
    return new BuilderBaseResourceBuildings();
  }

  /** Returns a query over Builder Base army buildings. */
  armyBuildings(): BuilderBaseArmyBuildings {
    return new BuilderBaseArmyBuildings();
  }

  /** Returns a query over other Builder Base buildings (Clock Tower, etc.). */
  otherBuildings(): BuilderBaseOtherBuildings {
    return new BuilderBaseOtherBuildings();
  }

  /** Returns a query over Builder Base troops. */
  troops(): BuilderBaseTroops {
    return new BuilderBaseTroops();
  }
}

/** Creates a new {@link BuilderBase} namespace instance. Entry point for all Builder Base data. */
export function builder(): BuilderBase {
  return new BuilderBase();
}
