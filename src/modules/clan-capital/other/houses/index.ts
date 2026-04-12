import { QueryBase } from '@/common/query-base';
import { ClanCapitalHouse } from '@/types';
import { goblinHallData } from './goblin-hall';
import { goblinHutData } from './goblin-hut';
import { goblinOutpostData } from './goblin-outpost';
import { slantedHouseData } from './slanted-house';
import { smallCabinData } from './small-cabin';
import { smallHutData } from './small-hut';
import { thatchedHutData } from './thatched-hut';
import { woodenCabinData } from './wooden-cabin';
import { woodenHouseData } from './wooden-house';

const allHouses: ClanCapitalHouse[] = [
  smallCabinData,
  thatchedHutData,
  smallHutData,
  woodenHouseData,
  woodenCabinData,
  slantedHouseData,
  goblinOutpostData,
  goblinHutData,
  goblinHallData,
];

/**
 * Query class for all Clan Capital house buildings.
 * Returned by `clanCapital().other().houses()`.
 */
export class ClanCapitalHouses extends QueryBase<ClanCapitalHouse> {
  constructor(data: ClanCapitalHouse[] = allHouses) {
    super(data);
  }

  smallCabin(): ClanCapitalHouses {
    return new ClanCapitalHouses([smallCabinData]);
  }

  thatchedHut(): ClanCapitalHouses {
    return new ClanCapitalHouses([thatchedHutData]);
  }

  smallHut(): ClanCapitalHouses {
    return new ClanCapitalHouses([smallHutData]);
  }

  woodenHouse(): ClanCapitalHouses {
    return new ClanCapitalHouses([woodenHouseData]);
  }

  woodenCabin(): ClanCapitalHouses {
    return new ClanCapitalHouses([woodenCabinData]);
  }

  slantedHouse(): ClanCapitalHouses {
    return new ClanCapitalHouses([slantedHouseData]);
  }

  goblinOutpost(): ClanCapitalHouses {
    return new ClanCapitalHouses([goblinOutpostData]);
  }

  goblinHut(): ClanCapitalHouses {
    return new ClanCapitalHouses([goblinHutData]);
  }

  goblinHall(): ClanCapitalHouses {
    return new ClanCapitalHouses([goblinHallData]);
  }

  /** Filter to houses available in the given district. */
  byDistrict(district: string): ClanCapitalHouses {
    return new ClanCapitalHouses(
      this.data.filter((h) => h.availablePerDistrict.some((d) => d.district === district)),
    );
  }
}
