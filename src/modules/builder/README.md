# Builder Base Module

The `builder` module is the entry point for all Builder Base game data — defenses, traps, walls,
troops, heroes, resource buildings, army buildings, other buildings, and leagues. All data is
accessed through a fluent, chainable query API that wraps typed JSON records.

Every category class extends `QueryBase<T>` and returns a new instance of the same class from both
per-building accessors and filter methods, allowing arbitrary chaining before calling a terminal
method.

---

## Quick Start

```ts
import { builder } from "clash-of-clans-data";

// Get the Double Cannon entity
const doubleCannon = builder().defenses().doubleCannon().first()!;
console.log(doubleCannon.name); // "Double Cannon"
console.log(doubleCannon.levels.length); // number of upgrade levels

// All defenses available at Builder Hall 6
const bhDefenses = builder().defenses().byBuilderHall(6).get();

// Find a league by trophy count
const league = builder().leagues().atTrophies(3200);
console.log(league?.name); // e.g. "Silver League I"

// Total upgradeable level slots at BH8
const counts = builder().levelCountAtBuilderHall(8);
console.log(counts.total); // overall total
console.log(counts.starLab); // sum of max troop levels gated by Star Lab
```

---

## Entry Point

```ts
import { builder } from "clash-of-clans-data";

const base = builder(); // BuilderBase instance
```

`builder()` is a factory function that returns a fresh `BuilderBase` instance. All category
accessors are called on this object.

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

### `builder().defenses()` — `BuilderBaseDefenses`

15 stationary defense buildings.

**Per-building accessors** (each returns `BuilderBaseDefenses` wrapping one building):

```ts
builder().defenses().cannon();
builder().defenses().doubleCannon();
builder().defenses().archerTower();
builder().defenses().hiddenTesla();
builder().defenses().firecrackers();
builder().defenses().crusher();
builder().defenses().guardPost();
builder().defenses().airBombs();
builder().defenses().multiMortar();
builder().defenses().ottosOutpost();
builder().defenses().roaster();
builder().defenses().giantCannon();
builder().defenses().megaTesla();
builder().defenses().lavaLauncher();
builder().defenses().xBow();
```

**Filter methods**:

| Method                         | Description                                                               |
| ------------------------------ | ------------------------------------------------------------------------- |
| `byBuilderHall(level: number)` | Defenses with at least one level available at or below the given BH level |
| `byDamageType(type)`           | Filter by normal mode damage type                                         |

---

### `builder().traps()` — `BuilderBaseTraps`

4 trap buildings.

**Per-building accessors**:

```ts
builder().traps().pushTrap();
builder().traps().springTrap();
builder().traps().mine();
builder().traps().megaMine();
```

**Filter methods**:

| Method                         | Description                                       |
| ------------------------------ | ------------------------------------------------- |
| `byBuilderHall(level: number)` | Traps available (count > 0) at the given BH level |

---

### `builder().walls()` — `BuilderBaseWalls`

Single Wall entity containing all upgrade levels.

```ts
builder().walls().wall().first()!; // Wall entity
```

---

### `builder().troops()` — `BuilderBaseTroops`

12 Builder Base troops trained in the Builder Barracks.

**Per-building accessors**:

```ts
builder().troops().ragedBarbarian();
builder().troops().sneakyArcher();
builder().troops().boxerGiant();
builder().troops().betaMinion();
builder().troops().bomber();
builder().troops().babyDragon();
builder().troops().cannonCart();
builder().troops().nightWitch();
builder().troops().dropShip();
builder().troops().powerPekka();
builder().troops().hogGlider();
builder().troops().electrofireWizard();
```

**Filter methods**:

| Method               | Description                                          |
| -------------------- | ---------------------------------------------------- |
| `byDamageType(type)` | Filter by troop damage type                          |
| `byTargetType(type)` | Filter by target type: `'ground'`, `'air'`, `'both'` |

---

### `builder().heroes()` — `BuilderBaseHeroes`

2 Builder Base heroes.

**Per-building accessors**:

```ts
builder().heroes().battleMachine();
builder().heroes().battleCopter();
```

**Filter methods**:

| Method                         | Description                                                   |
| ------------------------------ | ------------------------------------------------------------- |
| `byBuilderHall(level: number)` | Heroes with at least one level at or below the given BH level |

---

### `builder().resourceBuildings()` — `BuilderBaseResourceBuildings`

6 resource buildings.

**Per-building accessors**:

```ts
builder().resourceBuildings().goldMine();
builder().resourceBuildings().elixirCollector();
builder().resourceBuildings().goldStorage();
builder().resourceBuildings().elixirStorage();
builder().resourceBuildings().gemMine();
builder().resourceBuildings().bobControl();
```

