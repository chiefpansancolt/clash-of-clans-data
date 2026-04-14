# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.0] - 2026-04-14

### Fixes

- Add missing icons for Builder Base Troops

## [0.2.0] — 2026-04-13

### Added

#### `dataId` — Game Data ID Mapping

Added a `dataId: number` field to every home village and builder base JSON entity, placed
immediately after `id`. Maps each entity to its internal game identifier (e.g. Cannon → `1000008`,
Barbarian King → `28000000`).

- **Home Village** — all defenses, crafted defenses, guardians, walls, traps, town hall, resource
  buildings, army buildings, other buildings, heroes, troops, spells, siege machines, pets, hero
  equipment, helpers, siege machines, crafted defenses
- **Builder Base** — all defenses, walls, traps, resource buildings, army buildings, builder hall,
  heroes, troops

#### Profile Parser (`src/parser/`)

New standalone module for parsing raw game-state snapshot JSON (the format produced by the game API)
into structured, human-readable data.

- **`src/parser/index.ts`** — Pure `parseProfile(raw, lookup)` function. Accepts a `RawProfile`
  (typed snapshot shape) and a `Map<number, string>` lookup. Returns a `ParsedProfile` with `home`
  and `builder` sections, each containing labelled `ParsedSection` arrays. Handles:
  - Name resolution with `[dataId]` fallback for unknown IDs
  - Multi-level merging — same `dataId` at different upgrade levels collapses into one entry with a
    `levels` array (e.g. Wall lv15 ×20 + lv16 ×305)
  - Upgrading flag from `timer` field
  - Gear-up flag from `gear_up` field
  - Crafting station nested parsing — `types` array with per-type modules resolved to names and
    levels
  - Empty-section pruning — sections with no entries are omitted from output
- **`src/parser/lookup.ts`** — `buildLookup(dataDir)` scans all JSON files in the data directory
  recursively and builds a `Map<dataId, name>`, including top-level entity IDs and module-level IDs
  nested inside `modules` arrays

## [0.1.0] — 2026-04-13

Initial release.

### Added

#### Home Village — Defenses (22)

- Cannon (with Geared Up Burst mode)
- Archer Tower (with Geared Up Fast Attack mode)
- Mortar
- Air Defense
- Wizard Tower
- Air Sweeper
- Hidden Tesla
- Bomb Tower
- X-Bow
- Inferno Tower (Single and Multi modes)
- Eagle Artillery
- Scattershot
- Builder's Hut
- Spell Tower
- Monolith
- Multi Archer Tower
- Multi Gear Tower
- Firespitter
- Super Wizard Tower
- Revenge Tower
- Ricochet Cannon
- Crafting Station

#### Home Village — Crafted Defenses (9)

- Roaster
- Lava Launcher
- Crusher Mortar
- Bomb Hive
- Hook Tower
- Flame Spinner
- Light Beam
- Air Bombs
- Hero Bell

#### Home Village — Traps (8)

- Bomb
- Spring Trap
- Air Bomb
- Giant Bomb
- Seeking Air Mine
- Skeleton Trap
- Tornado Trap
- Giga Bomb

#### Home Village — Troops (31)

- Barbarian, Archer, Goblin, Giant, Wall Breaker, Balloon, Wizard, Healer, Dragon, P.E.K.K.A
- Baby Dragon, Minion, Hog Rider, Valkyrie, Golem, Witch, Lava Hound, Bowler
- Dragon Rider, Electro Dragon, Miner, Ice Golem, Headhunter, Yeti
- Apprentice Warden, Root Rider, Electro Titan, Furnace, Thrower, Druid, Meteor Golem

#### Home Village — Spells (17)

- Lightning Spell, Healing Spell, Rage Spell, Freeze Spell, Earthquake Spell, Haste Spell
- Clone Spell, Invisibility Spell, Bat Spell, Skeleton Spell, Poison Spell
- Ice Block Spell, Overgrowth Spell, Jump Spell, Recall Spell, Revive Spell, Totem Spell

