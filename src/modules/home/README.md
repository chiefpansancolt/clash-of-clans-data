# Home Village Module

The `home` module is the entry point for all Home Village game data — defenses, crafted defenses,
guardians, traps, walls, troops, spells, siege machines, heroes, hero equipment, pets, resource
buildings, army buildings, and other buildings. All data is accessed through a fluent, chainable
query API that wraps typed JSON records.

Every category class extends `QueryBase<T>` and returns a new instance of the same class from both
per-building accessors and filter methods, allowing arbitrary chaining before calling a terminal
method.

---

## Quick Start

```ts
import { home } from "clash-of-clans-data";

// Get the full Cannon entity
const cannon = home().defenses().cannon().first()!;
console.log(cannon.name); // "Cannon"
console.log(cannon.levels.length); // number of upgrade levels

// All splash-damage defenses available at TH10
const splashAtTH10 = home().defenses().byDamageType("splash").byTownHall(10).get();

// Every hero equipment item for the Barbarian King
const kingGear = home().heroEquipment().byHero("barbarian-king").get();

// Total upgradeable level slots at TH15
const counts = home().levelCountAtTownHall(15);
console.log(counts.total); // overall total
console.log(counts.structures); // defenses + army + resource buildings
console.log(counts.heroes); // sum of hero level caps
```

---

## Entry Point

```ts
import { home } from "clash-of-clans-data";

const village = home(); // HomeVillage instance
```

`home()` is a factory function that returns a fresh `HomeVillage` instance. All category accessors
are called on this object.

---

## QueryBase Terminal Methods

All category query classes extend `QueryBase<T>`. Five terminal methods are available on every
class:

| Method             | Signature                          | Description                     |
| ------------------ | ---------------------------------- | ------------------------------- |
| `get()`            | `() => T[]`                        | Return all results as an array  |
| `first()`          | `() => T \| undefined`             | Return the first result         |
| `find(id)`         | `(id: string) => T \| undefined`   | Find by exact ID string         |
| `findByName(name)` | `(name: string) => T \| undefined` | Find by name (case-insensitive) |
| `count()`          | `() => number`                     | Return the number of results    |

---

## Categories

### `home().defenses()` — `HomeVillageDefenses`

22 stationary defense buildings.

**Per-building accessors** (each returns `HomeVillageDefenses` wrapping one building):

```ts
home().defenses().cannon();
home().defenses().archerTower();
home().defenses().mortar();
home().defenses().airDefense();
home().defenses().wizardTower();
home().defenses().airSweeper();
home().defenses().hiddenTesla();
home().defenses().bombTower();
home().defenses().xBow();
home().defenses().infernoTower();
home().defenses().eagleArtillery();
home().defenses().scattershot();
home().defenses().buildersHut();
home().defenses().spellTower();
home().defenses().monolith();
home().defenses().multiArcherTower();
home().defenses().firespitter();
home().defenses().multiGearTower();
home().defenses().revengeTower();
home().defenses().ricochetCannon();
home().defenses().superWizardTower();
home().defenses().craftingStation();
```

**Filter methods** (each returns `HomeVillageDefenses`):

| Method                      | Description                                                                                                |
| --------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `byBuilding(name: string)`  | Filter by name (case-insensitive)                                                                          |
| `byTownHall(level: number)` | Buildings with at least one level available at or below the given TH level                                 |
| `byDamageType(type)`        | Filter by normal mode damage type: `'single'`, `'splash'`, `'none'`, `'multiple'`, `'ricochet'`, `'chain'` |
| `hasGearUp()`               | Buildings that have a gear-up upgrade option                                                               |

---

### `home().craftedDefenses()` — `HomeVillageCraftedDefenses`

9 crafted defense buildings, grouped into phases (Phase 1, 2, and 3).

**Per-building accessors**:

```ts
home().craftedDefenses().hookTower();
home().craftedDefenses().flameSpinner();
home().craftedDefenses().crusherMortar();
home().craftedDefenses().heroBell();
home().craftedDefenses().bombHive();
home().craftedDefenses().lightBeam();
home().craftedDefenses().roaster();
home().craftedDefenses().airBombs();
home().craftedDefenses().lavaLauncher();
```

**Filter methods**:

| Method                   | Description                                                 |
| ------------------------ | ----------------------------------------------------------- |
| `byPhase(phase: number)` | Filter to defenses in the given crafting phase (1, 2, 3, …) |
| `current()`              | Filter to the currently active crafting phase               |
| `former()`               | Filter to retired (previous) crafting phases                |
| `byTargetType(type)`     | Filter by target type: `'ground'`, `'air'`, `'both'`        |

