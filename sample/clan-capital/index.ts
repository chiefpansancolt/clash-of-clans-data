import { clanCapital } from '../../src';
import { createLogger } from '../helper';

const { log, writeOutput } = createLogger();

const cc = clanCapital();

log('=== clanCapital() [Clan Capital] ===');
log('');
log(`Category              Count`);
log(`  defenses            ${cc.defenses().count()}`);
log(`  armyBuildings       ${cc.armyBuildings().count()}`);
log(`    barracks          ${cc.armyBuildings().barracks().count()}`);
log(`    spellFactories    ${cc.armyBuildings().spellFactories().count()}`);
log(`  spells              ${cc.spells().count()}`);
log(`  troops              ${cc.troops().count()}`);
log(`  traps               ${cc.traps().count()}`);
log(`  walls               ${cc.walls().count()}`);
log(`  other (houses)      ${cc.other().houses().count()}`);

writeOutput(__dirname);
