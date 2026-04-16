import { clanCapital } from '@/modules/clan-capital';
import { ClanCapitalTroop } from '@/types';

describe('hogRaiders() [Clan Capital]', () => {
  const t = clanCapital().troops().hogRaiders().first()! as ClanCapitalTroop;

  it('has correct identity', () => {
    expect(t.id).toBe('hog-raiders');
    expect(t.name).toBe('Hog Raiders');
    expect(t.base).toBe('clan_capital');
    expect(t.category).toBe('troop');
  });

  it('unitName is Hog Glider', () => {
    expect(t.unitName).toBe('Hog Glider');
  });

  it('has correct primary unit (Hog Glider) root stats', () => {
    expect(t.damageType).toBe('single');
    expect(t.targetType).toBe('ground');
    expect(t.housingSpace).toBe(5);
    expect(t.movementSpeed).toBe(18);
    expect(t.range).toBe(0.25);
    expect(t.preferredTarget).toBe('Defenses');
    expect(t.specialAbility).toBe('Stunning Glide');
  });

  it('has 5 levels', () => {
    expect(t.levels).toHaveLength(5);
  });

  it('level 1 (Hog Glider) has correct stats', () => {
    const l1 = t.levels[0];
    expect(l1.level).toBe(1);
    expect(l1.hitpoints).toBe(650);
    expect(l1.districtHallRequired).toBe(1);
    expect(l1.stats.normal.damagePerShot).toBe(120);
  });

  it('level 5 (Hog Glider) has correct stats', () => {
    const l5 = t.levels[4];
    expect(l5.level).toBe(5);
    expect(l5.hitpoints).toBe(850);
    expect(l5.districtHallRequired).toBe(5);
    expect(l5.stats.normal.damagePerShot).toBe(160);
  });

  it('has one subUnit', () => {
    expect(t.subUnits).toHaveLength(1);
  });

  it('subUnit is Hog Rider with correct stats', () => {
    const rider = t.subUnits![0];
    expect(rider.name).toBe('Hog Rider');
    expect(rider.damageType).toBe('single');
    expect(rider.targetType).toBe('ground');
    expect(rider.movementSpeed).toBe(20);
    expect(rider.attackSpeed).toBe(1.0);
    expect(rider.range).toBe(0.75);
    expect(rider.preferredTarget).toBe('Defenses');
  });

  it('subUnit Hog Rider has 5 levels', () => {
    expect(t.subUnits![0].levels).toHaveLength(5);
  });

  it('subUnit Hog Rider level 1 has correct stats', () => {
    const l1 = t.subUnits![0].levels[0];
    expect(l1.level).toBe(1);
    expect(l1.hitpoints).toBe(880);
    expect(l1.stats.normal.dps).toBe(130);
    expect(l1.stats.normal.damagePerShot).toBe(130);
  });

  it('subUnit Hog Rider level 5 has correct stats', () => {
    const l5 = t.subUnits![0].levels[4];
    expect(l5.level).toBe(5);
    expect(l5.hitpoints).toBe(1200);
    expect(l5.stats.normal.dps).toBe(190);
  });

  it('has valid icon image path', () => {
    expect(t.images.icon).toBe('images/clan-capital/troops/hog-raiders/icon.png');
  });
});
