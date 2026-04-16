import { clanCapital } from '@/modules/clan-capital';

describe('ClanCapital#levelCountAtClanCapital', () => {
  // ── Shape ──────────────────────────────────────────────────────────────────

  it('returns an object with all expected keys', () => {
    const counts = clanCapital().levelCountAtClanCapital(1);
    const districtKeys = [
      'capitalPeak',
      'barbarianCamp',
      'wizardValley',
      'balloonLagoon',
      'buildersWorkshop',
      'dragonCliffs',
      'golemQuarry',
      'skeletonPark',
      'goblinMines',
    ];
    for (const key of districtKeys) {
      expect(counts).toHaveProperty(key);
      const district = counts[key as keyof typeof counts] as {
        structures: number;
        walls: number;
        total: number;
      };
      expect(district).toHaveProperty('structures');
      expect(district).toHaveProperty('walls');
      expect(district).toHaveProperty('total');
    }
    expect(counts).toHaveProperty('troops');
    expect(counts).toHaveProperty('spells');
    expect(counts).toHaveProperty('total');
  });

  it('each district total equals structures + walls', () => {
    const counts = clanCapital().levelCountAtClanCapital(10);
    const districts = [
      counts.capitalPeak,
      counts.barbarianCamp,
      counts.wizardValley,
      counts.balloonLagoon,
      counts.buildersWorkshop,
      counts.dragonCliffs,
      counts.golemQuarry,
      counts.skeletonPark,
      counts.goblinMines,
    ];
    for (const d of districts) {
      expect(d.total).toBe(d.structures + d.walls);
    }
  });

  it('top-level total equals sum of all district totals + troops + spells', () => {
    for (const ch of [1, 3, 5, 7, 10]) {
      const c = clanCapital().levelCountAtClanCapital(ch);
      const districtSum =
        c.capitalPeak.total +
        c.barbarianCamp.total +
        c.wizardValley.total +
        c.balloonLagoon.total +
        c.buildersWorkshop.total +
        c.dragonCliffs.total +
        c.golemQuarry.total +
        c.skeletonPark.total +
        c.goblinMines.total;
      expect(c.total).toBe(districtSum + c.troops + c.spells);
    }
  });

  // ── CH1 known values ───────────────────────────────────────────────────────

  it('CH1 total is 92', () => {
    expect(clanCapital().levelCountAtClanCapital(1).total).toBe(92);
  });

  it('CH1 capitalPeak total is 92', () => {
    expect(clanCapital().levelCountAtClanCapital(1).capitalPeak.total).toBe(92);
  });

  it('CH1 capitalPeak structures is 12', () => {
    expect(clanCapital().levelCountAtClanCapital(1).capitalPeak.structures).toBe(12);
  });

  it('CH1 capitalPeak walls is 80', () => {
    expect(clanCapital().levelCountAtClanCapital(1).capitalPeak.walls).toBe(80);
  });

  it('CH1 all district totals are 0 (no districts unlocked at CH1)', () => {
    const c = clanCapital().levelCountAtClanCapital(1);
    expect(c.barbarianCamp.total).toBe(0);
    expect(c.wizardValley.total).toBe(0);
    expect(c.balloonLagoon.total).toBe(0);
    expect(c.buildersWorkshop.total).toBe(0);
    expect(c.dragonCliffs.total).toBe(0);
    expect(c.golemQuarry.total).toBe(0);
    expect(c.skeletonPark.total).toBe(0);
    expect(c.goblinMines.total).toBe(0);
  });

  it('CH1 troops is 0 (no districts to gate troop levels)', () => {
    expect(clanCapital().levelCountAtClanCapital(1).troops).toBe(0);
  });

  it('CH1 spells is 0', () => {
    expect(clanCapital().levelCountAtClanCapital(1).spells).toBe(0);
  });

  // ── District unlock progression ────────────────────────────────────────────

  it('CH2 barbarianCamp unlocks with total 77', () => {
    const c = clanCapital().levelCountAtClanCapital(2);
    expect(c.barbarianCamp.total).toBe(77);
    expect(c.barbarianCamp.structures).toBe(27);
    expect(c.barbarianCamp.walls).toBe(50);
  });

  it('CH2 wizardValley is still 0 (unlocks at CH3)', () => {
    expect(clanCapital().levelCountAtClanCapital(2).wizardValley.total).toBe(0);
  });

  it('CH3 wizardValley unlocks with total 115', () => {
    const c = clanCapital().levelCountAtClanCapital(3);
    expect(c.wizardValley.total).toBe(115);
    expect(c.wizardValley.structures).toBe(35);
    expect(c.wizardValley.walls).toBe(80);
  });

  it('CH3 troops > 0 once districts start unlocking', () => {
    expect(clanCapital().levelCountAtClanCapital(3).troops).toBeGreaterThan(0);
  });

  it('CH3 spells > 0', () => {
    expect(clanCapital().levelCountAtClanCapital(3).spells).toBeGreaterThan(0);
  });

  it('CH8 skeletonPark total > 0 (unlocks at CH8)', () => {
    expect(clanCapital().levelCountAtClanCapital(8).skeletonPark.total).toBeGreaterThan(0);
  });

  it('CH9 goblinMines total > 0 (unlocks at CH9)', () => {
    expect(clanCapital().levelCountAtClanCapital(9).goblinMines.total).toBeGreaterThan(0);
  });

  // ── CH10 known values ──────────────────────────────────────────────────────

  it('CH10 total is 10315', () => {
    expect(clanCapital().levelCountAtClanCapital(10).total).toBe(10315);
  });

  it('CH10 skeletonPark total is 732', () => {
    expect(clanCapital().levelCountAtClanCapital(10).skeletonPark.total).toBe(732);
  });

  it('CH10 goblinMines total is 708', () => {
    expect(clanCapital().levelCountAtClanCapital(10).goblinMines.total).toBe(708);
  });

  it('CH10 all districts have non-zero totals', () => {
    const c = clanCapital().levelCountAtClanCapital(10);
    const districts = [
      c.capitalPeak,
      c.barbarianCamp,
      c.wizardValley,
      c.balloonLagoon,
      c.buildersWorkshop,
      c.dragonCliffs,
      c.golemQuarry,
      c.skeletonPark,
      c.goblinMines,
    ];
    for (const d of districts) {
      expect(d.total).toBeGreaterThan(0);
    }
  });

  it('CH10 troops > 0', () => {
    expect(clanCapital().levelCountAtClanCapital(10).troops).toBeGreaterThan(0);
  });

  it('CH10 spells > 0', () => {
    expect(clanCapital().levelCountAtClanCapital(10).spells).toBeGreaterThan(0);
  });

  // ── Monotone ───────────────────────────────────────────────────────────────

  it('total is monotonically non-decreasing as CH level increases', () => {
    const totals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
      (ch) => clanCapital().levelCountAtClanCapital(ch).total,
    );
    for (let i = 0; i < totals.length - 1; i++) {
      expect(totals[i + 1]).toBeGreaterThanOrEqual(totals[i]);
    }
  });

  it('CH10 total is greater than CH5 total', () => {
    expect(clanCapital().levelCountAtClanCapital(10).total).toBeGreaterThan(
      clanCapital().levelCountAtClanCapital(5).total,
    );
  });
});
