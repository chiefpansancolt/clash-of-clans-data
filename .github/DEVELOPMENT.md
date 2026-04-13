# Development Guide

This guide covers architecture, conventions, and the step-by-step workflow for adding new game data to this repository.

---

## Table of Contents

- [Architecture](#architecture)
- [Directory Structure](#directory-structure)
- [Type Hierarchy](#type-hierarchy)
- [Query API Pattern](#query-api-pattern)
- [Adding a New Entity](#adding-a-new-entity)
- [Scripts Reference](#scripts-reference)
- [Conventions](#conventions)

---

## Architecture

The package is built around three layers:

1. **JSON data files** (`data/`) — plain structured JSON, one file per entity, no logic
2. **Module files** (`src/modules/`) — TypeScript modules that load JSON and expose a typed query API
3. **Type definitions** (`src/types/`) — TypeScript interfaces that describe the shape of every entity

All data access flows through base-level factory functions (`home()`, `builder()`, `clanCapital()`, `clan()`) that return namespace objects. Each namespace exposes category methods (`.defenses()`, `.troops()`, etc.) that return chainable query objects.

---

## Directory Structure

```
clash-of-clans-data/
├── building-data.html       ← wiki HTML source (permanent — never delete)
│
├── data/
│   ├── home/
│   │   ├── defenses/          cannon.json, archer-tower.json, …
│   │   ├── crafted-defenses/
│   │   ├── traps/
│   │   ├── walls/
│   │   ├── troops/
│   │   ├── spells/
│   │   ├── siege-machines/
│   │   ├── heroes/
│   │   ├── hero-equipment/
│   │   ├── pets/
│   │   ├── resource-buildings/
│   │   ├── army-buildings/
│   │   ├── guardians/
│   │   └── town-hall/
│   ├── builder/               (same categories)
│   └── clan-capital/          (same categories)
│
├── images/
│   └── {base}/{category}/{kebab-name}/
│       ├── normal/            level-1.png … level-N.png
│       ├── geared-up-normal/  (if applicable)
│       └── {variant}/
│
├── src/
│   ├── index.ts               barrel — exports everything
│   ├── common/
│   │   └── query-base.ts      abstract QueryBase<T>
│   ├── types/
│   │   ├── index.ts
│   │   ├── common.ts          Base, Category, ResourceType, BuildTime
│   │   ├── building.ts        Building<L> root interface
│   │   ├── defense.ts         HomeDefense, BuilderDefense, ClanCapitalDefense
│   │   ├── troop.ts
│   │   ├── spell.ts
│   │   └── …
│   └── modules/
│       ├── home/
│       │   ├── index.ts       HomeVillage class + home() factory
│       │   ├── defenses/
│       │   │   ├── index.ts   HomeVillageDefenses (per-building accessors + filters)
│       │   │   └── cannon/
│       │   │       └── index.ts  cannonData (internal)
│       │   └── …
│       ├── builder/
│       └── clan-capital/
│
├── tests/
│   ├── helpers.ts             testQueryBaseContract, testFilterImmutability
│   └── modules/{base}/{category}/{name}.test.ts
│
└── sample/
    ├── index.ts               runs all samples — pnpm sample
    └── {base}/{category}/{name}/
        └── index.ts
```

---

## Type Hierarchy

```
Building<L>                    ← root interface (id, name, base, category, levels[])
  └─ HomeDefense               ← adds targetType, modes, gearUp, availablePerTownHall
  └─ HomeTroop                 ← adds housingSpace, trainingTime, laboratoryLevel
  └─ HomeSpell                 ← adds spellType, housingSpace
  └─ HomeSiegeMachine
  └─ HomeHero
  └─ HomePet
  └─ BuilderDefense
  └─ BuilderTroop
  └─ ClanCapitalDefense
  └─ ClanCapitalTroop
  …
```

Each concrete type has a corresponding `*Level` interface describing the per-level data (hitpoints, buildCost, stats, images, etc.).

Key shared interfaces (in `src/types/common.ts`):

```typescript
type Base = 'home' | 'builder' | 'clan_capital';
type Category = 'defense' | 'troop' | 'spell' | 'resource' | 'army' | …;
type ResourceType = 'Gold' | 'Elixir' | 'Dark Elixir' | 'Builder Gold' | …;
interface BuildTime { days: number; hours: number; minutes: number; seconds: number; }
```

---

## Query API Pattern

Every category is a class that extends `QueryBase<T>`:

```typescript
// src/common/query-base.ts
abstract class QueryBase<T extends { id: string; name: string }> {
  constructor(protected readonly data: T[]) {}
  get(): T[]                          // return all items
  first(): T | undefined              // return first item
  find(id: string): T | undefined     // find by id
  findByName(name: string): T | undefined  // case-insensitive name search
  count(): number                     // item count
}
```

A category class adds:
- **Per-item accessor methods** — return a new instance wrapping a single item
- **Filter methods** — return a new instance with a filtered subset

```typescript
export class HomeVillageDefenses extends QueryBase<HomeDefense> {
  // Per-item accessor (name is self-documenting — no JSDoc needed)
  cannon(): HomeVillageDefenses {
    return new HomeVillageDefenses([cannonData]);
  }

  // Filter method (JSDoc required)
  /** Filter to defenses with splash damage. */
  byDamageType(type: DamageType): HomeVillageDefenses {
    return new HomeVillageDefenses(
      this.data.filter((d) => d.modes.normal?.damageType === type),
    );
  }
}
```

All methods return the same class type so filters chain:

```typescript
home().defenses().byTownHall(12).hasGearUp().byDamageType('splash').get();
```

---

## Adding a New Entity

Follow these steps in order. Each step is required.

### Step 1 — Source the data

Paste the wiki HTML for the entity into `building-data.html`. This file is the single source of truth — Claude reads it directly to extract stats. Do not delete it.

### Step 2 — Create the JSON data file

**Path:** `data/{base}/{category}/{kebab-name}.json`

```json
{
  "id": "cannon",
  "name": "Cannon",
  "base": "home",
  "category": "defense",
  "size": "3x3",
  "targetType": "ground",
  "modes": {
    "normal": { "range": 9, "attackSpeed": 0.8, "damageType": "single" }
  },
  "availablePerTownHall": [
    { "townHallLevel": 1, "count": 1 }
  ],
  "levels": [
    {
      "level": 1,
      "hitpoints": 300,
      "buildCost": 250,
      "buildCostResource": "Gold",
      "buildTime": { "days": 0, "hours": 0, "minutes": 0, "seconds": 5 },
      "townHallRequired": 1,
      "xpGained": 1,
      "stats": { "normal": { "dps": 7, "damagePerShot": 5.6 } },
      "images": { "normal": "images/home/defenses/cannon/normal/level-1.png" }
    }
  ]
}
```

Rules:
- Constants shared across all levels (range, attackSpeed, damageType) go in `modes` — never in each level
- `buildTime` always uses `{ days, hours, minutes, seconds }` — instant builds use all zeros
- Image paths follow `images/{base}/{category}/{kebab-name}/{variant}/level-{N}.png`

Verify the structure matches an existing JSON file in the same category.

### Step 3 — Create the module file

**Path:** `src/modules/{base}/{category}/{kebab-name}/index.ts`

```typescript
import rawData from '@/data/{base}/{category}/{kebab-name}.json';
import { TypeName } from '@/types';

export const camelNameData: TypeName = rawData as unknown as TypeName;
```

- Export only the `*Data` constant — no factory function, no other exports
- Always use `@/` path aliases, never relative paths

### Step 4 — Register in the category namespace

Edit `src/modules/{base}/{category}/index.ts`:

1. Add import at the top
2. Add to the `all*` array
3. Add a per-item accessor method to the class

```typescript
import { camelNameData } from './kebab-name';

const allDefenses = [...existingItems, camelNameData];

export class HomeVillageDefenses extends QueryBase<HomeDefense> {
  // no JSDoc needed — method name is self-documenting
  camelName(): HomeVillageDefenses {
    return new HomeVillageDefenses([camelNameData]);
  }
}
```

Do **not** add `export * from './kebab-name'` — per-item modules are internal.

### Step 5 — Add tests

**Path:** `tests/modules/{base}/{category}/{kebab-name}.test.ts`

Required assertions:
- `id`, `name`, `base`, `category` identity checks
- Level count
- First and last level key stats
- All levels have a valid image path
- Any category-specific fields (`targetType`, `damageType`, `rarity`, etc.)

Also update the namespace test (`tests/modules/{base}/{category}/{category}.test.ts`) to increment `count()` by 1.

### Step 6 — Run tests

```bash
pnpm test {kebab-name}
```

Fix all failures before continuing.

### Step 7 — Format and lint

```bash
pnpm format && pnpm lint
```

### Step 8 — Download images

For each image URL found in `building-data.html` (look for `data-src="..."` on `<img>` tags):

```bash
# Strip /scale-to-width-down/NNN but keep the full URL including ?cb= param
curl -L "{url}" -o "images/{base}/{category}/{name}/{variant}/level-{N}.png"
```

After downloading, run `pnpm sample` and check that the entity reports `N OK, 0 missing`.

### Step 9 — Create a sample file

**Path:** `sample/{base}/{category}/{kebab-name}/index.ts`

```typescript
import { home } from '../../../src';
import { createLogger } from '../../helper';

const { log, writeOutput } = createLogger();
const item = home().defenses().camelName().first()!;

log(`=== ${item.name} ===`);
log(`Levels: ${item.levels.length}`);
// … log key stats

writeOutput(__dirname);
```

Import depth: `sample/{base}/{category}/{name}/index.ts` is 3 levels below `sample/` → import from `'../../../helper'`.

Also add `import './path/to/new-sample'` to `sample/index.ts`.

---

## Scripts Reference

| Command              | Description                                              |
| -------------------- | -------------------------------------------------------- |
| `pnpm build`         | Build ESM + CJS + `.d.ts` via tsup                       |
| `pnpm dev`           | Build in watch mode                                      |
| `pnpm lint`          | `tsc --noEmit && eslint .`                               |
| `pnpm format`        | Prettier write (`*.ts`, `*.md`, `*.json`)                |
| `pnpm format:check`  | Prettier check (no write — used in CI)                   |
| `pnpm test`          | Jest test suite                                          |
| `pnpm test:watch`    | Jest in watch mode                                       |
| `pnpm test:coverage` | Jest with coverage report                                |
| `pnpm sample`        | Run all sample scripts and validate image paths          |
| `pnpm typecheck`     | TypeScript type-check only (no emit)                     |

---

## Conventions

### Path aliases

Always use `@/` aliases inside `src/` — never relative paths:

```typescript
import { HomeDefense } from '@/types';           // not '../../types'
import rawData from '@/data/home/defenses/cannon.json';
import { cannonData } from '@/modules/home/defenses/cannon';
```

### ID format

Use `kebab-slug` matching the JSON filename: `cannon`, `archer-tower`, `eagle-artillery`.

### JSDoc

- **Class-level** — every query class gets a one-line `/** ... */`
- **Filter methods** — `/** Filter to ... */` on every filter
- **Per-item accessors** — no JSDoc needed; the method name is self-documenting

```typescript
/**
 * Query class for all Home Village defenses.
 * Returned by `home().defenses()`.
 */
export class HomeVillageDefenses extends QueryBase<HomeDefense> {
  /** Filter to defenses that target air units or both. */
  byTargetType(type: TargetType): HomeVillageDefenses { … }

  cannon(): HomeVillageDefenses { … }  // no JSDoc
}
```

### No extra exports

Per-item module files export only their `*Data` constant. The category namespace re-exports only its class. `src/index.ts` re-exports base namespaces — never individual building modules.

### TypeScript strict mode

No `any`. Use `as unknown as TypeName` when casting raw JSON imports. Index signatures (`[key: string]: unknown`) are only used in typed stubs that will be expanded later.

### Testing

- Import through the public API (`home().defenses().cannon()`) — not by importing `cannonData` directly
- Use `testQueryBaseContract` and `testFilterImmutability` from `tests/helpers.ts`
- Never hit a real API or network in unit tests
