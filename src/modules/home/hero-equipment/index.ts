import { QueryBase } from '@/common/query-base';
import { EquipmentRarity, HeroEquipment } from '@/types';
import { actionFigureData } from './action-figure';
import { archerPuppetData } from './archer-puppet';
import { barbarianPuppetData } from './barbarian-puppet';
import { darkCrownData } from './dark-crown';
import { darkOrbData } from './dark-orb';
import { earthquakeBootsData } from './earthquake-boots';
import { frozenArrowData } from './frozen-arrow';
import { giantArrowData } from './giant-arrow';
import { giantGauntletData } from './giant-gauntlet';
import { healerPuppetData } from './healer-puppet';
import { henchmenPuppetData } from './henchmen-puppet';
import { invisibilityVialData } from './invisibility-vial';
import { magicMirrorData } from './magic-mirror';
import { metalPantsData } from './metal-pants';
import { meteorStaffData } from './meteor-staff';
import { nobleIronData } from './noble-iron';
import { rageVialData } from './rage-vial';
import { snakeBraceletData } from './snake-bracelet';
import { spikyBallData } from './spiky-ball';
import { stickHorseData } from './stick-horse';
import { vampstacheData } from './vampstache';

const allHeroEquipment: HeroEquipment[] = [
  archerPuppetData,
  barbarianPuppetData,
  rageVialData,
  earthquakeBootsData,
  vampstacheData,
  giantGauntletData,
  spikyBallData,
  snakeBraceletData,
  stickHorseData,
  invisibilityVialData,
  giantArrowData,
  healerPuppetData,
  frozenArrowData,
  magicMirrorData,
  actionFigureData,
  henchmenPuppetData,
  darkOrbData,
  metalPantsData,
  nobleIronData,
  darkCrownData,
  meteorStaffData,
];

/**
 * Query class for all Home Village hero equipment.
 * Returned by `home().heroEquipment()`.
 */
export class HomeVillageHeroEquipment extends QueryBase<HeroEquipment> {
  constructor(data: HeroEquipment[] = allHeroEquipment) {
    super(data);
  }

  archerPuppet(): HomeVillageHeroEquipment {
    return new HomeVillageHeroEquipment([archerPuppetData]);
  }

  giantArrow(): HomeVillageHeroEquipment {
    return new HomeVillageHeroEquipment([giantArrowData]);
  }

  barbarianPuppet(): HomeVillageHeroEquipment {
    return new HomeVillageHeroEquipment([barbarianPuppetData]);
  }

  rageVial(): HomeVillageHeroEquipment {
    return new HomeVillageHeroEquipment([rageVialData]);
  }

  earthquakeBoots(): HomeVillageHeroEquipment {
    return new HomeVillageHeroEquipment([earthquakeBootsData]);
  }

  vampstache(): HomeVillageHeroEquipment {
    return new HomeVillageHeroEquipment([vampstacheData]);
  }

  giantGauntlet(): HomeVillageHeroEquipment {
    return new HomeVillageHeroEquipment([giantGauntletData]);
  }

  spikyBall(): HomeVillageHeroEquipment {
    return new HomeVillageHeroEquipment([spikyBallData]);
  }

  snakeBracelet(): HomeVillageHeroEquipment {
    return new HomeVillageHeroEquipment([snakeBraceletData]);
  }

  stickHorse(): HomeVillageHeroEquipment {
    return new HomeVillageHeroEquipment([stickHorseData]);
  }

  invisibilityVial(): HomeVillageHeroEquipment {
    return new HomeVillageHeroEquipment([invisibilityVialData]);
  }

  healerPuppet(): HomeVillageHeroEquipment {
    return new HomeVillageHeroEquipment([healerPuppetData]);
  }

  frozenArrow(): HomeVillageHeroEquipment {
    return new HomeVillageHeroEquipment([frozenArrowData]);
  }

  magicMirror(): HomeVillageHeroEquipment {
    return new HomeVillageHeroEquipment([magicMirrorData]);
  }

  actionFigure(): HomeVillageHeroEquipment {
    return new HomeVillageHeroEquipment([actionFigureData]);
  }

  henchmenPuppet(): HomeVillageHeroEquipment {
    return new HomeVillageHeroEquipment([henchmenPuppetData]);
  }

  darkOrb(): HomeVillageHeroEquipment {
    return new HomeVillageHeroEquipment([darkOrbData]);
  }

  metalPants(): HomeVillageHeroEquipment {
    return new HomeVillageHeroEquipment([metalPantsData]);
  }

  nobleIron(): HomeVillageHeroEquipment {
    return new HomeVillageHeroEquipment([nobleIronData]);
  }

  darkCrown(): HomeVillageHeroEquipment {
    return new HomeVillageHeroEquipment([darkCrownData]);
  }

  meteorStaff(): HomeVillageHeroEquipment {
    return new HomeVillageHeroEquipment([meteorStaffData]);
  }

  /** Filter to equipment belonging to the given hero (by hero ID, e.g. `'barbarian-king'`). */
  byHero(heroId: string): HomeVillageHeroEquipment {
    return new HomeVillageHeroEquipment(this.data.filter((e) => e.hero === heroId));
  }

  /** Filter by equipment rarity (`'common'`, `'epic'`, etc.). */
  byRarity(rarity: EquipmentRarity): HomeVillageHeroEquipment {
    return new HomeVillageHeroEquipment(this.data.filter((e) => e.rarity === rarity));
  }

  /** Filter to equipment that has at least one level available at or below the given Blacksmith level. */
  byBlacksmith(level: number): HomeVillageHeroEquipment {
    return new HomeVillageHeroEquipment(
      this.data.filter((e) => e.levels.some((l) => l.blacksmithLevelRequired <= level)),
    );
  }
}
