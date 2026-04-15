# Achievements Module

The Achievements module provides structured data for all in-game Clash of Clans achievements across
the Home Village, Builder Base, and Clan Capital. Each achievement has one or more star tiers that
reward gems upon completion, and the module exposes a fluent query API for filtering by base, data
type, and tier count.

## Quick Start

```ts
import { achievements } from "clash-of-clans-data";

// Count all achievements
achievements().count();

// Get all Home Village achievements
achievements().byBase("home").get();

// Find a specific achievement by ID
achievements().find("sweet-victory");

// Find all achievements with exactly 3 tiers
achievements().byTierCount(3).get();

// Filter by data keyword (case-insensitive substring)
achievements().byDataInvolved("Trophy").get();
```

## Entry Point

```ts
import { achievements } from "clash-of-clans-data";

const query = achievements(); // returns Achievements (extends QueryBase<Achievement>)
```

`achievements()` returns a fresh `Achievements` instance containing all achievements. All filter
methods return a new `Achievements` instance, so calls can be chained.

## Data Shape

```ts
interface AchievementTier {
  tier: number; // 1-indexed tier number (1, 2, 3, ...)
  requirement: number; // threshold to unlock this star (e.g. 1000 trophies)
  xpRewarded: number; // player XP granted at this tier
  gemsRewarded: number; // gems earned at this tier
}

interface Achievement {
  id: string; // kebab-slug, e.g. "sweet-victory"
  name: string; // display name, e.g. "Sweet Victory!"
  base: "home" | "builder" | "clan-capital"; // which village this achievement belongs to
  dataInvolved: string; // what in-game stat is tracked, e.g. "Trophies"
  tiers: AchievementTier[]; // ordered list of tier thresholds and rewards
}
```

### Example record

```json
{
  "id": "sweet-victory",
  "name": "Sweet Victory!",
  "base": "home",
  "dataInvolved": "Trophies",
  "tiers": [
    { "tier": 1, "requirement": 1250, "xpRewarded": 100, "gemsRewarded": 5 },
    { "tier": 2, "requirement": 2000, "xpRewarded": 1000, "gemsRewarded": 10 },
    { "tier": 3, "requirement": 3000, "xpRewarded": 5000, "gemsRewarded": 20 }
  ]
}
```

## API Reference

### Filter Methods

All filter methods return a new `Achievements` instance and can be chained.

#### `byBase(base: 'home' | 'builder' | 'clan-capital'): Achievements`

Filters achievements to those belonging to the given game base.

```ts
achievements().byBase("home").get(); // all Home Village achievements
achievements().byBase("builder").count(); // count of Builder Base achievements
achievements().byBase("clan-capital").get(); // Clan Capital achievements
```

#### `byDataInvolved(keyword: string): Achievements`

Case-insensitive substring search on the `dataInvolved` field. Useful for finding achievements that
track a particular stat.

```ts
achievements().byDataInvolved("Trophy").get(); // e.g. "Trophies" → "Sweet Victory!"
achievements().byDataInvolved("gold").get(); // gold-related achievements
achievements().byDataInvolved("Town Hall").get(); // Town Hall level achievements
```

#### `byTierCount(count: number): Achievements`

Filters to achievements that have exactly the given number of tiers.

```ts
achievements().byTierCount(1).get(); // single-tier achievements
achievements().byTierCount(3).count(); // how many achievements have 3 tiers
```

### Chaining Examples

```ts
// Home Village achievements that involve trophies
achievements().byBase("home").byDataInvolved("Trophy").first();

// Count 3-tier Builder Base achievements
achievements().byBase("builder").byTierCount(3).count();
```

## QueryBase Terminal Methods

These five methods end a query chain and return concrete results. They are available on every
`Achievements` instance.

| Method                     | Return type                | Description                          |
| -------------------------- | -------------------------- | ------------------------------------ |
| `get()`                    | `Achievement[]`            | All results as an array              |
| `first()`                  | `Achievement \| undefined` | First result, or `undefined` if none |
| `find(id: string)`         | `Achievement \| undefined` | Exact ID match                       |
| `findByName(name: string)` | `Achievement \| undefined` | Case-insensitive exact name match    |
| `count()`                  | `number`                   | Number of results                    |

```ts
// Lookup by ID
achievements().find("sweet-victory");

// Lookup by display name (case-insensitive)
achievements().findByName("Sweet Victory!");

// Iterate all tiers
const a = achievements().find("sweet-victory")!;
for (const tier of a.tiers) {
  console.log(`Tier ${tier.tier}: reach ${tier.requirement} → ${tier.gemsRewarded} gems`);
}
```
