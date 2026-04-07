import { townHall } from '@/modules/home/town-hall';

describe('townHall()', () => {
  it('returns a TownHall object', () => {
    const result = townHall();
    expect(result).toBeDefined();
    expect(result.id).toBe('town-hall');
    expect(result.name).toBe('Town Hall');
  });

  it('base is home, category is town-hall', () => {
    expect(townHall().base).toBe('home');
    expect(townHall().category).toBe('town-hall');
  });

  it('size is 4x4', () => {
    expect(townHall().size).toBe('4x4');
  });

  it('has 18 levels', () => {
    expect(townHall().levels).toHaveLength(18);
  });

  it('level 1 stats', () => {
    const l1 = townHall().levels[0];
    expect(l1.level).toBe(1);
    expect(l1.hitpoints).toBe(400);
    expect(l1.buildCost).toBe(0);
    expect(l1.buildCostResource).toBe('Gold');
    expect(l1.buildTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(l1.xpGained).toBe(0);
    expect(l1.maxBuildings).toBe(13);
    expect(l1.maxTraps).toBe(0);
    expect(l1.storageCapacity).toEqual({ gold: 1000, elixir: 1000, darkElixir: 0 });
    expect(l1.weapon).toBeNull();
  });

  it('level 18 stats', () => {
    const l18 = townHall().levels[17];
    expect(l18.level).toBe(18);
    expect(l18.hitpoints).toBe(10800);
    expect(l18.buildCost).toBe(25000000);
    expect(l18.buildTime).toEqual({ days: 14, hours: 0, minutes: 0, seconds: 0 });
    expect(l18.xpGained).toBe(1099);
    expect(l18.maxBuildings).toBe(94);
    expect(l18.maxTraps).toBe(47);
    expect(l18.storageCapacity).toEqual({ gold: 5000000, elixir: 5000000, darkElixir: 50000 });
    expect(l18.weapon).toBeNull();
  });

  it('levels 1-11 and 18 have no weapon', () => {
    const levels = townHall().levels;
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 17].forEach((i) => {
      expect(levels[i].weapon).toBeNull();
    });
  });

  it('levels 12-17 have weapons', () => {
    const levels = townHall().levels;
    [11, 12, 13, 14, 15, 16].forEach((i) => {
      expect(levels[i].weapon).not.toBeNull();
    });
  });

  describe('TH12 Giga Tesla', () => {
    it('has correct weapon stats', () => {
      const w = townHall().levels[11].weapon!;
      expect(w.name).toBe('Giga Tesla');
      expect(w.hitpoints).toBe(7500);
      expect(w.targets).toBe(4);
      expect(w.range).toBe(10);
      expect(w.attackSpeed).toBe(0.5);
      expect(w.targetType).toBe('both');
      expect(w.deathDamage).toBe(500);
      expect(w.deathDamageRadius).toBe(4);
    });

    it('has 1 weapon level with correct stats', () => {
      const w = townHall().levels[11].weapon!;
      expect(w.levels).toHaveLength(1);
      expect(w.levels[0].level).toBe(1);
      expect(w.levels[0].dps).toBe(140);
      expect(w.levels[0].damagePerHit).toBe(70);
      expect(w.levels[0].buildCost).toBe(0);
      expect(w.levels[0].buildTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      expect(w.levels[0].xpGained).toBe(0);
    });
  });

  describe('TH17 Inferno Artillery', () => {
    it('has correct weapon stats', () => {
      const w = townHall().levels[16].weapon!;
      expect(w.name).toBe('Inferno Artillery');
      expect(w.hitpoints).toBe(10400);
      expect(w.targets).toBe(4);
      expect(w.range).toBe(12);
      expect(w.attackSpeed).toBe(3.5);
      expect(w.targetType).toBe('both');
      expect(w.flameMaxDps).toBe(75);
      expect(w.flameDuration).toBe(6.8);
    });

    it('has 5 weapon levels', () => {
      expect(townHall().levels[16].weapon!.levels).toHaveLength(5);
    });

    it('IA level 1 is free and instant', () => {
      const l1 = townHall().levels[16].weapon!.levels[0];
      expect(l1.level).toBe(1);
      expect(l1.dps).toBe(40);
      expect(l1.damagePerHit).toBe(140);
      expect(l1.buildCost).toBe(0);
      expect(l1.buildTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      expect(l1.xpGained).toBe(0);
    });

    it('IA level 5 stats', () => {
      const l5 = townHall().levels[16].weapon!.levels[4];
      expect(l5.level).toBe(5);
      expect(l5.dps).toBe(60);
      expect(l5.damagePerHit).toBe(210);
      expect(l5.buildCost).toBe(18000000);
      expect(l5.buildTime).toEqual({ days: 10, hours: 0, minutes: 0, seconds: 0 });
      expect(l5.xpGained).toBe(929);
    });

    it('IA weapon levels have townHall images', () => {
      townHall().levels[16].weapon!.levels.forEach((l, i) => {
        expect(l.images.townHall).toBe(`images/home/town-hall/normal/level-17-${i + 1}.png`);
      });
    });
  });

  describe('TH14 Giga Inferno', () => {
    it('has poison death effect', () => {
      const w = townHall().levels[13].weapon!;
      expect(w.deathPoisonMaxDps).toBe(180);
      expect(w.deathPoisonDuration).toBe(12);
      expect(w.deathDamage).toBe(900);
      expect(w.deathDamageRadius).toBe(4);
    });
  });

  it('all levels use Gold as build resource', () => {
    townHall().levels.forEach((l) => expect(l.buildCostResource).toBe('Gold'));
  });

  it('each level has a normal image', () => {
    townHall().levels.forEach((l) => {
      expect(l.images.normal).toBe(`images/home/town-hall/normal/level-${l.level}.png`);
    });
  });

  it('dark elixir storage is 0 for TH1-6', () => {
    townHall()
      .levels.slice(0, 6)
      .forEach((l) => {
        expect(l.storageCapacity.darkElixir).toBe(0);
      });
  });

  it('TH7+ has dark elixir storage', () => {
    townHall()
      .levels.slice(6)
      .forEach((l) => {
        expect(l.storageCapacity.darkElixir).toBeGreaterThan(0);
      });
  });
});