---

### `home().guardians()` — `HomeVillageGuardians`

2 mobile Guardian units (available from TH18).

**Per-building accessors**:

```ts
home().guardians().longshot();
home().guardians().smasher();
```

**Filter methods**:

| Method                         | Description                                                                |
| ------------------------------ | -------------------------------------------------------------------------- |
| `byGuardianType(type: string)` | Filter by guardian type (e.g. `'longshot'`, `'smasher'`)                   |
| `byTownHall(level: number)`    | Guardians with at least one level available at or below the given TH level |

---

### `home().traps()` — `HomeVillageTraps`

8 trap buildings.

**Per-building accessors**:

```ts
home().traps().bomb();
home().traps().springTrap();
home().traps().giantBomb();
home().traps().airBomb();
home().traps().seekingAirMine();
home().traps().skeletonTrap();
home().traps().tornadoTrap();
home().traps().gigaBomb();
```

**Filter methods**:

| Method                      | Description                                          |
| --------------------------- | ---------------------------------------------------- |
| `byTrap(name: string)`      | Filter by name (case-insensitive)                    |
| `byTownHall(level: number)` | Traps available (count > 0) at the given TH level    |
| `byTargetType(type)`        | Filter by target type: `'ground'`, `'air'`, `'both'` |

---

### `home().walls()` — `HomeVillageWalls`

Single Wall entity containing all upgrade levels.

```ts
home().walls().wall().first()!; // Wall entity
```

---

### `home().troops()` — `HomeVillageTroops`

31 Home Village troops (regular Barracks and Dark Barracks combined).

**Per-building accessors**:

```ts
home().troops().barbarian();
home().troops().archer();
home().troops().giant();
home().troops().goblin();
home().troops().wallBreaker();
home().troops().balloon();
home().troops().wizard();
home().troops().healer();
home().troops().dragon();
home().troops().pekka();
home().troops().babyDragon();
home().troops().miner();
home().troops().electroDragon();
home().troops().yeti();
home().troops().dragonRider();
home().troops().electroTitan();
home().troops().rootRider();
home().troops().thrower();
home().troops().meteorGolem();
home().troops().druid();
home().troops().furnace();
home().troops().apprenticeWarden();
home().troops().minion();
home().troops().hogRider();
home().troops().valkyrie();
home().troops().witch();
home().troops().lavaHound();
home().troops().bowler();
home().troops().iceGolem();
home().troops().headhunter();
home().troops().golem();
```

**Filter methods**:

| Method                      | Description                                                   |
| --------------------------- | ------------------------------------------------------------- |
| `byType(type)`              | `'regular'` (Barracks) or `'dark'` (Dark Barracks)            |
| `byTownHall(level: number)` | Troops with at least one level at or below the given TH level |
| `withSuperTroop()`          | Troops that have an associated Super Troop variant            |

---

### `home().spells()` — `HomeVillageSpells`

17 Home Village spells (regular and dark).

**Per-building accessors**:

```ts
home().spells().lightningSpell();
home().spells().healingSpell();
home().spells().rageSpell();
home().spells().jumpSpell();
home().spells().freezeSpell();
home().spells().cloneSpell();
home().spells().invisibilitySpell();
home().spells().recallSpell();
home().spells().reviveSpell();
home().spells().earthquakeSpell();
home().spells().hasteSpell();
home().spells().poisonSpell();
home().spells().totemSpell();
home().spells().skeletonSpell();
home().spells().batSpell();
home().spells().overgrowthSpell();
home().spells().iceBlockSpell();
```

**Filter methods**:

| Method                      | Description                                                   |
| --------------------------- | ------------------------------------------------------------- |
| `byType(type)`              | `'regular'` (Spell Factory) or `'dark'` (Dark Spell Factory)  |
| `byTownHall(level: number)` | Spells with at least one level at or below the given TH level |

---

### `home().siegeMachines()` — `HomeVillageSiegeMachines`

8 siege machines.

**Per-building accessors**:

```ts
home().siegeMachines().wallWrecker();
home().siegeMachines().battleBlimp();
home().siegeMachines().stoneSlammer();
home().siegeMachines().siegeBarracks();
home().siegeMachines().logLauncher();
home().siegeMachines().flameFlinger();
home().siegeMachines().battleDrill();
home().siegeMachines().troopLauncher();
```

**Filter methods**:

