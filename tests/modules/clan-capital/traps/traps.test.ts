import { clanCapital, ClanCapitalTraps } from '@/modules/clan-capital';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

testQueryBaseContract('clanCapital().traps()', () => clanCapital().traps());

testFilterImmutability(
  'clanCapital().traps().byTargetType()',
  () => clanCapital().traps(),
  (q) => (q as ClanCapitalTraps).byTargetType('both'),
);

testFilterImmutability(
  'clanCapital().traps().byDistrict()',
  () => clanCapital().traps(),
  (q) => (q as ClanCapitalTraps).byDistrict('goblinMines'),
);

describe('ClanCapitalTraps', () => {
  it('returns 5 traps total', () => {
    expect(clanCapital().traps().count()).toBe(5);
  });

  it('mine() returns 1 item', () => {
    expect(clanCapital().traps().mine().count()).toBe(1);
  });

  it('megaMine() returns 1 item', () => {
    expect(clanCapital().traps().megaMine().count()).toBe(1);
  });

  it('logTrap() returns 1 item', () => {
    expect(clanCapital().traps().logTrap().count()).toBe(1);
  });

  it('zapTrap() returns 1 item', () => {
    expect(clanCapital().traps().zapTrap().count()).toBe(1);
  });

  it('spearTrap() returns 1 item', () => {
    expect(clanCapital().traps().spearTrap().count()).toBe(1);
  });

  it('byTargetType("both") returns 4 traps (mine + megaMine + zapTrap + spearTrap)', () => {
    expect(clanCapital().traps().byTargetType('both').count()).toBe(4);
  });

  it('byTargetType("ground") returns 1 item (logTrap)', () => {
    expect(clanCapital().traps().byTargetType('ground').count()).toBe(1);
  });

  it('byDistrict("goblinMines") returns 5 traps (all traps)', () => {
    expect(clanCapital().traps().byDistrict('goblinMines').count()).toBe(5);
  });

  it('byDistrict("barbarianCamp") returns 2 traps (mine + megaMine)', () => {
    expect(clanCapital().traps().byDistrict('barbarianCamp').count()).toBe(2);
  });

  it('byDistrict("wizardValley") returns 3 traps (mine, megaMine, logTrap)', () => {
    expect(clanCapital().traps().byDistrict('wizardValley').count()).toBe(3);
  });
});
