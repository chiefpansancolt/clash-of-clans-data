import { seasonPass } from '@/season-pass';

describe('seasonPass().challenges()', () => {
  const challenges = seasonPass().challenges();

  it('count() returns 8', () => {
    expect(challenges.count()).toBe(8);
  });

  it('get() returns all 8 challenges', () => {
    expect(challenges.get()).toHaveLength(8);
  });

  it('find() locates by id', () => {
    expect(challenges.find('win-battle')?.name).toBe('Win a battle');
  });

  it('findByName() locates by name case-insensitively', () => {
    expect(challenges.findByName('donate reinforcements')?.id).toBe('donate-reinforcements');
  });

  it('all challenges have a non-empty name', () => {
    for (const c of challenges.get()) {
      expect(c.name.length).toBeGreaterThan(0);
    }
  });

  it('all challenges have a valid image path', () => {
    for (const c of challenges.get()) {
      expect(c.image).toMatch(/^images\/season-pass\/challenges\/.+\.png$/);
    }
  });

  it('all challenges have a notes array', () => {
    for (const c of challenges.get()) {
      expect(Array.isArray(c.notes)).toBe(true);
    }
  });
});

// ── Individual challenge accessors ────────────────────────────────────────────

describe('challenges().buildingUpgrade()', () => {
  const item = seasonPass().challenges().buildingUpgrade().first()!;

  it('has correct identity', () => {
    expect(item.id).toBe('building-upgrade');
    expect(item.name).toBe('Start any building upgrade');
  });

  it('has 4 notes', () => {
    expect(item.notes).toHaveLength(4);
  });
});

describe('challenges().troopUpgrade()', () => {
  const item = seasonPass().challenges().troopUpgrade().first()!;
  it('has correct identity', () => {
    expect(item.id).toBe('troop-upgrade');
  });
});

describe('challenges().heroPetUpgrade()', () => {
  const item = seasonPass().challenges().heroPetUpgrade().first()!;
  it('has correct identity and 2 notes', () => {
    expect(item.id).toBe('hero-pet-upgrade');
    expect(item.notes).toHaveLength(2);
  });
});

describe('challenges().donateReinforcements()', () => {
  const item = seasonPass().challenges().donateReinforcements().first()!;
  it('has correct identity', () => {
    expect(item.id).toBe('donate-reinforcements');
  });
});

describe('challenges().starBonus()', () => {
  const item = seasonPass().challenges().starBonus().first()!;
  it('has correct identity', () => {
    expect(item.id).toBe('star-bonus');
  });
});

describe('challenges().winBattle()', () => {
  const item = seasonPass().challenges().winBattle().first()!;
  it('has correct identity and 2 notes', () => {
    expect(item.id).toBe('win-battle');
    expect(item.notes).toHaveLength(2);
  });
});

describe('challenges().destroyTownHall()', () => {
  const item = seasonPass().challenges().destroyTownHall().first()!;
  it('has correct identity', () => {
    expect(item.id).toBe('destroy-town-hall');
  });
});

describe('challenges().requestReinforcements()', () => {
  const item = seasonPass().challenges().requestReinforcements().first()!;
  it('has correct identity and empty notes', () => {
    expect(item.id).toBe('request-reinforcements');
    expect(item.notes).toHaveLength(0);
  });
});
