import * as path from 'path';
import { parseProfile } from '../../src/parser';
import type { RawProfile } from '../../src/parser';
import { buildLookup } from '../../src/parser/lookup';
import mockProfile from './mock-profile.json';

const DATA_DIR = path.resolve(__dirname, '../../data');

// Shared lookup built once for the suite
let lookup: Map<number, string>;

beforeAll(() => {
  lookup = buildLookup(DATA_DIR);
});

// ---------------------------------------------------------------------------
// buildLookup
// ---------------------------------------------------------------------------

describe('buildLookup', () => {
  it('returns a non-empty map', () => {
    expect(lookup.size).toBeGreaterThan(0);
  });

  it('resolves known building IDs', () => {
    expect(lookup.get(1000001)).toBe('Town Hall');
    expect(lookup.get(1000008)).toBe('Cannon');
    expect(lookup.get(1000010)).toBe('Wall');
    expect(lookup.get(1000014)).toBe('Clan Castle');
  });

  it('resolves known troop IDs', () => {
    expect(lookup.get(4000000)).toBe('Barbarian');
    expect(lookup.get(4000001)).toBe('Archer');
    expect(lookup.get(4000023)).toBe('Baby Dragon');
  });

  it('resolves known spell IDs', () => {
    expect(lookup.get(26000000)).toBe('Lightning Spell');
    expect(lookup.get(26000002)).toBe('Rage Spell');
  });

  it('resolves known hero IDs', () => {
    expect(lookup.get(28000000)).toBe('Barbarian King');
    expect(lookup.get(28000001)).toBe('Archer Queen');
  });

  it('resolves known pet IDs', () => {
    expect(lookup.get(73000000)).toBe('L.A.S.S.I');
  });

  it('resolves known hero equipment IDs', () => {
    expect(lookup.get(90000000)).toBe('Barbarian Puppet');
  });

  it('resolves known guardian IDs', () => {
    expect(lookup.get(107000000)).toBe('Longshot');
    expect(lookup.get(107000001)).toBe('Smasher');
  });

  it('resolves crafted defense type IDs', () => {
    expect(lookup.get(103000008)).toBe('Roaster');
    expect(lookup.get(103000009)).toBe('Air Bombs');
    expect(lookup.get(103000010)).toBe('Lava Launcher');
  });

  it('resolves crafted defense module IDs', () => {
    // Roaster modules
    expect(lookup.get(102000024)).toBe('Hitpoints');
    expect(lookup.get(102000025)).toBe('Damage');
    expect(lookup.get(102000026)).toBe('Burst Fire');
    // Air Bombs modules
    expect(lookup.get(102000027)).toBe('Hitpoints');
    expect(lookup.get(102000028)).toBe('Damage');
    expect(lookup.get(102000029)).toBe('Attack Cooldown');
  });

  it('resolves builder base building IDs', () => {
    expect(lookup.get(1000034)).toBe('Builder Hall');
    expect(lookup.get(1000041)).toBe('Double Cannon');
  });

  it('returns undefined for unknown IDs', () => {
    expect(lookup.get(9999999)).toBeUndefined();
  });
});

// ---------------------------------------------------------------------------
// parseProfile — top-level fields
// ---------------------------------------------------------------------------

describe('parseProfile — top-level', () => {
  let result: ReturnType<typeof parseProfile>;

  beforeAll(() => {
    result = parseProfile(mockProfile as RawProfile, lookup);
  });

  it('preserves the tag', () => {
    expect(result.tag).toBe('#MOCKTEST');
  });

  it('preserves the timestamp', () => {
    expect(result.timestamp).toBe(1700000000);
  });

  it('returns home and builder arrays', () => {
    expect(Array.isArray(result.home)).toBe(true);
    expect(Array.isArray(result.builder)).toBe(true);
  });

  it('home has non-empty sections', () => {
    expect(result.home.length).toBeGreaterThan(0);
  });

  it('builder has non-empty sections', () => {
    expect(result.builder.length).toBeGreaterThan(0);
  });
});

// ---------------------------------------------------------------------------
// parseProfile — home buildings section
// ---------------------------------------------------------------------------

