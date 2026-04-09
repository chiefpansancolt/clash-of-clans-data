import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const ws = home().armyBuildings().workshop().first()!;

log('=== workshop() ===');
log(`id:       ${ws.id}`);
log(`name:     ${ws.name}`);
log(`base:     ${ws.base}`);
log(`category: ${ws.category}`);
log(`size:     ${ws.size}`);
log(`levels:   ${ws.levels.length}`);
log('');

log('Level  HP     Capacity  Build Cost       Build Time    XP    TH  Unlocked Siege Machine');
ws.levels.forEach((l) => {
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
  log(
    `  ${String(l.level).padStart(2)}  ${String(l.hitpoints).padStart(5)}  ${String(l.siegeMachineCapacity).padStart(8)}  ${cost}  ${bt}  ${String(l.xpGained).padStart(4)}  ${l.townHallRequired}  ${l.unlockedSiegeMachine}`,
  );
});
log('');

log('--- Image Validation ---');
const images = createImageCounter();
ws.levels.forEach((l) => {
  images.check(`level ${l.level}`, l.images.normal);
});
log(images.report());

writeOutput(__dirname);
