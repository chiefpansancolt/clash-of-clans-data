import { calculators } from '@/calculators';

const gems = calculators().gems();

describe('calculators().gems().cost()', () => {
  it('zero time costs 0 gems', () => {
    expect(gems.cost({ days: 0, hours: 0, minutes: 0, seconds: 0 })).toBe(0);
  });

  it('1 second costs 1 gem', () => {
    expect(gems.cost({ days: 0, hours: 0, minutes: 0, seconds: 1 })).toBe(1);
  });

  it('10 minutes costs 1 gem', () => {
    expect(gems.cost({ days: 0, hours: 0, minutes: 10, seconds: 0 })).toBe(1);
  });

  it('1 hour costs 6 gems', () => {
    expect(gems.cost({ days: 0, hours: 1, minutes: 0, seconds: 0 })).toBe(6);
  });

  it('1 day costs 143 gems', () => {
    expect(gems.cost({ days: 1, hours: 0, minutes: 0, seconds: 0 })).toBe(143);
  });

  it('7 days costs exactly 1000 gems', () => {
    expect(gems.cost({ days: 7, hours: 0, minutes: 0, seconds: 0 })).toBe(1000);
  });

  it('14 days costs 2000 gems', () => {
    expect(gems.cost({ days: 14, hours: 0, minutes: 0, seconds: 0 })).toBe(2000);
  });

  it('5d 6h 5min 1sec costs 751 gems', () => {
    expect(gems.cost({ days: 5, hours: 6, minutes: 5, seconds: 1 })).toBe(751);
  });

  it('rounds up for partial increments', () => {
    // 1 gem threshold = 604.8s; 10min 5sec (605s) crosses it → 2 gems
    expect(gems.cost({ days: 0, hours: 0, minutes: 10, seconds: 5 })).toBe(2);
  });
});
