import {
  thEffectiveCount,
  thStructureCount,
  thSuperChargeCount,
} from '@/common/level-count-helpers';
import type { TownHallAvailability, TownHallLevelCounts } from '@/types';
import type { THCountableBuilding } from '@/types/level-count-helpers';
import { HomeVillageArmyBuildings } from './army-buildings';
import { HomeVillageCraftedDefenses } from './crafted-defenses';
import { HomeVillageDefenses } from './defenses';
import { HomeVillageGuardians } from './guardians';
import { HomeVillageHeroEquipment } from './hero-equipment';
import { HomeVillageHeroes } from './heroes';
import { HomeVillageOtherBuildings } from './other';
import { HomeVillagePets } from './pets';
import { HomeVillageResourceBuildings } from './resource-buildings';
import { HomeVillageSiegeMachines } from './siege-machines';
import { HomeVillageSpells } from './spells';
import { HomeVillageTownHall } from './town-hall';
import { HomeVillageTraps } from './traps';
import { HomeVillageTroops } from './troops';
import { HomeVillageWalls } from './walls';

export {
  HomeVillageArmyBuildings,
  HomeVillageBarracks,
  HomeVillageDarkBarracks,
  HomeVillageLaboratory,
  HomeVillageSpellFactory,
  HomeVillageDarkSpellFactory,
  HomeVillageHeroBanner,
  HomeVillageHeroHall,
  HomeVillageBlacksmith,
  HomeVillageWorkshop,
  HomeVillagePetHouse,
} from './army-buildings';
export { HomeVillageCraftedDefenses } from './crafted-defenses';
export { HomeVillageDefenses } from './defenses';
export { HomeVillageGuardians } from './guardians';
export { HomeVillageHeroEquipment } from './hero-equipment';
export { HomeVillageHeroes } from './heroes';
export { HomeVillageClanCastle, HomeVillageResourceBuildings } from './resource-buildings';
export { HomeVillageTownHall } from './town-hall';
export { HomeVillageTraps } from './traps';
export {
  HomeVillageOtherBuildings,
  HomeVillageHelperHut,
  HomeVillageHelpers,
  HomeVillageLabAssistant,
  HomeVillageBuildersApprentice,
  HomeVillageAlchemist,
  HomeVillageProspector,
} from './other';
export { HomeVillagePets } from './pets';
export { HomeVillageSiegeMachines } from './siege-machines';
export { HomeVillageSpells } from './spells';
export { HomeVillageTroops } from './troops';
export { HomeVillageWalls } from './walls';

/** Namespace for all Home Village entity queries. Use the {@link home} factory to create an instance. */
export class HomeVillage {
  /** Returns a query over all army buildings (Army Camp, Barracks, Laboratory, etc.). */
  armyBuildings(): HomeVillageArmyBuildings {
    return new HomeVillageArmyBuildings();
  }

  /** Returns a query over all stationary defenses (Cannon, Archer Tower, Mortar, etc.). */
  defenses(): HomeVillageDefenses {
    return new HomeVillageDefenses();
  }

  /** Returns a query over all crafted defenses (Hook Tower, Roaster, etc.). */
  craftedDefenses(): HomeVillageCraftedDefenses {
    return new HomeVillageCraftedDefenses();
  }

  /** Returns a query over all Guardians (Longshot, Smasher). */
  guardians(): HomeVillageGuardians {
    return new HomeVillageGuardians();
  }

  /** Returns a query over all hero equipment items. */
  heroEquipment(): HomeVillageHeroEquipment {
    return new HomeVillageHeroEquipment();
  }

  /** Returns a query over all heroes (Barbarian King, Archer Queen, etc.). */
  heroes(): HomeVillageHeroes {
    return new HomeVillageHeroes();
  }

  /** Returns a query over all traps (Bomb, Spring Trap, Giant Bomb, etc.). */
  traps(): HomeVillageTraps {
    return new HomeVillageTraps();
  }

  /** Returns a query over Wall data. */
  walls(): HomeVillageWalls {
    return new HomeVillageWalls();
  }

  /** Returns a query wrapping the Town Hall entity. */
  townHall(): HomeVillageTownHall {
    return new HomeVillageTownHall();
  }

  /** Returns a query over all resource buildings (Gold Mine, Elixir Collector, storages, etc.). */
  resourceBuildings(): HomeVillageResourceBuildings {
    return new HomeVillageResourceBuildings();
  }

  /** Returns a query over all spells (Lightning, Rage, Freeze, etc.). */
  spells(): HomeVillageSpells {
    return new HomeVillageSpells();
  }

  /** Returns a query over all home village troops (Barbarian, Archer, Dragon, etc.). */
  troops(): HomeVillageTroops {
    return new HomeVillageTroops();
  }

  /** Returns a query over all pets (Lassi, Electro Owl, Mighty Yak, etc.). */
  pets(): HomeVillagePets {
    return new HomeVillagePets();
  }

  /** Returns a query over all siege machines (Wall Wrecker, Battle Blimp, etc.). */
  siegeMachines(): HomeVillageSiegeMachines {
    return new HomeVillageSiegeMachines();
  }

