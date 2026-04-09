import { home } from '@/modules/home';
import {
  HomeVillageAlchemist,
  HomeVillageBuildersApprentice,
  HomeVillageHelperHut,
  HomeVillageHelpers,
  HomeVillageLabAssistant,
  HomeVillageProspector,
} from '@/modules/home';

describe('helperHut()', () => {
  it('returns a HomeHelperHutBuilding', () => {
    const hh = home().otherBuildings().helperHut().first()!;
    expect(hh).toBeDefined();
    expect(hh.id).toBe('helper-hut');
    expect(hh.name).toBe('Helper Hut');
  });

  it('has 1 level', () => {
    expect(home().otherBuildings().helperHut().first()!.levels).toHaveLength(1);
  });

  it('level 1 hitpoints is 500', () => {
    expect(home().otherBuildings().helperHut().first()!.levels[0].hitpoints).toBe(500);
  });

  it('level 1 buildCost is 1000000 Elixir', () => {
    const lvl = home().otherBuildings().helperHut().first()!.levels[0];
    expect(lvl.buildCost).toBe(1000000);
    expect(lvl.buildCostResource).toBe('Elixir');
  });

  it('level 1 buildTime is instant', () => {
    expect(home().otherBuildings().helperHut().first()!.levels[0].buildTime).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 1 townHallRequired is 9', () => {
    expect(home().otherBuildings().helperHut().first()!.levels[0].townHallRequired).toBe(9);
  });

  it('level 1 has normal and active images', () => {
    const images = home().otherBuildings().helperHut().first()!.levels[0].images;
    expect(images.normal).toBeTruthy();
    expect(images.active).toBeTruthy();
  });

  it('TH8 has 0 helper huts', () => {
    const th8 = home()
      .otherBuildings()
      .helperHut()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 8);
    expect(th8?.count).toBe(0);
  });

  it('TH9 has 1 helper hut', () => {
    const th9 = home()
      .otherBuildings()
      .helperHut()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 9);
    expect(th9?.count).toBe(1);
  });

  it('returns a HomeVillageHelperHut instance', () => {
    expect(home().otherBuildings().helperHut()).toBeInstanceOf(HomeVillageHelperHut);
  });
});

describe('helpers()', () => {
  it('returns a HomeVillageHelpers instance', () => {
    expect(home().otherBuildings().helpers()).toBeInstanceOf(HomeVillageHelpers);
  });

  it('has 4 helpers total', () => {
    expect(home().otherBuildings().helpers().count()).toBe(4);
  });

  it('byTownHall(9) returns 1 helper (Lab Assistant)', () => {
    expect(home().otherBuildings().helpers().byTownHall(9).count()).toBe(1);
  });

  it('byTownHall(10) returns 3 helpers', () => {
    expect(home().otherBuildings().helpers().byTownHall(10).count()).toBe(3);
  });

  it('byTownHall(11) returns all 4 helpers', () => {
    expect(home().otherBuildings().helpers().byTownHall(11).count()).toBe(4);
  });
});

describe('labAssistant()', () => {
  it('returns a HomeLabAssistantHelper', () => {
    const la = home().otherBuildings().helpers().labAssistant().first()!;
    expect(la.id).toBe('lab-assistant');
    expect(la.name).toBe('Lab Assistant');
  });

  it('has 12 levels', () => {
    expect(home().otherBuildings().helpers().labAssistant().first()!.levels).toHaveLength(12);
  });

  it('recruitmentCost is 0 Gems', () => {
    const la = home().otherBuildings().helpers().labAssistant().first()!;
    expect(la.recruitmentCost).toBe(0);
    expect(la.recruitmentCostResource).toBe('Gems');
  });

  it('townHallRequired is 9', () => {
    expect(home().otherBuildings().helpers().labAssistant().first()!.townHallRequired).toBe(9);
  });

  it('level 1 workRate is 1, upgradeCost is 0', () => {
    const lvl = home().otherBuildings().helpers().labAssistant().first()!.levels[0];
    expect(lvl.workRate).toBe(1);
    expect(lvl.upgradeCost).toBe(0);
    expect(lvl.townHallRequired).toBe(9);
  });

  it('level 5 workRate is 5, upgradeCost is 750, TH12', () => {
    const lvl = home().otherBuildings().helpers().labAssistant().first()!.levels[4];
    expect(lvl.workRate).toBe(5);
    expect(lvl.upgradeCost).toBe(750);
    expect(lvl.townHallRequired).toBe(12);
  });

  it('level 12 workRate is 12, TH16', () => {
    const lvl = home().otherBuildings().helpers().labAssistant().first()!.levels[11];
    expect(lvl.workRate).toBe(12);
    expect(lvl.upgradeCost).toBe(1000);
    expect(lvl.townHallRequired).toBe(16);
  });

  it('has a normal image', () => {
    expect(home().otherBuildings().helpers().labAssistant().first()!.images.normal).toBeTruthy();
  });

  it('returns a HomeVillageLabAssistant instance', () => {
    expect(home().otherBuildings().helpers().labAssistant()).toBeInstanceOf(
      HomeVillageLabAssistant,
    );
  });
});

