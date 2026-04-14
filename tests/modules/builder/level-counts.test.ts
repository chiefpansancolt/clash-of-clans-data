import { builder } from '@/modules/builder';

describe('BuilderBase#levelCountAtBuilderHall', () => {
  // ── Shape ──────────────────────────────────────────────────────────────────

  it('returns an object with all expected keys', () => {
    const counts = builder().levelCountAtBuilderHall(1);
    expect(counts).toHaveProperty('structures');
    expect(counts).toHaveProperty('traps');
    expect(counts).toHaveProperty('starLab');
    expect(counts).toHaveProperty('heroes');
    expect(counts).toHaveProperty('walls');
    expect(counts).toHaveProperty('total');
  });

  it('total equals the sum of all five categories', () => {
    for (const bh of [1, 3, 5, 7, 10]) {
      const c = builder().levelCountAtBuilderHall(bh);
      const sum = c.structures + c.traps + c.starLab + c.heroes + c.walls;
      expect(c.total).toBe(sum);
    }
  });

  // ── BH1 known values ───────────────────────────────────────────────────────

  it('BH1 total is 108', () => {
    expect(builder().levelCountAtBuilderHall(1).total).toBe(108);
  });

  it('BH1 structures is 6', () => {
    expect(builder().levelCountAtBuilderHall(1).structures).toBe(6);
  });

  it('BH1 starLab is 92 (troop max levels accessible at the initial star lab level)', () => {
    expect(builder().levelCountAtBuilderHall(1).starLab).toBe(92);
  });

  it('BH1 traps is 0 (no traps at BH1)', () => {
    expect(builder().levelCountAtBuilderHall(1).traps).toBe(0);
  });

  it('BH1 heroes is 0 (Battle Machine requires BH5)', () => {
    expect(builder().levelCountAtBuilderHall(1).heroes).toBe(0);
  });

  it('BH1 walls is 10', () => {
    expect(builder().levelCountAtBuilderHall(1).walls).toBe(10);
  });

  // ── BH5 known values ───────────────────────────────────────────────────────

  it('BH5 total is 820', () => {
    expect(builder().levelCountAtBuilderHall(5).total).toBe(820);
  });

  it('BH5 heroes > 0 (Battle Machine unlocks at BH5)', () => {
    expect(builder().levelCountAtBuilderHall(5).heroes).toBeGreaterThan(0);
  });

  it('BH5 traps > 0', () => {
    expect(builder().levelCountAtBuilderHall(5).traps).toBeGreaterThan(0);
  });

  // ── Monotone ───────────────────────────────────────────────────────────────

  it('total is monotonically non-decreasing as BH level increases', () => {
    const totals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
      (bh) => builder().levelCountAtBuilderHall(bh).total,
    );
    for (let i = 0; i < totals.length - 1; i++) {
      expect(totals[i + 1]).toBeGreaterThanOrEqual(totals[i]);
    }
  });

  it('BH10 total is greater than BH1 total', () => {
    expect(builder().levelCountAtBuilderHall(10).total).toBeGreaterThan(
      builder().levelCountAtBuilderHall(1).total,
    );
  });

  it('BH10 total is 2750', () => {
    expect(builder().levelCountAtBuilderHall(10).total).toBe(2750);
  });
});