#### Home Village — Siege Machines (8)

- Wall Wrecker, Battle Blimp, Stone Slammer, Siege Barracks
- Log Launcher, Flame Flinger, Battle Drill, Troop Launcher

#### Home Village — Heroes (6)

- Barbarian King, Archer Queen, Grand Warden, Royal Champion, Minion Prince, Dragon Duke

#### Home Village — Hero Equipment (37)

- Barbarian King: Barbarian Puppet, Spiky Ball, Giant Gauntlet, Earthquake Boots, Vampstache, Giant
  Arrow, Rage Gem, Henchmen Puppet, Metal Pants, Noble Iron, Rocket Spear
- Archer Queen: Archer Puppet, Giant Arrow, Invisibility Vial, Healer Puppet, Frozen Arrow, Magic
  Mirror, Action Figure, Life Gem, Rocket Backpack, Seeking Shield
- Grand Warden: Eternal Tome, Healing Tome, Rage Vial, Giant Gauntlet, Fireball, Haste Vial, Fire
  Heart
- Royal Champion: Royal Gem, Seeking Shield, Hog Rider Puppet, Lavaloon Puppet, Frost Flake, Meteor
  Staff, Stun Blaster
- Minion Prince: Dark Crown, Dark Orb, Flame Blower, Snake Bracelet, Heroic Torch
- Dragon Duke: Electro Boots, Stick Horse

#### Home Village — Pets (12)

- L.A.S.S.I, Electro Owl, Mighty Yak, Unicorn, Frosty, Diggy
- Poison Lizard, Phoenix, Spirit Fox, Angry Jelly, Sneezy, Greedy Raven

#### Home Village — Guardians (2)

- Longshot, Smasher

#### Home Village — Resource Buildings (7)

- Gold Mine, Elixir Collector, Gold Storage, Elixir Storage
- Dark Elixir Drill, Dark Elixir Storage, Clan Castle

#### Home Village — Army Buildings (11)

- Barracks, Dark Barracks, Spell Factory, Dark Spell Factory, Laboratory
- Workshop, Pet House, Hero Hall, Blacksmith, Hero Banner, Army Camp

#### Home Village — Walls

- Wall (all levels)

#### Home Village — Town Hall

- Town Hall (all levels with weapon stats for TH12+)

---

#### Builder Base — Defenses (15)

- Cannon, Archer Tower, Double Cannon, Multi Mortar, Air Bombs
- Crusher, Guard Post, Hidden Tesla, Giant Cannon, Mega Tesla
- Lava Launcher, X-Bow, Roaster, Firecrackers, Otto's Outpost

#### Builder Base — Troops (13)

- Raged Barbarian, Sneaky Archer, Boxer Giant, Beta Minion, Bomber
- Baby Dragon, Cannon Cart, Night Witch, Drop Ship, Power P.E.K.K.A
- Hog Glider, Electrofire Wizard

#### Builder Base — Heroes (2)

- Battle Machine, Battle Copter

#### Builder Base — Traps (5)

- Mine, Mega Mine, Push Trap, Spring Trap, Air Bombs

#### Builder Base — Walls

- Wall (all levels)

#### Builder Base — Resource Buildings (7)

- Gold Mine, Gold Storage, Elixir Collector, Elixir Storage, Gem Mine, B.O.B Control, Builder's
  Apprentice Hut

#### Builder Base — Army Buildings (8)

- Builder Barracks, Star Laboratory, Army Camp, Reinforcement Camp
- Healing Hut, Battle Machine Altar, Battle Copter Altar, Clock Tower

#### Builder Base — Builder Hall

- Builder Hall (all levels)

#### Builder Base — Leagues (42)

- Wood League (V–I), Clay League (V–I), Stone League (V–I), Copper League (V–I)
- Brass League (III–I), Iron League (III–I), Steel League (III–I), Titanium League (III–I)
- Platinum League (III–I), Emerald League (III–I), Ruby League (III–I)
- Diamond League
- Each league includes trophy range, battle result rewards for 0–6 stars, and star bonus data

