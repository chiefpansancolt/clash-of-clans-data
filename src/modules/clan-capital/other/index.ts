import { ClanCapitalHouses } from './houses';

export { ClanCapitalHouses };

/**
 * Query class for all Clan Capital other buildings.
 * Returned by `clanCapital().other()`.
 */
export class ClanCapitalOther {
  houses(): ClanCapitalHouses {
    return new ClanCapitalHouses();
  }
}
