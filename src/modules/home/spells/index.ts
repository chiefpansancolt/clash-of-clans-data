import { QueryBase } from '@/common/query-base';
import { HomeSpell } from '@/types';
import { cloneSpellData } from './clone-spell';
import { freezeSpellData } from './freeze-spell';
import { healingSpellData } from './healing-spell';
import { jumpSpellData } from './jump-spell';
import { lightningSpellData } from './lightning-spell';
import { rageSpellData } from './rage-spell';

const allSpells: HomeSpell[] = [
  lightningSpellData,
  healingSpellData,
  rageSpellData,
  jumpSpellData,
  freezeSpellData,
  cloneSpellData,
];

export class HomeVillageSpells extends QueryBase<HomeSpell> {
  constructor(data: HomeSpell[] = allSpells) {
    super(data);
  }

  // Per-spell accessors
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

  // Category filters
  byType(type: 'regular' | 'dark'): HomeVillageSpells {
    return new HomeVillageSpells(this.data.filter((s) => s.spellType === type));
  }

  byTownHall(level: number): HomeVillageSpells {
    return new HomeVillageSpells(
      this.data.filter((s) => s.levels.some((l) => l.townHallRequired <= level)),
    );
  }
}
