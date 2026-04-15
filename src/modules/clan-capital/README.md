# Clan Capital Module

The `clanCapital` module is the entry point for all Clan Capital game data — defenses, army
buildings (barracks and spell factories), spells, troops, walls, other buildings (houses), the
Capital Hall, District Halls, and Raid Weekend leagues. All data is accessed through a fluent,
chainable query API that wraps typed JSON records.

The Clan Capital is divided into districts (Capital Peak plus up to 8 additional districts), each
unlocked progressively as the Capital Hall is upgraded. Every category class extends `QueryBase<T>`
and returns a new instance from both per-building accessors and filter methods, allowing arbitrary
chaining before calling a terminal method.

---

## Quick Start

```ts
import { clanCapital } from "clash-of-clans-data";

// Get all Clan Capital defenses
const defenses = clanCapital().defenses().get();
console.log(defenses.length); // 21

// Air-targeting defenses only
const airDefenses = clanCapital().defenses().byTargetType("air").get();

// Find a specific troop
const superBarbarian = clanCapital().troops().superBarbarian().first()!;

// Look up a Raid Weekend league by trophy count
const league = clanCapital().leagues().atTrophies(2800);
console.log(league?.name);

// Progress breakdown at Capital Hall 8
const counts = clanCapital().levelCountAtClanCapital(8);
console.log(counts.total); // overall total
console.log(counts.capitalPeak.structures); // Capital Peak structure levels
console.log(counts.barbarianCamp.total); // Barbarian Camp district total
```

---

## Entry Point

```ts
import { clanCapital } from "clash-of-clans-data";

const capital = clanCapital(); // ClanCapital instance
```

`clanCapital()` is a factory function that returns a fresh `ClanCapital` instance. All category
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

### `clanCapital().defenses()` — `ClanCapitalDefenses`

21 Clan Capital stationary defense buildings spread across all districts.

**Per-building accessors** (each returns `ClanCapitalDefenses` wrapping one building):

```ts
clanCapital().defenses().cannon();
clanCapital().defenses().spearThrower();
clanCapital().defenses().airDefense();
clanCapital().defenses().multiCannon();
clanCapital().defenses().bombTower();
clanCapital().defenses().multiMortar();
clanCapital().defenses().airBombs();
clanCapital().defenses().blastBow();
clanCapital().defenses().raidCartPost();
clanCapital().defenses().rapidRockets();
clanCapital().defenses().crusher();
clanCapital().defenses().giantCannon();
clanCapital().defenses().goblinThrower();
clanCapital().defenses().hiddenMegaTesla();
clanCapital().defenses().infernoTower();
clanCapital().defenses().miniMinionHive();
clanCapital().defenses().superDragonPost();
clanCapital().defenses().superGiantPost();
clanCapital().defenses().superWizardTower();
clanCapital().defenses().rocketArtillery();
clanCapital().defenses().reflector();
```

**Filter methods**:

| Method                         | Description                                                                         |
| ------------------------------ | ----------------------------------------------------------------------------------- |
| `byTargetType(type)`           | Filter by target type: `'ground'`, `'air'`, `'both'`                                |
| `byCapitalHall(level: number)` | Defenses with at least one level available at or below the given Capital Hall level |

---

### `clanCapital().armyBuildings()` — `ClanCapitalArmyBuildings`

Army buildings including Army Camp, Spell Storage, barracks (one per troop type), and spell
factories.

The generic `get()` method covers Army Camp and Spell Storage. Barracks and spell factories are
accessed through dedicated sub-accessors that return their own typed query classes.

**Top-level accessors**:

```ts
clanCapital().armyBuildings().armyCamp();
clanCapital().armyBuildings().spellStorage();
clanCapital().armyBuildings().barracks(); // ClanCapitalBarracks — all 18 barracks
clanCapital().armyBuildings().spellFactories(); // ClanCapitalSpellFactories — all 7 spell factories
```

**Finding a specific barracks or spell factory**:

```ts
clanCapital().armyBuildings().barracks().find("super-barbarian-barracks");
clanCapital().armyBuildings().spellFactories().find("rage-spell-factory");
```

**Filter methods on `ClanCapitalArmyBuildings`**:

| Method                         | Description                                    |
| ------------------------------ | ---------------------------------------------- |
| `byDistrict(district: string)` | Army buildings available in the given district |

---

### `clanCapital().troops()` — `ClanCapitalTroops`

18 Clan Capital troops, each trained in its own barracks.

**Per-building accessors**:

```ts
clanCapital().troops().superBarbarian();
clanCapital().troops().sneakyArcher();
clanCapital().troops().superGiant();
clanCapital().troops().battleRam();
clanCapital().troops().minionHorde();
clanCapital().troops().superWizard();
clanCapital().troops().rocketBalloon();
clanCapital().troops().skeletonBarrels();
clanCapital().troops().flyingFortress();
clanCapital().troops().raidCart();
clanCapital().troops().powerPekka();
clanCapital().troops().hogGlider();
clanCapital().troops().hogRider();
clanCapital().troops().infernoDragon();
clanCapital().troops().megaSparky();
clanCapital().troops().mountainGolem();
clanCapital().troops().superDragon();
clanCapital().troops().superMiner();
```

---

### `clanCapital().spells()` — `ClanCapitalSpells`

7 Clan Capital spells, each brewed in its own spell factory.

**Per-building accessors**:

```ts
clanCapital().spells().healingSpell();
clanCapital().spells().jumpSpell();
clanCapital().spells().lightningSpell();
clanCapital().spells().frostSpell();
clanCapital().spells().rageSpell();
clanCapital().spells().graveyardSpell();
clanCapital().spells().endlessHasteSpell();
```

---