describe('parseProfile — home buildings', () => {
  let result: ReturnType<typeof parseProfile>;

  beforeAll(() => {
    result = parseProfile(mockProfile as RawProfile, lookup);
  });

  function findHomeSection(label: string) {
    return result.home.find((s) => s.label === label);
  }

  it('includes a Buildings section', () => {
    expect(findHomeSection('Buildings')).toBeDefined();
  });

  it('resolves Town Hall name', () => {
    const section = findHomeSection('Buildings')!;
    const th = section.entries.find((e) => e.dataId === 1000001);
    expect(th).toBeDefined();
    expect(th!.name).toBe('Town Hall');
  });

  it('Town Hall has level 16', () => {
    const section = findHomeSection('Buildings')!;
    const th = section.entries.find((e) => e.dataId === 1000001);
    expect(th!.levels[0].level).toBe(16);
  });

  it('sets upgrading flag when timer present', () => {
    const section = findHomeSection('Buildings')!;
    const cc = section.entries.find((e) => e.dataId === 1000014);
    expect(cc!.upgrading).toBe(true);
  });

  it('upgrading is false when no timer', () => {
    const section = findHomeSection('Buildings')!;
    const th = section.entries.find((e) => e.dataId === 1000001);
    expect(th!.upgrading).toBe(false);
  });

  it('sets gearUp when gear_up present', () => {
    const section = findHomeSection('Buildings')!;
    const mortar = section.entries.find((e) => e.dataId === 1000013);
    expect(mortar!.gearUp).toBe(1);
  });

  it('merges entries with same dataId into one entry with multiple levels', () => {
    const section = findHomeSection('Buildings')!;
    const wall = section.entries.find((e) => e.dataId === 1000010);
    expect(wall).toBeDefined();
    expect(wall!.levels).toHaveLength(2);
  });

  it('Wall entry has lv14 ×50 and lv15 ×200', () => {
    const section = findHomeSection('Buildings')!;
    const wall = section.entries.find((e) => e.dataId === 1000010)!;
    const lv14 = wall.levels.find((l) => l.level === 14);
    const lv15 = wall.levels.find((l) => l.level === 15);
    expect(lv14?.count).toBe(50);
    expect(lv15?.count).toBe(200);
  });

  it('unknown dataId falls back to [dataId] name', () => {
    const section = findHomeSection('Buildings')!;
    const unknown = section.entries.find((e) => e.dataId === 9999999);
    expect(unknown!.name).toBe('[9999999]');
  });
});

// ---------------------------------------------------------------------------
// parseProfile — crafting station
// ---------------------------------------------------------------------------

describe('parseProfile — crafting station', () => {
  let result: ReturnType<typeof parseProfile>;

  beforeAll(() => {
    result = parseProfile(mockProfile as RawProfile, lookup);
  });

  function findHomeSection(label: string) {
    return result.home.find((s) => s.label === label);
  }

  it('includes a Crafting Station section', () => {
    expect(findHomeSection('Crafting Station')).toBeDefined();
  });

  it('crafting station entry has craftedTypes', () => {
    const section = findHomeSection('Crafting Station')!;
    const entry = section.entries[0];
    expect(entry.craftedTypes).toBeDefined();
    expect(entry.craftedTypes!.length).toBe(2);
  });

  it('Roaster type is resolved correctly', () => {
    const section = findHomeSection('Crafting Station')!;
    const roaster = section.entries[0].craftedTypes!.find((t) => t.dataId === 103000008);
    expect(roaster).toBeDefined();
    expect(roaster!.name).toBe('Roaster');
  });

  it('Roaster has 3 modules with correct names', () => {
    const section = findHomeSection('Crafting Station')!;
    const roaster = section.entries[0].craftedTypes!.find((t) => t.dataId === 103000008)!;
    expect(roaster.modules).toHaveLength(3);
    expect(roaster.modules[0].name).toBe('Hitpoints');
    expect(roaster.modules[1].name).toBe('Damage');
    expect(roaster.modules[2].name).toBe('Burst Fire');
  });

  it('Roaster module levels are correct', () => {
    const section = findHomeSection('Crafting Station')!;
    const roaster = section.entries[0].craftedTypes!.find((t) => t.dataId === 103000008)!;
    expect(roaster.modules[0].level).toBe(2);
    expect(roaster.modules[1].level).toBe(2);
    expect(roaster.modules[2].level).toBe(1);
  });

  it('Air Bombs type is resolved correctly', () => {
    const section = findHomeSection('Crafting Station')!;
    const airBombs = section.entries[0].craftedTypes!.find((t) => t.dataId === 103000009);
    expect(airBombs).toBeDefined();
    expect(airBombs!.name).toBe('Air Bombs');
  });

  it('Air Bombs modules have correct IDs', () => {
    const section = findHomeSection('Crafting Station')!;
    const airBombs = section.entries[0].craftedTypes!.find((t) => t.dataId === 103000009)!;
    expect(airBombs.modules.map((m) => m.dataId)).toEqual([102000027, 102000028, 102000029]);
  });
});

