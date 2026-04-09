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

export class HomeVillage {
  armyBuildings(): HomeVillageArmyBuildings {
    return new HomeVillageArmyBuildings();
  }

  defenses(): HomeVillageDefenses {
    return new HomeVillageDefenses();
  }

  craftedDefenses(): HomeVillageCraftedDefenses {
    return new HomeVillageCraftedDefenses();
  }

  guardians(): HomeVillageGuardians {
    return new HomeVillageGuardians();
  }

  heroEquipment(): HomeVillageHeroEquipment {
    return new HomeVillageHeroEquipment();
  }

  heroes(): HomeVillageHeroes {
    return new HomeVillageHeroes();
  }

  traps(): HomeVillageTraps {
    return new HomeVillageTraps();
  }

  walls(): HomeVillageWalls {
    return new HomeVillageWalls();
  }

  townHall(): HomeVillageTownHall {
    return new HomeVillageTownHall();
  }

  resourceBuildings(): HomeVillageResourceBuildings {
    return new HomeVillageResourceBuildings();
  }

  spells(): HomeVillageSpells {
    return new HomeVillageSpells();
  }

  troops(): HomeVillageTroops {
    return new HomeVillageTroops();
  }

  pets(): HomeVillagePets {
    return new HomeVillagePets();
  }

  siegeMachines(): HomeVillageSiegeMachines {
    return new HomeVillageSiegeMachines();
  }

  otherBuildings(): HomeVillageOtherBuildings {
    return new HomeVillageOtherBuildings();
  }
}

export function home(): HomeVillage {
  return new HomeVillage();
}
