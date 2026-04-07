import { home } from '@/modules/home';
import { HomeVillageOtherBuildings } from '@/modules/home';

describe('bobsHut()', () => {
  it('returns a HomeOtherBuilding object', () => {
    const result = home().otherBuildings().bobsHut().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('bobs-hut');
    expect(result.name).toBe("B.O.B's Hut");
  });

  it('has 1 level', () => {
    expect(home().otherBuildings().bobsHut().first()!.levels).toHaveLength(1);
  });

  it('base is home', () => {
    expect(home().otherBuildings().bobsHut().first()!.base).toBe('home');
  });

  it('category is other', () => {
    expect(home().otherBuildings().bobsHut().first()!.category).toBe('other');
  });

  it('size is 2x2', () => {
    expect(home().otherBuildings().bobsHut().first()!.size).toBe('2x2');
  });
});

describe('bobsHut() levels', () => {
  it('level 1 hitpoints is 250', () => {
    expect(home().otherBuildings().bobsHut().first()!.levels[0].hitpoints).toBe(250);
  });

  it('level 1 townHallRequired is 10', () => {
    expect(home().otherBuildings().bobsHut().first()!.levels[0].townHallRequired).toBe(10);
  });

  it('level 1 has a normal image', () => {
    expect(home().otherBuildings().bobsHut().first()!.levels[0].images.normal).toBeTruthy();
  });
});

describe('bobsHut() availablePerTownHall', () => {
  it("TH9 has 0 B.O.B's Huts", () => {
    const th9 = home()
      .otherBuildings()
      .bobsHut()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 9);
    expect(th9?.count).toBe(0);
  });

  it("TH10 has 1 B.O.B's Hut", () => {
    const th10 = home()
      .otherBuildings()
      .bobsHut()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 10);
    expect(th10?.count).toBe(1);
  });

  it("TH18 has 1 B.O.B's Hut", () => {
    const th18 = home()
      .otherBuildings()
      .bobsHut()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 18);
    expect(th18?.count).toBe(1);
  });
});

describe('bobsHut() integration with otherBuildings()', () => {
  it('otherBuildings() returns a HomeVillageOtherBuildings instance', () => {
    expect(home().otherBuildings()).toBeInstanceOf(HomeVillageOtherBuildings);
  });

  it("otherBuildings() byTownHall(9) excludes B.O.B's Hut", () => {
    const result = home().otherBuildings().byTownHall(9).get();
    expect(result.find((b) => b.id === 'bobs-hut')).toBeUndefined();
  });

  it("otherBuildings() byTownHall(10) includes B.O.B's Hut", () => {
    const result = home().otherBuildings().byTownHall(10).get();
    expect(result.find((b) => b.id === 'bobs-hut')).toBeDefined();
  });
});
