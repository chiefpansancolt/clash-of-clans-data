# Clan Capital Module

The `clanCapital` module is the entry point for all Clan Capital game data — defenses, traps, army
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

// All traps targeting both ground and air
const bothTraps = clanCapital().traps().byTargetType("both").get();

// Traps available in Goblin Mines
const goblinMinesTraps = clanCapital().traps().byDistrict("goblinMines").get();

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

### `clanCapital().traps()` — `ClanCapitalTraps`

5 Clan Capital traps spread across the districts.

**Per-building accessors** (each returns `ClanCapitalTraps` wrapping one trap):

```ts
clanCapital().traps().mine();
clanCapital().traps().megaMine();
clanCapital().traps().logTrap();
clanCapital().traps().zapTrap();
clanCapital().traps().spearTrap();
```

**Filter methods**:

| Method                         | Description                                          |
| ------------------------------ | ---------------------------------------------------- |
| `byTargetType(type)`           | Filter by target type: `'ground'`, `'air'`, `'both'` |
| `byDistrict(district: string)` | Filter to traps available in the given district      |

**Trap overview**:

| Trap       | Size | Target | Damage Type      | Levels | Districts available in                                                       |
| ---------- | ---- | ------ | ---------------- | ------ | ---------------------------------------------------------------------------- |
| Mine       | 1×1  | Both   | Splash           | 5      | All 8 districts                                                              |
| Mega Mine  | 2×2  | Both   | Splash           | 5      | 6 districts (excl. Dragon Cliffs, Golem Quarry)                              |
| Log Trap   | 2×2  | Ground | Splash           | 5      | 7 districts (excl. Barbarian Camp)                                           |
| Zap Trap   | 1×1  | Both   | Single           | 5      | Builder's Workshop, Dragon Cliffs, Golem Quarry, Skeleton Park, Goblin Mines |
| Spear Trap | 2×2  | Both   | Single (×spears) | 4      | Goblin Mines only                                                            |

The Spear Trap fires multiple spears per trigger — the per-level `projectileCount` field records how
many spears are launched (4 at level 1, up to 7 at level 4).

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

17 Clan Capital troops, each trained in its own barracks.

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
clanCapital().troops().hogRaiders();
clanCapital().troops().infernoDragon();
clanCapital().troops().megaSparky();
clanCapital().troops().mountainGolem();
clanCapital().troops().superDragon();
clanCapital().troops().superMiner();
```

**`unitName` field** — troops that deploy as a group carry an optional `unitName` identifying the
individual unit:

| Troop            | `unitName`          |
| ---------------- | ------------------- |
| Minion Horde     | `"Minion"`          |
| Skeleton Barrels | `"Skeleton Barrel"` |
| Hog Raiders      | `"Hog Glider"`      |

**`subUnits` field** — troops composed of multiple distinct unit types embed their secondary units
here. Each sub-unit has its own `name`, `damageType`, `targetType`, `movementSpeed`, `attackSpeed?`,
`range?`, `preferredTarget?`, and `levels[]`:

```ts
const hogRaiders = clanCapital().troops().hogRaiders().first()!;
hogRaiders.unitName; // "Hog Glider" — primary unit
hogRaiders.levels; // Hog Glider level data
hogRaiders.subUnits![0].name; // "Hog Rider"
hogRaiders.subUnits![0].levels; // Hog Rider level data
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

### `clanCapital().forge()` — `ClanCapitalForge`

Clan Capital Forge data — daily forge rewards, auto forge and forge resource conversion rates,
available manual forge slots, and crafting time.

