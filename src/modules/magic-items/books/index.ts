import { QueryBase } from '@/common/query-base';
import { MagicBook } from '@/types';
import { bookOfBuildingData } from './book-of-building';
import { bookOfEverythingData } from './book-of-everything';
import { bookOfFightingData } from './book-of-fighting';
import { bookOfHeroesData } from './book-of-heroes';
import { bookOfSpellsData } from './book-of-spells';

const allBooks: MagicBook[] = [
  bookOfFightingData,
  bookOfBuildingData,
  bookOfSpellsData,
  bookOfHeroesData,
  bookOfEverythingData,
];

/**
 * Query class for all magic item books.
 * Returned by `magicItems().books()`.
 */
export class MagicItemBooks extends QueryBase<MagicBook> {
  bookOfFighting(): MagicItemBooks {
    return new MagicItemBooks([bookOfFightingData]);
  }

  bookOfBuilding(): MagicItemBooks {
    return new MagicItemBooks([bookOfBuildingData]);
  }

  bookOfSpells(): MagicItemBooks {
    return new MagicItemBooks([bookOfSpellsData]);
  }

  bookOfHeroes(): MagicItemBooks {
    return new MagicItemBooks([bookOfHeroesData]);
  }

  bookOfEverything(): MagicItemBooks {
    return new MagicItemBooks([bookOfEverythingData]);
  }

  /** Filter to books that apply to the given upgrade type. */
  byAppliesTo(appliesTo: 'troops' | 'buildings' | 'spells' | 'heroes-and-pets' | 'any'): MagicItemBooks {
    return new MagicItemBooks(
      this.data.filter((b) => {
        const e = b.effect;
        return e.type === 'instant-complete' && (e.appliesTo === appliesTo || e.appliesTo === 'any');
      }),
    );
  }
}

export function createMagicItemBooks(): MagicItemBooks {
  return new MagicItemBooks(allBooks);
}
