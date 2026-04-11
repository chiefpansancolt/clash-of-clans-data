import { QueryBase } from '@/common/query-base';
import { BuilderDefense } from '@/types';
import { airBombsData } from './air-bombs';
import { archerTowerData } from './archer-tower';
import { cannonData } from './cannon';
import { crusherData } from './crusher';
import { doubleCannonData } from './double-cannon';
import { firecrackersData } from './firecrackers';
import { giantCannonData } from './giant-cannon';
import { guardPostData } from './guard-post';
import { hiddenTeslaData } from './hidden-tesla';
import { lavaLauncherData } from './lava-launcher';
import { megaTeslaData } from './mega-tesla';
import { multiMortarData } from './multi-mortar';
import { ottosOutpostData } from './ottos-outpost';
import { roasterData } from './roaster';
import { xBowData } from './x-bow';

const allDefenses: BuilderDefense[] = [
  cannonData,
  doubleCannonData,
  archerTowerData,
  hiddenTeslaData,
  firecrackersData,
  crusherData,
  guardPostData,
  airBombsData,
  multiMortarData,
  ottosOutpostData,
  roasterData,
  giantCannonData,
  megaTeslaData,
  lavaLauncherData,
  xBowData,
];

/**
 * Query class for all Builder Base stationary defenses.
 * Returned by `builder().defenses()`.
 */
export class BuilderBaseDefenses extends QueryBase<BuilderDefense> {
  constructor(data: BuilderDefense[] = allDefenses) {
    super(data);
  }

  cannon(): BuilderBaseDefenses {
    return new BuilderBaseDefenses([cannonData]);
  }

  doubleCannon(): BuilderBaseDefenses {
    return new BuilderBaseDefenses([doubleCannonData]);
  }

  archerTower(): BuilderBaseDefenses {
    return new BuilderBaseDefenses([archerTowerData]);
  }

  hiddenTesla(): BuilderBaseDefenses {
    return new BuilderBaseDefenses([hiddenTeslaData]);
  }

  firecrackers(): BuilderBaseDefenses {
    return new BuilderBaseDefenses([firecrackersData]);
  }

  crusher(): BuilderBaseDefenses {
    return new BuilderBaseDefenses([crusherData]);
  }

  guardPost(): BuilderBaseDefenses {
    return new BuilderBaseDefenses([guardPostData]);
  }

  airBombs(): BuilderBaseDefenses {
    return new BuilderBaseDefenses([airBombsData]);
  }

  multiMortar(): BuilderBaseDefenses {
    return new BuilderBaseDefenses([multiMortarData]);
  }

  ottosOutpost(): BuilderBaseDefenses {
    return new BuilderBaseDefenses([ottosOutpostData]);
  }

  roaster(): BuilderBaseDefenses {
    return new BuilderBaseDefenses([roasterData]);
  }

  giantCannon(): BuilderBaseDefenses {
    return new BuilderBaseDefenses([giantCannonData]);
  }

  megaTesla(): BuilderBaseDefenses {
    return new BuilderBaseDefenses([megaTeslaData]);
  }

  lavaLauncher(): BuilderBaseDefenses {
    return new BuilderBaseDefenses([lavaLauncherData]);
  }

  xBow(): BuilderBaseDefenses {
    return new BuilderBaseDefenses([xBowData]);
  }

  /** Filter to defenses available at the given Builder Hall level. */
  byBuilderHall(level: number): BuilderBaseDefenses {
    return new BuilderBaseDefenses(
      this.get().filter((d) => d.levels.some((l) => l.builderHallRequired <= level)),
    );
  }

  /** Filter to defenses that deal a specific damage type. */
  byDamageType(type: BuilderDefense['modes']['normal']['damageType']): BuilderBaseDefenses {
    return new BuilderBaseDefenses(this.get().filter((d) => d.modes.normal.damageType === type));
  }
}
