import { QueryBase } from '@/common/query-base';
import { MagicPotion } from '@/types';
import { builderPotionData } from './builder-potion';
import { clockTowerPotionData } from './clock-tower-potion';
import { heroPotionData } from './hero-potion';
import { petPotionData } from './pet-potion';
import { powerPotionData } from './power-potion';
import { researchPotionData } from './research-potion';
import { resourcePotionData } from './resource-potion';
import { superPotionData } from './super-potion';

const allPotions: MagicPotion[] = [
  builderPotionData,
  researchPotionData,
  petPotionData,
  heroPotionData,
  powerPotionData,
  resourcePotionData,
  clockTowerPotionData,
  superPotionData,
];

/**
 * Query class for all magic item potions.
 * Returned by `magicItems().potions()`.
 */
export class MagicItemPotions extends QueryBase<MagicPotion> {
  builderPotion(): MagicItemPotions {
    return new MagicItemPotions([builderPotionData]);
  }

  researchPotion(): MagicItemPotions {
    return new MagicItemPotions([researchPotionData]);
  }

  petPotion(): MagicItemPotions {
    return new MagicItemPotions([petPotionData]);
  }

  heroPotion(): MagicItemPotions {
    return new MagicItemPotions([heroPotionData]);
  }

  powerPotion(): MagicItemPotions {
    return new MagicItemPotions([powerPotionData]);
  }

  resourcePotion(): MagicItemPotions {
    return new MagicItemPotions([resourcePotionData]);
  }

  clockTowerPotion(): MagicItemPotions {
    return new MagicItemPotions([clockTowerPotionData]);
  }

  superPotion(): MagicItemPotions {
    return new MagicItemPotions([superPotionData]);
  }

  /** Filter to potions whose effect type matches the given value. */
  byEffectType(type: MagicPotion['effect']['type']): MagicItemPotions {
    return new MagicItemPotions(this.data.filter((p) => p.effect.type === type));
  }
}

export function createMagicItemPotions(): MagicItemPotions {
  return new MagicItemPotions(allPotions);
}