| Method                      | Description                                                     |
| --------------------------- | --------------------------------------------------------------- |
| `byWorkshop(level: number)` | Machines unlocked at or below the given Workshop level          |
| `byTownHall(level: number)` | Machines with at least one level at or below the given TH level |

---

### `home().heroes()` — `HomeVillageHeroes`

6 Home Village heroes.

**Per-building accessors**:

```ts
home().heroes().barbarianKing();
home().heroes().archerQueen();
home().heroes().grandWarden();
home().heroes().royalChampion();
home().heroes().minionPrince();
home().heroes().dragonDuke();
```

**Filter methods**:

| Method                      | Description                                                                    |
| --------------------------- | ------------------------------------------------------------------------------ |
| `byHeroHall(level: number)` | Heroes with at least one level available at or below the given Hero Hall level |

---

### `home().heroEquipment()` — `HomeVillageHeroEquipment`

39 hero equipment items across all heroes and rarities.

**Per-building accessors** (representative sample):

```ts
home().heroEquipment().barbarianPuppet();
home().heroEquipment().archerPuppet();
home().heroEquipment().giantGauntlet();
home().heroEquipment().spikyBall();
home().heroEquipment().rageVial();
home().heroEquipment().earthquakeBoots();
home().heroEquipment().electroBoots();
home().heroEquipment().vampstache();
home().heroEquipment().eternalTome();
home().heroEquipment().healingTome();
home().heroEquipment().giantArrow();
home().heroEquipment().frozenArrow();
home().heroEquipment().seekingShield();
home().heroEquipment().magicMirror();
home().heroEquipment().henchmenPuppet();
// … and more (actionFigure, darkOrb, metalPants, nobleIron, darkCrown,
//   meteorStaff, lifeGem, rageGem, fireball, fireHeart, flameBlower,
//   lavaloonPuppet, heroicTorch, royalGem, hogRiderPuppet, hasteVial,
//   invisibilityVial, healerPuppet, snakeBracelet, stickHorse, stunBlaster,
//   frostFlake, rocketBackpack, rocketSpear)
```

**Filter methods**:

| Method                              | Description                                                                        |
| ----------------------------------- | ---------------------------------------------------------------------------------- |
| `byHero(heroId: string)`            | Equipment belonging to the given hero ID (e.g. `'barbarian-king'`)                 |
| `byRarity(rarity: EquipmentRarity)` | Filter by rarity (`'common'`, `'epic'`, etc.)                                      |
| `byBlacksmith(level: number)`       | Equipment with at least one level available at or below the given Blacksmith level |

---

### `home().pets()` — `HomeVillagePets`

12 pets.

**Per-building accessors**:

```ts
home().pets().lassi();
home().pets().electroOwl();
home().pets().mightyYak();
home().pets().unicorn();
home().pets().frosty();
home().pets().diggy();
home().pets().poisonLizard();
home().pets().phoenix();
home().pets().spiritFox();
home().pets().angryJelly();
home().pets().sneezy();
home().pets().greedyRaven();
```

**Filter methods**:

| Method                      | Description                                                           |
| --------------------------- | --------------------------------------------------------------------- |
| `byPetHouse(level: number)` | Pets unlocked at or below the given Pet House level                   |
| `byTownHall(level: number)` | Pets with at least one level available at or below the given TH level |

---

### `home().resourceBuildings()` — `HomeVillageResourceBuildings`

6 resource buildings (collectors and storages). The Clan Castle is accessed via a dedicated
sub-accessor.

**Per-building accessors**:

```ts
home().resourceBuildings().goldMine();
home().resourceBuildings().elixirCollector();
home().resourceBuildings().darkElixirDrill();
home().resourceBuildings().goldStorage();
home().resourceBuildings().elixirStorage();
home().resourceBuildings().darkElixirStorage();
home().resourceBuildings().clanCastle(); // returns HomeVillageClanCastle
```

**Filter methods**:

| Method                      | Description                                           |
| --------------------------- | ----------------------------------------------------- |
| `byTownHall(level: number)` | Buildings available (count > 0) at the given TH level |

---

### `home().armyBuildings()` — `HomeVillageArmyBuildings`

Army buildings with specialized sub-accessors. The generic `get()` / `count()` only covers Army
Camp. Buildings with distinct types are accessed through their own typed methods.

**Per-building accessors**:

