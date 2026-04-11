import { QueryBase } from '@/common/query-base';
import { BuilderArmyBuilding, BuilderBarracksBuilding, BuilderHealingHutBuilding } from '@/types';
import { armyCampData } from './army-camp';
import { battleCopterAltarData } from './battle-copter-altar';
import { battleMachineAltarData } from './battle-machine-altar';
import { builderBarracksData } from './builder-barracks';
import { healingHutData } from './healing-hut';
import { reinforcementCampData } from './reinforcement-camp';
import { starLaboratoryData } from './star-laboratory';

type BuilderArmyBuildingItem =
  | BuilderArmyBuilding
  | BuilderBarracksBuilding
  | BuilderHealingHutBuilding;

const allArmyBuildings: BuilderArmyBuildingItem[] = [
  builderBarracksData,
  armyCampData,
  starLaboratoryData,
  battleMachineAltarData,
  battleCopterAltarData,
  reinforcementCampData,
  healingHutData,
];

/**
 * Query class for all Builder Base army buildings.
 * Returned by `builder().armyBuildings()`.
 */
export class BuilderBaseArmyBuildings extends QueryBase<BuilderArmyBuildingItem> {
  constructor(data: BuilderArmyBuildingItem[] = allArmyBuildings) {
    super(data);
  }

  builderBarracks(): BuilderBaseArmyBuildings {
    return new BuilderBaseArmyBuildings([builderBarracksData]);
  }

  armyCamp(): BuilderBaseArmyBuildings {
    return new BuilderBaseArmyBuildings([armyCampData]);
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

  reinforcementCamp(): BuilderBaseArmyBuildings {
    return new BuilderBaseArmyBuildings([reinforcementCampData]);
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