// ---------------------------------------------------------------------------
// parseProfile — other home sections
// ---------------------------------------------------------------------------

describe('parseProfile — home traps', () => {
  let result: ReturnType<typeof parseProfile>;

  beforeAll(() => {
    result = parseProfile(mockProfile as RawProfile, lookup);
  });

  it('includes a Traps section', () => {
    expect(result.home.find((s) => s.label === 'Traps')).toBeDefined();
  });

  it('resolves Bomb name', () => {
    const section = result.home.find((s) => s.label === 'Traps')!;
    const bomb = section.entries.find((e) => e.dataId === 12000000);
    expect(bomb!.name).toBe('Bomb');
    expect(bomb!.levels[0].level).toBe(11);
    expect(bomb!.levels[0].count).toBe(6);
  });

  it('Tornado Trap is upgrading', () => {
    const section = result.home.find((s) => s.label === 'Traps')!;
    const tornado = section.entries.find((e) => e.dataId === 12000016);
    expect(tornado!.upgrading).toBe(true);
  });
});

describe('parseProfile — home troops', () => {
  let result: ReturnType<typeof parseProfile>;

  beforeAll(() => {
    result = parseProfile(mockProfile as RawProfile, lookup);
  });

  it('includes a Troops section', () => {
    expect(result.home.find((s) => s.label === 'Troops')).toBeDefined();
  });

  it('resolves Barbarian', () => {
    const section = result.home.find((s) => s.label === 'Troops')!;
    const barb = section.entries.find((e) => e.dataId === 4000000);
    expect(barb!.name).toBe('Barbarian');
    expect(barb!.levels[0].level).toBe(10);
  });

  it('Baby Dragon is upgrading', () => {
    const section = result.home.find((s) => s.label === 'Troops')!;
    const bd = section.entries.find((e) => e.dataId === 4000023);
    expect(bd!.upgrading).toBe(true);
  });
});

describe('parseProfile — siege machines', () => {
  let result: ReturnType<typeof parseProfile>;

  beforeAll(() => {
    result = parseProfile(mockProfile as RawProfile, lookup);
  });

  it('includes a Siege Machines section', () => {
    expect(result.home.find((s) => s.label === 'Siege Machines')).toBeDefined();
  });

  it('resolves Wall Wrecker', () => {
    const section = result.home.find((s) => s.label === 'Siege Machines')!;
    const ww = section.entries.find((e) => e.dataId === 4000051);
    expect(ww!.name).toBe('Wall Wrecker');
    expect(ww!.levels[0].level).toBe(4);
  });
});

describe('parseProfile — home heroes', () => {
  let result: ReturnType<typeof parseProfile>;

  beforeAll(() => {
    result = parseProfile(mockProfile as RawProfile, lookup);
  });

  it('includes a Heroes section', () => {
    expect(result.home.find((s) => s.label === 'Heroes')).toBeDefined();
  });

  it('Archer Queen is upgrading', () => {
    const section = result.home.find((s) => s.label === 'Heroes')!;
    const aq = section.entries.find((e) => e.dataId === 28000001);
    expect(aq!.upgrading).toBe(true);
  });

  it('Barbarian King is not upgrading', () => {
    const section = result.home.find((s) => s.label === 'Heroes')!;
    const bk = section.entries.find((e) => e.dataId === 28000000);
    expect(bk!.upgrading).toBe(false);
  });
});

describe('parseProfile — guardians', () => {
  let result: ReturnType<typeof parseProfile>;

  beforeAll(() => {
    result = parseProfile(mockProfile as RawProfile, lookup);
  });

  it('includes a Guardians section', () => {
    expect(result.home.find((s) => s.label === 'Guardians')).toBeDefined();
  });

  it('has both guardians', () => {
    const section = result.home.find((s) => s.label === 'Guardians')!;
    expect(section.entries).toHaveLength(2);
    expect(section.entries.find((e) => e.dataId === 107000000)!.name).toBe('Longshot');
    expect(section.entries.find((e) => e.dataId === 107000001)!.name).toBe('Smasher');
  });
});

describe('parseProfile — helpers', () => {
  let result: ReturnType<typeof parseProfile>;

  beforeAll(() => {
    result = parseProfile(mockProfile as RawProfile, lookup);
  });

  it('includes a Helpers section', () => {
    expect(result.home.find((s) => s.label === 'Helpers')).toBeDefined();
  });

  it('resolves all three helpers', () => {
    const section = result.home.find((s) => s.label === 'Helpers')!;
    expect(section.entries).toHaveLength(3);
    expect(section.entries.find((e) => e.dataId === 93000000)!.name).toBe("Builder's Apprentice");
    expect(section.entries.find((e) => e.dataId === 93000001)!.name).toBe('Lab Assistant');
    expect(section.entries.find((e) => e.dataId === 93000002)!.name).toBe('Prospector');
  });
});

