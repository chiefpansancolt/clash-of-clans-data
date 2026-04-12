import { QueryBase } from '@/common/query-base';
import { MagicSnack } from '@/types';
import { builderBiteData } from './builder-bite';
import { clanCastleCakeData } from './clan-castle-cake';
import { mightyMorselData } from './mighty-morsel';
import { powerPancakesData } from './power-pancakes';
import { studySoupData } from './study-soup';

const allSnacks: MagicSnack[] = [
  builderBiteData,
  studySoupData,
  mightyMorselData,
  powerPancakesData,
  clanCastleCakeData,
];

/**
 * Query class for all magic item snacks.
 * Returned by `magicItems().snacks()`.
 */
export class MagicItemSnacks extends QueryBase<MagicSnack> {
  builderBite(): MagicItemSnacks {
    return new MagicItemSnacks([builderBiteData]);
  }

  studySoup(): MagicItemSnacks {
    return new MagicItemSnacks([studySoupData]);
  }

  mightyMorsel(): MagicItemSnacks {
    return new MagicItemSnacks([mightyMorselData]);
  }

  powerPancakes(): MagicItemSnacks {
    return new MagicItemSnacks([powerPancakesData]);
  }

  clanCastleCake(): MagicItemSnacks {
    return new MagicItemSnacks([clanCastleCakeData]);
  }

  /** Filter to snacks whose effect type matches the given value. */
  byEffectType(type: MagicSnack['effect']['type']): MagicItemSnacks {
    return new MagicItemSnacks(this.data.filter((s) => s.effect.type === type));
  }
}

export function createMagicItemSnacks(): MagicItemSnacks {
  return new MagicItemSnacks(allSnacks);
}
