import { QueryBase } from '@/common/query-base';
import { ClanCapitalSpell } from '@/types';
import { endlessHasteSpellData } from './endless-haste-spell';
import { frostSpellData } from './frost-spell';
import { graveyardSpellData } from './graveyard-spell';
import { healingSpellData } from './healing-spell';
import { jumpSpellData } from './jump-spell';
import { lightningSpellData } from './lightning-spell';
import { rageSpellData } from './rage-spell';

export { ClanCapitalSpells };

const allSpells: ClanCapitalSpell[] = [
  healingSpellData,
  jumpSpellData,
  lightningSpellData,
  frostSpellData,
  rageSpellData,
  graveyardSpellData,
  endlessHasteSpellData,
];

/**
 * Query class for all Clan Capital spells.
 * Returned by `clanCapital().spells()`.
 */
class ClanCapitalSpells extends QueryBase<ClanCapitalSpell> {
  constructor(data: ClanCapitalSpell[] = allSpells) {
    super(data);
  }

  healingSpell(): ClanCapitalSpells {
    return new ClanCapitalSpells([healingSpellData]);
  }

  jumpSpell(): ClanCapitalSpells {
    return new ClanCapitalSpells([jumpSpellData]);
  }

  lightningSpell(): ClanCapitalSpells {
    return new ClanCapitalSpells([lightningSpellData]);
  }

  frostSpell(): ClanCapitalSpells {
    return new ClanCapitalSpells([frostSpellData]);
  }

  graveyardSpell(): ClanCapitalSpells {
    return new ClanCapitalSpells([graveyardSpellData]);
  }

  endlessHasteSpell(): ClanCapitalSpells {
    return new ClanCapitalSpells([endlessHasteSpellData]);
  }

  rageSpell(): ClanCapitalSpells {
    return new ClanCapitalSpells([rageSpellData]);
  }
}
