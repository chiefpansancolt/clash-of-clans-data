import { ClanLabels, ClanLevels, createClanLabels, createClanLevels } from './levels';
import { ClanWar, createClanWar } from './war';

export { ClanLabels, ClanLevels } from './levels';
export { ClanWar } from './war';

/**
 * Top-level Clan namespace.
 * Returned by `clan()`.
 */
export class Clan {
  /** Clan level progression — XP requirements, badges, and perks per level. */
  levels(): ClanLevels {
    return createClanLevels();
  }

  /** Clan labels that can be displayed on a clan's profile. */
  labels(): ClanLabels {
    return createClanLabels();
  }

  /** Clan war data — max base loot, war bonuses, and ore per Town Hall level. */
  war(): ClanWar {
    return createClanWar();
  }
}

/** Returns the Clan namespace. */
export function clan(): Clan {
  return new Clan();
}
