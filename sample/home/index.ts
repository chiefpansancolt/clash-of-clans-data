import { home } from '../../src';
import { createLogger } from '../helper';

const { log, writeOutput } = createLogger();

const h = home();

log('=== home() [Home Village] ===');
log('');
log(`Category              Count`);
log(`  defenses            ${h.defenses().count()}`);
log(`  craftedDefenses     ${h.craftedDefenses().count()}`);
log(`  guardians           ${h.guardians().count()}`);
log(`  traps               ${h.traps().count()}`);
log(`  walls               ${h.walls().count()}`);
log(`  troops              ${h.troops().count()}`);
log(`  spells              ${h.spells().count()}`);
log(`  siegeMachines       ${h.siegeMachines().count()}`);
log(`  pets                ${h.pets().count()}`);
log(`  heroEquipment       ${h.heroEquipment().count()}`);
log(`  heroes              ${h.heroes().count()}`);
log(`  resourceBuildings   ${h.resourceBuildings().count()}`);
log(`  armyBuildings       ${h.armyBuildings().count()}`);
log(`  otherBuildings      ${h.otherBuildings().count()}`);

writeOutput(__dirname);