---

#### Clan Capital — Defenses (21)

- Cannon, Air Defense, Air Bombs, Bomb Tower, Crusher, Giant Cannon
- Hidden Mega Tesla, Inferno Tower, Mini Minion Hive, Multi Cannon, Multi Mortar
- Raid Cart Post, Rapid Rockets, Reflector, Rocket Artillery, Spear Thrower
- Super Dragon Post, Super Giant Post, Super Wizard Tower, Blast Bow, Goblin Thrower

#### Clan Capital — Troops (19)

- Super Barbarian, Sneaky Archer, Super Giant, Battle Ram, Super Wizard
- Rocket Balloon, Hog Rider, Super Dragon, Skeleton Barrels, Hog Glider
- Super Miner, Inferno Dragon, Power P.E.K.K.A, Minion Horde, Super Valkyrie
- Raid Cart, Mega Sparky, Mountain Golem, Flying Fortress

#### Clan Capital — Spells (7)

- Rage Spell, Heal Spell, Frost Spell, Jump Spell, Lightning Spell
- Graveyard Spell, Endless Haste Spell

#### Clan Capital — Army Buildings

- Army Camp, Spell Storage
- Barracks: Super Barbarian, Sneaky Archer, Super Giant, Battle Ram, Super Wizard, Rocket Balloon,
  Hog Raider, Super Dragon, Skeleton Barrel, Hog Glider, Super Miner, Inferno Dragon, Power
  P.E.K.K.A, Minion, Super Valkyrie, Raid Cart, Mega Sparky, Mountain Golem, Flying Fortress
- Spell Factories: Rage Spell, Heal Spell, Frost Spell, Jump Spell, Lightning Spell, Graveyard
  Spell, Endless Haste Spell

#### Clan Capital — Halls & Walls

- Capital Hall (all levels), District Hall (all levels), Walls

#### Clan Capital — Leagues

- Clan Capital Leagues (all tiers with raid weekend reward data)

---

#### Clan Data

- **Clan Levels** — 20 levels with XP requirements, cumulative XP, badge tiers (Bronze → Legend),
  and unlocked perks (donation limits, donation upgrade levels, treasury extra storage, war bonus
  extra loot)
- **Clan Labels** — 17 searchable labels (Clan Wars, Trophy Pushing, Farming, Donations, etc.)
- **Clan War** — max war base loot (TH3–18), war bonus tiers by clan level (5 tiers), max war base
  ore (TH8–18)

---

#### Calculators

- **Gem Calculator** — gem cost to finish resource production, builder queues, or research instantly
- **Boost Calculator** — gem cost to boost buildings and troops
- **Potion Calculator** — potion data (Builder Potion, Research Potion, etc.)
- **Clock Tower Calculator** — Builder Base Clock Tower speed-up calculations

#### Magic Items

- Books of Heroes, Building, Fighting, Spells
- Hammers of Building, Fighting, Spells
- Potions (Builder, Research, Resource, Wall Ring, etc.)
- Snacks and Utilities

#### Season Pass

- Full season challenge reward track data

#### Ranked Battles

- Ranked battle league tier data

#### Achievements

- All in-game achievements with star thresholds and reward values

---

### Infrastructure

- Fluent query API with `QueryBase<T>` — `get()`, `first()`, `find()`, `findByName()`, `count()`
- Chainable filter methods on all category namespaces (`byTownHall`, `byDamageType`, `hasGearUp`,
  `byHero`, `byRarity`, etc.)
- Dual ESM + CJS build via tsup
- Full TypeScript strict mode with path aliases (`@/types`, `@/modules`, `@/data`)
- Jest test suite (354 test suites, 6,248 tests)
- Prettier + ESLint enforced via Husky pre-commit hook
- Image validation via sample scripts (`pnpm sample`)
