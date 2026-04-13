import { calculators } from '@/calculators';
import { BuildTime } from '@/types';

// Clock tower level data for reference:
// Level 1:  boost=14min, gained=126min → potion saves 270min (4h 30m)
// Level 5:  boost=22min, gained=198min → potion saves 270min (4h 30m)
// Level 10: boost=32min, gained=288min → potion saves 270min (4h 30m)
// All levels have a 9× rate, so the potion always saves 270 minutes.

describe('calculators().clockTower().boost()', () => {
  const ct = calculators().clockTower();
  const zero: BuildTime = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  it('level 1 (126 min gained) subtracts 2h 6m from an 8h build', () => {
    const time: BuildTime = { days: 0, hours: 8, minutes: 0, seconds: 0 };
    expect(ct.boost(time, 1)).toEqual({ days: 0, hours: 5, minutes: 54, seconds: 0 });
  });

  it('level 10 (288 min gained) subtracts 4h 48m from a 7d build', () => {
    const time: BuildTime = { days: 7, hours: 0, minutes: 0, seconds: 0 };
    expect(ct.boost(time, 10)).toEqual({ days: 6, hours: 19, minutes: 12, seconds: 0 });
  });

  it('clamps to zero when remaining time is less than time gained', () => {
    const time: BuildTime = { days: 0, hours: 1, minutes: 0, seconds: 0 };
    expect(ct.boost(time, 5)).toEqual(zero);
  });

  it('returns zero for zero input', () => {
    expect(ct.boost(zero, 1)).toEqual(zero);
  });

  it('all 10 levels return progressively more time saved', () => {
    const time: BuildTime = { days: 30, hours: 0, minutes: 0, seconds: 0 };
    let prevSaved = -1;
    for (let lvl = 1; lvl <= 10; lvl++) {
      const result = ct.boost(time, lvl as 1);
      const saved = 30 * 86400 - (result.days * 86400 + result.hours * 3600 + result.minutes * 60);
      expect(saved).toBeGreaterThan(prevSaved);
      prevSaved = saved;
    }
  });
});

describe('calculators().clockTower().potion()', () => {
  const ct = calculators().clockTower();
  const zero: BuildTime = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  it('always saves 270 minutes (4h 30m) regardless of level', () => {
    const time: BuildTime = { days: 1, hours: 0, minutes: 0, seconds: 0 };
    const expected: BuildTime = { days: 0, hours: 19, minutes: 30, seconds: 0 };
    for (let lvl = 1; lvl <= 10; lvl++) {
      expect(ct.potion(time, lvl as 1)).toEqual(expected);
    }
  });

  it('clamps to zero when remaining time is less than 270 minutes', () => {
    const time: BuildTime = { days: 0, hours: 2, minutes: 0, seconds: 0 };
    expect(ct.potion(time, 1)).toEqual(zero);
  });

  it('returns zero for zero input', () => {
    expect(ct.potion(zero, 10)).toEqual(zero);
  });

  it('level 1: 270 min saved from a 5h build → 30m', () => {
    const time: BuildTime = { days: 0, hours: 5, minutes: 0, seconds: 0 };
    expect(ct.potion(time, 1)).toEqual({ days: 0, hours: 0, minutes: 30, seconds: 0 });
  });
});
