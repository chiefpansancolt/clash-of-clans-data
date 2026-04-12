import { QueryBase } from '@/common/query-base';
import { MagicUtility } from '@/types';
import { builderStarJarData } from './builder-star-jar';
import { shovelOfObstaclesData } from './shovel-of-obstacles';
import { wallRingData } from './wall-ring';

const allUtilities: MagicUtility[] = [shovelOfObstaclesData, builderStarJarData, wallRingData];

/**
 * Query class for all magic item utilities.
 * Returned by `magicItems().utilities()`.
 */
export class MagicItemUtilities extends QueryBase<MagicUtility> {
  shovelOfObstacles(): MagicItemUtilities {
    return new MagicItemUtilities([shovelOfObstaclesData]);
  }

  builderStarJar(): MagicItemUtilities {
    return new MagicItemUtilities([builderStarJarData]);
  }

  wallRing(): MagicItemUtilities {
    return new MagicItemUtilities([wallRingData]);
  }

  /** Filter to utilities whose effect type matches the given value. */
  byEffectType(type: MagicUtility['effect']['type']): MagicItemUtilities {
    return new MagicItemUtilities(this.data.filter((u) => u.effect.type === type));
  }
}

export function createMagicItemUtilities(): MagicItemUtilities {
  return new MagicItemUtilities(allUtilities);
}