**Filter methods**:

| Method                         | Description                                           |
| ------------------------------ | ----------------------------------------------------- |
| `byBuilderHall(level: number)` | Buildings available (count > 0) at the given BH level |

---

### `builder().armyBuildings()` — `BuilderBaseArmyBuildings`

7 army buildings.

**Per-building accessors**:

```ts
builder().armyBuildings().builderBarracks();
builder().armyBuildings().armyCamp();
builder().armyBuildings().starLaboratory();
builder().armyBuildings().battleMachineAltar();
builder().armyBuildings().battleCopterAltar();
builder().armyBuildings().reinforcementCamp();
builder().armyBuildings().healingHut();
```

**Filter methods**:

| Method                         | Description                                                |
| ------------------------------ | ---------------------------------------------------------- |
| `byBuilderHall(level: number)` | Army buildings available (count > 0) at the given BH level |

---

### `builder().otherBuildings()` — `BuilderBaseOtherBuildings`

Other Builder Base buildings — currently the Clock Tower.

```ts
builder().otherBuildings().clockTower();
```

**Filter methods**:

| Method                         | Description                                           |
| ------------------------------ | ----------------------------------------------------- |
| `byBuilderHall(level: number)` | Buildings available (count > 0) at the given BH level |

---

### `builder().builderHall()` — `BuilderBaseBuilderHall`

Single Builder Hall entity.

```ts
builder().builderHall().first()!; // BuilderHall entity
```

---

### `builder().leagues()` — `BuilderBaseLeagues`

42 Builder Base leagues spanning Wood V through Diamond.

```ts
builder().leagues().get(); // all 42 leagues
builder().leagues().find("wood-v"); // by ID
builder().leagues().findByName("Wood League V"); // by name
builder().leagues().byGroup("Silver").get(); // all Silver leagues
builder().leagues().atTrophies(3500); // league containing 3500 trophies
```

**Filter / lookup methods**:

| Method                                   | Description                                                                                                                                 |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `byGroup(group: BuilderBaseLeagueGroup)` | Filter to leagues in a specific group (e.g. `'Wood'`, `'Bronze'`, `'Silver'`, `'Gold'`, `'Crystal'`, `'Master'`, `'Champion'`, `'Diamond'`) |
| `atTrophies(trophies: number)`           | Return the single league that contains the given trophy count, or `undefined`. Diamond matches any value ≥ 6200.                            |

---

## `levelCountAtBuilderHall(bhLevel)`

Computes the total number of upgradeable level slots at a given Builder Hall level, broken down by
category. Useful for progress tracking and completion ratios.

```ts
const counts = builder().levelCountAtBuilderHall(8);
console.log(counts.total); // overall total
console.log(counts.structures); // defenses + army + resource buildings
console.log(counts.starLab); // sum of max troop levels gated by Star Lab level
console.log(counts.heroes); // sum of max hero levels at this BH level
console.log(counts.walls); // wallCount × max wall tier level
console.log(counts.traps); // count × maxLevel for traps
```

### Return type: `BuilderHallLevelCounts`

```ts
interface BuilderHallLevelCounts {
  structures: number; // count × maxLevel for defenses + army + resource buildings
  traps: number; // count × maxLevel for traps (0 at BH1)
  starLab: number; // sum of max troop levels gated by the Star Lab level at bhLevel
  heroes: number; // sum of max hero levels available at bhLevel
  walls: number; // wallCount × max wall tier level at bhLevel
  total: number; // sum of all above
}
```

### Known totals

| Builder Hall | `total` |
| ------------ | ------- |
| BH1          | 108     |
| BH5          | ~900+   |
| BH10         | 2,750   |

---

## Data Shape

The following interfaces represent the key fields on Builder Base entities.

```ts
interface BuilderDefenseLevel {
  level: number;
  hitpoints: number;
  buildCost: number;
  buildCostResource: ResourceType; // 'Builder Gold' | 'Builder Elixir'
  buildTime: BuildTime; // { days, hours, minutes, seconds }
  xpGained: number;
  builderHallRequired: number;
  stats: {
    normal: { dps?: number; damagePerShot?: number /* … */ };
  };
  images: {
    normal: string; // e.g. "images/builder/defenses/cannon/normal/level-1.png"
  };
}

interface BuilderDefense {
  id: string; // e.g. "cannon"
  name: string; // e.g. "Cannon"
  description?: string;
  base: "builder";
  category: "defense";
  size: string;
  targetType: "ground" | "air" | "both";
  modes: {
    normal: DefenseMode;
  };
  availablePerBuilderHall: BuilderHallAvailability[];
  levels: BuilderDefenseLevel[];
}
```
