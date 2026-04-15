# Clan Module

The Clan module provides structured data for clan progression, clan labels, and clan war mechanics.
It covers the 20 clan levels (XP requirements, badge tiers, and perks), the 17 clan labels that can
be displayed on a clan profile, and war data including max base loot, available ore, and war bonus
breakdowns per Town Hall level.

## Quick Start

```ts
import { clan } from "clash-of-clans-data";

// Clan level perks at level 10
clan().levels().atLevel(10);

// All 17 clan labels
clan().labels().get();

// War bonus tier for a level 15 clan
clan().war().bonusTierForClanLevel(15);

// Max loot available in an enemy TH15 war base
clan()
  .war()
  .maxWarBaseLoot()
  .find((e) => e.townHallLevel === 15);
```

## Entry Point

```ts
import { clan } from "clash-of-clans-data";

const c = clan(); // returns Clan namespace
```

`clan()` returns a `Clan` instance with three sub-namespaces: `levels()`, `labels()`, and `war()`.

---

## Sub-Namespace: `clan().levels()` → `ClanLevels`

Contains progression data for all 20 clan levels: XP thresholds, badge tiers, donation limits,
treasury bonuses, and war bonus multipliers.

### Data Shape

```ts
interface ClanLevel {
  level: number; // 1–20
  xpRequired: number | null; // XP needed to reach this level (null for level 1)
  cumulativeXp: number | null; // total XP from level 1 (null for level 1)
  badge: string; // badge tier name, e.g. "bronze", "silver", "gold"
  image: string; // relative path to the badge image
  perks: {
    donationLimit: {
      troops: number; // max troops that can be donated per request
      spells: number; // max spells that can be donated per request
      siegeMachines: number; // max siege machines that can be donated per request
    };
    donationUpgradeLevels: number; // how many levels donated troops are upgraded
    treasuryExtraStorage: number; // bonus Treasury storage (percentage)
    warBonusExtraLoot: number; // extra loot from war bonus (percentage)
  };
}
```

### Methods

#### `get(): ClanLevel[]`

Returns all 20 clan levels.

```ts
clan().levels().get(); // all 20 entries
clan().levels().count(); // 20
```

#### `atLevel(level: number): ClanLevel | undefined`

Returns the data for a specific clan level, or `undefined` if not found.

```ts
clan().levels().atLevel(1); // starting level — base donation limits
clan().levels().atLevel(10); // mid-tier perks
clan().levels().atLevel(20); // maximum perks
```

#### `byBadge(badge: ClanBadge): ClanLevels`

Filters to levels that display the given badge tier. Badge names are lowercase strings such as
`"bronze"`, `"silver"`, `"gold"`, `"crystal"`, `"master"`, `"champion"`, `"titan"`, `"legend"`.

```ts
clan().levels().byBadge("gold").get(); // levels with gold badge
clan().levels().byBadge("legend").get(); // top badge levels
```

---

## Sub-Namespace: `clan().labels()` → `ClanLabels`

Contains all 17 clan labels. Labels are decorative tags that clan leaders can attach to their clan
profile to communicate focus areas (e.g. war-focused, farming, donation-heavy).

### Data Shape

```ts
interface ClanLabel {
  id: string; // kebab-slug, e.g. "clan-wars"
  name: string; // display name, e.g. "Clan Wars"
  image: string; // relative path to the label image
}
```

### Available Labels

| ID                | Name            |
| ----------------- | --------------- |
| `clan-wars`       | Clan Wars       |
| `clan-war-league` | Clan War League |
| `trophy-pushing`  | Trophy Pushing  |
| `friendly-wars`   | Friendly Wars   |
| `clan-games`      | Clan Games      |
| `builder-base`    | Builder Base    |
| `base-designing`  | Base Designing  |
| `international`   | International   |
| `farming`         | Farming         |
| `donations`       | Donations       |
| `clan-capital`    | Clan Capital    |
| `friendly`        | Friendly        |
| `talkative`       | Talkative       |
| `underdog`        | Underdog        |
| `relaxed`         | Relaxed         |
| `competitive`     | Competitive     |
| `newbie-friendly` | Newbie Friendly |

### QueryBase Terminal Methods

`ClanLabels` extends `QueryBase<ClanLabel>`, providing all five standard terminal methods:

