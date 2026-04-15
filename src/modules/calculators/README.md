# Calculators Module

The Calculators module provides pure, stateless utility functions for common Clash of Clans time and
cost calculations — gem costs, boost reductions, potion effects, Clock Tower savings, and Helper Hut
helper outputs. No game data querying is involved; all calculators take plain inputs and return
computed values.

All calculators are accessed through a top-level `calculators()` factory that returns a
`Calculators` namespace instance.

## Quick Start

```ts
import { calculators } from "clash-of-clans-data";

const calc = calculators();

// How many gems to finish a 7-day upgrade?
calc.gems().cost({ days: 7, hours: 0, minutes: 0, seconds: 0 }); // 1000

// Time remaining after applying a Builder Potion
calc.potions().builderPotion({ days: 1, hours: 0, minutes: 0, seconds: 0 });
// → { days: 0, hours: 14, minutes: 0, seconds: 0 }

// Reduced cost with a 15% Builder Boost
calc.boost().builderBoostCost(5_000_000, "Gold", 15); // → 4,250,000

// Time saved by a level-5 Clock Tower boost
calc.clockTower().boost({ days: 3, hours: 0, minutes: 0, seconds: 0 }, 5);
```

## Entry Point

```ts
import { calculators } from "clash-of-clans-data";

const calc = calculators(); // returns Calculators namespace
```

`calculators()` returns a `Calculators` instance. Each sub-namespace is accessed via a method call
(e.g. `calc.gems()`). The sub-namespaces are stateless — they can be called repeatedly without side
effects.

## Shared Types

```ts
interface BuildTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Boost tier — percentage discount applied to time or cost
type BoostTier = 10 | 15 | 20;

// Resources eligible for cost calculations
type BuildCostResource = "Gold" | "Elixir" | "Dark Elixir";
```

All time inputs and outputs use `BuildTime`. Instant (zero) durations are represented as
`{ days: 0, hours: 0, minutes: 0, seconds: 0 }`. Results are always clamped to zero — they will
never go negative.

---

## Sub-Calculator: `calculators().gems()` → `GemsCalculator`

Calculates gem cost to instantly complete any build or research timer.

**Formula:** `ceil(totalSeconds × 1000 / 604800)` (1000 gems = 1 week). Zero seconds always costs 0
gems.

### `cost(time: BuildTime): number`

```ts
const g = calc.gems();

g.cost({ days: 0, hours: 0, minutes: 0, seconds: 0 }); // 0
g.cost({ days: 0, hours: 1, minutes: 0, seconds: 0 }); // 6
g.cost({ days: 1, hours: 0, minutes: 0, seconds: 0 }); // 143
g.cost({ days: 7, hours: 0, minutes: 0, seconds: 0 }); // 1000
g.cost({ days: 14, hours: 0, minutes: 0, seconds: 0 }); // 2000
```

---

## Sub-Calculator: `calculators().boost()` → `BuildBoostCalculator`

Applies Builder Boost or Research Boost discounts to build/research times and costs.

The boost tier corresponds to the three available tiers: 10%, 15%, or 20%.

### Time Reduction

#### `builderBoost(time: BuildTime, tier: BoostTier): BuildTime`

Reduces build time by `tier`%.

```ts
const b = calc.boost();

b.builderBoost({ days: 5, hours: 12, minutes: 0, seconds: 0 }, 15);
// → { days: 4, hours: 16, minutes: 48, seconds: 0 }

b.builderBoost({ days: 10, hours: 0, minutes: 0, seconds: 0 }, 20);
// 20% off a 10-day build
```

#### `researchBoost(time: BuildTime, tier: BoostTier): BuildTime`

Reduces research time by `tier`%. Same formula as `builderBoost`.

```ts
b.researchBoost({ days: 8, hours: 0, minutes: 0, seconds: 0 }, 10);
// → { days: 7, hours: 4, minutes: 48, seconds: 0 }
```

### Cost Reduction

#### `builderBoostCost(cost: number, resource: BuildCostResource, tier: BoostTier): number`

Reduces a build cost by `tier`%. Result is floored to the nearest integer.

```ts
b.builderBoostCost(5_000_000, "Gold", 10); // → 4,500,000
b.builderBoostCost(5_000_000, "Gold", 15); // → 4,250,000
b.builderBoostCost(5_000_000, "Gold", 20); // → 4,000,000
```

#### `researchBoostCost(cost: number, resource: BuildCostResource, tier: BoostTier): number`

Reduces a research cost by `tier`%. Same formula as `builderBoostCost`.

---

## Sub-Calculator: `calculators().potions()` → `PotionsCalculator`

Applies time-reduction potions and snacks to a remaining build or research time. All methods
subtract a fixed number of hours from the input `BuildTime` and clamp to zero.

| Method                 | Hours Subtracted | Effect                                       |
| ---------------------- | ---------------- | -------------------------------------------- |
| `builderPotion(time)`  | 10 hours         | 10× builder speed for 1h (Builder Potion)    |
| `researchPotion(time)` | 24 hours         | 24× lab speed for 1h (Research Potion)       |
| `petPotion(time)`      | 24 hours         | 24× pet house speed for 1h (Pet Potion)      |
| `builderBite(time)`    | 2 hours          | 2× builder speed for 1h (Builder Bite snack) |
| `studySoup(time)`      | 4 hours          | 4× lab speed for 1h (Study Soup snack)       |

