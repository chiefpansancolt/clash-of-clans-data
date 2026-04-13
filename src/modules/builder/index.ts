import { BuilderBaseArmyBuildings } from './army-buildings';
import { BuilderBaseBuilderHall } from './builder-hall';
import { BuilderBaseDefenses } from './defenses';
import { BuilderBaseHeroes } from './heroes';
import { allBuilderBaseLeagues, BuilderBaseLeagues } from './leagues';
import { BuilderBaseOtherBuildings } from './other';
import { BuilderBaseResourceBuildings } from './resource-buildings';
import { BuilderBaseTraps } from './traps';
import { BuilderBaseTroops } from './troops';
import { BuilderBaseWalls } from './walls';

export { BuilderBaseArmyBuildings } from './army-buildings';
export { BuilderBaseBuilderHall } from './builder-hall';
export { BuilderBaseDefenses } from './defenses';
export { BuilderBaseHeroes } from './heroes';
export { BuilderBaseLeagues } from './leagues';
export { BuilderBaseOtherBuildings } from './other';
export { BuilderBaseResourceBuildings } from './resource-buildings';
export { BuilderBaseTraps } from './traps';
export { BuilderBaseTroops } from './troops';
export { BuilderBaseWalls } from './walls';

/** Namespace for all Builder Base entity queries. Use the {@link builder} factory to create an instance. */
export class BuilderBase {
  /** Returns a query wrapping the Builder Hall entity. */
  builderHall(): BuilderBaseBuilderHall {
    return new BuilderBaseBuilderHall();
  }

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

  /** Returns a query over Builder Base heroes. */
  heroes(): BuilderBaseHeroes {
    return new BuilderBaseHeroes();
  }

  /** Returns a query over all Builder Base leagues. */
  leagues(): BuilderBaseLeagues {
    return allBuilderBaseLeagues();
  }
}

/** Creates a new {@link BuilderBase} namespace instance. Entry point for all Builder Base data. */
export function builder(): BuilderBase {
  return new BuilderBase();
}
