import { BuildTime } from '@/types';
import { subtractHours } from '../utils';

/** Query class for time-reduction potion and snack calculations. Returned by `calculators().potions()`. */
export class PotionsCalculator {
  /** Builder Potion: 10× builder speed for 60 min → reduces remaining build time by 10 hours. */
  builderPotion(time: BuildTime): BuildTime {
    return subtractHours(time, 10);
  }

  /** Research Potion: 24× lab speed for 60 min → reduces remaining research time by 24 hours. */
  researchPotion(time: BuildTime): BuildTime {
    return subtractHours(time, 24);
  }

  /** Pet Potion: 24× pet house speed for 60 min → reduces remaining pet upgrade time by 24 hours. */
  petPotion(time: BuildTime): BuildTime {
    return subtractHours(time, 24);
  }

  /** Builder Bite: 2× builder speed for 60 min → reduces remaining build time by 2 hours. */
  builderBite(time: BuildTime): BuildTime {
    return subtractHours(time, 2);
  }

  /** Study Soup: 4× lab speed for 60 min → reduces remaining research time by 4 hours. */
  studySoup(time: BuildTime): BuildTime {
    return subtractHours(time, 4);
  }
}