```ts
const p = calc.potions();
const buildTime = { days: 1, hours: 0, minutes: 0, seconds: 0 }; // 24h remaining

p.builderPotion(buildTime); // → { days: 0, hours: 14, minutes: 0, seconds: 0 }
p.builderBite(buildTime); // → { days: 0, hours: 22, minutes: 0, seconds: 0 }
p.studySoup(buildTime); // → { days: 0, hours: 20, minutes: 0, seconds: 0 }
p.researchPotion(buildTime); // → { days: 0, hours: 0, minutes: 0, seconds: 0 } (exactly zeroed)

// Clamped to zero — never negative
p.builderPotion({ days: 0, hours: 5, minutes: 0, seconds: 0 });
// → { days: 0, hours: 0, minutes: 0, seconds: 0 }
```

---

## Sub-Calculator: `calculators().clockTower()` → `ClockTowerCalculator`

Calculates Builder Base build time savings from the Clock Tower. Each Clock Tower level has a boost
duration (minutes of real time) and a `timeGainedMinutes` value (minutes of build progress completed
per real minute of boost).

Clock Tower levels range from **1 to 10**.

### `boost(remainingBuildTime: BuildTime, level: 1–10): BuildTime`

Time remaining after one full Clock Tower activation at the given level. The `timeGainedMinutes` for
that level is subtracted from the remaining build time.

```ts
const ct = calc.clockTower();

ct.boost({ days: 1, hours: 0, minutes: 0, seconds: 0 }, 1); // level 1 boost
ct.boost({ days: 1, hours: 0, minutes: 0, seconds: 0 }, 10); // level 10 boost (most savings)

// Already done — clamped to zero
ct.boost({ days: 0, hours: 0, minutes: 5, seconds: 0 }, 10);
// → { days: 0, hours: 0, minutes: 0, seconds: 0 }
```

### `potion(remainingBuildTime: BuildTime, level: 1–10): BuildTime`

Time remaining after using a Clock Tower Potion (which runs the Clock Tower for a fixed 30 minutes)
at the given level.

**Formula:** `minutesSaved = floor(timeGainedMinutes × 30 / boostDurationMinutes)`

```ts
ct.potion({ days: 1, hours: 0, minutes: 0, seconds: 0 }, 5);
// time remaining after a 30-min Clock Tower Potion at level 5
```

---

## Sub-Calculator: `calculators().helpers()` → `HelpersCalculator`

Calculates outputs for the four Helper Hut helpers: Lab Assistant, Builder's Apprentice, Alchemist,
and Prospector.

### `labAssistant(time: BuildTime, level: 1–12): BuildTime`

Reduces remaining research time by the Lab Assistant's `workRate` at the given level. The `workRate`
is the number of hours of lab progress completed per real hour of the assistant working (applied
once per session, not continuously).

```ts
const h = calc.helpers();

h.labAssistant({ days: 8, hours: 0, minutes: 0, seconds: 0 }, 1);
// → time reduced by workRate hours for level 1
h.labAssistant({ days: 8, hours: 0, minutes: 0, seconds: 0 }, 12);
// → time reduced by workRate hours for level 12 (maximum)
```

### `buildersApprentice(time: BuildTime, level: 1–8): BuildTime`

Reduces remaining build time by the Builder's Apprentice's `workRate` at the given level. Does not
affect the Apprentice's own build queue.

```ts
h.buildersApprentice({ days: 5, hours: 0, minutes: 0, seconds: 0 }, 4);
```

### `alchemist(goldOrElixir: number, level: 1–7): AlchemistResult`

Converts Gold or Elixir to Dark Elixir at a base rate of 150:1, with a bonus percentage added on top
for the given level. The input is automatically capped at the level's `goldElixirConversionMax`.

```ts
interface AlchemistResult {
  input: number; // actual amount used (capped at level max)
  base: number; // floor(input / 150) — base DE conversion
  bonus: number; // floor(base × bonusPercent / 100) — level bonus
  total: number; // base + bonus
}

h.alchemist(1_500_000, 1);
// → { input: 1500000, base: 10000, bonus: 0, total: 10000 }

h.alchemist(999_999_999, 1); // capped at level 1 max before calculation
```

### `prospector(level: 1): ProspectorResult`

Returns the maximum daily ore conversion amounts for the Prospector at the given level. Currently
only level 1 exists.

```ts
interface ProspectorResult {
  shinyOre: number; // max Shiny Ore per day
  glowyOre: number; // max Glowy Ore per day
  starryOre: number; // max Starry Ore per day
}

h.prospector(1);
// → { shinyOre: N, glowyOre: N, starryOre: N }
```

---

## Full Usage Example

```ts
import { calculators } from "clash-of-clans-data";

const calc = calculators();

// Plan an upgrade: 14-day build with a 15% boost applied
const originalTime = { days: 14, hours: 0, minutes: 0, seconds: 0 };
const boostedTime = calc.boost().builderBoost(originalTime, 15);
// → { days: 11, hours: 21, minutes: 36, seconds: 0 }

// Gem cost before and after boost
const gemsBefore = calc.gems().cost(originalTime); // 2000
const gemsAfter = calc.gems().cost(boostedTime); // 1700

// Apply a Builder Potion to the boosted time
const afterPotion = calc.potions().builderPotion(boostedTime);

// Reduced build cost with 15% boost
const originalCost = 18_000_000;
const reducedCost = calc.boost().builderBoostCost(originalCost, "Gold", 15);
// → 15,300,000
```
