import { BuildBoostCalculator } from './boost';
import { HelpersCalculator } from './helpers';
import { PotionsCalculator } from './potions';

export { BuildBoostCalculator } from './boost';
export { HelpersCalculator } from './helpers';
export { PotionsCalculator } from './potions';

/**
 * Top-level calculator namespace.
 * Returned by `calculators()`.
 */
export class Calculators {
  /** Build time and cost boost calculations (Builder Boost, Research Boost). */
  boost(): BuildBoostCalculator {
    return new BuildBoostCalculator();
  }

  /** Helper Hut helper calculations (Lab Assistant, Builder's Apprentice, Alchemist, Prospector). */
  helpers(): HelpersCalculator {
    return new HelpersCalculator();
  }

  /** Time-reduction potion and snack calculations. */
  potions(): PotionsCalculator {
    return new PotionsCalculator();
  }
}

/** Returns the Calculators namespace. */
export function calculators(): Calculators {
  return new Calculators();
}
