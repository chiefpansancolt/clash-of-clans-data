import { QueryBase } from '@/common/query-base';
import { HomeSpell } from '@/types';
import { batSpellData } from './bat-spell';
import { cloneSpellData } from './clone-spell';
import { earthquakeSpellData } from './earthquake-spell';
import { freezeSpellData } from './freeze-spell';
import { hasteSpellData } from './haste-spell';
import { healingSpellData } from './healing-spell';
import { iceBlockSpellData } from './ice-block-spell';
import { invisibilitySpellData } from './invisibility-spell';
import { jumpSpellData } from './jump-spell';
import { lightningSpellData } from './lightning-spell';
import { overgrowthSpellData } from './overgrowth-spell';
import { poisonSpellData } from './poison-spell';
import { rageSpellData } from './rage-spell';
import { recallSpellData } from './recall-spell';
import { reviveSpellData } from './revive-spell';
import { skeletonSpellData } from './skeleton-spell';
import { totemSpellData } from './totem-spell';

const allSpells: HomeSpell[] = [
  lightningSpellData,
  healingSpellData,
  rageSpellData,
  jumpSpellData,
  freezeSpellData,
  cloneSpellData,
  invisibilitySpellData,
  recallSpellData,
  reviveSpellData,
  earthquakeSpellData,
  hasteSpellData,
  poisonSpellData,
  totemSpellData,
  skeletonSpellData,
  batSpellData,
  overgrowthSpellData,
  iceBlockSpellData,
];

export class HomeVillageSpells extends QueryBase<HomeSpell> {
  constructor(data: HomeSpell[] = allSpells) {
    super(data);
  }

  lightningSpell(): HomeVillageSpells {
    return new HomeVillageSpells([lightningSpellData]);
  }

  healingSpell(): HomeVillageSpells {
    return new HomeVillageSpells([healingSpellData]);
  }

  rageSpell(): HomeVillageSpells {
    return new HomeVillageSpells([rageSpellData]);
  }

  jumpSpell(): HomeVillageSpells {
    return new HomeVillageSpells([jumpSpellData]);
  }

  freezeSpell(): HomeVillageSpells {
    return new HomeVillageSpells([freezeSpellData]);
  }

  cloneSpell(): HomeVillageSpells {
    return new HomeVillageSpells([cloneSpellData]);
  }

  invisibilitySpell(): HomeVillageSpells {
    return new HomeVillageSpells([invisibilitySpellData]);
  }

  recallSpell(): HomeVillageSpells {
    return new HomeVillageSpells([recallSpellData]);
  }

  reviveSpell(): HomeVillageSpells {
    return new HomeVillageSpells([reviveSpellData]);
  }

  earthquakeSpell(): HomeVillageSpells {
    return new HomeVillageSpells([earthquakeSpellData]);
  }

  hasteSpell(): HomeVillageSpells {
    return new HomeVillageSpells([hasteSpellData]);
  }

  poisonSpell(): HomeVillageSpells {
    return new HomeVillageSpells([poisonSpellData]);
  }

  totemSpell(): HomeVillageSpells {
    return new HomeVillageSpells([totemSpellData]);
  }

  skeletonSpell(): HomeVillageSpells {
    return new HomeVillageSpells([skeletonSpellData]);
  }

  batSpell(): HomeVillageSpells {
    return new HomeVillageSpells([batSpellData]);
  }

  overgrowthSpell(): HomeVillageSpells {
    return new HomeVillageSpells([overgrowthSpellData]);
  }

  iceBlockSpell(): HomeVillageSpells {
    return new HomeVillageSpells([iceBlockSpellData]);
  }

  byType(type: 'regular' | 'dark'): HomeVillageSpells {
    return new HomeVillageSpells(this.data.filter((s) => s.spellType === type));
  }

  byTownHall(level: number): HomeVillageSpells {
    return new HomeVillageSpells(
      this.data.filter((s) => s.levels.some((l) => l.townHallRequired <= level)),
    );
  }
}
