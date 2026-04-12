import { clanCapital, ClanCapitalSpellFactories } from '@/modules/clan-capital';
import { testFilterImmutability, testQueryBaseContract } from '../../../../helpers';

testQueryBaseContract('clanCapital().armyBuildings().spellFactories()', () =>
  clanCapital().armyBuildings().spellFactories(),
);

testFilterImmutability(
  'clanCapital().armyBuildings().spellFactories().byDistrict()',
  () => clanCapital().armyBuildings().spellFactories(),
  (q) => (q as ClanCapitalSpellFactories).byDistrict('wizardValley'),
);

describe('ClanCapitalSpellFactories', () => {
  it('returns 7 spell factories total', () => {
    expect(clanCapital().armyBuildings().spellFactories().count()).toBe(7);
  });

  it('spellFactories() returns a ClanCapitalSpellFactories instance', () => {
    expect(clanCapital().armyBuildings().spellFactories()).toBeInstanceOf(
      ClanCapitalSpellFactories,
    );
  });

  it('healSpellFactory() returns 1 item', () => {
    expect(clanCapital().armyBuildings().spellFactories().healSpellFactory().count()).toBe(1);
  });

  it('jumpSpellFactory() returns 1 item', () => {
    expect(clanCapital().armyBuildings().spellFactories().jumpSpellFactory().count()).toBe(1);
  });

  it('lightningSpellFactory() returns 1 item', () => {
    expect(clanCapital().armyBuildings().spellFactories().lightningSpellFactory().count()).toBe(1);
  });

  it('frostSpellFactory() returns 1 item', () => {
    expect(clanCapital().armyBuildings().spellFactories().frostSpellFactory().count()).toBe(1);
  });

  it('rageSpellFactory() returns 1 item', () => {
    expect(clanCapital().armyBuildings().spellFactories().rageSpellFactory().count()).toBe(1);
  });

  it('graveyardSpellFactory() returns 1 item', () => {
    expect(clanCapital().armyBuildings().spellFactories().graveyardSpellFactory().count()).toBe(1);
  });

  it('endlessHasteSpellFactory() returns 1 item', () => {
    expect(clanCapital().armyBuildings().spellFactories().endlessHasteSpellFactory().count()).toBe(
      1,
    );
  });

  it('byDistrict("wizardValley") returns 2 spell factories', () => {
    expect(clanCapital().armyBuildings().spellFactories().byDistrict('wizardValley').count()).toBe(
      2,
    );
  });

  it('byDistrict("balloonLagoon") returns 1 spell factory', () => {
    expect(clanCapital().armyBuildings().spellFactories().byDistrict('balloonLagoon').count()).toBe(
      1,
    );
  });

  it('byDistrict("buildersWorkshop") returns 1 spell factory', () => {
    expect(
      clanCapital().armyBuildings().spellFactories().byDistrict('buildersWorkshop').count(),
    ).toBe(1);
  });

  it('byDistrict("dragonCliffs") returns 1 spell factory', () => {
    expect(clanCapital().armyBuildings().spellFactories().byDistrict('dragonCliffs').count()).toBe(
      1,
    );
  });

  it('byDistrict("skeletonPark") returns 1 spell factory', () => {
    expect(clanCapital().armyBuildings().spellFactories().byDistrict('skeletonPark').count()).toBe(
      1,
    );
  });

  it('byDistrict("goblinMines") returns 1 spell factory', () => {
    expect(clanCapital().armyBuildings().spellFactories().byDistrict('goblinMines').count()).toBe(
      1,
    );
  });
});
