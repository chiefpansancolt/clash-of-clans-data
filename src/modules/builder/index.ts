import { bhStructureCount } from '@/common/level-count-helpers';
import type { BuilderHallLevelCounts } from '@/types';
import type { BHCountableBuilding } from '@/types/level-count-helpers';
import { BuilderBaseArmyBuildings } from './army-buildings';
import { armyCampData } from './army-buildings/army-camp';
import { reinforcementCampData } from './army-buildings/reinforcement-camp';
import { BuilderBaseBuilderHall } from './builder-hall';
import { BuilderBaseDefenses } from './defenses';
import { BuilderBaseHeroes } from './heroes';
import { allBuilderBaseLeagues, BuilderBaseLeagues } from './leagues';
import { BuilderBaseOtherBuildings } from './other';
import { BuilderBaseResourceBuildings } from './resource-buildings';
import { BuilderBaseTraps } from './traps';
import { BuilderBaseTroops } from './troops';
import { BuilderBaseWalls } from './walls';

export { BuilderBaseArmyBuildings } from './army-buildings';
export { BuilderBaseBuilderHall } from './builder-hall';
export { BuilderBaseDefenses } from './defenses';
export { BuilderBaseHeroes } from './heroes';
export { BuilderBaseLeagues } from './leagues';
export { BuilderBaseOtherBuildings } from './other';
export { BuilderBaseResourceBuildings } from './resource-buildings';
export { BuilderBaseTraps } from './traps';
export { BuilderBaseTroops } from './troops';
export { BuilderBaseWalls } from './walls';

/** Namespace for all Builder Base entity queries. Use the {@link builder} factory to create an instance. */
export class BuilderBase {
  /** Returns a query wrapping the Builder Hall entity. */
  builderHall(): BuilderBaseBuilderHall {
    return new BuilderBaseBuilderHall();
  }

  /** Returns a query over all stationary defenses (Cannon, etc.). */
  defenses(): BuilderBaseDefenses {
    return new BuilderBaseDefenses();
  }

  /** Returns a query over Builder Base traps. */
  traps(): BuilderBaseTraps {
    return new BuilderBaseTraps();
  }

  /** Returns a query over Builder Base wall data. */
  walls(): BuilderBaseWalls {
    return new BuilderBaseWalls();
  }

  /** Returns a query over Builder Base resource buildings. */
  resourceBuildings(): BuilderBaseResourceBuildings {
    return new BuilderBaseResourceBuildings();
  }

  /** Returns a query over Builder Base army buildings. */
  armyBuildings(): BuilderBaseArmyBuildings {
    return new BuilderBaseArmyBuildings();
  }

  /** Returns a query over other Builder Base buildings (Clock Tower, etc.). */
  otherBuildings(): BuilderBaseOtherBuildings {
    return new BuilderBaseOtherBuildings();
  }

  /** Returns a query over Builder Base troops. */
  troops(): BuilderBaseTroops {
    return new BuilderBaseTroops();
  }

  /** Returns a query over Builder Base heroes. */
  heroes(): BuilderBaseHeroes {
    return new BuilderBaseHeroes();
  }

  /** Returns a query over all Builder Base leagues. */
  leagues(): BuilderBaseLeagues {
    return allBuilderBaseLeagues();
  }

  /**
   * Computes the total number of upgradeable level slots available at a given Builder Hall level,
   * broken down by category. Useful for progress tracking and upgrade completion ratios.
   *
   * @param bhLevel - Builder Hall level (1–10)
   */
  levelCountAtBuilderHall(bhLevel: number): BuilderHallLevelCounts {
    const allStructures: BHCountableBuilding[] = [
      ...(this.defenses().get() as unknown as BHCountableBuilding[]),
      ...(this.armyBuildings().get() as unknown as BHCountableBuilding[]),
      ...(this.resourceBuildings().get() as unknown as BHCountableBuilding[]),
    ];
    // Army Camp and Reinforcement Camp have no upgrade levels — count each instance built.
    const armyCampInstances = armyCampData.instances.filter(
      (i) => i.builderHallRequired <= bhLevel,
    ).length;
    const reinforcementCampInstances = reinforcementCampData.instances.filter(
      (i) => i.builderHallRequired <= bhLevel,
    ).length;
    const structures =
      allStructures.reduce((sum, b) => sum + bhStructureCount(b, bhLevel), 0) +
      armyCampInstances +
      reinforcementCampInstances;

    const traps = (this.traps().get() as unknown as BHCountableBuilding[]).reduce(
      (sum, t) => sum + bhStructureCount(t, bhLevel),
      0,
    );

    const starLab = this.armyBuildings()
      .starLaboratory()
      .first()! as unknown as BHCountableBuilding;
    const maxStarLabLevel = starLab.levels
      .filter((l) => l.builderHallRequired <= bhLevel)
      .reduce((m, l) => Math.max(m, l.level), 0);
    const starLabCount = this.troops()
      .get()
      .reduce((sum, t) => {
        const maxLevel = t.levels
          .filter((l) => l.starLabRequired <= maxStarLabLevel)
          .reduce((m, l) => Math.max(m, l.level), 0);
        return sum + maxLevel;
      }, 0);

    const heroes = this.heroes()
      .get()
      .reduce((sum, h) => {
        const maxLevel = h.levels
          .filter((l) => l.builderHallLevelRequired <= bhLevel)
          .reduce((m, l) => Math.max(m, l.level), 0);
        return sum + maxLevel;
      }, 0);

    const wall = this.walls().wall().first()!;
    const wallCount =
      wall.availablePerBuilderHall.find((e) => e.builderHallLevel === bhLevel)?.count ?? 0;
    const maxWallLevel = (
      wall.levels as unknown as Array<{ level: number; builderHallRequired: number }>
    )
      .filter((l) => l.builderHallRequired <= bhLevel)
      .reduce((m, l) => Math.max(m, l.level), 0);
    const walls = wallCount * maxWallLevel;

    const total = structures + traps + starLabCount + heroes + walls;
    return { structures, traps, starLab: starLabCount, heroes, walls, total };
  }
}

/** Creates a new {@link BuilderBase} namespace instance. Entry point for all Builder Base data. */
export function builder(): BuilderBase {
  return new BuilderBase();
}
