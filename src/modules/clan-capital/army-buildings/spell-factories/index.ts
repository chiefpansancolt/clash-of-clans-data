import { QueryBase } from '@/common/query-base';
import { ClanCapitalSpellFactory } from '@/types';
import { endlessHasteSpellFactoryData } from './endless-haste-spell-factory';
import { frostSpellFactoryData } from './frost-spell-factory';
import { graveyardSpellFactoryData } from './graveyard-spell-factory';
import { healSpellFactoryData } from './heal-spell-factory';
import { jumpSpellFactoryData } from './jump-spell-factory';
import { lightningSpellFactoryData } from './lightning-spell-factory';
import { rageSpellFactoryData } from './rage-spell-factory';

const allSpellFactories: ClanCapitalSpellFactory[] = [
  healSpellFactoryData,
  jumpSpellFactoryData,
  lightningSpellFactoryData,
  frostSpellFactoryData,
  rageSpellFactoryData,
  graveyardSpellFactoryData,
  endlessHasteSpellFactoryData,
];

/**
 * Query class for all Clan Capital spell factory buildings.
 * Returned by `clanCapital().armyBuildings().spellFactories()`.
 */
export class ClanCapitalSpellFactories extends QueryBase<ClanCapitalSpellFactory> {
  constructor(data: ClanCapitalSpellFactory[] = allSpellFactories) {
    super(data);
  }

  healSpellFactory(): ClanCapitalSpellFactories {
    return new ClanCapitalSpellFactories([healSpellFactoryData]);
  }

  jumpSpellFactory(): ClanCapitalSpellFactories {
    return new ClanCapitalSpellFactories([jumpSpellFactoryData]);
  }

  lightningSpellFactory(): ClanCapitalSpellFactories {
    return new ClanCapitalSpellFactories([lightningSpellFactoryData]);
  }

  frostSpellFactory(): ClanCapitalSpellFactories {
    return new ClanCapitalSpellFactories([frostSpellFactoryData]);
  }

  rageSpellFactory(): ClanCapitalSpellFactories {
    return new ClanCapitalSpellFactories([rageSpellFactoryData]);
  }

  graveyardSpellFactory(): ClanCapitalSpellFactories {
    return new ClanCapitalSpellFactories([graveyardSpellFactoryData]);
  }

  endlessHasteSpellFactory(): ClanCapitalSpellFactories {
    return new ClanCapitalSpellFactories([endlessHasteSpellFactoryData]);
  }

  /** Filter to spell factories available in the given district. */
  byDistrict(district: string): ClanCapitalSpellFactories {
    return new ClanCapitalSpellFactories(
      this.data.filter((sf) => sf.availablePerDistrict.some((d) => d.district === district)),
    );
  }
}
