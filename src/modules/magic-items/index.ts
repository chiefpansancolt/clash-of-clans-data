import { MagicItemBooks, createMagicItemBooks } from './books';
import { MagicItemHammers, createMagicItemHammers } from './hammers';
import { MagicItemPotions, createMagicItemPotions } from './potions';
import { MagicItemSnacks, createMagicItemSnacks } from './snacks';
import { MagicItemUtilities, createMagicItemUtilities } from './utilities';

export { MagicItemBooks } from './books';
export { MagicItemHammers } from './hammers';
export { MagicItemPotions } from './potions';
export { MagicItemSnacks } from './snacks';
export { MagicItemUtilities } from './utilities';

/**
 * Top-level magic items namespace.
 * Returned by `magicItems()`.
 */
export class MagicItems {
  /** All magic item snacks. */
  snacks(): MagicItemSnacks {
    return createMagicItemSnacks();
  }

  /** All magic item potions. */
  potions(): MagicItemPotions {
    return createMagicItemPotions();
  }

  /** All magic item books. */
  books(): MagicItemBooks {
    return createMagicItemBooks();
  }

  /** All magic item hammers. */
  hammers(): MagicItemHammers {
    return createMagicItemHammers();
  }

  /** All magic item utilities (Wall Ring, Shovel of Obstacles, Builder Star Jar). */
  utilities(): MagicItemUtilities {
    return createMagicItemUtilities();
  }
}

/** Returns the MagicItems namespace. */
export function magicItems(): MagicItems {
  return new MagicItems();
}
