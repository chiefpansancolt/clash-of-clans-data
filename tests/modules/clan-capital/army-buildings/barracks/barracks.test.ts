import { clanCapital, ClanCapitalBarracks } from '@/modules/clan-capital';
import { testFilterImmutability, testQueryBaseContract } from '../../../../helpers';

testQueryBaseContract('clanCapital().armyBuildings().barracks()', () =>
  clanCapital().armyBuildings().barracks(),
);

testFilterImmutability(
  'clanCapital().armyBuildings().barracks().byDistrict()',
  () => clanCapital().armyBuildings().barracks(),
  (q) => (q as ClanCapitalBarracks).byDistrict('barbarianCamp'),
);

describe('ClanCapitalBarracks', () => {
  it('returns 17 barracks total', () => {
    expect(clanCapital().armyBuildings().barracks().count()).toBe(17);
  });

  it('barracks() returns a ClanCapitalBarracks instance', () => {
    expect(clanCapital().armyBuildings().barracks()).toBeInstanceOf(ClanCapitalBarracks);
  });

  it('superBarbarianBarracks() returns 1 item', () => {
    expect(clanCapital().armyBuildings().barracks().superBarbarianBarracks().count()).toBe(1);
  });

  it('sneakyArcherBarracks() returns 1 item', () => {
    expect(clanCapital().armyBuildings().barracks().sneakyArcherBarracks().count()).toBe(1);
  });

  it('superGiantBarracks() returns 1 item', () => {
    expect(clanCapital().armyBuildings().barracks().superGiantBarracks().count()).toBe(1);
  });

  it('battleRamBarracks() returns 1 item', () => {
    expect(clanCapital().armyBuildings().barracks().battleRamBarracks().count()).toBe(1);
  });

  it('minionBarracks() returns 1 item', () => {
    expect(clanCapital().armyBuildings().barracks().minionBarracks().count()).toBe(1);
  });

  it('superWizardBarracks() returns 1 item', () => {
    expect(clanCapital().armyBuildings().barracks().superWizardBarracks().count()).toBe(1);
  });

  it('rocketBalloonBarracks() returns 1 item', () => {
    expect(clanCapital().armyBuildings().barracks().rocketBalloonBarracks().count()).toBe(1);
  });

  it('skeletonBarrelBarracks() returns 1 item', () => {
    expect(clanCapital().armyBuildings().barracks().skeletonBarrelBarracks().count()).toBe(1);
  });

  it('flyingFortressYard() returns 1 item', () => {
    expect(clanCapital().armyBuildings().barracks().flyingFortressYard().count()).toBe(1);
  });

  it('raidCartBarracks() returns 1 item', () => {
    expect(clanCapital().armyBuildings().barracks().raidCartBarracks().count()).toBe(1);
  });

  it('powerPekkaBarracks() returns 1 item', () => {
    expect(clanCapital().armyBuildings().barracks().powerPekkaBarracks().count()).toBe(1);
  });

  it('hogRaiderBarracks() returns 1 item', () => {
    expect(clanCapital().armyBuildings().barracks().hogRaiderBarracks().count()).toBe(1);
  });

  it('superDragonBarracks() returns 1 item', () => {
    expect(clanCapital().armyBuildings().barracks().superDragonBarracks().count()).toBe(1);
  });

  it('mountainGolemQuarry() returns 1 item', () => {
    expect(clanCapital().armyBuildings().barracks().mountainGolemQuarry().count()).toBe(1);
  });

  it('infernoDragonBarracks() returns 1 item', () => {
    expect(clanCapital().armyBuildings().barracks().infernoDragonBarracks().count()).toBe(1);
  });

  it('superMinerBarracks() returns 1 item', () => {
    expect(clanCapital().armyBuildings().barracks().superMinerBarracks().count()).toBe(1);
  });

  it('megaSparkyWorkshop() returns 1 item', () => {
    expect(clanCapital().armyBuildings().barracks().megaSparkyWorkshop().count()).toBe(1);
  });

  it('byDistrict("barbarianCamp") returns 5 barracks', () => {
    expect(clanCapital().armyBuildings().barracks().byDistrict('barbarianCamp').count()).toBe(5);
  });

  it('byDistrict("wizardValley") returns 1 barracks', () => {
    expect(clanCapital().armyBuildings().barracks().byDistrict('wizardValley').count()).toBe(1);
  });

  it('byDistrict("balloonLagoon") returns 3 barracks', () => {
    expect(clanCapital().armyBuildings().barracks().byDistrict('balloonLagoon').count()).toBe(3);
  });

  it('byDistrict("buildersWorkshop") returns 2 barracks', () => {
    expect(clanCapital().armyBuildings().barracks().byDistrict('buildersWorkshop').count()).toBe(2);
  });

  it('byDistrict("dragonCliffs") returns 2 barracks', () => {
    expect(clanCapital().armyBuildings().barracks().byDistrict('dragonCliffs').count()).toBe(2);
  });

  it('byDistrict("golemQuarry") returns 1 barracks', () => {
    expect(clanCapital().armyBuildings().barracks().byDistrict('golemQuarry').count()).toBe(1);
  });

  it('byDistrict("skeletonPark") returns 1 barracks', () => {
    expect(clanCapital().armyBuildings().barracks().byDistrict('skeletonPark').count()).toBe(1);
  });

  it('byDistrict("goblinMines") returns 2 barracks', () => {
    expect(clanCapital().armyBuildings().barracks().byDistrict('goblinMines').count()).toBe(2);
  });
});
