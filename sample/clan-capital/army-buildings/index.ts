import { clanCapital } from '../../../src';
import {
  ClanCapitalArmyBuilding,
  ClanCapitalBarracksBuilding,
  ClanCapitalSpellFactory,
  ClanCapitalSpellStorageBuilding,
} from '../../../src/types';
import { createImageCounter, createLogger } from '../../helper';

const { log, writeOutput } = createLogger();

const ab = clanCapital().armyBuildings();

log('=== clanCapital().armyBuildings() ===');
log('');

const images = createImageCounter();

const ac = ab.armyCamp().first()! as ClanCapitalArmyBuilding;
log(`--- ${ac.name} ---`);
log(`id: ${ac.id} | size: ${ac.size} | levels: ${ac.levels.length}`);
log('Lv  Housing Space  HP    Build Cost  DH Req');
for (const lvl of ac.levels) {
  const cost = lvl.buildCost > 0 ? lvl.buildCost.toLocaleString() : 'free';
  log(
    `${String(lvl.level).padStart(2)}  ${String((lvl as ClanCapitalArmyBuilding['levels'][0]).housingSpace).padStart(13)}  ${String(lvl.hitpoints).padStart(4)}  ${cost.padStart(10)}  ${String(lvl.districtHallRequired).padStart(6)}`,
  );
  images.check(`${ac.id} level-${lvl.level} normal`, lvl.images.normal);
}
log('');

const ss = ab.spellStorage().first()! as ClanCapitalSpellStorageBuilding;
log(`--- ${ss.name} ---`);
log(`id: ${ss.id} | size: ${ss.size} | levels: ${ss.levels.length}`);
log('Lv  Spell Capacity  HP      Build Cost  DH Req');
for (const lvl of ss.levels) {
  const cost = lvl.buildCost > 0 ? lvl.buildCost.toLocaleString() : 'free';
  log(
    `${String(lvl.level).padStart(2)}  ${String((lvl as ClanCapitalSpellStorageBuilding['levels'][0]).spellCapacity).padStart(14)}  ${String(lvl.hitpoints).padStart(6)}  ${cost.padStart(10)}  ${String(lvl.districtHallRequired).padStart(6)}`,
  );
  images.check(`${ss.id} level-${lvl.level} normal`, lvl.images.normal);
}
log('');

log(`--- Barracks (${ab.barracks().count()} total) ---`);
for (const b of ab.barracks().get() as ClanCapitalBarracksBuilding[]) {
  log(`  ${b.name.padEnd(30)} unlocks: ${b.troopUnlocked}`);
}
log('');

log(`--- Spell Factories (${ab.spellFactories().count()} total) ---`);
for (const sf of ab.spellFactories().get() as ClanCapitalSpellFactory[]) {
  log(`  ${sf.name.padEnd(30)} unlocks: ${sf.spellUnlocked}`);
}
log('');

log('--- Image Validation ---');
log(images.report());

writeOutput(__dirname);
