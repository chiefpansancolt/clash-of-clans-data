import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const cs = home().defenses().craftingStation().first()!;

log('=== craftingStation() ===');
log(`id:       ${cs.id}`);
log(`name:     ${cs.name}`);
log(`base:     ${cs.base}`);
log(`category: ${cs.category}`);
log(`size:     ${cs.size}`);
log(`TH18:     ${cs.availablePerTownHall[0]?.count ?? 0}`);
log(`HP (unselected): ${cs.levels[0].hitpoints}`);
log(`Build cost: ${cs.levels[0].buildCost} (free)`);
log('');

log('=== home().craftedDefenses() ===');
log(`Total crafted defenses registered: ${home().craftedDefenses().count()}`);
log(`Current phase: ${home().craftedDefenses().current().count()}`);
log(`Former phases: ${home().craftedDefenses().former().count()}`);
log('');
log('Phase 1 (former): Hook Tower, Flame Spinner, Crusher Mortar');
log('Phase 2 (former): Hero Bell, Bomb Hive, Light Beam');
log('Phase 3 (current): Roaster, Air Bombs, Lava Launcher');
log('');

log('--- Image Validation ---');
const images = createImageCounter();
images.check('level-1 normal', cs.levels[0].images.normal);
log(images.report());

writeOutput(__dirname);
