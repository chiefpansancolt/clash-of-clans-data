import { calculators } from '@/calculators';
import { BuildTime } from '@/types';

describe('calculators().potions()', () => {
  const potions = calculators().potions();

  const time24h: BuildTime = { days: 1, hours: 0, minutes: 0, seconds: 0 };
  const time3h: BuildTime = { days: 0, hours: 3, minutes: 0, seconds: 0 };
  const zero: BuildTime = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  // ── builderPotion (−10h) ─────────────────────────────────────────────────

  describe('builderPotion()', () => {
    it('subtracts 10h from a 24h build → 14h', () => {
      expect(potions.builderPotion(time24h)).toEqual({
        days: 0,
        hours: 14,
        minutes: 0,
        seconds: 0,
      });
    });

    it('subtracts 10h from a 3h build → 0 (clamped)', () => {
      expect(potions.builderPotion(time3h)).toEqual(zero);
    });

    it('returns zero for zero input', () => {
      expect(potions.builderPotion(zero)).toEqual(zero);
    });
  });

  // ── researchPotion (−24h) ────────────────────────────────────────────────

  describe('researchPotion()', () => {
    it('subtracts 24h from a 3d research → 2d', () => {
      const time: BuildTime = { days: 3, hours: 0, minutes: 0, seconds: 0 };
      expect(potions.researchPotion(time)).toEqual({
        days: 2,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    });

    it('subtracts 24h from a 10h research → 0 (clamped)', () => {
      expect(potions.researchPotion(time3h)).toEqual(zero);
    });

    it('returns zero for zero input', () => {
      expect(potions.researchPotion(zero)).toEqual(zero);
    });
  });

  // ── petPotion (−24h) ─────────────────────────────────────────────────────

  describe('petPotion()', () => {
    it('subtracts 24h from a 2d pet upgrade → 1d', () => {
      const time: BuildTime = { days: 2, hours: 0, minutes: 0, seconds: 0 };
      expect(potions.petPotion(time)).toEqual({
        days: 1,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    });

    it('subtracts 24h from a 12h upgrade → 0 (clamped)', () => {
      const time: BuildTime = { days: 0, hours: 12, minutes: 0, seconds: 0 };
      expect(potions.petPotion(time)).toEqual(zero);
    });

    it('returns zero for zero input', () => {
      expect(potions.petPotion(zero)).toEqual(zero);
    });
  });

  // ── builderBite (−2h) ────────────────────────────────────────────────────

  describe('builderBite()', () => {
    it('subtracts 2h from a 3h build → 1h', () => {
      expect(potions.builderBite(time3h)).toEqual({
        days: 0,
        hours: 1,
        minutes: 0,
        seconds: 0,
      });
    });

    it('subtracts 2h from a 90m build → 0 (clamped)', () => {
      const time: BuildTime = { days: 0, hours: 1, minutes: 30, seconds: 0 };
      expect(potions.builderBite(time)).toEqual(zero);
    });

    it('returns zero for zero input', () => {
      expect(potions.builderBite(zero)).toEqual(zero);
    });
  });

  // ── studySoup (−4h) ──────────────────────────────────────────────────────

  describe('studySoup()', () => {
    it('subtracts 4h from a 24h research → 20h', () => {
      expect(potions.studySoup(time24h)).toEqual({
        days: 0,
        hours: 20,
        minutes: 0,
        seconds: 0,
      });
    });

    it('subtracts 4h from a 3h research → 0 (clamped)', () => {
      expect(potions.studySoup(time3h)).toEqual(zero);
    });

    it('returns zero for zero input', () => {
      expect(potions.studySoup(zero)).toEqual(zero);
    });
  });
});
