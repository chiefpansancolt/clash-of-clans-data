import { QueryBase } from '@/common/query-base';
import {
  BuilderArmyBuilding,
  BuilderArmyCampBuilding,
  BuilderBarracksBuilding,
  BuilderHealingHutBuilding,
} from '@/types';
import { armyCampData } from './army-camp';
import { battleCopterAltarData } from './battle-copter-altar';
import { battleMachineAltarData } from './battle-machine-altar';
import { builderBarracksData } from './builder-barracks';
import { healingHutData } from './healing-hut';
import { reinforcementCampData } from './reinforcement-camp';
import { starLaboratoryData } from './star-laboratory';

// Reinforcement Camp shares the same instances-based structure as Army Camp.
export class BuilderBaseReinforcementCamp extends QueryBase<BuilderArmyCampBuilding> {
  constructor(data: BuilderArmyCampBuilding[] = [reinforcementCampData]) {
    super(data);
  }

  /**
   * Returns a new query with each camp's `instances` filtered to those
   * unlockable at or before the given Builder Hall level.
   */
  byBuilderHall(level: number): BuilderBaseReinforcementCamp {
    return new BuilderBaseReinforcementCamp(
      this.data.map((camp) => ({
        ...camp,
        instances: camp.instances.filter((i) => i.builderHallRequired <= level),
      })) as BuilderArmyCampBuilding[],
    );
  }
}

type BuilderArmyBuildingItem =
  | BuilderArmyBuilding
  | BuilderBarracksBuilding
  | BuilderHealingHutBuilding;

// Army Camp has a unique structure (instances instead of upgrade levels) so it
// lives in a dedicated query class rather than the shared union.
export class BuilderBaseArmyCamp extends QueryBase<BuilderArmyCampBuilding> {
  constructor(data: BuilderArmyCampBuilding[] = [armyCampData]) {
    super(data);
  }

  /**
   * Returns a new query with each camp's `instances` filtered to those
   * unlockable at or before the given Builder Hall level.
   * Mirrors how `byBuilderHall` on other buildings filters by level.
   */
  byBuilderHall(level: number): BuilderBaseArmyCamp {
    return new BuilderBaseArmyCamp(
      this.data.map((camp) => ({
        ...camp,
        instances: camp.instances.filter((i) => i.builderHallRequired <= level),
      })) as BuilderArmyCampBuilding[],
    );
  }
}

const allArmyBuildings: (BuilderArmyBuildingItem | BuilderArmyCampBuilding)[] = [
  builderBarracksData,
  armyCampData,
  starLaboratoryData,
  battleMachineAltarData,
  battleCopterAltarData,
  reinforcementCampData as unknown as BuilderArmyCampBuilding,
  healingHutData,
];

/**
 * Query class for all Builder Base army buildings.
 * Returned by `builder().armyBuildings()`.
 */
export class BuilderBaseArmyBuildings extends QueryBase<BuilderArmyBuildingItem> {
  constructor(data: BuilderArmyBuildingItem[] = allArmyBuildings as BuilderArmyBuildingItem[]) {
    super(data);
  }

  builderBarracks(): BuilderBaseArmyBuildings {
    return new BuilderBaseArmyBuildings([builderBarracksData]);
  }

  armyCamp(): BuilderBaseArmyCamp {
    return new BuilderBaseArmyCamp();
  }

  starLaboratory(): BuilderBaseArmyBuildings {
    return new BuilderBaseArmyBuildings([starLaboratoryData]);
  }

  battleMachineAltar(): BuilderBaseArmyBuildings {
    return new BuilderBaseArmyBuildings([battleMachineAltarData]);
  }

  battleCopterAltar(): BuilderBaseArmyBuildings {
    return new BuilderBaseArmyBuildings([battleCopterAltarData]);
  }

  reinforcementCamp(): BuilderBaseReinforcementCamp {
    return new BuilderBaseReinforcementCamp();
  }

  healingHut(): BuilderBaseArmyBuildings {
    return new BuilderBaseArmyBuildings([healingHutData]);
  }

  /** Filter to army buildings available (count > 0) at the given Builder Hall level. */
  byBuilderHall(level: number): BuilderBaseArmyBuildings {
    return new BuilderBaseArmyBuildings(
      this.data.filter((b) =>
        b.availablePerBuilderHall.some((e) => e.builderHallLevel === level && e.count > 0),
      ),
    );
  }
}
