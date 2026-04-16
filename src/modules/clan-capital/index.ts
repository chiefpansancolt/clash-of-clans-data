import {
  ccCapitalPeakStructures,
  ccCapitalPeakWalls,
  ccDistrictCounts,
  ccMaxDHLevel,
} from '@/common/level-count-helpers';
import type {
  ClanCapitalDistrictCounts,
  ClanCapitalLevelCounts,
  DistrictHallCapitalHallRequired,
} from '@/types';
import type {
  CCBuildingWithCapitalHall,
  CCBuildingWithDistrict,
  CCWall,
} from '@/types/level-count-helpers';
import { ClanCapitalArmyBuildings } from './army-buildings';
import { ClanCapitalDefenses } from './defenses';
import { ClanCapitalCapitalHall } from './halls/capital-hall';
import { districtHallData } from './halls/district-hall';
import { ClanCapitalDistrictHall } from './halls/district-hall';
import { allClanCapitalLeagues, ClanCapitalLeagues } from './leagues';
import { ClanCapitalOther } from './other';
import { ClanCapitalSpells } from './spells';
import { ClanCapitalTraps } from './traps';
import { ClanCapitalTroops } from './troops';
import { ClanCapitalWalls } from './walls';

export {
  ClanCapitalArmyBuildings,
  ClanCapitalBarracks,
  ClanCapitalSpellFactories,
} from './army-buildings';
export { ClanCapitalCapitalHall } from './halls/capital-hall';
export { ClanCapitalDefenses } from './defenses';
export { ClanCapitalDistrictHall } from './halls/district-hall';
export { ClanCapitalLeagues } from './leagues';
export { ClanCapitalHouses, ClanCapitalOther } from './other';
export { ClanCapitalSpells } from './spells';
export { ClanCapitalTroops } from './troops';
export { ClanCapitalTraps } from './traps';
export { ClanCapitalWalls } from './walls';

/** Namespace for all Clan Capital entity queries. Use the {@link clanCapital} factory to create an instance. */
export class ClanCapital {
  capitalHall(): ClanCapitalCapitalHall {
    return new ClanCapitalCapitalHall();
  }

  districtHall(): ClanCapitalDistrictHall {
    return new ClanCapitalDistrictHall();
  }

  /** Returns a query over all Clan Capital stationary defenses. */
  defenses(): ClanCapitalDefenses {
    return new ClanCapitalDefenses();
  }

  /** Returns a query over all Clan Capital army buildings. */
  armyBuildings(): ClanCapitalArmyBuildings {
    return new ClanCapitalArmyBuildings();
  }

  /** Returns a query over Clan Capital other buildings (houses, etc.). */
  other(): ClanCapitalOther {
    return new ClanCapitalOther();
  }

  /** Returns a query over all Clan Capital spells. */
  spells(): ClanCapitalSpells {
    return new ClanCapitalSpells();
  }

  /** Returns a query over all Clan Capital troops. */
  troops(): ClanCapitalTroops {
    return new ClanCapitalTroops();
  }

  /** Returns a query over all Clan Capital traps. */
  traps(): ClanCapitalTraps {
    return new ClanCapitalTraps();
  }

  /** Returns a query over Clan Capital wall data. */
  walls(): ClanCapitalWalls {
    return new ClanCapitalWalls();
  }

  /** Returns a query over all Clan Capital Raid Weekend leagues. */
  leagues(): ClanCapitalLeagues {
    return allClanCapitalLeagues();
  }

