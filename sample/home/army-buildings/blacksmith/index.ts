import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const bs = home().armyBuildings().blacksmith().first()!;

log('=== blacksmith() ===');
log(`id:       ${bs.id}`);
log(`name:     ${bs.name}`);
log(`base:     ${bs.base}`);
log(`category: ${bs.category}`);
log(`size:     ${bs.size}`);
log(`levels:   ${bs.levels.length}`);
log('');

log('Level  HP    Shiny     Glowy  Starry  Com  Epic  Build Cost       Build Time    XP    TH');
bs.levels.forEach((l) => {
  const bt = [
    l.buildTime.days ? `${l.buildTime.days}d` : '',
    l.buildTime.hours ? `${l.buildTime.hours}h` : '',
    l.buildTime.minutes ? `${l.buildTime.minutes}m` : '',
    l.buildTime.seconds ? `${l.buildTime.seconds}s` : '',
  ]
    .filter(Boolean)
    .join(' ')
    .padStart(10);
  const cost = l.buildCost.toLocaleString().padStart(14);
  const equip = Array.isArray(l.equipmentUnlocked)
    ? l.equipmentUnlocked.join(', ')
    : (l.equipmentUnlocked ?? '-');
  log(
    `  ${String(l.level).padStart(2)}  ${String(l.hitpoints).padStart(4)}  ${String(l.oreCapacity.shinyOre).padStart(6)}  ${String(l.oreCapacity.glowyOre).padStart(5)}  ${String(l.oreCapacity.starryOre).padStart(6)}  ${String(l.maxEquipmentLevel.common).padStart(3)}  ${String(l.maxEquipmentLevel.epic).padStart(4)}  ${cost}  ${bt}  ${String(l.xpGained).padStart(4)}  ${l.townHallRequired}  ${equip}`,
  );
});
log('');

log('--- Image Validation ---');
const images = createImageCounter();
bs.levels.forEach((l) => {
  images.check(`level ${l.level}`, l.images.normal);
});
log(images.report());

writeOutput(__dirname);