// ---------------------------------------------------------------------------
// parseProfile — builder base
// ---------------------------------------------------------------------------

describe('parseProfile — builder buildings', () => {
  let result: ReturnType<typeof parseProfile>;

  beforeAll(() => {
    result = parseProfile(mockProfile as RawProfile, lookup);
  });

  it('includes a builder Buildings section', () => {
    expect(result.builder.find((s) => s.label === 'Buildings')).toBeDefined();
  });

  it('resolves Builder Hall', () => {
    const section = result.builder.find((s) => s.label === 'Buildings')!;
    const bh = section.entries.find((e) => e.dataId === 1000034);
    expect(bh!.name).toBe('Builder Hall');
    expect(bh!.levels[0].level).toBe(9);
  });

  it('resolves Double Cannon', () => {
    const section = result.builder.find((s) => s.label === 'Buildings')!;
    const dc = section.entries.find((e) => e.dataId === 1000041);
    expect(dc!.name).toBe('Double Cannon');
    expect(dc!.levels[0].count).toBe(2);
  });
});

describe('parseProfile — builder traps', () => {
  let result: ReturnType<typeof parseProfile>;

  beforeAll(() => {
    result = parseProfile(mockProfile as RawProfile, lookup);
  });

  it('includes a builder Traps section', () => {
    expect(result.builder.find((s) => s.label === 'Traps')).toBeDefined();
  });

  it('Push Trap has count 5', () => {
    const section = result.builder.find((s) => s.label === 'Traps')!;
    const pt = section.entries.find((e) => e.dataId === 12000010);
    expect(pt!.name).toBe('Push Trap');
    expect(pt!.levels[0].count).toBe(5);
  });
});

describe('parseProfile — builder troops', () => {
  let result: ReturnType<typeof parseProfile>;

  beforeAll(() => {
    result = parseProfile(mockProfile as RawProfile, lookup);
  });

  it('includes a builder Troops section', () => {
    expect(result.builder.find((s) => s.label === 'Troops')).toBeDefined();
  });

  it('resolves Raged Barbarian', () => {
    const section = result.builder.find((s) => s.label === 'Troops')!;
    const rb = section.entries.find((e) => e.dataId === 4000031);
    expect(rb!.name).toBe('Raged Barbarian');
    expect(rb!.levels[0].level).toBe(18);
  });
});

describe('parseProfile — builder heroes', () => {
  let result: ReturnType<typeof parseProfile>;

  beforeAll(() => {
    result = parseProfile(mockProfile as RawProfile, lookup);
  });

  it('includes a builder Heroes section', () => {
    expect(result.builder.find((s) => s.label === 'Heroes')).toBeDefined();
  });

  it('resolves Battle Machine', () => {
    const section = result.builder.find((s) => s.label === 'Heroes')!;
    const bm = section.entries.find((e) => e.dataId === 28000003);
    expect(bm!.name).toBe('Battle Machine');
    expect(bm!.levels[0].level).toBe(30);
  });
});

// ---------------------------------------------------------------------------
// parseProfile — edge cases
// ---------------------------------------------------------------------------

describe('parseProfile — edge cases', () => {
  it('handles an empty profile gracefully', () => {
    const empty = { tag: '#EMPTY', timestamp: 0 };
    const result = parseProfile(empty as RawProfile, lookup);
    expect(result.tag).toBe('#EMPTY');
    expect(result.home).toHaveLength(0);
    expect(result.builder).toHaveLength(0);
  });

  it('omits sections that have no entries', () => {
    const partial = {
      tag: '#PARTIAL',
      timestamp: 0,
      units: [{ data: 4000000, lvl: 5 }],
    };
    const result = parseProfile(partial as RawProfile, lookup);
    const labels = result.home.map((s) => s.label);
    expect(labels).toContain('Troops');
    expect(labels).not.toContain('Heroes');
    expect(labels).not.toContain('Spells');
  });

  it('unknown IDs produce [dataId] as name', () => {
    const withUnknown = {
      tag: '#UNKNOWN',
      timestamp: 0,
      units: [{ data: 8888888, lvl: 1 }],
    };
    const result = parseProfile(withUnknown as RawProfile, lookup);
    const troop = result.home.find((s) => s.label === 'Troops')!.entries[0];
    expect(troop.name).toBe('[8888888]');
    expect(troop.dataId).toBe(8888888);
  });
});
