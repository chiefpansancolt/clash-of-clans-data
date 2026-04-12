import { calculators } from '@/calculators';
import { BuildTime } from '@/types';

describe('calculators().boost()', () => {
  const boost = calculators().boost();

  // ── builderBoost (time) ──────────────────────────────���───────────────────────

  describe('builderBoost()', () => {
    it('tier 10 reduces a 10h build by exactly 1h', () => {
      const time: BuildTime = { days: 0, hours: 10, minutes: 0, seconds: 0 };
      expect(boost.builderBoost(time, 10)).toEqual({
        days: 0,
        hours: 9,
        minutes: 0,
        seconds: 0,
      });
    });

    it('tier 15 reduces a 20h build to 17h', () => {
      const time: BuildTime = { days: 0, hours: 20, minutes: 0, seconds: 0 };
      expect(boost.builderBoost(time, 15)).toEqual({
        days: 0,
        hours: 17,
        minutes: 0,
        seconds: 0,
      });
    });

    it('tier 20 reduces a 5d build to 4d', () => {
      const time: BuildTime = { days: 5, hours: 0, minutes: 0, seconds: 0 };
      expect(boost.builderBoost(time, 20)).toEqual({
        days: 4,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    });

    it('tier 20 reduces a mixed time correctly', () => {
      // 1d 0h 0m 0s = 86400s → 80% = 69120s = 19h 12m 0s
      const time: BuildTime = { days: 1, hours: 0, minutes: 0, seconds: 0 };
      expect(boost.builderBoost(time, 20)).toEqual({
        days: 0,
        hours: 19,
        minutes: 12,
        seconds: 0,
      });
    });

    it('zero time stays zero', () => {
      const time: BuildTime = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      expect(boost.builderBoost(time, 20)).toEqual({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    });

    it('floors fractional seconds (no partial seconds in result)', () => {
      const time: BuildTime = { days: 0, hours: 0, minutes: 0, seconds: 10 };
      const result = boost.builderBoost(time, 10);
      expect(result.seconds).toBe(9);
      expect(Number.isInteger(result.seconds)).toBe(true);
    });
  });

  // ── researchBoost (time) ────────────────────────────��────────────────────────

  describe('researchBoost()', () => {
    it('tier 10 reduces a 10h research by exactly 1h', () => {
      const time: BuildTime = { days: 0, hours: 10, minutes: 0, seconds: 0 };
      expect(boost.researchBoost(time, 10)).toEqual({
        days: 0,
        hours: 9,
        minutes: 0,
        seconds: 0,
      });
    });

    it('tier 15 reduces a 14d research to 11d 21h 36m', () => {
      // 14d = 1209600s → 85% = 1028160s = 11d 21h 36m
      const time: BuildTime = { days: 14, hours: 0, minutes: 0, seconds: 0 };
      expect(boost.researchBoost(time, 15)).toEqual({
        days: 11,
        hours: 21,
        minutes: 36,
        seconds: 0,
      });
    });

    it('tier 20 reduces a 7d research to 5d 14h 24m', () => {
      // 7d = 604800s → 80% = 483840s = 5d 14h 24m
      const time: BuildTime = { days: 7, hours: 0, minutes: 0, seconds: 0 };
      expect(boost.researchBoost(time, 20)).toEqual({
        days: 5,
        hours: 14,
        minutes: 24,
        seconds: 0,
      });
    });

    it('zero time stays zero', () => {
      const time: BuildTime = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      expect(boost.researchBoost(time, 20)).toEqual({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    });
  });

  // ── builderBoostCost ──────────────────────────���─────────────────────────────���

  describe('builderBoostCost()', () => {
    it('tier 10 reduces 1,000,000 Gold by 100,000', () => {
      expect(boost.builderBoostCost(1_000_000, 'Gold', 10)).toBe(900_000);
    });

    it('tier 15 reduces 2,000,000 Elixir by 300,000', () => {
      expect(boost.builderBoostCost(2_000_000, 'Elixir', 15)).toBe(1_700_000);
    });

    it('tier 20 reduces 500,000 Dark Elixir by 100,000', () => {
      expect(boost.builderBoostCost(500_000, 'Dark Elixir', 20)).toBe(400_000);
    });

    it('floors fractional gold (no partial resources)', () => {
      // 1001 * 0.9 = 900.9 → floor → 900
      expect(boost.builderBoostCost(1001, 'Gold', 10)).toBe(900);
    });

    it('zero cost stays zero', () => {
      expect(boost.builderBoostCost(0, 'Gold', 20)).toBe(0);
    });
  });

  // ── researchBoostCost ────────────────────────────────────────────────────────

  describe('researchBoostCost()', () => {
    it('tier 10 reduces 5,000,000 Elixir by 500,000', () => {
      expect(boost.researchBoostCost(5_000_000, 'Elixir', 10)).toBe(4_500_000);
    });

    it('tier 15 reduces 1,000,000 Dark Elixir by 150,000', () => {
      expect(boost.researchBoostCost(1_000_000, 'Dark Elixir', 15)).toBe(850_000);
    });

    it('tier 20 reduces 10,000,000 Gold by 2,000,000', () => {
      expect(boost.researchBoostCost(10_000_000, 'Gold', 20)).toBe(8_000_000);
    });

    it('floors fractional result', () => {
      // 999 * 0.9 = 899.1 → floor → 899
      expect(boost.researchBoostCost(999, 'Elixir', 10)).toBe(899);
    });

    it('zero cost stays zero', () => {
      expect(boost.researchBoostCost(0, 'Dark Elixir', 20)).toBe(0);
    });
  });
});
