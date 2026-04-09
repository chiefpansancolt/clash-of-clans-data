import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const tt = home().traps().tornadoTrap().first()!;

log('=== tornadoTrap() ===');
log(`id:             ${tt.id}`);
log(`name:           ${tt.name}`);
log(`size:           ${tt.size}`);
log(`triggerRadius:  ${tt.triggerRadius} tiles`);
log(`damageRadius:   ${tt.damageRadius} tiles`);
log(`damageType:     ${tt.damageType}`);
log(`targetType:     ${tt.targetType}`);
log(`specialAbility: ${tt.specialAbility}`);
log(`levels:         ${tt.levels.length}`);
log('');
log('Level  TotalDmg  Duration  Cost          Build Time   XP     TH');
tt.levels.forEach((l) => {
  const cost = l.buildCost.toLocaleString().padStart(12);
  const bt =
    [
      l.buildTime.days ? `${l.buildTime.days}d` : '',
      l.buildTime.hours ? `${l.buildTime.hours}h` : '',
      l.buildTime.minutes ? `${l.buildTime.minutes}m` : '',
    ]
      .filter(Boolean)
      .join(' ')
      .padStart(10) || '   instant';
  log(
    `  ${String(l.level).padStart(2)}      ${String(l.damage).padStart(3)}        ${String(l.duration ?? '-').padStart(2)}s ${cost}  ${bt}  ${String(l.xpGained).padStart(5)}   ${l.townHallRequired}`,
  );
});
log('');

log('--- Available per Town Hall ---');
log('TH  Count');
tt.availablePerTownHall.forEach((e) => {
  log(`  ${String(e.townHallLevel).padStart(2)}   ${String(e.count).padStart(2)}`);
});
log('');

log('--- Image Validation ---');
const images = createImageCounter();
tt.levels.forEach((l) => {
  images.check(`level ${l.level}`, l.images.normal);
});
log(images.report());

writeOutput(__dirname);