describe('buildersApprentice()', () => {
  it('returns a HomeBuilderApprenticeHelper', () => {
    const ba = home().otherBuildings().helpers().buildersApprentice().first()!;
    expect(ba.id).toBe('builders-apprentice');
    expect(ba.name).toBe("Builder's Apprentice");
  });

  it('has 8 levels', () => {
    expect(home().otherBuildings().helpers().buildersApprentice().first()!.levels).toHaveLength(8);
  });

  it('recruitmentCost is 500 Gems, townHallRequired is 10', () => {
    const ba = home().otherBuildings().helpers().buildersApprentice().first()!;
    expect(ba.recruitmentCost).toBe(500);
    expect(ba.recruitmentCostResource).toBe('Gems');
    expect(ba.townHallRequired).toBe(10);
  });

  it('level 8 workRate is 8, TH14', () => {
    const lvl = home().otherBuildings().helpers().buildersApprentice().first()!.levels[7];
    expect(lvl.workRate).toBe(8);
    expect(lvl.townHallRequired).toBe(14);
  });

  it('returns a HomeVillageBuildersApprentice instance', () => {
    expect(home().otherBuildings().helpers().buildersApprentice()).toBeInstanceOf(
      HomeVillageBuildersApprentice,
    );
  });
});

describe('alchemist()', () => {
  it('returns a HomeAlchemistHelper', () => {
    const al = home().otherBuildings().helpers().alchemist().first()!;
    expect(al.id).toBe('alchemist');
    expect(al.name).toBe('Alchemist');
  });

  it('has 7 levels', () => {
    expect(home().otherBuildings().helpers().alchemist().first()!.levels).toHaveLength(7);
  });

  it('recruitmentCost is 100 Gems, townHallRequired is 11', () => {
    const al = home().otherBuildings().helpers().alchemist().first()!;
    expect(al.recruitmentCost).toBe(100);
    expect(al.townHallRequired).toBe(11);
  });

  it('level 1 goldElixirConversionMax is 1500000, conversionBonusPercent is 1', () => {
    const lvl = home().otherBuildings().helpers().alchemist().first()!.levels[0];
    expect(lvl.goldElixirConversionMax).toBe(1500000);
    expect(lvl.darkElixirConversionMax).toBe(10000);
    expect(lvl.conversionBonusPercent).toBe(1);
    expect(lvl.upgradeCost).toBe(100);
    expect(lvl.townHallRequired).toBe(11);
  });

  it('level 7 goldElixirConversionMax is 10500000, conversionBonusPercent is 10, TH17', () => {
    const lvl = home().otherBuildings().helpers().alchemist().first()!.levels[6];
    expect(lvl.goldElixirConversionMax).toBe(10500000);
    expect(lvl.darkElixirConversionMax).toBe(70000);
    expect(lvl.conversionBonusPercent).toBe(10);
    expect(lvl.upgradeCost).toBe(1500);
    expect(lvl.townHallRequired).toBe(17);
  });

  it('returns a HomeVillageAlchemist instance', () => {
    expect(home().otherBuildings().helpers().alchemist()).toBeInstanceOf(HomeVillageAlchemist);
  });
});

describe('prospector()', () => {
  it('returns a HomeProspectorHelper', () => {
    const pr = home().otherBuildings().helpers().prospector().first()!;
    expect(pr.id).toBe('prospector');
    expect(pr.name).toBe('Prospector');
  });

  it('has 1 level', () => {
    expect(home().otherBuildings().helpers().prospector().first()!.levels).toHaveLength(1);
  });

  it('recruitmentCost is 2200 Season Challenge Points, TH10', () => {
    const pr = home().otherBuildings().helpers().prospector().first()!;
    expect(pr.recruitmentCost).toBe(2200);
    expect(pr.recruitmentCostResource).toBe('Season Challenge Points');
    expect(pr.townHallRequired).toBe(10);
  });

  it('level 1 shinyOreConversionMax is 2000, glowyOreConversionMax is 120, starryOreConversionMax is 2', () => {
    const lvl = home().otherBuildings().helpers().prospector().first()!.levels[0];
    expect(lvl.shinyOreConversionMax).toBe(2000);
    expect(lvl.glowyOreConversionMax).toBe(120);
    expect(lvl.starryOreConversionMax).toBe(2);
  });

  it('returns a HomeVillageProspector instance', () => {
    expect(home().otherBuildings().helpers().prospector()).toBeInstanceOf(HomeVillageProspector);
  });
});