### `clanCapital().walls()` — `ClanCapitalWalls`

Single Wall entity containing all upgrade levels across all districts.

```ts
clanCapital().walls().wall().first()!; // Wall entity
```

---

### `clanCapital().capitalHall()` — `ClanCapitalCapitalHall`

Single Capital Hall entity.

```ts
clanCapital().capitalHall().first()!; // CapitalHall entity
```

---

### `clanCapital().districtHall()` — `ClanCapitalDistrictHall`

Single District Hall entity containing level data for all districts.

```ts
clanCapital().districtHall().first()!; // DistrictHall entity
```

---

### `clanCapital().other()` — `ClanCapitalOther`

Other Clan Capital buildings. Currently contains houses.

```ts
clanCapital().other().houses().get(); // all house entities
```

---

### `clanCapital().leagues()` — `ClanCapitalLeagues`

Clan Capital Raid Weekend leagues.

```ts
clanCapital().leagues().get(); // all leagues
clanCapital().leagues().find("gold-league-i"); // by ID
clanCapital().leagues().findByName("Gold League I"); // by name
clanCapital().leagues().byGroup("Master").get(); // all Master leagues
clanCapital().leagues().atTrophies(2800); // league for 2800 trophies
```

**Filter / lookup methods**:

| Method                                   | Description                                                                                                                      |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `byGroup(group: ClanCapitalLeagueGroup)` | Filter to leagues in a specific group (e.g. `'Bronze'`, `'Silver'`, `'Gold'`, `'Crystal'`, `'Master'`, `'Champion'`, `'Legend'`) |
| `atTrophies(trophies: number)`           | Return the single league containing the given trophy count, or `undefined`. Legend matches any value ≥ 5000.                     |

---

## `levelCountAtClanCapital(capitalHallLevel)`

Computes the total number of upgradeable level slots at a given Capital Hall level, broken down by
district and top-level totals for troops and spells. Each district object reports
`{ structures, walls, total }`.

```ts
const counts = clanCapital().levelCountAtClanCapital(7);
console.log(counts.total); // overall total
console.log(counts.capitalPeak.structures); // structure levels in Capital Peak
console.log(counts.capitalPeak.walls); // wall levels in Capital Peak
console.log(counts.barbarianCamp.total); // Barbarian Camp combined total
console.log(counts.troops); // sum of max troop levels
console.log(counts.spells); // sum of max spell levels
```

### Return type: `ClanCapitalLevelCounts`

```ts
interface ClanCapitalDistrictCounts {
  structures: number; // sum of (count × maxLevel) for all buildings in the district
  walls: number; // wallCount × max wall tier level in the district
  total: number; // structures + walls
}

interface ClanCapitalLevelCounts {
  capitalPeak: ClanCapitalDistrictCounts; // always active
  barbarianCamp: ClanCapitalDistrictCounts; // unlocks at CH2
  wizardValley: ClanCapitalDistrictCounts; // unlocks at CH3
  balloonLagoon: ClanCapitalDistrictCounts; // unlocks at CH4
  buildersWorkshop: ClanCapitalDistrictCounts; // unlocks at CH5
  dragonCliffs: ClanCapitalDistrictCounts; // unlocks at CH6
  golemQuarry: ClanCapitalDistrictCounts; // unlocks at CH7
  skeletonPark: ClanCapitalDistrictCounts; // unlocks at CH8
  goblinMines: ClanCapitalDistrictCounts; // unlocks at CH9 (future)
  troops: number; // sum of max troop levels gated by global max District Hall level
  spells: number; // sum of max spell levels gated by global max District Hall level
  total: number; // sum of all district totals + troops + spells
}
```

### Known totals

| Capital Hall | `total` | Notes                                          |
| ------------ | ------- | ---------------------------------------------- |
| CH1          | 92      | Capital Peak only: 12 structures + 80 walls    |
| CH2          | ~167    | Adds Barbarian Camp (25 structures + 50 walls) |
| CH10         | 9,658   | All districts active                           |

---

## District Unlock Order

| District           | Unlocks at Capital Hall |
| ------------------ | ----------------------- |
| Capital Peak       | CH1 (always active)     |
| Barbarian Camp     | CH2                     |
| Wizard Valley      | CH3                     |
| Balloon Lagoon     | CH4                     |
| Builder's Workshop | CH5                     |
| Dragon Cliffs      | CH6                     |
| Golem Quarry       | CH7                     |
| Skeleton Park      | CH8                     |
| Goblin Mines       | CH9                     |

---

## Data Shape

The following interfaces represent the key fields on Clan Capital entities.

```ts
interface ClanCapitalDefenseLevel {
  level: number;
  hitpoints: number;
  buildCost: number;
  buildCostResource: "Capital Gold";
  buildTime: BuildTime; // { days, hours, minutes, seconds }
  capitalHallRequired?: number; // levels gated by Capital Hall
  districtHallRequired?: number; // levels gated by District Hall
  stats: {
    normal: { dps?: number; damagePerShot?: number /* … */ };
  };
  images: {
    normal: string; // e.g. "images/clan-capital/defenses/cannon/normal/level-1.png"
  };
}

interface ClanCapitalDefense {
  id: string; // e.g. "cannon"
  name: string; // e.g. "Cannon"
  description?: string;
  base: "clan_capital";
  category: "defense";
  size: string;
  targetType: "ground" | "air" | "both";
  district: string; // e.g. "capitalPeak", "barbarianCamp"
  modes: {
    normal: DefenseMode;
  };
  availablePerCapitalHall?: { capitalHallLevel: number; count: number }[];
  availablePerDistrict?: { district: string; count: number }[];
  levels: ClanCapitalDefenseLevel[];
}
```