  /** Returns a query over other buildings (Bob's Hut) and helpers (Helper Hut, Lab Assistant, etc.). */
  otherBuildings(): HomeVillageOtherBuildings {
    return new HomeVillageOtherBuildings();
  }

  /**
   * Computes the total number of upgradeable level slots available at a given Town Hall level,
   * broken down by category. Useful for progress tracking and upgrade completion ratios.
   *
   * @param thLevel - Town Hall level (1–18)
   */
  levelCountAtTownHall(thLevel: number): TownHallLevelCounts {
    const allStructures: THCountableBuilding[] = [
      ...(this.defenses().get() as unknown as THCountableBuilding[]),
      ...(this.armyBuildings().get() as unknown as THCountableBuilding[]), // army camp
      this.armyBuildings().barracks().first()! as unknown as THCountableBuilding,
      this.armyBuildings().darkBarracks().first()! as unknown as THCountableBuilding,
      this.armyBuildings().laboratory().first()! as unknown as THCountableBuilding,
      this.armyBuildings().spellFactory().first()! as unknown as THCountableBuilding,
      this.armyBuildings().darkSpellFactory().first()! as unknown as THCountableBuilding,
      this.armyBuildings().heroHall().first()! as unknown as THCountableBuilding,
      this.armyBuildings().blacksmith().first()! as unknown as THCountableBuilding,
      this.armyBuildings().workshop().first()! as unknown as THCountableBuilding,
      this.armyBuildings().petHouse().first()! as unknown as THCountableBuilding,
      ...(this.resourceBuildings().get() as unknown as THCountableBuilding[]),
      this.resourceBuildings().clanCastle().first()! as unknown as THCountableBuilding,
    ];
    const structures = allStructures.reduce((sum, b) => sum + thStructureCount(b, thLevel), 0);

    const traps = (this.traps().get() as unknown as THCountableBuilding[]).reduce(
      (sum, t) => sum + thStructureCount(t, thLevel),
      0,
    );

    const superChargeBuildings: THCountableBuilding[] = [
      ...(this.defenses().get() as unknown as THCountableBuilding[]),
      ...(this.resourceBuildings().get() as unknown as THCountableBuilding[]),
    ];
    const superCharge = superChargeBuildings.reduce(
      (sum, b) => sum + thSuperChargeCount(b, thLevel),
      0,
    );

    const lab = [
      ...this.troops()
        .get()
        .flatMap((t) => t.levels),
      ...this.spells()
        .get()
        .flatMap((s) => s.levels),
      ...this.siegeMachines()
        .get()
        .flatMap((sm) => sm.levels),
    ].filter((l) => l.townHallRequired <= thLevel).length;

    const heroHall = this.armyBuildings().heroHall().first()!;
    const eligibleHeroHallLevels = heroHall.levels.filter((l) => l.townHallRequired <= thLevel);
    const maxHeroHallLevelData =
      eligibleHeroHallLevels.length > 0
        ? eligibleHeroHallLevels[eligibleHeroHallLevels.length - 1]
        : null;
    const heroes = maxHeroHallLevelData
      ? (Object.values(maxHeroHallLevelData.heroLevelCaps) as (number | undefined)[]).reduce(
          (sum: number, cap) => sum + (cap ?? 0),
          0,
        )
      : 0;

    const guardians = (this.guardians().get() as unknown as THCountableBuilding[]).reduce(
      (sum, g) => sum + thStructureCount(g, thLevel),
      0,
    );

    const blacksmith = this.armyBuildings().blacksmith().first()!;
    const blacksmithAvailable =
      thEffectiveCount(blacksmith.availablePerTownHall as TownHallAvailability[], thLevel) > 0;
    const maxBlacksmithLevel = blacksmithAvailable
      ? blacksmith.levels
          .filter((l) => l.townHallRequired <= thLevel)
          .reduce((m, l) => Math.max(m, l.level), 0)
      : -1;
    const equipment =
      maxBlacksmithLevel >= 0
        ? this.heroEquipment()
            .get()
            .flatMap((eq) => eq.levels)
            .filter((l) => l.blacksmithLevelRequired <= maxBlacksmithLevel).length
        : 0;

    const pets = this.pets()
      .get()
      .flatMap((p) => p.levels)
      .filter((l) => l.townHallRequired <= thLevel).length;

    const wall = this.walls().wall().first()!;
    const wallCount = thEffectiveCount(
      wall.availablePerTownHall as TownHallAvailability[],
      thLevel,
    );
    const maxWallLevel = wall.levels
      .filter((l) => l.townHallRequired <= thLevel)
      .reduce((m, l) => Math.max(m, l.level), 0);
    const walls = wallCount * maxWallLevel;

    const total =
      structures + traps + superCharge + lab + heroes + guardians + equipment + pets + walls;
    return {
      structures,
      traps,
      superCharge,
      lab,
      heroes,
      guardians,
      equipment,
      pets,
      walls,
      total,
    };
  }
}

/** Creates a new {@link HomeVillage} namespace instance. Entry point for all Home Village data. */
export function home(): HomeVillage {
  return new HomeVillage();
}
