import { QueryBase } from '@/common/query-base';
import { EquipmentRarity, HeroEquipment } from '@/types';
import { barbarianPuppetData } from './barbarian-puppet';
import { earthquakeBootsData } from './earthquake-boots';
import { giantGauntletData } from './giant-gauntlet';
import { rageVialData } from './rage-vial';
import { snakeBraceletData } from './snake-bracelet';
import { spikyBallData } from './spiky-ball';
import { stickHorseData } from './stick-horse';
import { vampstacheData } from './vampstache';

const allHeroEquipment: HeroEquipment[] = [
  barbarianPuppetData,
  rageVialData,
  earthquakeBootsData,
  vampstacheData,
  giantGauntletData,
  spikyBallData,
  snakeBraceletData,
  stickHorseData,
];

export class HomeVillageHeroEquipment extends QueryBase<HeroEquipment> {
  constructor(data: HeroEquipment[] = allHeroEquipment) {
    super(data);
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
