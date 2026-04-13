import { BuildBoostCalculator } from './boost';
import { ClockTowerCalculator } from './clock-tower';
import { GemsCalculator } from './gems';
import { HelpersCalculator } from './helpers';
import { PotionsCalculator } from './potions';

export { BuildBoostCalculator } from './boost';
export { ClockTowerCalculator } from './clock-tower';
export { GemsCalculator } from './gems';
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

  /** Gem cost calculator — converts build/research time into gem cost. */
  gems(): GemsCalculator {
    return new GemsCalculator();
  }

  /** Helper Hut helper calculations (Lab Assistant, Builder's Apprentice, Alchemist, Prospector). */
  helpers(): HelpersCalculator {
    return new HelpersCalculator();
  }

  /** Time-reduction potion and snack calculations. */
  potions(): PotionsCalculator {
    return new PotionsCalculator();
  }

  /** Clock Tower boost and potion calculations (time saved per level). */
  clockTower(): ClockTowerCalculator {
    return new ClockTowerCalculator();
  }
}

/** Returns the Calculators namespace. */
export function calculators(): Calculators {
  return new Calculators();
}
