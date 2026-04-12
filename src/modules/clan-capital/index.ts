import { ClanCapitalDefenses } from './defenses';
import { ClanCapitalCapitalHall } from './halls/capital-hall';
import { ClanCapitalDistrictHall } from './halls/district-hall';
import { ClanCapitalWalls } from './walls';

export { ClanCapitalCapitalHall } from './halls/capital-hall';
export { ClanCapitalDefenses } from './defenses';
export { ClanCapitalDistrictHall } from './halls/district-hall';
export { ClanCapitalWalls } from './walls';

/** Namespace for all Clan Capital entity queries. Use the {@link clanCapital} factory to create an instance. */
export class ClanCapital {
  capitalHall(): ClanCapitalCapitalHall {
    return new ClanCapitalCapitalHall();
  }

  districtHall(): ClanCapitalDistrictHall {
    return new ClanCapitalDistrictHall();
  }

  /** Returns a query over all Clan Capital stationary defenses. */
  defenses(): ClanCapitalDefenses {
    return new ClanCapitalDefenses();
  }

  /** Returns a query over Clan Capital wall data. */
  walls(): ClanCapitalWalls {
    return new ClanCapitalWalls();
  }
}

/** Creates a new {@link ClanCapital} namespace instance. Entry point for all Clan Capital data. */
export function clanCapital(): ClanCapital {
  return new ClanCapital();
}
