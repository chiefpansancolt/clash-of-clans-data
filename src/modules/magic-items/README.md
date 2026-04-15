# Magic Items Module

The Magic Items module provides structured data for all in-game Clash of Clans magic items —
consumables that can be purchased or earned to skip timers, upgrade units for free, or provide other
special effects. Items are divided into five categories: books, hammers, potions, snacks, and
utilities. Each category exposes a fluent query API and per-item accessor methods.

## Quick Start

```ts
import { magicItems } from "clash-of-clans-data";

const mi = magicItems();

// Find a book by name
mi.books().findByName("Book of Heroes");

// All potions
mi.potions().get();

// A specific hammer
mi.hammers().hammerOfBuilding().first();

// Count snacks
mi.snacks().count(); // 5

// Iterate all utilities
for (const u of mi.utilities().get()) {
  console.log(u.name, u.description);
}
```

## Entry Point

```ts
import { magicItems } from "clash-of-clans-data";

const mi = magicItems(); // returns MagicItems namespace
```

`magicItems()` returns a `MagicItems` instance with five category accessors. Each category returns a
query class that extends `QueryBase<MagicItem>` and adds per-item accessor methods and optional
filter methods.

---

## Shared Data Shape

All magic items share the following base fields. Category-specific fields are noted in each section
below.

```ts
interface MagicItem {
  id: string; // kebab-slug, e.g. "book-of-heroes"
  name: string; // display name, e.g. "Book of Heroes"
  description: string; // in-game description text
  itemType: string; // "book" | "hammer" | "potion" | "snack" | "utility"
  image: string; // relative image path, e.g. "images/magic-items/books/book-of-heroes.png"
  maxCapacity?: number; // max storable quantity (present on most items)
  sellingPrice?: number; // gems received when selling (present on most items)
  effect: object; // category-specific effect shape (see below)
}
```

---

## Sub-Category: `magicItems().books()` → `MagicItemBooks`

Books instantly complete any in-progress upgrade timer for a specific category of entity.

### Available Books (5 total)

| Accessor             | Name               | Applies To      |
| -------------------- | ------------------ | --------------- |
| `bookOfFighting()`   | Book of Fighting   | troops          |
| `bookOfBuilding()`   | Book of Building   | buildings       |
| `bookOfSpells()`     | Book of Spells     | spells          |
| `bookOfHeroes()`     | Book of Heroes     | heroes-and-pets |
| `bookOfEverything()` | Book of Everything | any             |

### Effect Shape

```ts
interface BookEffect {
  type: "instant-complete";
  appliesTo: "troops" | "buildings" | "spells" | "heroes-and-pets" | "any";
}
```

### Filter Method

#### `byAppliesTo(appliesTo: string): MagicItemBooks`

Filter to books that apply to the given upgrade type.

```ts
mi.books().byAppliesTo("heroes-and-pets").get(); // Book of Heroes + Book of Everything
mi.books().byAppliesTo("any").first(); // Book of Everything only
```

### QueryBase Terminal Methods

```ts
mi.books().count(); // 5
mi.books().find("book-of-heroes"); // by ID
mi.books().findByName("Book of Heroes"); // by name (case-insensitive)
mi.books().bookOfHeroes().first()!; // direct accessor → single-item query
mi.books().bookOfEverything().first()!; // works for heroes, pets, buildings, troops, spells
```

---

## Sub-Category: `magicItems().hammers()` → `MagicItemHammers`

Hammers instantly upgrade a building, troop, spell, or hero/pet to the next level without consuming
resources.

### Available Hammers (4 total)

| Accessor             | Name               | Applies To      |
| -------------------- | ------------------ | --------------- |
| `hammerOfFighting()` | Hammer of Fighting | troops          |
| `hammerOfBuilding()` | Hammer of Building | buildings       |
| `hammerOfSpells()`   | Hammer of Spells   | spells          |
| `hammerOfHeroes()`   | Hammer of Heroes   | heroes-and-pets |

### Effect Shape

```ts
interface HammerEffect {
  type: "instant-upgrade";
  appliesTo: "troops" | "buildings" | "spells" | "heroes-and-pets";
}
```

### Filter Method

#### `byAppliesTo(appliesTo: string): MagicItemHammers`

Filter to hammers that apply to the given upgrade type.

```ts
mi.hammers().byAppliesTo("buildings").first()!; // Hammer of Building
mi.hammers().byAppliesTo("troops").first()!; // Hammer of Fighting
```

### QueryBase Terminal Methods

```ts
mi.hammers().count(); // 4
mi.hammers().find("hammer-of-building");
mi.hammers().findByName("Hammer of Spells");
mi.hammers().hammerOfHeroes().first()!;
```

---

## Sub-Category: `magicItems().potions()` → `MagicItemPotions`

Potions temporarily boost worker or lab speed, or provide other time-based effects for 60 minutes of
real time.

### Available Potions (8 total)

| Accessor             | Name               | Effect                          |
| -------------------- | ------------------ | ------------------------------- |
| `builderPotion()`    | Builder Potion     | 10× builder speed for 1h        |
| `researchPotion()`   | Research Potion    | 24× lab speed for 1h            |
| `petPotion()`        | Pet Potion         | 24× pet house speed for 1h      |
| `heroPotion()`       | Hero Potion        | temporarily boosts hero stats   |
| `powerPotion()`      | Power Potion       | temporarily boosts troop stats  |
| `resourcePotion()`   | Resource Potion    | boosts resource production      |
| `clockTowerPotion()` | Clock Tower Potion | runs Clock Tower for 30 minutes |
| `superPotion()`      | Super Potion       | enables Super Troops for 3 days |

### Effect Shape

