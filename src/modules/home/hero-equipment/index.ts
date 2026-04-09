import { QueryBase } from '@/common/query-base';
import { EquipmentRarity, HeroEquipment } from '@/types';
import { actionFigureData } from './action-figure';
import { archerPuppetData } from './archer-puppet';
import { barbarianPuppetData } from './barbarian-puppet';
import { earthquakeBootsData } from './earthquake-boots';
import { frozenArrowData } from './frozen-arrow';
import { giantArrowData } from './giant-arrow';
import { giantGauntletData } from './giant-gauntlet';
import { healerPuppetData } from './healer-puppet';
import { invisibilityVialData } from './invisibility-vial';
import { magicMirrorData } from './magic-mirror';
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
];

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

  byHero(heroId: string): HomeVillageHeroEquipment {
    return new HomeVillageHeroEquipment(this.data.filter((e) => e.hero === heroId));
  }

  byRarity(rarity: EquipmentRarity): HomeVillageHeroEquipment {
    return new HomeVillageHeroEquipment(this.data.filter((e) => e.rarity === rarity));
  }

  byBlacksmith(level: number): HomeVillageHeroEquipment {
    return new HomeVillageHeroEquipment(
      this.data.filter((e) => e.levels.some((l) => l.blacksmithLevelRequired <= level)),
    );
  }
}
