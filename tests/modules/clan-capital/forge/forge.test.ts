import { clanCapital } from '@/modules/clan-capital';

describe('ClanCapital#forge()', () => {
  const forge = clanCapital().forge();

  // ── Daily Forge ────────────────────────────────────────────────────────────

  describe('dailyForge()', () => {
    it('returns 13 entries (TH6–18)', () => {
      expect(forge.dailyForge()).toHaveLength(13);
    });

    it('first entry is TH6 → 150 Capital Gold', () => {
      const e = forge.dailyForge()[0];
      expect(e.townHallLevel).toBe(6);
      expect(e.capitalGoldObtained).toBe(150);
    });

    it('last entry is TH18 → 750 Capital Gold', () => {
      const e = forge.dailyForge()[12];
      expect(e.townHallLevel).toBe(18);
      expect(e.capitalGoldObtained).toBe(750);
    });

    it('each level increases by 50 Capital Gold', () => {
      const entries = forge.dailyForge();
      for (let i = 1; i < entries.length; i++) {
        expect(entries[i].capitalGoldObtained - entries[i - 1].capitalGoldObtained).toBe(50);
      }
    });
  });

  describe('dailyForgeAtTownHall()', () => {
    it('returns correct entry for TH12', () => {
      const e = forge.dailyForgeAtTownHall(12);
      expect(e?.townHallLevel).toBe(12);
      expect(e?.capitalGoldObtained).toBe(450);
    });

    it('returns undefined for unlisted TH level', () => {
      expect(forge.dailyForgeAtTownHall(5)).toBeUndefined();
    });
  });

  // ── Crafting Time ──────────────────────────────────────────────────────────

  describe('craftingTime()', () => {
    it('is 3 days', () => {
      const t = forge.craftingTime();
      expect(t.days).toBe(3);
      expect(t.hours).toBe(0);
      expect(t.minutes).toBe(0);
      expect(t.seconds).toBe(0);
    });
  });

  // ── Available Forges ───────────────────────────────────────────────────────

  describe('availableForges()', () => {
    it('returns 4 slot tiers', () => {
      expect(forge.availableForges()).toHaveLength(4);
    });

    it('1 slot unlocks at TH9', () => {
      expect(forge.availableForges()[0]).toEqual({ slots: 1, townHallRequired: 9 });
    });

    it('4 slots unlock at TH14', () => {
      expect(forge.availableForges()[3]).toEqual({ slots: 4, townHallRequired: 14 });
    });
  });

  describe('availableForgesAtTownHall()', () => {
    it('TH8 has 0 slots', () => {
      expect(forge.availableForgesAtTownHall(8)).toBe(0);
    });

    it('TH9 has 1 slot', () => {
      expect(forge.availableForgesAtTownHall(9)).toBe(1);
    });

    it('TH11 has 2 slots', () => {
      expect(forge.availableForgesAtTownHall(11)).toBe(2);
    });

    it('TH14 has 4 slots', () => {
      expect(forge.availableForgesAtTownHall(14)).toBe(4);
    });

    it('TH18 has 4 slots', () => {
      expect(forge.availableForgesAtTownHall(18)).toBe(4);
    });
  });

  // ── Auto Forge ─────────────────────────────────────────────────────────────

  describe('autoForge()', () => {
    it('home has 12 entries (TH7–18)', () => {
      expect(forge.autoForge().home).toHaveLength(12);
    });

    it('builder has 3 entries (BH8–10)', () => {
      expect(forge.autoForge().builder).toHaveLength(3);
    });

    it('home TH7 has Gold Pass discount', () => {
      const e = forge.autoForge().home[0];
      expect(e.townHallLevel).toBe(7);
      expect(e.goldElixirCost).toBe(3000000);
      expect(e.goldElixirCostGoldPass).toBe(1500000);
      expect(e.capitalGoldObtained).toBe(1000);
    });

    it('home TH13 has Dark Elixir cost and Gold Pass discount', () => {
      const e = forge.autoForge().home.find((x) => x.townHallLevel === 13)!;
      expect(e.darkElixirCost).toBe(60000);
      expect(e.darkElixirCostGoldPass).toBe(30000);
      expect(e.capitalGoldObtained).toBe(2000);
    });

    it('builder BH8 has Gold Pass discount', () => {
      const e = forge.autoForge().builder[0];
      expect(e.builderHallLevel).toBe(8);
      expect(e.builderGoldElixirCost).toBe(1800000);
      expect(e.builderGoldElixirCostGoldPass).toBe(900000);
      expect(e.capitalGoldObtained).toBe(1200);
    });
  });

  describe('autoForgeAtTownHall()', () => {
    it('returns correct entry for TH10', () => {
      const e = forge.autoForgeAtTownHall(10);
      expect(e?.goldElixirCost).toBe(3600000);
      expect(e?.goldElixirCostGoldPass).toBe(1800000);
      expect(e?.capitalGoldObtained).toBe(1200);
    });

    it('returns undefined for TH6 (not eligible)', () => {
      expect(forge.autoForgeAtTownHall(6)).toBeUndefined();
    });
  });

  describe('autoForgeAtBuilderHall()', () => {
    it('returns correct entry for BH9', () => {
      const e = forge.autoForgeAtBuilderHall(9);
      expect(e?.builderGoldElixirCost).toBe(2400000);
      expect(e?.capitalGoldObtained).toBe(1600);
    });
  });

  // ── Forge ──────────────────────────────────────────────────────────────────

  describe('forgeRates()', () => {
    it('home has 12 entries (TH7–18)', () => {
      expect(forge.forgeRates().home).toHaveLength(12);
    });

    it('builder has 3 entries (BH8–10)', () => {
      expect(forge.forgeRates().builder).toHaveLength(3);
    });

    it('home TH7 has no Gold Pass discount (full cost only)', () => {
      const e = forge.forgeRates().home[0];
      expect(e.townHallLevel).toBe(7);
      expect(e.goldElixirCost).toBe(3000000);
      expect(e.goldElixirCostGoldPass).toBeUndefined();
      expect(e.capitalGoldObtained).toBe(1000);
    });

    it('home TH13 has Dark Elixir cost (no Gold Pass discount)', () => {
      const e = forge.forgeRates().home.find((x) => x.townHallLevel === 13)!;
      expect(e.darkElixirCost).toBe(60000);
      expect(e.darkElixirCostGoldPass).toBeUndefined();
    });

    it('builder BH8 has no Gold Pass discount', () => {
      const e = forge.forgeRates().builder[0];
      expect(e.builderHallLevel).toBe(8);
      expect(e.builderGoldElixirCost).toBe(1800000);
      expect(e.builderGoldElixirCostGoldPass).toBeUndefined();
    });
  });

  describe('forgeAtTownHall()', () => {
    it('returns correct entry for TH12', () => {
      const e = forge.forgeAtTownHall(12);
      expect(e?.goldElixirCost).toBe(4800000);
      expect(e?.capitalGoldObtained).toBe(1600);
    });
  });

  describe('forgeAtBuilderHall()', () => {
    it('returns correct entry for BH10', () => {
      const e = forge.forgeAtBuilderHall(10);
      expect(e?.builderGoldElixirCost).toBe(2400000);
      expect(e?.capitalGoldObtained).toBe(1600);
    });
  });
});
