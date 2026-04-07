import { home } from '@/modules/home';
import { HomeVillageHeroBanner } from '@/modules/home';

describe('heroBanner()', () => {
  it('returns a HeroBannerBuilding object', () => {
    const result = home().armyBuildings().heroBanner().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('hero-banner');
    expect(result.name).toBe('Hero Banner');
  });

  it('base is home', () => {
    expect(home().armyBuildings().heroBanner().first()!.base).toBe('home');
  });

  it('category is other', () => {
    expect(home().armyBuildings().heroBanner().first()!.category).toBe('other');
  });

  it('size is 2x2', () => {
    expect(home().armyBuildings().heroBanner().first()!.size).toBe('2x2');
  });

  it('has a description', () => {
    expect(home().armyBuildings().heroBanner().first()!.description).toBeTruthy();
  });
});

describe('heroBanner() images', () => {
  it('has an empty image', () => {
    expect(home().armyBuildings().heroBanner().first()!.images.empty).toBeTruthy();
  });

  it('has a barbarianKing image', () => {
    expect(home().armyBuildings().heroBanner().first()!.images.barbarianKing).toBeTruthy();
  });

  it('has an archerQueen image', () => {
    expect(home().armyBuildings().heroBanner().first()!.images.archerQueen).toBeTruthy();
  });

  it('has a minionPrince image', () => {
    expect(home().armyBuildings().heroBanner().first()!.images.minionPrince).toBeTruthy();
  });

  it('has a grandWarden image', () => {
    expect(home().armyBuildings().heroBanner().first()!.images.grandWarden).toBeTruthy();
  });

  it('has a royalChampion image', () => {
    expect(home().armyBuildings().heroBanner().first()!.images.royalChampion).toBeTruthy();
  });

  it('has a dragonDuke image', () => {
    expect(home().armyBuildings().heroBanner().first()!.images.dragonDuke).toBeTruthy();
  });
});

describe('heroBanner() availablePerTownHall', () => {
  it('TH6 has 0 hero banners', () => {
    const th6 = home()
      .armyBuildings()
      .heroBanner()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 6);
    expect(th6?.count).toBe(0);
  });

  it('TH7 has 1 hero banner', () => {
    const th7 = home()
      .armyBuildings()
      .heroBanner()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 7);
    expect(th7?.count).toBe(1);
  });

  it('TH9 has 2 hero banners', () => {
    const th9 = home()
      .armyBuildings()
      .heroBanner()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 9);
    expect(th9?.count).toBe(2);
  });

  it('TH11 has 3 hero banners', () => {
    const th11 = home()
      .armyBuildings()
      .heroBanner()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 11);
    expect(th11?.count).toBe(3);
  });

  it('TH13 has 4 hero banners', () => {
    const th13 = home()
      .armyBuildings()
      .heroBanner()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 13);
    expect(th13?.count).toBe(4);
  });

  it('TH18 has 4 hero banners', () => {
    const th18 = home()
      .armyBuildings()
      .heroBanner()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 18);
    expect(th18?.count).toBe(4);
  });
});

describe('heroBanner() integration with armyBuildings()', () => {
  it('heroBanner() returns a HomeVillageHeroBanner instance', () => {
    expect(home().armyBuildings().heroBanner()).toBeInstanceOf(HomeVillageHeroBanner);
  });
});
