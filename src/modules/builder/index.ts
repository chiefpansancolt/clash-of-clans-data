import { BuilderBaseDefenses } from './defenses';
import { BuilderBaseWalls } from './walls';

export { BuilderBaseDefenses } from './defenses';
export { BuilderBaseWalls } from './walls';

/** Namespace for all Builder Base entity queries. Use the {@link builder} factory to create an instance. */
export class BuilderBase {
  /** Returns a query over all stationary defenses (Cannon, etc.). */
  defenses(): BuilderBaseDefenses {
    return new BuilderBaseDefenses();
  }

  /** Returns a query over Builder Base wall data. */
  walls(): BuilderBaseWalls {
    return new BuilderBaseWalls();
  }
}

/** Creates a new {@link BuilderBase} namespace instance. Entry point for all Builder Base data. */
export function builder(): BuilderBase {
  return new BuilderBase();
}
