import { QueryBase } from '@/common/query-base';
import { MagicHammer } from '@/types';
import { hammerOfBuildingData } from './hammer-of-building';
import { hammerOfFightingData } from './hammer-of-fighting';
import { hammerOfHeroesData } from './hammer-of-heroes';
import { hammerOfSpellsData } from './hammer-of-spells';

const allHammers: MagicHammer[] = [
  hammerOfFightingData,
  hammerOfBuildingData,
  hammerOfSpellsData,
  hammerOfHeroesData,
];

/**
 * Query class for all magic item hammers.
 * Returned by `magicItems().hammers()`.
 */
export class MagicItemHammers extends QueryBase<MagicHammer> {
  hammerOfFighting(): MagicItemHammers {
    return new MagicItemHammers([hammerOfFightingData]);
  }

  hammerOfBuilding(): MagicItemHammers {
    return new MagicItemHammers([hammerOfBuildingData]);
  }

  hammerOfSpells(): MagicItemHammers {
    return new MagicItemHammers([hammerOfSpellsData]);
  }

  hammerOfHeroes(): MagicItemHammers {
    return new MagicItemHammers([hammerOfHeroesData]);
  }

  /** Filter to hammers that apply to the given upgrade type. */
  byAppliesTo(appliesTo: 'troops' | 'buildings' | 'spells' | 'heroes-and-pets'): MagicItemHammers {
    return new MagicItemHammers(
      this.data.filter((h) => {
        const e = h.effect;
        return e.type === 'instant-upgrade' && e.appliesTo === appliesTo;
      }),
    );
  }
}

export function createMagicItemHammers(): MagicItemHammers {
  return new MagicItemHammers(allHammers);
}