| Method             | Return type              | Description                       |
| ------------------ | ------------------------ | --------------------------------- |
| `get()`            | `ClanLabel[]`            | All labels                        |
| `first()`          | `ClanLabel \| undefined` | First label                       |
| `find(id)`         | `ClanLabel \| undefined` | Exact ID match                    |
| `findByName(name)` | `ClanLabel \| undefined` | Case-insensitive exact name match |
| `count()`          | `number`                 | Total label count                 |

```ts
clan().labels().count(); // 17
clan().labels().find("clan-wars"); // { id: 'clan-wars', name: 'Clan Wars', image: '...' }
clan().labels().findByName("Clan Wars"); // same result
clan()
  .labels()
  .get()
  .map((l) => l.name); // array of all label names
```

---

## Sub-Namespace: `clan().war()` → `ClanWar`

Contains war-specific data: the maximum loot and ore available in enemy war bases per Town Hall
level, and the war bonus breakdown by clan level range.

### War Base Loot Shape

```ts
interface WarBaseLootEntry {
  townHallLevel: number; // TH3–18
  goldAndElixir: number; // max Gold/Elixir available (combined cap)
  darkElixir: number; // max Dark Elixir available
}
```

### War Base Ore Shape

```ts
interface WarBaseOreEntry {
  townHallLevel: number; // TH8–18 (ore introduced at TH8)
  // ore amounts per entry (structure matches ranked battles ore data)
}
```

### War Bonus Shape

```ts
interface WarBonusByTownHall {
  townHallLevel: number;
  victory: { goldAndElixir: number; darkElixir: number };
  draw: { goldAndElixir: number; darkElixir: number };
  defeat: { goldAndElixir: number; darkElixir: number };
}

interface WarBonusTier {
  clanLevelRange: string; // display label, e.g. "1-2"
  label: string; // e.g. "Level 1-2 Clan"
  minClanLevel: number;
  maxClanLevel?: number; // undefined means no upper limit (top tier)
  byTownHall: WarBonusByTownHall[];
}
```

### Methods

#### `maxWarBaseLoot(): WarBaseLootEntry[]`

All loot entries, one per Town Hall level (TH3–18).

```ts
const loot = clan().war().maxWarBaseLoot();
loot.find((e) => e.townHallLevel === 15);
// → { townHallLevel: 15, goldAndElixir: ..., darkElixir: ... }
```

#### `maxWarBaseOre(): WarBaseOreEntry[]`

All ore entries, one per Town Hall level (TH8–18).

```ts
clan().war().maxWarBaseOre();
```

#### `warBonus(): WarBonusTier[]`

All 5 war bonus tiers, each covering a range of clan levels. Each tier contains per-TH breakdowns
for victory, draw, and defeat outcomes.

```ts
clan().war().warBonus(); // 5 tiers
```

#### `bonusTierForClanLevel(clanLevel: number): WarBonusTier | undefined`

Returns the war bonus tier that applies to the given clan level. Returns `undefined` for
`clanLevel < 1`.

```ts
clan().war().bonusTierForClanLevel(1); // tier for level 1-2 clans
clan().war().bonusTierForClanLevel(10); // mid-range tier
clan().war().bonusTierForClanLevel(20); // top tier (no upper limit)
clan().war().bonusTierForClanLevel(0); // undefined
```

---

## Full Usage Example

```ts
import { clan } from "clash-of-clans-data";

const c = clan();

// Check what donation perks a level 5 clan has
const lvl5 = c.levels().atLevel(5);
if (lvl5) {
  console.log("Donation upgrade:", lvl5.perks.donationUpgradeLevels);
  console.log("Treasury bonus:", lvl5.perks.treasuryExtraStorage + "%");
  console.log("War bonus extra:", lvl5.perks.warBonusExtraLoot + "%");
}

// All "Gold" badge levels
const goldBadgeLevels = c.levels().byBadge("gold").get();

// War bonus for a TH12 player in a level 8 clan — victory payout
const tier = c.war().bonusTierForClanLevel(8);
if (tier) {
  const th12 = tier.byTownHall.find((e) => e.townHallLevel === 12);
  console.log("Victory bonus:", th12?.victory);
}

// Find the Farming label
const farming = c.labels().findByName("Farming");
console.log(farming?.image); // → "images/clan/labels/farming.png"
```
