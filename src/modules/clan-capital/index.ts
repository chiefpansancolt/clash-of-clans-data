import { ClanCapitalArmyBuildings } from './army-buildings';
import { ClanCapitalDefenses } from './defenses';
import { ClanCapitalCapitalHall } from './halls/capital-hall';
import { ClanCapitalDistrictHall } from './halls/district-hall';
import { ClanCapitalOther } from './other';
import { ClanCapitalSpells } from './spells';
import { ClanCapitalWalls } from './walls';

export {
  ClanCapitalArmyBuildings,
  ClanCapitalBarracks,
  ClanCapitalSpellFactories,
} from './army-buildings';
export { ClanCapitalCapitalHall } from './halls/capital-hall';
export { ClanCapitalDefenses } from './defenses';
export { ClanCapitalDistrictHall } from './halls/district-hall';
export { ClanCapitalHouses, ClanCapitalOther } from './other';
export { ClanCapitalSpells } from './spells';
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

  /** Returns a query over all Clan Capital army buildings. */
  armyBuildings(): ClanCapitalArmyBuildings {
    return new ClanCapitalArmyBuildings();
  }

  /** Returns a query over Clan Capital other buildings (houses, etc.). */
  other(): ClanCapitalOther {
    return new ClanCapitalOther();
  }

  /** Returns a query over all Clan Capital spells. */
  spells(): ClanCapitalSpells {
    return new ClanCapitalSpells();
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