```ts
home().armyBuildings().armyCamp(); // HomeVillageArmyBuildings
home().armyBuildings().barracks(); // HomeVillageBarracks
home().armyBuildings().darkBarracks(); // HomeVillageDarkBarracks
home().armyBuildings().laboratory(); // HomeVillageLaboratory
home().armyBuildings().spellFactory(); // HomeVillageSpellFactory
home().armyBuildings().darkSpellFactory(); // HomeVillageDarkSpellFactory
home().armyBuildings().heroBanner(); // HomeVillageHeroBanner
home().armyBuildings().heroHall(); // HomeVillageHeroHall
home().armyBuildings().blacksmith(); // HomeVillageBlacksmith
home().armyBuildings().workshop(); // HomeVillageWorkshop
home().armyBuildings().petHouse(); // HomeVillagePetHouse
```

**Filter methods**:

| Method                      | Description                                                |
| --------------------------- | ---------------------------------------------------------- |
| `byTownHall(level: number)` | Army buildings available (count > 0) at the given TH level |

---

### `home().townHall()` — `HomeVillageTownHall`

Single Town Hall entity.

```ts
home().townHall().first()!; // TownHall entity
```

---

### `home().otherBuildings()` — `HomeVillageOtherBuildings`

Other buildings (Bob's Hut) and the helper sub-namespace.

```ts
home().otherBuildings().bobsHut(); // HomeVillageOtherBuildings
home().otherBuildings().helperHut(); // HomeVillageHelperHut

// Helpers sub-namespace
home().otherBuildings().helpers().get(); // all helpers
home().otherBuildings().helpers().labAssistant().first()!;
home().otherBuildings().helpers().buildersApprentice().first()!;
home().otherBuildings().helpers().alchemist().first()!;
home().otherBuildings().helpers().prospector().first()!;
home().otherBuildings().helpers().byTownHall(14).get(); // unlocked at TH14 or below
```

---

## `levelCountAtTownHall(thLevel)`

Computes the total number of upgradeable level slots at a given Town Hall level, broken down by
category. Useful for progress tracking and completion ratios.

```ts
const counts = home().levelCountAtTownHall(12);
```

### Return type: `TownHallLevelCounts`

```ts
interface TownHallLevelCounts {
  structures: number; // count × maxNormalLevel for defenses + army + resource buildings
  traps: number; // count × maxLevel for traps
  superCharge: number; // count × supercharge levels for defenses + resource buildings (TH17+)
  lab: number; // sum of all troop + spell + siege machine levels gated by TH level
  heroes: number; // sum of heroLevelCaps from the max Hero Hall level at thLevel
  guardians: number; // count × maxLevel for guardians (TH18 only)
  equipment: number; // sum of equipment levels gated by max Blacksmith level at thLevel
  pets: number; // sum of pet levels available at thLevel
  walls: number; // wallCount × max wall tier level at thLevel
  total: number; // sum of all above
}
```

### Known totals

| Town Hall | `total` |
| --------- | ------- |
| TH1       | 50      |
| TH10      | ~3,000+ |
| TH18      | 9,838   |

---

## Data Shape

The following interfaces represent the key fields on defense entities. Other entity types (troops,
spells, heroes, etc.) follow the same `Building<L>` root pattern with level-specific shapes.

```ts
interface BuildingLevel {
  level: number;
  hitpoints: number;
  buildCost: number;
  buildCostResource: ResourceType; // 'Gold' | 'Elixir' | 'Dark Elixir' | …
  buildTime: BuildTime; // { days, hours, minutes, seconds }
  xpGained: number;
}

interface HomeDefenseLevel extends BuildingLevel {
  townHallRequired: number;
  supercharge?: boolean;
  deathDamage?: number;
  stats: {
    normal: { dps?: number; damagePerShot?: number /* … */ };
    gearedUpBurst?: {
      /* … */
    };
    // … other mode variants
  };
  images: {
    normal: string; // e.g. "images/home/defenses/cannon/normal/level-1.png"
    gearedUpNormal?: string;
    gearedUpBurst?: string;
    gearedUpFastAttack?: string;
  };
}

interface HomeDefense {
  id: string; // e.g. "cannon"
  name: string; // e.g. "Cannon"
  description?: string;
  base: "home";
  category: "defense";
  size: string; // e.g. "3x3"
  targetType: "ground" | "air" | "both";
  modes: {
    normal?: DefenseMode;
    gearedUpBurst?: BurstDefenseMode;
    gearedUpFastAttack?: DefenseMode;
    // … other variants
  };
  gearUp?: GearUp;
  availablePerTownHall: TownHallAvailability[];
  levels: HomeDefenseLevel[];
}
```
