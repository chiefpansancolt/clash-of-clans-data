# Ranked Battles Module

The Ranked Battles module provides all data for Clash of Clans' competitive ranked battle system —
the 35 leagues from Unranked to Legend, league floor restrictions per Town Hall level, difficulty
modifiers for the top leagues, per-TH loot tables, and bonus data for Town Halls below the ranked
participation threshold.

## Quick Start

```ts
import { rankedBattles } from "clash-of-clans-data";

const rb = rankedBattles();

// Total league count
rb.leagues().count(); // 35

// Get all Dragon leagues
rb.leagues().byGroup("Dragon").get(); // Dragon 28, 29, 30

// Minimum league for TH12
rb.floorForTownHall(12);

// Loot table for TH18
rb.loot(18);

// Leagues with attack/defense modifiers
rb.leagues().withDifficultyModifier().get(); // Electro 32, Electro 33, Legend
```

## Entry Point

```ts
import { rankedBattles } from "clash-of-clans-data";

const rb = rankedBattles(); // returns RankedBattles instance
```

`rankedBattles()` returns a `RankedBattles` instance. League queries go through `rb.leagues()`,
which returns a `RankedBattlesLeagues` query class. All other methods return plain arrays or single
values.

---

## Data Shape

### `RankedBattleLeague`

```ts
interface RankedBattleLeague {
  id: string; // kebab-slug, e.g. "dragon-30"
  name: string; // display name, e.g. "Dragon 30"
  leagueGroup: string; // group name, e.g. "Dragon"
  leagueNumber: number | null; // numeric rank within group; null for Unranked and Legend
  image: string; // relative image path
  attacksPerWeek: number | null; // attacks allowed per week; null for Unranked and Legend
  percentPromoted: number | null; // % of players promoted each week; null for bottom leagues
  percentDemoted: number | null; // % of players demoted each week; null for bottom leagues
}
```

### League Groups

The 35 leagues span 13 named groups:

| Group       | Leagues             |
| ----------- | ------------------- |
| `Unranked`  | Unranked            |
| `Skeleton`  | Skeleton 1, 2, 3    |
| `Barbarian` | Barbarian 4, 5, 6   |
| `Archer`    | Archer 7, 8, 9      |
| `Wizard`    | Wizard 10, 11, 12   |
| `Valkyrie`  | Valkyrie 13, 14, 15 |
| `Witch`     | Witch 16, 17, 18    |
| `Golem`     | Golem 19, 20, 21    |
| `PEKKA`     | PEKKA 22, 23, 24    |
| `Titan`     | Titan 25, 26, 27    |
| `Dragon`    | Dragon 28, 29, 30   |
| `Electro`   | Electro 31, 32, 33  |
| `Legend`    | Legend              |

---

## League Queries: `rb.leagues()` → `RankedBattlesLeagues`

`RankedBattlesLeagues` extends `QueryBase<RankedBattleLeague>`. All filter methods return a new
`RankedBattlesLeagues` instance and can be chained.

### Filter Methods

#### `byGroup(group: LeagueGroup): RankedBattlesLeagues`

Filter to leagues belonging to a specific group. Must be an exact group name (case-sensitive).

```ts
rb.leagues().byGroup("Dragon").get(); // Dragon 28, Dragon 29, Dragon 30
rb.leagues().byGroup("Electro").count(); // 3
rb.leagues().byGroup("Legend").first()!; // the single Legend league
rb.leagues().byGroup("Unranked").first()!; // Unranked
```

#### `byName(query: string): RankedBattlesLeagues`

Case-insensitive partial name search. Matches any league whose full name contains the query string.

```ts
rb.leagues().byName("Dragon").get(); // Dragon 28, Dragon 29, Dragon 30
rb.leagues().byName("Dragon 30").first()!; // only Dragon 30
rb.leagues().byName("electro").get(); // Electro 31, 32, 33 (case-insensitive)
rb.leagues().byName("30").get(); // Dragon 30, Golem 30 — any league containing "30"
```

#### `withDifficultyModifier(): RankedBattlesLeagues`

Filter to leagues that have attack or defense stat modifiers applied during battles. Currently:
Electro 32, Electro 33, and Legend.

```ts
rb.leagues().withDifficultyModifier().get(); // 3 leagues
rb.leagues().withDifficultyModifier().count(); // 3
```

### Chaining Examples

```ts
// The single Dragon 30 entry
rb.leagues().byGroup("Dragon").byName("30").first()!;

// Does Electro 31 have a difficulty modifier?
const e31 = rb.leagues().byName("Electro 31").first()!;
rb.leagues().withDifficultyModifier().find(e31.id) !== undefined; // false — only 32, 33, Legend
```

### QueryBase Terminal Methods

| Method                     | Return type                       | Description                         |
| -------------------------- | --------------------------------- | ----------------------------------- |
| `get()`                    | `RankedBattleLeague[]`            | All matched leagues                 |
| `first()`                  | `RankedBattleLeague \| undefined` | First matched league                |
| `find(id: string)`         | `RankedBattleLeague \| undefined` | Exact ID match (e.g. `"dragon-30"`) |
| `findByName(name: string)` | `RankedBattleLeague \| undefined` | Case-insensitive exact name match   |
| `count()`                  | `number`                          | Number of matched leagues           |

