# clash-of-clans-data

A comprehensive, fully-typed Node.js package containing all Clash of Clans game data as structured JSON with TypeScript types and image assets, consumable as an ESM or CJS npm package.

[![npm version](https://img.shields.io/npm/v/clash-of-clans-data)](https://www.npmjs.com/package/clash-of-clans-data)
[![license](https://img.shields.io/npm/l/clash-of-clans-data)](LICENSE)
[![node](https://img.shields.io/node/v/clash-of-clans-data)](package.json)

---

## Features

- **Complete game data** — defenses, troops, spells, heroes, equipment, pets, traps, walls, buildings, leagues, and more for all three bases (Home Village, Builder Base, Clan Capital)
- **Fully typed** — every entity has a precise TypeScript interface; no `any`, no guessing
- **Fluent query API** — chainable namespace methods with filtering, lookup by TH level, damage type, and more
- **Image assets included** — every building level ships with its PNG, accessible via relative path
- **Dual ESM + CJS** — works in both modern ESM projects and legacy CommonJS

---

## Requirements

- Node.js >= 24
- pnpm (for development)

---

## Installation

```bash
npm install clash-of-clans-data
# or
pnpm add clash-of-clans-data
```

---

## Quick Start

```typescript
import { home, builder, clanCapital, clan } from 'clash-of-clans-data';

// Home Village — single building
const cannon = home().defenses().cannon().first()!;
console.log(cannon.name);           // "Cannon"
console.log(cannon.levels.length);  // number of upgrade levels
console.log(cannon.targetType);     // "ground"

// Home Village — category queries
const splashDefenses = home().defenses().byDamageType('splash').get();
const th12Defenses   = home().defenses().byTownHall(12).get();
const gearedUp       = home().defenses().hasGearUp().get();

// Builder Base
const bCannon = builder().defenses().cannon().first()!;

// Clan Capital
const superBarbarian = clanCapital().troops().superBarbarian().first()!;

// Clan
const level10 = clan().levels().atLevel(10)!;
console.log(level10.perks.donationUpgradeLevels); // 2
```

---

## API Reference

All data is accessed through base-level factory functions. Each returns a namespace object whose methods return chainable query objects.

### Terminal methods (on every query object)

| Method               | Returns              | Description                             |
| -------------------- | -------------------- | --------------------------------------- |
| `.get()`             | `T[]`                | All items currently in the query        |
| `.first()`           | `T \| undefined`     | First item, or `undefined` if empty     |
| `.find(id)`          | `T \| undefined`     | Find by `id` field                      |
| `.findByName(name)`  | `T \| undefined`     | Case-insensitive name lookup            |
| `.count()`           | `number`             | Number of items in the query            |

---

### `home()` — Home Village

```typescript
home().defenses()         // HomeVillageDefenses
home().craftedDefenses()  // HomeVillageCraftedDefenses
home().traps()            // HomeVillageTraps
home().walls()            // HomeVillageWalls
home().troops()           // HomeVillageTroops
home().spells()           // HomeVillageSpells
home().siegeMachines()    // HomeVillageSiegeMachines
home().heroes()           // HomeVillageHeroes
home().heroEquipment()    // HomeVillageHeroEquipment
home().pets()             // HomeVillagePets
home().resourceBuildings() // HomeVillageResourceBuildings
home().armyBuildings()    // HomeVillageArmyBuildings
home().guardians()        // HomeVillageGuardians
home().townHall()         // HomeVillageTownHall
```

#### Defenses (22)

`cannon` · `archerTower` · `mortar` · `airDefense` · `wizardTower` · `airSweeper` · `hiddenTesla` · `bombTower` · `xBow` · `infernoTower` · `eagleArtillery` · `scattershot` · `buildersHut` · `spellTower` · `monolith` · `multiArcherTower` · `multiGearTower` · `firespitter` · `superWizardTower` · `revengetower` · `ricochetCannon` · `craftingStation`

Filters: `byTownHall(n)` · `byDamageType(type)` · `hasGearUp()`

#### Crafted Defenses (9)

`roaster` · `lavaLauncher` · `crusherMortar` · `bombHive` · `hookTower` · `flameSpinner` · `lightBeam` · `airBombs` · `heroBell`

Filters: `byTownHall(n)` · `current()` · `byPhase(n)`

#### Traps (8)

`bomb` · `springTrap` · `airBomb` · `giantBomb` · `seekingAirMine` · `skeletonTrap` · `tornadoTrap` · `gigaBomb`

Filters: `byTownHall(n)` · `byTargetType(type)`

#### Troops (31)

`barbarian` · `archer` · `goblin` · `giant` · `wallBreaker` · `balloon` · `wizard` · `healer` · `dragon` · `pekka` · `babyDragon` · `minion` · `hogRider` · `valkyrie` · `golem` · `witch` · `lavaHound` · `bowler` · `dragonRider` · `electroDragon` · `miner` · `iceGolem` · `headhunter` · `yeti` · `apprenticeWarden` · `rootRider` · `electroTitan` · `furnace` · `thrower` · `druid` · `meteorGolem`

Filters: `byTownHall(n)` · `byHousingSpace(n)` · `byTargetType(type)`

#### Spells (17)

`lightningSpell` · `healingSpell` · `rageSpell` · `freezeSpell` · `earthquakeSpell` · `hasteSpell` · `cloneSpell` · `invisibilitySpell` · `batSpell` · `skeletonSpell` · `poisonSpell` · `iceBlockSpell` · `overgrowthSpell` · `jumpSpell` · `recallSpell` · `reviveSpell` · `totemSpell`

Filters: `byTownHall(n)` · `byType(type)`

#### Siege Machines (8)

`wallWrecker` · `battleBlimp` · `stoneSlammer` · `siegeBarracks` · `logLauncher` · `flameFlinger` · `battleDrill` · `troopLauncher`

#### Heroes (6)

`barbarianKing` · `archerQueen` · `grandWarden` · `royalChampion` · `minionPrince` · `dragonDuke`

#### Hero Equipment (37+)

`archerPuppet` · `barbarianPuppet` · `giantGauntlet` · `rageVial` · `earthquakeBoots` · `healerPuppet` · `magicMirror` · `giantArrow` · `frozenArrow` · `spkyBall` · `vampstache` · `snakeBracelet` · `actionFigure` · `stickHorse` · and many more

Filters: `byHero(name)` · `byRarity(rarity)`

#### Pets (12)

`lassi` · `electroOwl` · `mightyYak` · `unicorn` · `frosty` · `diggy` · `poisonLizard` · `phoenix` · `spiritFox` · `angryJelly` · `sneezy` · `greedyRaven`

#### Guardians (2)

`longshot` · `smasher`

#### Resource Buildings (7)

`goldMine` · `elixirCollector` · `goldStorage` · `elixirStorage` · `darkElixirDrill` · `darkElixirStorage` · `clanCastle`

#### Army Buildings (11)

`barracks` · `darkBarracks` · `spellFactory` · `darkSpellFactory` · `laboratory` · `workshop` · `petHouse` · `heroHall` · `blacksmith` · `heroBanner` · `armyCamp`

---

### `builder()` — Builder Base

```typescript
builder().defenses()         // BuilderVillageDefenses
builder().traps()            // BuilderVillageTraps
builder().walls()            // BuilderVillageWalls
builder().troops()           // BuilderVillageTroops
builder().heroes()           // BuilderVillageHeroes
builder().resourceBuildings() // BuilderVillageResourceBuildings
builder().armyBuildings()    // BuilderVillageArmyBuildings
builder().builderHall()      // BuilderVillageBuilderHall
builder().other()            // BuilderVillageOther
builder().leagues()          // BuilderBaseLeagues
```

#### Defenses (15)

`cannon` · `archerTower` · `doubleCannon` · `multiMortar` · `airBombs` · `crusher` · `guardPost` · `hiddenTesla` · `giantCannon` · `megaTesla` · `lavaLauncher` · `xBow` · `roaster` · `firecrackers` · `ottosOutpost`

#### Troops (13)

`ragedBarbarian` · `sneakyArcher` · `boxerGiant` · `betaMinion` · `bomber` · `babyDragon` · `cannonCart` · `nightWitch` · `dropShip` · `superPekka` (Power P.E.K.K.A) · `hogGlider` · `electroFireWizard` · `powerPekka`

#### Heroes (2)

`battleMachine` · `battleCopter`

#### Leagues (42)

42 Builder Base league tiers from Wood V through Diamond, with trophy ranges, battle result rewards (0–6 stars), and star bonus data.

`byGroup(group)` · `atTrophies(n)` — find the league at a given trophy count

---

### `clanCapital()` — Clan Capital

```typescript
clanCapital().defenses()     // ClanCapitalDefenses
clanCapital().troops()       // ClanCapitalTroops
clanCapital().spells()       // ClanCapitalSpells
clanCapital().armyBuildings() // ClanCapitalArmyBuildings
clanCapital().walls()        // ClanCapitalWalls
clanCapital().capitalHall()  // ClanCapitalCapitalHall
clanCapital().districtHall() // ClanCapitalDistrictHall
clanCapital().leagues()      // ClanCapitalLeagues
```

#### Defenses (21)

`cannon` · `airDefense` · `airBombs` · `bombTower` · `crusher` · `giantCannon` · `hiddenMegaTesla` · `infernoTower` · `miniMinionHive` · `multiCannon` · `multiMortar` · `raidCartPost` · `rapidRockets` · `reflector` · `rocketArtillery` · `spearThrower` · `superDragonPost` · `superGiantPost` · `superWizardTower` · `blastBow` · `goblinThrower`

#### Troops (18)

`superBarbarian` · `sneakyArcher` · `superGiant` · `battleRam` · `superWizard` · `rocketBalloon` · `hogRider` · `superDragon` · `skeleton` (Skeleton Barrels) · `hogGlider` · `superMiner` · `infernoDragon` · `powerPekka` · `minion` (Minion Horde) · `superValkyrie` · `raidCart` · `megaSparky` · `mountainGolem` · `flyingFortress`

#### Spells (7)

`rageSpell` · `healSpell` · `frostSpell` · `jumpSpell` · `lightningSpell` · `graveyardSpell` · `endlessHasteSpell`

---

### `clan()` — Clan Data

```typescript
clan().levels()   // ClanLevels — 20 levels with XP, badges, perks
clan().labels()   // ClanLabels — 17 searchable clan labels
clan().war()      // ClanWar — max base loot, war bonuses, ore per TH level
```

```typescript
// Clan levels
clan().levels().atLevel(10)!.perks.donationUpgradeLevels  // 2
clan().levels().byBadge('gold').get()                       // levels 10–14
clan().labels().findByName('clan wars')                     // ClanLabel

// War data
clan().war().maxWarBaseLoot()               // WarBaseLootEntry[] — TH3–18
clan().war().warBonus()                     // WarBonusTier[] — 5 clan-level tiers
clan().war().bonusTierForClanLevel(7)       // WarBonusTier for a clan level
clan().war().maxWarBaseOre()                // WarBaseOreEntry[] — TH8–18
```

---

### Calculators

```typescript
import { gems, boost, potions, clockTower } from 'clash-of-clans-data';

gems().forResources(1_000_000, 'Gold')   // gem cost to finish resources
boost().forBuilding(cannon, 'normal')    // gem cost to boost a building
potions().builder()                      // BuilderPotion data
clockTower().speedUp(hours)              // Clock Tower Calculator
```

---

### Magic Items

```typescript
import { magicItems } from 'clash-of-clans-data';

magicItems().books().get()        // all books (Book of Heroes, etc.)
magicItems().hammers().get()      // Hammer of Building, Fighting, Spells
magicItems().potions().get()      // all potions
magicItems().snacks().get()       // all snacks
magicItems().utilities().get()    // all utility items
```

---

### Season Pass, Ranked Battles, Achievements

```typescript
import { seasonPass, rankedBattles, achievements } from 'clash-of-clans-data';

seasonPass().get()        // all season pass challenges
rankedBattles().get()     // ranked battle league data
achievements().get()      // all in-game achievements
```

---

## Images

Every building level record includes a relative `images` field with paths to PNG assets bundled in the package:

```typescript
const cannon = home().defenses().cannon().first()!;
cannon.levels[0].images.normal        // "images/home/defenses/cannon/normal/level-1.png"
cannon.levels[6].images.gearedUpBurst // "images/home/defenses/cannon/geared-up-burst/level-7.png"
```

Images are located at `node_modules/clash-of-clans-data/images/...` and can be referenced by resolving them from `require.resolve('clash-of-clans-data')` or via your bundler's asset pipeline.

---

## TypeScript

All types are exported from the package root:

```typescript
import type {
  HomeDefense, HomeDefenseLevel,
  HomeTroop, HomeSpell, HomeSiegeMachine,
  HomeHero, HeroEquipment, HomePet,
  BuilderDefense, BuilderTroop,
  ClanCapitalDefense, ClanCapitalTroop,
  ClanLevel, ClanLabel, WarBonusTier,
  BuilderBaseLeague,
} from 'clash-of-clans-data';
```

---

## Data Source

All game data is sourced from the [Clash of Clans Wiki](https://clashofclans.fandom.com/wiki/). Stats are kept up-to-date with each game update.

---

## Contributing

See [CONTRIBUTING.md](.github/CONTRIBUTING.md) for how to add new data, fix bugs, or suggest improvements.

---

## License

MIT — see [LICENSE](LICENSE).

> This project is not affiliated with, endorsed, or sponsored by Supercell. Clash of Clans is a trademark of Supercell.
