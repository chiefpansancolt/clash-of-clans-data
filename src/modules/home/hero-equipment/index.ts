import { QueryBase } from '@/common/query-base';
import { EquipmentRarity, HeroEquipment } from '@/types';
import { barbarianPuppetData } from './barbarian-puppet';

const allHeroEquipment: HeroEquipment[] = [barbarianPuppetData];

export class HomeVillageHeroEquipment extends QueryBase<HeroEquipment> {
  constructor(data: HeroEquipment[] = allHeroEquipment) {
    super(data);
  }

  barbarianPuppet(): HomeVillageHeroEquipment {
    return new HomeVillageHeroEquipment([barbarianPuppetData]);
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