```ts
interface PotionEffect {
  type: "time-reduction" | "stat-boost" | "resource-boost" | "super-troop" | string;
  multiplier?: number; // speed multiplier (e.g. 10 for Builder Potion)
  durationHours?: number; // real-time duration (e.g. 1)
  appliesTo?: string; // "builders" | "lab" | "pet-house" | etc.
}
```

### Filter Method

#### `byEffectType(type: string): MagicItemPotions`

Filter to potions with a matching `effect.type`.

```ts
mi.potions().byEffectType("time-reduction").get(); // Builder, Research, Pet potions
```

### QueryBase Terminal Methods

```ts
mi.potions().count(); // 8
mi.potions().find("builder-potion");
mi.potions().findByName("Research Potion");
mi.potions().builderPotion().first()!;
mi.potions().clockTowerPotion().first()!;
```

---

## Sub-Category: `magicItems().snacks()` → `MagicItemSnacks`

Snacks are lighter, single-use consumables similar to potions — they apply a speed multiplier for 1
hour but have lower multipliers and no gem selling price.

### Available Snacks (5 total)

| Accessor           | Name             | Effect                                  |
| ------------------ | ---------------- | --------------------------------------- |
| `builderBite()`    | Builder Bite     | 2× builder speed for 1h                 |
| `studySoup()`      | Study Soup       | 4× lab speed for 1h                     |
| `mightyMorsel()`   | Mighty Morsel    | boosts hero regeneration                |
| `powerPancakes()`  | Power Pancakes   | temporarily boosts troop stats          |
| `clanCastleCake()` | Clan Castle Cake | boosts Clan Castle capacity temporarily |

### Effect Shape

```ts
interface SnackEffect {
  type: "time-reduction" | "stat-boost" | string;
  multiplier?: number;
  durationHours?: number;
  appliesTo?: string;
}
```

### Filter Method

#### `byEffectType(type: string): MagicItemSnacks`

Filter to snacks with a matching `effect.type`.

```ts
mi.snacks().byEffectType("time-reduction").get(); // Builder Bite, Study Soup
```

### QueryBase Terminal Methods

```ts
mi.snacks().count(); // 5
mi.snacks().find("builder-bite");
mi.snacks().findByName("Study Soup");
mi.snacks().builderBite().first()!;
mi.snacks().clanCastleCake().first()!;
```

---

## Sub-Category: `magicItems().utilities()` → `MagicItemUtilities`

Utilities are special-purpose items that don't fit the time-reduction or stat-boost pattern.

### Available Utilities (3 total)

| Accessor              | Name                | Effect                                                                                    |
| --------------------- | ------------------- | ----------------------------------------------------------------------------------------- |
| `wallRing()`          | Wall Ring           | Instantly upgrades a Wall Piece (Home: 1M Gold equivalent; Builder: 500K Gold equivalent) |
| `shovelOfObstacles()` | Shovel of Obstacles | Moves an obstacle to a new position                                                       |
| `builderStarJar()`    | Builder Star Jar    | Grants Builder Base star bonuses                                                          |

### Effect Shape

Each utility has a unique `effect` structure:

```ts
// Wall Ring
interface WallRingEffect {
  type: "wall-upgrade";
  homeVillageGoldEquivalent: number; // 1,000,000
  builderBaseGoldEquivalent: number; // 500,000
}

// Shovel of Obstacles
interface ShovelEffect {
  type: "move-obstacle";
}

// Builder Star Jar
interface StarJarEffect {
  type: "star-bonus";
}
```

### Filter Method

#### `byEffectType(type: string): MagicItemUtilities`

Filter to utilities with a matching `effect.type`.

```ts
mi.utilities().byEffectType("wall-upgrade").first()!; // Wall Ring
```

### QueryBase Terminal Methods

```ts
mi.utilities().count(); // 3
mi.utilities().find("wall-ring");
mi.utilities().findByName("Wall Ring");
mi.utilities().wallRing().first()!;
mi.utilities().shovelOfObstacles().first()!;
mi.utilities().builderStarJar().first()!;
```

---

## QueryBase Terminal Methods (All Categories)

All five category classes (`MagicItemBooks`, `MagicItemHammers`, `MagicItemPotions`,
`MagicItemSnacks`, `MagicItemUtilities`) extend `QueryBase` and share the same five terminal
methods:

| Method                     | Return type              | Description                          |
| -------------------------- | ------------------------ | ------------------------------------ |
| `get()`                    | `MagicItem[]`            | All results as an array              |
| `first()`                  | `MagicItem \| undefined` | First result, or `undefined` if none |
| `find(id: string)`         | `MagicItem \| undefined` | Exact ID match                       |
| `findByName(name: string)` | `MagicItem \| undefined` | Case-insensitive exact name match    |
| `count()`                  | `number`                 | Number of results                    |

---

## Full Usage Example

```ts
import { magicItems } from "clash-of-clans-data";

const mi = magicItems();

// Print all items with their descriptions
for (const category of ["books", "hammers", "potions", "snacks", "utilities"] as const) {
  console.log(`\n=== ${category.toUpperCase()} ===`);
  for (const item of mi[category]().get()) {
    console.log(`${item.name}: ${item.description}`);
  }
}

// Total item count across all categories
const total =
  mi.books().count() +
  mi.hammers().count() +
  mi.potions().count() +
  mi.snacks().count() +
  mi.utilities().count();

// Wall Ring value
const wallRing = mi.utilities().wallRing().first()!;
console.log(`Wall Ring = ${wallRing.effect.homeVillageGoldEquivalent.toLocaleString()} Home Gold`);

// Books that work on any upgrade type
const universalBooks = mi.books().byAppliesTo("any").get();
```
