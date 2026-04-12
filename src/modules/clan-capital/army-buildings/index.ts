import { QueryBase } from '@/common/query-base';
import {
  ClanCapitalArmyBuilding,
  ClanCapitalBarracksBuilding,
  ClanCapitalSpellStorageBuilding,
} from '@/types';
import { armyCampData } from './army-camp';
import { ClanCapitalBarracks } from './barracks';
import { ClanCapitalSpellFactories } from './spell-factories';
import { spellStorageData } from './spell-storage';

type ClanCapitalArmyBuildingItem =
  | ClanCapitalArmyBuilding
  | ClanCapitalSpellStorageBuilding
  | ClanCapitalBarracksBuilding;

const allArmyBuildings: ClanCapitalArmyBuildingItem[] = [armyCampData, spellStorageData];

export { ClanCapitalBarracks, ClanCapitalSpellFactories };

/**
 * Query class for all Clan Capital army buildings.
 * Returned by `clanCapital().armyBuildings()`.
 */
export class ClanCapitalArmyBuildings extends QueryBase<ClanCapitalArmyBuildingItem> {
  constructor(data: ClanCapitalArmyBuildingItem[] = allArmyBuildings) {
    super(data);
  }

  armyCamp(): ClanCapitalArmyBuildings {
    return new ClanCapitalArmyBuildings([armyCampData]);
  }

  spellStorage(): ClanCapitalArmyBuildings {
    return new ClanCapitalArmyBuildings([spellStorageData]);
  }

  barracks(): ClanCapitalBarracks {
    return new ClanCapitalBarracks();
  }

  spellFactories(): ClanCapitalSpellFactories {
    return new ClanCapitalSpellFactories();
  }

  /** Filter to army buildings available in the given district. */
  byDistrict(district: string): ClanCapitalArmyBuildings {
    return new ClanCapitalArmyBuildings(
      this.data.filter((b) => b.availablePerDistrict.some((d) => d.district === district)),
    );
  }
}
