import * as fs from 'fs';
import * as path from 'path';
import { home } from '../../../../src';

const ROOT = path.resolve(__dirname, '../../../..');

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

const ob = home().otherBuildings();

const hh = ob.helperHut().first()!;
log('=== helperHut() ===');
log(`id: ${hh.id} | name: ${hh.name} | size: ${hh.size} | levels: ${hh.levels.length}`);
log(
  `level 1: HP ${hh.levels[0].hitpoints}, cost ${hh.levels[0].buildCost} ${hh.levels[0].buildCostResource}, TH${hh.levels[0].townHallRequired}`,
);
checkImage('normal', hh.levels[0].images.normal);
checkImage('active', hh.levels[0].images.active);
log('');

const helpers = ob.helpers();
log('=== helpers() ===');
log(`total helpers: ${helpers.count()}`);
for (const h of helpers.get()) {
  log(
    `  ${h.id} | ${h.levels.length} level(s) | TH${h.townHallRequired} | recruit: ${h.recruitmentCost} ${h.recruitmentCostResource}`,
  );
}
log('');

const la = helpers.labAssistant().first()!;
log('--- Lab Assistant ---');
log('Level  Work Rate  Upgrade Cost  TH');
for (const l of la.levels) {
  log(
    `  ${String(l.level).padStart(2)}  ${String(l.workRate + 'x').padStart(9)}  ${String(l.upgradeCost).padStart(12)}  ${l.townHallRequired}`,
  );
}
checkImage('lab-assistant', la.images.normal);
log('');

const ba = helpers.buildersApprentice().first()!;
log("--- Builder's Apprentice ---");
log('Level  Work Rate  Upgrade Cost  TH');
for (const l of ba.levels) {
  log(
    `  ${String(l.level).padStart(2)}  ${String(l.workRate + 'x').padStart(9)}  ${String(l.upgradeCost).padStart(12)}  ${l.townHallRequired}`,
  );
}
checkImage('builders-apprentice', ba.images.normal);
log('');

const al = helpers.alchemist().first()!;
log('--- Alchemist ---');
log('Level  Gold/Elixir Max  Dark Elixir Max  Bonus%  Upgrade Cost  TH');
for (const l of al.levels) {
  log(
    `  ${String(l.level).padStart(2)}  ${String(l.goldElixirConversionMax).padStart(15)}  ${String(l.darkElixirConversionMax).padStart(15)}  ${String(l.conversionBonusPercent + '%').padStart(6)}  ${String(l.upgradeCost).padStart(12)}  ${l.townHallRequired}`,
  );
}
checkImage('alchemist', al.images.normal);
log('');

const pr = helpers.prospector().first()!;
log('--- Prospector ---');
log('Level  Shiny Max  Glowy Max  Starry Max  TH');
for (const l of pr.levels) {
  log(
    `  ${String(l.level).padStart(2)}  ${String(l.shinyOreConversionMax).padStart(9)}  ${String(l.glowyOreConversionMax).padStart(9)}  ${String(l.starryOreConversionMax).padStart(10)}  ${l.townHallRequired}`,
  );
}
checkImage('prospector', pr.images.normal);
log('');

log('--- helpers().byTownHall(10) ---');
for (const h of helpers.byTownHall(10).get()) {
  log(`  ${h.name}`);
}

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
