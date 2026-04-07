import * as fs from 'fs';
import * as path from 'path';
import { home } from '../../../src';

const lines: string[] = [];
const log = (...args: unknown[]) => {
  const line = args
    .map((a) => (typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)))
    .join(' ');
  lines.push(line);
  console.log(line);
};

const ab = home().armyBuildings();

log('=== home().armyBuildings() ===');
log('');

// --- Army Camp ---
const armyCamp = ab.armyCamp().first()!;
log(`--- ${armyCamp.name} ---`);
log(`id: ${armyCamp.id} | size: ${armyCamp.size} | levels: ${armyCamp.levels.length}`);
log('Level  HP     Housing Space  Build Cost         Build Time    XP    TH');
for (const l of armyCamp.levels) {
  const bt = [
    l.buildTime.days ? `${l.buildTime.days}d` : '',
    l.buildTime.hours ? `${l.buildTime.hours}h` : '',
    l.buildTime.minutes ? `${l.buildTime.minutes}m` : '',
  ]
    .filter(Boolean)
    .join(' ')
    .padStart(10);
  log(
    `  ${String(l.level).padStart(2)}  ${String(l.hitpoints).padStart(5)}  ${String(l.housingSpace).padStart(13)}  ${String(l.buildCost).padStart(16)}  ${bt}  ${String(l.xpGained).padStart(4)}  ${l.townHallRequired}`,
  );
}
log('');

// --- Barracks ---
const barracks = ab.barracks().first()!;
log(`--- ${barracks.name} ---`);
log(`id: ${barracks.id} | size: ${barracks.size} | levels: ${barracks.levels.length}`);
log('Level  Unlocked Unit');
for (const l of barracks.levels) {
  log(`  ${String(l.level).padStart(2)}  ${l.unlockedUnit}`);
}
log('');

// --- Dark Barracks ---
const darkBarracks = ab.darkBarracks().first()!;
log(`--- ${darkBarracks.name} ---`);
log(`id: ${darkBarracks.id} | size: ${darkBarracks.size} | levels: ${darkBarracks.levels.length}`);
log('Level  Unlocked Unit');
for (const l of darkBarracks.levels) {
  log(`  ${String(l.level).padStart(2)}  ${l.unlockedUnit}`);
}
log('');

// --- Spell Factory ---
const spellFactory = ab.spellFactory().first()!;
log(`--- ${spellFactory.name} ---`);
log(`id: ${spellFactory.id} | size: ${spellFactory.size} | levels: ${spellFactory.levels.length}`);
log('Level  Spell Capacity  Unlocked Spell');
for (const l of spellFactory.levels) {
  const unlocked = Array.isArray(l.unlockedSpell) ? l.unlockedSpell.join(', ') : l.unlockedSpell;
  log(
    `  ${String(l.level).padStart(2)}  ${String(l.spellStorageCapacity).padStart(14)}  ${unlocked}`,
  );
}
log('');

// --- Dark Spell Factory ---
const darkSpellFactory = ab.darkSpellFactory().first()!;
log(`--- ${darkSpellFactory.name} ---`);
log(
  `id: ${darkSpellFactory.id} | size: ${darkSpellFactory.size} | levels: ${darkSpellFactory.levels.length}`,
);
log('Level  Spell Capacity  Unlocked Spell');
for (const l of darkSpellFactory.levels) {
  const unlocked = Array.isArray(l.unlockedSpell) ? l.unlockedSpell.join(', ') : l.unlockedSpell;
  log(
    `  ${String(l.level).padStart(2)}  ${String(l.spellStorageCapacity).padStart(14)}  ${unlocked}`,
  );
}
log('');

// --- Laboratory ---
const laboratory = ab.laboratory().first()!;
log(`--- ${laboratory.name} ---`);
log(`id: ${laboratory.id} | size: ${laboratory.size} | levels: ${laboratory.levels.length}`);
log('Level  TH Required');
for (const l of laboratory.levels) {
  log(`  ${String(l.level).padStart(2)}  ${l.townHallRequired}`);
}
log('');

// --- Blacksmith ---
const blacksmith = ab.blacksmith().first()!;
log(`--- ${blacksmith.name} ---`);
log(`id: ${blacksmith.id} | size: ${blacksmith.size} | levels: ${blacksmith.levels.length}`);
log('Level  Shiny     Glowy  Starry  Common  Epic  Unlocked Equipment');
for (const l of blacksmith.levels) {
  const equip = Array.isArray(l.equipmentUnlocked)
    ? l.equipmentUnlocked.join(', ')
    : (l.equipmentUnlocked ?? '-');
  log(
    `  ${String(l.level).padStart(2)}  ${String(l.oreCapacity.shinyOre).padStart(6)}  ${String(l.oreCapacity.glowyOre).padStart(5)}  ${String(l.oreCapacity.starryOre).padStart(6)}  ${String(l.maxEquipmentLevel.common).padStart(6)}  ${String(l.maxEquipmentLevel.epic).padStart(4)}  ${equip}`,
  );
}
log('');

// --- Workshop ---
const workshop = ab.workshop().first()!;
log(`--- ${workshop.name} ---`);
log(`id: ${workshop.id} | size: ${workshop.size} | levels: ${workshop.levels.length}`);
log('Level  HP     Capacity  Unlocked Siege Machine');
for (const l of workshop.levels) {
  log(
    `  ${String(l.level).padStart(2)}  ${String(l.hitpoints).padStart(5)}  ${String(l.siegeMachineCapacity).padStart(8)}  ${l.unlockedSiegeMachine}`,
  );
}
log('');

// --- Pet House ---
const petHouse = ab.petHouse().first()!;
log(`--- ${petHouse.name} ---`);
log(`id: ${petHouse.id} | size: ${petHouse.size} | levels: ${petHouse.levels.length}`);
log('Level  HP     Unlocked Pet');
for (const l of petHouse.levels) {
  log(`  ${String(l.level).padStart(2)}  ${String(l.hitpoints).padStart(5)}  ${l.unlockedPet}`);
}
log('');

// --- Hero Hall ---
const heroHall = ab.heroHall().first()!;
log(`--- ${heroHall.name} ---`);
log(`id: ${heroHall.id} | size: ${heroHall.size} | levels: ${heroHall.levels.length}`);
log('Level  Hero Slots  Unlocked Hero');
for (const l of heroHall.levels) {
  log(
    `  ${String(l.level).padStart(2)}  ${String(l.heroSlots).padStart(10)}  ${l.unlockedHero ?? '-'}`,
  );
}
log('');

// --- Hero Banner ---
const heroBanner = ab.heroBanner().first()!;
log(`--- ${heroBanner.name} ---`);
log(`id: ${heroBanner.id} | size: ${heroBanner.size}`);
log('Image variants: ' + Object.keys(heroBanner.images).join(', '));
log('');

// --- byTownHall(12) on army camp ---
log('--- armyCamp byTownHall(12) ---');
for (const b of ab.byTownHall(12).get()) {
  const avail = b.availablePerTownHall.find((a) => a.townHallLevel === 12);
  const count = avail ? `${avail.count}` : '?';
  const maxLevel = Math.max(
    ...b.levels.filter((l) => l.townHallRequired <= 12).map((l) => l.level),
  );
  log(`${b.name} | count: ${count} | max level: ${maxLevel}`);
}

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
