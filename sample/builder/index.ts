import { builder } from '../../src';
import { createLogger } from '../helper';

const { log, writeOutput } = createLogger();

const b = builder();

log('=== builder() [Builder Base] ===');
log('');
log(`Category              Count`);
log(`  defenses            ${b.defenses().count()}`);
log(`  traps               ${b.traps().count()}`);
log(`  walls               ${b.walls().count()}`);
log(`  resourceBuildings   ${b.resourceBuildings().count()}`);
log(`  armyBuildings       ${b.armyBuildings().count()}`);
log(`  otherBuildings      ${b.otherBuildings().count()}`);
log(`  troops              ${b.troops().count()}`);
log(`  heroes              ${b.heroes().count()}`);

writeOutput(__dirname);