```ts
const forge = clanCapital().forge();

// Daily forge reward at a specific TH level
forge.dailyForgeAtTownHall(12)?.capitalGoldObtained; // 450

// All daily forge entries (TH6–18)
forge.dailyForge();

// Crafting time shared by Auto Forge and Forge
forge.craftingTime(); // { days: 3, hours: 0, minutes: 0, seconds: 0 }

// How many manual forge slots are available at TH11
forge.availableForgesAtTownHall(11); // 2

// All slot tiers and their TH requirements
forge.availableForges();

// Auto Forge conversion rate at TH10 (includes Gold Pass price)
forge.autoForgeAtTownHall(10);
// { townHallLevel: 10, goldElixirCost: 3600000, goldElixirCostGoldPass: 1800000, capitalGoldObtained: 1200 }

// Auto Forge conversion rate at BH9
forge.autoForgeAtBuilderHall(9);
// { builderHallLevel: 9, builderGoldElixirCost: 2400000, builderGoldElixirCostGoldPass: 1200000, capitalGoldObtained: 1600 }

// Forge (full cost, no Gold Pass discount) at TH13
forge.forgeAtTownHall(13);
// { townHallLevel: 13, goldElixirCost: 6000000, darkElixirCost: 60000, capitalGoldObtained: 2000 }

// All Auto Forge and Forge rates (home + builder)
forge.autoForge(); // { home: [...], builder: [...] }
forge.forgeRates(); // { home: [...], builder: [...] }
```

**Methods**:

| Method                          | Description                                                                      |
| ------------------------------- | -------------------------------------------------------------------------------- |
| `dailyForge()`                  | All daily forge entries (TH6–18)                                                 |
| `dailyForgeAtTownHall(th)`      | Daily forge entry for a specific Town Hall level                                 |
| `craftingTime()`                | 3-day crafting time shared by Auto Forge and Forge                               |
| `availableForges()`             | All slot tiers with TH level required to unlock                                  |
| `availableForgesAtTownHall(th)` | Number of manual forge slots available at a given TH level                       |
| `autoForge()`                   | All Auto Forge rates `{ home: [...], builder: [...] }`                           |
| `autoForgeAtTownHall(th)`       | Auto Forge home village entry for a specific TH level (includes Gold Pass price) |
| `autoForgeAtBuilderHall(bh)`    | Auto Forge builder base entry for a specific BH level (includes Gold Pass price) |
| `forgeRates()`                  | All Forge rates `{ home: [...], builder: [...] }` (no Gold Pass discount)        |
| `forgeAtTownHall(th)`           | Forge home village entry for a specific TH level                                 |
| `forgeAtBuilderHall(bh)`        | Forge builder base entry for a specific BH level                                 |

**Notes**:

- Auto Forge has a 50% Gold Pass discount (`goldElixirCostGoldPass`, `darkElixirCostGoldPass`,
  `builderGoldElixirCostGoldPass`)
- Forge has no Gold Pass discount — standard cost only
- Dark Elixir conversion is available from TH13+
- Builder base conversions use Builder Gold / Builder Elixir (BH8–10)
- Available manual forge slots: 1 at TH9, 2 at TH11, 3 at TH12, 4 at TH14

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
  structures: number; // sum of (count × maxLevel) for all buildings and traps in the district
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
| CH2          | 167     | Adds Barbarian Camp (27 structures + 50 walls) |
| CH10         | 10,310  | All districts active                           |

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

interface ClanCapitalTrapLevel {
  level: number;
  damage: number;
  projectileCount?: number; // spears fired per trigger (Spear Trap only)
  buildCost: number;
  buildCostResource: "Capital Gold";
  buildTime: BuildTime;
  xpGained: number;
  capitalHallRequired: number;
  districtHallRequired: number;
  images: {
    normal: string; // e.g. "images/clan-capital/traps/mine/normal/level-1.png"
    air?: string; // alternate air-mode image (Mine, Mega Mine)
  };
}

interface ClanCapitalTrap {
  id: string; // e.g. "mine", "log-trap"
  name: string; // e.g. "Mine", "Log Trap"
  description?: string;
  base: "clan_capital";
  category: "trap";
  size: string;
  triggerRadius: number; // activation radius in tiles
  damageRadius?: number; // blast radius in tiles (Mine, Mega Mine)
  damageType: "splash" | "single";
  targetType: "ground" | "air" | "both";
  favoriteTarget?: string;
  availablePerCapitalHall?: { capitalHallLevel: number; count: number }[];
  availablePerDistrict: {
    district: string;
    countPerDistrictHall: number[]; // index 0 = DH1, index 1 = DH2, etc.
  }[];
  levels: ClanCapitalTrapLevel[];
}
```
