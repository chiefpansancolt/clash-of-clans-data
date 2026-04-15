import { home } from '@/modules/home';

describe('HomeVillage#levelCountAtTownHall', () => {
  // ── Shape ──────────────────────────────────────────────────────────────────

  it('returns an object with all expected keys', () => {
    const counts = home().levelCountAtTownHall(1);
    expect(counts).toHaveProperty('structures');
    expect(counts).toHaveProperty('traps');
    expect(counts).toHaveProperty('superCharge');
    expect(counts).toHaveProperty('lab');
    expect(counts).toHaveProperty('heroes');
    expect(counts).toHaveProperty('guardians');
    expect(counts).toHaveProperty('equipment');
    expect(counts).toHaveProperty('pets');
    expect(counts).toHaveProperty('craftedDefenses');
    expect(counts).toHaveProperty('walls');
    expect(counts).toHaveProperty('total');
  });

  it('total equals the sum of all ten categories', () => {
    for (const th of [1, 5, 10, 15, 18]) {
      const c = home().levelCountAtTownHall(th);
      const sum =
        c.structures +
        c.traps +
        c.superCharge +
        c.lab +
        c.heroes +
        c.guardians +
        c.equipment +
        c.pets +
        c.craftedDefenses +
        c.walls;
      expect(c.total).toBe(sum);
    }
  });

  // ── TH1 known values ───────────────────────────────────────────────────────

  it('TH1 total is 50', () => {
    expect(home().levelCountAtTownHall(1).total).toBe(50);
  });

  it('TH1 structures is 19', () => {
    expect(home().levelCountAtTownHall(1).structures).toBe(19);
  });

  it('TH1 lab is 31', () => {
    expect(home().levelCountAtTownHall(1).lab).toBe(31);
  });

  it('TH1 traps is 0 (no traps unlock at TH1)', () => {
    expect(home().levelCountAtTownHall(1).traps).toBe(0);
  });

  it('TH1 superCharge is 0', () => {
    expect(home().levelCountAtTownHall(1).superCharge).toBe(0);
  });

  it('TH1 heroes is 0 (Hero Hall not yet available)', () => {
    expect(home().levelCountAtTownHall(1).heroes).toBe(0);
  });

  it('TH1 guardians is 0 (Guardians unlock at TH18)', () => {
    expect(home().levelCountAtTownHall(1).guardians).toBe(0);
  });

  it('TH1 equipment is 0 (Blacksmith not yet available)', () => {
    expect(home().levelCountAtTownHall(1).equipment).toBe(0);
  });

  it('TH1 pets is 0 (Pet House not yet available)', () => {
    expect(home().levelCountAtTownHall(1).pets).toBe(0);
  });

  it('TH1 walls is 0 (walls unlock after TH1)', () => {
    expect(home().levelCountAtTownHall(1).walls).toBe(0);
  });

  // ── Categories that unlock progressively ──────────────────────────────────

  it('traps > 0 at TH5', () => {
    expect(home().levelCountAtTownHall(5).traps).toBeGreaterThan(0);
  });

  it('heroes > 0 at TH10', () => {
    expect(home().levelCountAtTownHall(10).heroes).toBeGreaterThan(0);
  });

  it('walls > 0 at TH2', () => {
    expect(home().levelCountAtTownHall(2).walls).toBeGreaterThan(0);
  });

  it('superCharge > 0 at TH17', () => {
    expect(home().levelCountAtTownHall(17).superCharge).toBeGreaterThan(0);
  });

  it('equipment > 0 at TH12', () => {
    expect(home().levelCountAtTownHall(12).equipment).toBeGreaterThan(0);
  });

  it('pets > 0 at TH14', () => {
    expect(home().levelCountAtTownHall(14).pets).toBeGreaterThan(0);
  });

  it('guardians > 0 at TH18', () => {
    expect(home().levelCountAtTownHall(18).guardians).toBeGreaterThan(0);
  });

  // ── Monotone ───────────────────────────────────────────────────────────────

  it('total is monotonically non-decreasing as TH level increases', () => {
    const thLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    const totals = thLevels.map((th) => home().levelCountAtTownHall(th).total);
    for (let i = 0; i < totals.length - 1; i++) {
      expect(totals[i + 1]).toBeGreaterThanOrEqual(totals[i]);
    }
  });

  it('TH18 total is greater than TH10 total', () => {
    expect(home().levelCountAtTownHall(18).total).toBeGreaterThan(
      home().levelCountAtTownHall(10).total,
    );
  });

  it('TH18 total is 9928', () => {
    expect(home().levelCountAtTownHall(18).total).toBe(9928);
  });

  it('craftedDefenses is 0 below TH18', () => {
    for (const th of [1, 5, 10, 15, 17]) {
      expect(home().levelCountAtTownHall(th).craftedDefenses).toBe(0);
    }
  });

  it('craftedDefenses is 90 at TH18 (3 current defenses × 3 modules × 10 upgrades)', () => {
    expect(home().levelCountAtTownHall(18).craftedDefenses).toBe(90);
  });
});
