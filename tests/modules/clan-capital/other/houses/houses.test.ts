import { clanCapital, ClanCapitalHouses } from '@/modules/clan-capital';
import { testFilterImmutability, testQueryBaseContract } from '../../../../helpers';

testQueryBaseContract('clanCapital().other().houses()', () => clanCapital().other().houses());

testFilterImmutability(
  'clanCapital().other().houses().byDistrict()',
  () => clanCapital().other().houses(),
  (q) => (q as ClanCapitalHouses).byDistrict('barbarianCamp'),
);

describe('ClanCapitalHouses', () => {
  it('returns 9 houses total', () => {
    expect(clanCapital().other().houses().count()).toBe(9);
  });

  it('houses() returns a ClanCapitalHouses instance', () => {
    expect(clanCapital().other().houses()).toBeInstanceOf(ClanCapitalHouses);
  });

  it('smallCabin() returns 1 item', () => {
    expect(clanCapital().other().houses().smallCabin().count()).toBe(1);
  });

  it('thatchedHut() returns 1 item', () => {
    expect(clanCapital().other().houses().thatchedHut().count()).toBe(1);
  });

  it('smallHut() returns 1 item', () => {
    expect(clanCapital().other().houses().smallHut().count()).toBe(1);
  });

  it('woodenHouse() returns 1 item', () => {
    expect(clanCapital().other().houses().woodenHouse().count()).toBe(1);
  });

  it('woodenCabin() returns 1 item', () => {
    expect(clanCapital().other().houses().woodenCabin().count()).toBe(1);
  });

  it('slantedHouse() returns 1 item', () => {
    expect(clanCapital().other().houses().slantedHouse().count()).toBe(1);
  });

  it('goblinOutpost() returns 1 item', () => {
    expect(clanCapital().other().houses().goblinOutpost().count()).toBe(1);
  });

  it('goblinHut() returns 1 item', () => {
    expect(clanCapital().other().houses().goblinHut().count()).toBe(1);
  });

  it('goblinHall() returns 1 item', () => {
    expect(clanCapital().other().houses().goblinHall().count()).toBe(1);
  });

  it('byDistrict("barbarianCamp") returns 2 houses', () => {
    expect(clanCapital().other().houses().byDistrict('barbarianCamp').count()).toBe(2);
  });

  it('byDistrict("wizardValley") returns 2 houses', () => {
    expect(clanCapital().other().houses().byDistrict('wizardValley').count()).toBe(2);
  });

  it('byDistrict("balloonLagoon") returns 2 houses', () => {
    expect(clanCapital().other().houses().byDistrict('balloonLagoon').count()).toBe(2);
  });

  it('byDistrict("buildersWorkshop") returns 2 houses', () => {
    expect(clanCapital().other().houses().byDistrict('buildersWorkshop').count()).toBe(2);
  });

  it('byDistrict("dragonCliffs") returns 3 houses', () => {
    expect(clanCapital().other().houses().byDistrict('dragonCliffs').count()).toBe(3);
  });

  it('byDistrict("golemQuarry") returns 3 houses', () => {
    expect(clanCapital().other().houses().byDistrict('golemQuarry').count()).toBe(3);
  });

  it('byDistrict("skeletonPark") returns 4 houses', () => {
    expect(clanCapital().other().houses().byDistrict('skeletonPark').count()).toBe(4);
  });

  it('byDistrict("goblinMines") returns 3 houses', () => {
    expect(clanCapital().other().houses().byDistrict('goblinMines').count()).toBe(3);
  });
});