  /**
   * Computes the total number of upgradeable level slots available at a given Capital Hall level,
   * broken down by district/zone (structures + walls) and top-level totals for troops and spells.
   *
   * @param capitalHallLevel - Capital Hall level (1–10)
   */
  levelCountAtClanCapital(capitalHallLevel: number): ClanCapitalLevelCounts {
    const allDistrictBuildings: CCBuildingWithDistrict[] = [
      ...(this.defenses().get() as unknown as CCBuildingWithDistrict[]),
      ...(this.armyBuildings().get() as unknown as CCBuildingWithDistrict[]),
      ...(this.armyBuildings().barracks().get() as unknown as CCBuildingWithDistrict[]),
      ...(this.armyBuildings().spellFactories().get() as unknown as CCBuildingWithDistrict[]),
      ...(this.traps().get() as unknown as CCBuildingWithDistrict[]),
    ];

    const capitalPeakBuildings: CCBuildingWithCapitalHall[] = (
      this.defenses().get() as unknown as Array<
        CCBuildingWithDistrict & {
          availablePerCapitalHall?: { capitalHallLevel: number; count: number }[];
        }
      >
    )
      .filter(
        (b) => b.availablePerCapitalHall && b.availablePerCapitalHall.some((e) => e.count > 0),
      )
      .map((b) => b as unknown as CCBuildingWithCapitalHall);

    const wall = this.walls().wall().first()! as unknown as CCWall;

    const dhLevels = {
      barbarianCamp: ccMaxDHLevel(districtHallData, 'barbarianCamp', capitalHallLevel),
      wizardValley: ccMaxDHLevel(districtHallData, 'wizardValley', capitalHallLevel),
      balloonLagoon: ccMaxDHLevel(districtHallData, 'balloonLagoon', capitalHallLevel),
      buildersWorkshop: ccMaxDHLevel(districtHallData, 'buildersWorkshop', capitalHallLevel),
      dragonCliffs: ccMaxDHLevel(districtHallData, 'dragonCliffs', capitalHallLevel),
      golemQuarry: ccMaxDHLevel(districtHallData, 'golemQuarry', capitalHallLevel),
      skeletonPark: ccMaxDHLevel(districtHallData, 'skeletonPark', capitalHallLevel),
      goblinMines: ccMaxDHLevel(districtHallData, 'goblinMines', capitalHallLevel),
    } as const satisfies Record<keyof DistrictHallCapitalHallRequired, number>;

    const cpStructures = ccCapitalPeakStructures(capitalPeakBuildings, capitalHallLevel);
    const cpWalls = ccCapitalPeakWalls(wall, capitalHallLevel);
    const capitalPeak: ClanCapitalDistrictCounts = {
      structures: cpStructures,
      walls: cpWalls,
      total: cpStructures + cpWalls,
    };

    const barbarianCamp = ccDistrictCounts(
      allDistrictBuildings,
      wall,
      'barbarianCamp',
      dhLevels.barbarianCamp,
    );
    const wizardValley = ccDistrictCounts(
      allDistrictBuildings,
      wall,
      'wizardValley',
      dhLevels.wizardValley,
    );
    const balloonLagoon = ccDistrictCounts(
      allDistrictBuildings,
      wall,
      'balloonLagoon',
      dhLevels.balloonLagoon,
    );
    const buildersWorkshop = ccDistrictCounts(
      allDistrictBuildings,
      wall,
      'buildersWorkshop',
      dhLevels.buildersWorkshop,
    );
    const dragonCliffs = ccDistrictCounts(
      allDistrictBuildings,
      wall,
      'dragonCliffs',
      dhLevels.dragonCliffs,
    );
    const golemQuarry = ccDistrictCounts(
      allDistrictBuildings,
      wall,
      'golemQuarry',
      dhLevels.golemQuarry,
    );
    const skeletonPark = ccDistrictCounts(
      allDistrictBuildings,
      wall,
      'skeletonPark',
      dhLevels.skeletonPark,
    );
    const goblinMines = ccDistrictCounts(
      allDistrictBuildings,
      wall,
      'goblinMines',
      dhLevels.goblinMines,
    );

    const globalMaxDHLevel = Math.max(...Object.values(dhLevels));

    // Map each troop name to the DH level of its barracks' district.
    // Falls back to globalMaxDHLevel for troops with no barracks data.
    const troopDistrictDH: Record<string, number> = {};
    for (const barracks of this.armyBuildings().barracks().get()) {
      const district = barracks.availablePerDistrict[0]?.district as
        | keyof typeof dhLevels
        | undefined;
      if (district && barracks.troopUnlocked) {
        troopDistrictDH[barracks.troopUnlocked] = dhLevels[district] ?? 0;
      }
    }

    // Map each spell name to the DH level of its spell factory's district.
    // Falls back to globalMaxDHLevel for spells with no factory data.
    const spellDistrictDH: Record<string, number> = {};
    for (const factory of this.armyBuildings().spellFactories().get()) {
      const district = factory.availablePerDistrict[0]?.district as
        | keyof typeof dhLevels
        | undefined;
      if (district && factory.spellUnlocked) {
        spellDistrictDH[factory.spellUnlocked] = dhLevels[district] ?? 0;
      }
    }

    const troops = this.troops()
      .get()
      .reduce((sum, t) => {
        const dhLevel = troopDistrictDH[t.name] ?? 0;
        const maxLevel = t.levels
          .filter((l) => l.districtHallRequired <= dhLevel)
          .reduce((m, l) => Math.max(m, l.level), 0);
        return sum + maxLevel;
      }, 0);

    const spells = this.spells()
      .get()
      .reduce((sum, s) => {
        const dhLevel = spellDistrictDH[s.name] ?? globalMaxDHLevel;
        const maxLevel = s.levels
          .filter((l) => l.districtHallRequired <= dhLevel)
          .reduce((m, l) => Math.max(m, l.level), 0);
        return sum + maxLevel;
      }, 0);

    const total =
      capitalPeak.total +
      barbarianCamp.total +
      wizardValley.total +
      balloonLagoon.total +
      buildersWorkshop.total +
      dragonCliffs.total +
      golemQuarry.total +
      skeletonPark.total +
      goblinMines.total +
      troops +
      spells;

    return {
      capitalPeak,
      barbarianCamp,
      wizardValley,
      balloonLagoon,
      buildersWorkshop,
      dragonCliffs,
      golemQuarry,
      skeletonPark,
      goblinMines,
      troops,
      spells,
      total,
    };
  }
}

/** Creates a new {@link ClanCapital} namespace instance. Entry point for all Clan Capital data. */
export function clanCapital(): ClanCapital {
  return new ClanCapital();
}
