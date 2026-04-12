import { clanCapital, ClanCapitalSpells } from '@/modules/clan-capital';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

testQueryBaseContract('clanCapital().spells()', () => clanCapital().spells());

testFilterImmutability(
  'clanCapital().spells().healingSpell()',
  () => clanCapital().spells(),
  (q) => (q as ClanCapitalSpells).healingSpell(),
);

describe('ClanCapitalSpells', () => {
  it('returns 7 spells total', () => {
    expect(clanCapital().spells().count()).toBe(7);
  });

  it('spells() returns a ClanCapitalSpells instance', () => {
    expect(clanCapital().spells()).toBeInstanceOf(ClanCapitalSpells);
  });

  it('healingSpell() returns 1 item', () => {
    expect(clanCapital().spells().healingSpell().count()).toBe(1);
  });

  it('jumpSpell() returns 1 item', () => {
    expect(clanCapital().spells().jumpSpell().count()).toBe(1);
  });

  it('lightningSpell() returns 1 item', () => {
    expect(clanCapital().spells().lightningSpell().count()).toBe(1);
  });

  it('frostSpell() returns 1 item', () => {
    expect(clanCapital().spells().frostSpell().count()).toBe(1);
  });

  it('endlessHasteSpell() returns 1 item', () => {
    expect(clanCapital().spells().endlessHasteSpell().count()).toBe(1);
  });

  it('graveyardSpell() returns 1 item', () => {
    expect(clanCapital().spells().graveyardSpell().count()).toBe(1);
  });

  it('rageSpell() returns 1 item', () => {
    expect(clanCapital().spells().rageSpell().count()).toBe(1);
  });
});
