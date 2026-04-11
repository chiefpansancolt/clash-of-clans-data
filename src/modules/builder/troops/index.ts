import { QueryBase } from '@/common/query-base';
import { BuilderTroop } from '@/types';
import { babyDragonData } from './baby-dragon';
import { betaMinionData } from './beta-minion';
import { bomberData } from './bomber';
import { boxerGiantData } from './boxer-giant';
import { cannonCartData } from './cannon-cart';
import { dropShipData } from './drop-ship';
import { electrofireWizardData } from './electrofire-wizard';
import { hogGliderData } from './hog-glider';
import { nightWitchData } from './night-witch';
import { powerPekkaData } from './power-pekka';
import { ragedBarbarianData } from './raged-barbarian';
import { sneakyArcherData } from './sneaky-archer';

const allTroops: BuilderTroop[] = [
  babyDragonData,
  betaMinionData,
  bomberData,
  cannonCartData,
  dropShipData,
  electrofireWizardData,
  hogGliderData,
  nightWitchData,
  powerPekkaData,
  boxerGiantData,
  ragedBarbarianData,
  sneakyArcherData,
];

/**
 * Query class for all Builder Base troops.
 * Returned by `builder().troops()`.
 */
export class BuilderBaseTroops extends QueryBase<BuilderTroop> {
  constructor(data: BuilderTroop[] = allTroops) {
    super(data);
  }

  babyDragon(): BuilderBaseTroops {
    return new BuilderBaseTroops([babyDragonData]);
  }

  betaMinion(): BuilderBaseTroops {
    return new BuilderBaseTroops([betaMinionData]);
  }

  bomber(): BuilderBaseTroops {
    return new BuilderBaseTroops([bomberData]);
  }

  cannonCart(): BuilderBaseTroops {
    return new BuilderBaseTroops([cannonCartData]);
  }

  dropShip(): BuilderBaseTroops {
    return new BuilderBaseTroops([dropShipData]);
  }

  electrofireWizard(): BuilderBaseTroops {
    return new BuilderBaseTroops([electrofireWizardData]);
  }

  hogGlider(): BuilderBaseTroops {
    return new BuilderBaseTroops([hogGliderData]);
  }

  nightWitch(): BuilderBaseTroops {
    return new BuilderBaseTroops([nightWitchData]);
  }

  powerPekka(): BuilderBaseTroops {
    return new BuilderBaseTroops([powerPekkaData]);
  }

  boxerGiant(): BuilderBaseTroops {
    return new BuilderBaseTroops([boxerGiantData]);
  }

  ragedBarbarian(): BuilderBaseTroops {
    return new BuilderBaseTroops([ragedBarbarianData]);
  }

  sneakyArcher(): BuilderBaseTroops {
    return new BuilderBaseTroops([sneakyArcherData]);
  }

  /** Filter to troops with the given damage type. */
  byDamageType(type: BuilderTroop['damageType']): BuilderBaseTroops {
    return new BuilderBaseTroops(this.data.filter((t) => t.damageType === type));
  }

  /** Filter to troops that target the given target type. */
  byTargetType(type: BuilderTroop['targetType']): BuilderBaseTroops {
    return new BuilderBaseTroops(this.data.filter((t) => t.targetType === type));
  }
}
