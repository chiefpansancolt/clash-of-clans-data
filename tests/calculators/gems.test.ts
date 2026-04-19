import { calculators } from '@/calculators';

const gems = calculators().gems();

describe('calculators().gems().cost()', () => {
  it('zero time costs 0 gems', () => {
    expect(gems.cost({ days: 0, hours: 0, minutes: 0, seconds: 0 })).toBe(0);
  });

  it('1 second costs 1 gem', () => {
    expect(gems.cost({ days: 0, hours: 0, minutes: 0, seconds: 1 })).toBe(1);
  });

  it('59 seconds costs 1 gem', () => {
    expect(gems.cost({ days: 0, hours: 0, minutes: 0, seconds: 59 })).toBe(1);
  });

  it('1 minute costs 1 gem', () => {
    expect(gems.cost({ days: 0, hours: 0, minutes: 1, seconds: 0 })).toBe(1);
  });

  it('10 minutes costs 3 gems', () => {
    expect(gems.cost({ days: 0, hours: 0, minutes: 10, seconds: 0 })).toBe(3);
  });

  it('1 hour costs 20 gems', () => {
    expect(gems.cost({ days: 0, hours: 1, minutes: 0, seconds: 0 })).toBe(20);
  });

  it('1 day costs 260 gems', () => {
    expect(gems.cost({ days: 1, hours: 0, minutes: 0, seconds: 0 })).toBe(260);
  });

  it('7 days costs exactly 1000 gems', () => {
    expect(gems.cost({ days: 7, hours: 0, minutes: 0, seconds: 0 })).toBe(1000);
  });

  it('23h 45m costs 257 gems (in-game verified)', () => {
    expect(gems.cost({ days: 0, hours: 23, minutes: 45, seconds: 0 })).toBe(257);
  });

  it('2d 12h 52m costs 449 gems (in-game verified)', () => {
    expect(gems.cost({ days: 2, hours: 12, minutes: 52, seconds: 0 })).toBe(449);
  });

  it('5d 6h 5min 1sec costs 784 gems', () => {
    expect(gems.cost({ days: 5, hours: 6, minutes: 5, seconds: 1 })).toBe(784);
  });

  it('14 days extrapolates beyond the 7-day tier', () => {
    expect(gems.cost({ days: 14, hours: 0, minutes: 0, seconds: 0 })).toBe(1863);
  });
});
