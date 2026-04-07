import * as fs from 'fs';
import * as path from 'path';
import { home } from '../../../src';

const ROOT = path.resolve(__dirname, '../../..');

const lines: string[] = [];
const log = (...args: unknown[]) => {
  const line = args
    .map((a) => (typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)))
    .join(' ');
  lines.push(line);
  console.log(line);
};

function checkImage(label: string, imagePath: string): boolean {
  if (fs.existsSync(path.join(ROOT, imagePath))) return true;
  console.error(`  MISSING image for ${label}: ${imagePath}`);
  return false;
}

const th = home().townHall().first()!;

log('=== townHall() ===');
log(`id:          ${th.id}`);
log(`name:        ${th.name}`);
log(`base:        ${th.base}`);
log(`category:    ${th.category}`);
log(`size:        ${th.size}`);
log(`levels:      ${th.levels.length}`);
log('');

log('--- Town Hall Levels ---');
log(
  'TH   HP       Build Cost     Build Time    XP      Max Buildings  Max Traps  Gold Storage  Dark Elixir  Weapon',
);
th.levels.forEach((l) => {
  const bt =
    [
      l.buildTime.days ? `${l.buildTime.days}d` : '',
      l.buildTime.hours ? `${l.buildTime.hours}h` : '',
      l.buildTime.minutes ? `${l.buildTime.minutes}m` : '',
      l.buildTime.seconds ? `${l.buildTime.seconds}s` : '',
    ]
      .filter(Boolean)
      .join(' ')
      .padStart(10) || '   instant';
  const cost = l.buildCost.toLocaleString().padStart(13);
  const weaponInfo = l.weapon ? l.weapon.name : 'none';
  log(
    `  ${String(l.level).padStart(2)}  ${String(l.hitpoints).padStart(6)} ${cost}  ${bt}  ${String(l.xpGained).padStart(6)}  ${String(l.maxBuildings).padStart(5)}           ${String(l.maxTraps).padStart(3)}  ${l.storageCapacity.gold.toLocaleString().padStart(11)}  ${String(l.storageCapacity.darkElixir).padStart(8)}  ${weaponInfo}`,
  );
});
log('');

log('--- Weapon Details ---');
th.levels.forEach((l) => {
  if (!l.weapon) return;
  const w = l.weapon;
  log(`TH${l.level} — ${w.name}`);
  log(
    `  HP: ${w.hitpoints}, Range: ${w.range}, Targets: ${w.targets}, Attack Speed: ${w.attackSpeed}s`,
  );
  if (w.deathDamage !== undefined) {
    log(`  Death Damage: ${w.deathDamage} (radius: ${w.deathDamageRadius} tiles)`);
  }
  if (w.deathPoisonMaxDps !== undefined) {
    log(
      `  Death Poison: ${w.deathPoisonMaxDps} max DPS, ${w.deathPoisonDuration}s duration, ${w.deathSpeedDecrease}% speed / ${w.deathAttackRateDecrease}% attack rate decrease`,
    );
  }
  if (w.flameMaxDps !== undefined) {
    log(`  Flame: ${w.flameMaxDps} max DPS, ${w.flameDuration}s duration`);
  }
  log(`  Weapon Levels: ${w.levels.length}`);
  w.levels.forEach((wl) => {
    const bt =
      [
        wl.buildTime.days ? `${wl.buildTime.days}d` : '',
        wl.buildTime.hours ? `${wl.buildTime.hours}h` : '',
      ]
        .filter(Boolean)
        .join(' ') || 'instant';
    log(
      `    L${wl.level}: DPS=${wl.dps}, DPH=${wl.damagePerHit}, Cost=${wl.buildCost.toLocaleString()}, Time=${bt}, XP=${wl.xpGained}`,
    );
  });
  log('');
});

log('--- Image Validation ---');
let passed = 0;
let failed = 0;
th.levels.forEach((l) => {
  if (checkImage(`TH level ${l.level}`, l.images.normal)) passed++;
  else failed++;
  if (l.weapon) {
    l.weapon.levels.forEach((wl) => {
      if (checkImage(`TH${l.level} weapon L${wl.level}`, wl.images.normal)) passed++;
      else failed++;
      if (wl.images.townHall) {
        if (checkImage(`TH${l.level} appearance L${wl.level}`, wl.images.townHall)) passed++;
        else failed++;
      }
    });
  }
});
log(`Images: ${passed} OK, ${failed} missing`);

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
