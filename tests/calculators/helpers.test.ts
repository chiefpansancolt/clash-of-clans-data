import { calculators } from '@/calculators';
import { BuildTime } from '@/types';

describe('calculators().helpers()', () => {
  const helpers = calculators().helpers();

  const time24h: BuildTime = { days: 1, hours: 0, minutes: 0, seconds: 0 };
  const time3h: BuildTime = { days: 0, hours: 3, minutes: 0, seconds: 0 };
  const zero: BuildTime = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  // ── labAssistant ─────────────────────────────────────────────────────────────

  describe('labAssistant()', () => {
    it('level 1 workRate=1 → subtracts 1h from 24h research', () => {
      expect(helpers.labAssistant(time24h, 1)).toEqual({
        days: 0,
        hours: 23,
        minutes: 0,
        seconds: 0,
      });
    });

    it('level 6 workRate=6 → subtracts 6h from 24h research', () => {
      expect(helpers.labAssistant(time24h, 6)).toEqual({
        days: 0,
        hours: 18,
        minutes: 0,
        seconds: 0,
      });
    });

    it('level 12 workRate=12 → subtracts 12h from 24h research', () => {
      expect(helpers.labAssistant(time24h, 12)).toEqual({
        days: 0,
        hours: 12,
        minutes: 0,
        seconds: 0,
      });
    });

    it('level 12 clamps to zero when remaining < 12h', () => {
      expect(helpers.labAssistant(time3h, 12)).toEqual(zero);
    });

    it('zero time stays zero', () => {
      expect(helpers.labAssistant(zero, 12)).toEqual(zero);
    });
  });

  // ── buildersApprentice ───────────────────────────────────────────────────────

  describe('buildersApprentice()', () => {
    it('level 1 workRate=1 → subtracts 1h from 24h build', () => {
      expect(helpers.buildersApprentice(time24h, 1)).toEqual({
        days: 0,
        hours: 23,
        minutes: 0,
        seconds: 0,
      });
    });

    it('level 4 workRate=4 → subtracts 4h from 24h build', () => {
      expect(helpers.buildersApprentice(time24h, 4)).toEqual({
        days: 0,
        hours: 20,
        minutes: 0,
        seconds: 0,
      });
    });

    it('level 8 workRate=8 → subtracts 8h from 24h build', () => {
      expect(helpers.buildersApprentice(time24h, 8)).toEqual({
        days: 0,
        hours: 16,
        minutes: 0,
        seconds: 0,
      });
    });

    it('level 8 clamps to zero when remaining < 8h', () => {
      expect(helpers.buildersApprentice(time3h, 8)).toEqual(zero);
    });

    it('zero time stays zero', () => {
      expect(helpers.buildersApprentice(zero, 8)).toEqual(zero);
    });
  });

  // ── alchemist ────────────────────────────────────────────────────────────────

  describe('alchemist()', () => {
    it('level 1 converts 1,500,000 Gold → 10,000 DE base + 1% bonus = 10,100 total', () => {
      const result = helpers.alchemist(1_500_000, 1);
      expect(result.input).toBe(1_500_000);
      expect(result.base).toBe(10_000);
      expect(result.bonus).toBe(100);
      expect(result.total).toBe(10_100);
    });

    it('level 1 caps input at goldElixirConversionMax (1,500,000)', () => {
      const result = helpers.alchemist(5_000_000, 1);
      expect(result.input).toBe(1_500_000); // capped
      expect(result.base).toBe(10_000);
    });

    it('level 7 converts full max → 70,000 DE base + 10% bonus = 77,000 total', () => {
      const result = helpers.alchemist(10_500_000, 7);
      expect(result.input).toBe(10_500_000);
      expect(result.base).toBe(70_000);
      expect(result.bonus).toBe(7_000);
      expect(result.total).toBe(77_000);
    });

    it('level 4 converts 3,000,000 → 20,000 DE base + 5% bonus = 21,000 total', () => {
      const result = helpers.alchemist(3_000_000, 4);
      expect(result.base).toBe(20_000);
      expect(result.bonus).toBe(1_000);
      expect(result.total).toBe(21_000);
    });

    it('zero input returns all zeros', () => {
      const result = helpers.alchemist(0, 1);
      expect(result).toEqual({ input: 0, base: 0, bonus: 0, total: 0 });
    });
  });

  // ── prospector ───────────────────────────────────────────────────────────────

  describe('prospector()', () => {
    it('level 1 returns correct max ore amounts', () => {
      expect(helpers.prospector(1)).toEqual({
        shinyOre: 2000,
        glowyOre: 120,
        starryOre: 2,
      });
    });
  });
});