```ts
rb.leagues().find("dragon-30"); // by exact ID
rb.leagues().findByName("Dragon 30"); // by exact name
rb.leagues().count(); // 35
```

---

## League Floor: `rb.leagueFloor()` and `rb.floorForTownHall()`

The league floor is the minimum league a player at a given Town Hall cannot be demoted below. Covers
TH7–18.

### `LeagueFloorEntry`

```ts
interface LeagueFloorEntry {
  townHallLevel: number; // 7–18
  leagueId: string; // the minimum league ID, e.g. "skeleton-1"
}
```

### `leagueFloor(): LeagueFloorEntry[]`

All floor entries, one per Town Hall level (TH7–18).

```ts
rb.leagueFloor(); // 12 entries, TH7–18
```

### `floorForTownHall(townHallLevel: number): LeagueFloorEntry | undefined`

Returns the floor entry for a specific Town Hall, or `undefined` for TH < 7 (cannot participate in
ranked battles).

```ts
rb.floorForTownHall(7); // { townHallLevel: 7, leagueId: "skeleton-1" }
rb.floorForTownHall(18); // { townHallLevel: 18, leagueId: "..." }
rb.floorForTownHall(6); // undefined — TH6 cannot participate
rb.floorForTownHall(1); // undefined
```

---

## Difficulty Modifiers: `rb.difficultyModifiers()`

The top three leagues apply combat difficulty modifiers that boost defending buildings/heroes and
penalise attacking heroes. Returns 3 entries.

### `DifficultyModifier`

```ts
interface DifficultyModifier {
  leagueId: string; // "electro-32" | "electro-33" | "legend"
  modifier: string; // label, e.g. "Expert" | "Master" | "Legend"
  defenseDpsBonus: number | null; // % DPS bonus for defending buildings
  defendingHeroDpsHpBonus: number | null; // % DPS+HP bonus for defending heroes
  attackingHeroDpsHpPenalty: number | null; // % DPS+HP penalty for attacking heroes
}
```

```ts
rb.difficultyModifiers(); // 3 entries

// Check if a league has a modifier
const mods = rb.difficultyModifiers();
const legendMod = mods.find((m) => m.leagueId === "legend");
```

---

## Loot Tables: `rb.loot(townHallLevel)`

Per-league loot data for a specific Town Hall level. Returns an empty array for TH levels without
data (below TH7).

Note: TH8 data starts from Skeleton 2 (Skeleton 1 data was not available in the source).

### `RankedBattleLootEntry`

```ts
interface RankedBattleLootEntry {
  leagueId: string; // which league this entry applies to
  underfloor: boolean; // true if this league is below the TH's floor
  maxAvailableLoot: {
    goldAndElixir: number | null; // max Gold/Elixir available in enemy base
    darkElixir: number | null; // max Dark Elixir available in enemy base
  };
  maxLeagueBonus: {
    goldAndElixir: number | null;
    darkElixir: number | null;
  };
  starBonus: {
    goldAndElixir: number;
    darkElixir: number;
    shinyOre: number;
    glowyOre: number;
    starryOre: number;
  };
}
```

```ts
rb.loot(18); // all 35 league entries for TH18
rb.loot(7); // entries for TH7
rb.loot(6); // [] — no data below TH7

// Max loot in Legend league for TH18
const th18Loot = rb.loot(18);
const legendEntry = th18Loot.find((e) => e.leagueId === "legend");
```

---

## Lower TH Bonuses: `rb.lowerThBonuses()`

Star bonus and league bonus data for Town Halls that cannot participate in ranked leagues (TH2–6).
These players still receive Gold and Elixir bonuses from stars.

### `LowerThBonus`

```ts
interface LowerThBonus {
  townHallLevel: number; // 2–6
  maxLeagueBonus: number; // Gold/Elixir bonus per attack
  starBonus: number; // bonus for winning Star Bonus
}
```

```ts
rb.lowerThBonuses(); // 5 entries (TH2–TH6)
```

---

## Full Usage Example

```ts
import { rankedBattles } from "clash-of-clans-data";

const rb = rankedBattles();

// Show all leagues with their promotion rates
for (const league of rb.leagues().get()) {
  const promoted = league.percentPromoted ?? "N/A";
  console.log(`${league.name}: ${promoted}% promoted`);
}

// For a TH15 player — what's their floor?
const floor = rb.floorForTownHall(15);
if (floor) {
  const floorLeague = rb.leagues().find(floor.leagueId);
  console.log(`TH15 minimum league: ${floorLeague?.name}`);
}

// Legend league modifier
const mods = rb.difficultyModifiers();
const legend = mods.find((m) => m.leagueId === "legend")!;
console.log(`Legend defense DPS bonus: ${legend.defenseDpsBonus}%`);

// TH18 star bonus in Legend
const loot = rb.loot(18);
const legendLoot = loot.find((e) => e.leagueId === "legend");
console.log("Star bonus ore:", legendLoot?.starBonus.glowyOre);
```
