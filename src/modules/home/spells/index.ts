import { QueryBase } from '@/common/query-base';
import { HomeSpell } from '@/types';
import { healingSpellData } from './healing-spell';
import { lightningSpellData } from './lightning-spell';

const allSpells: HomeSpell[] = [lightningSpellData, healingSpellData];

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
