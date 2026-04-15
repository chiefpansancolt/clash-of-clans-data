# Season Pass Module

The Season Pass module provides structured data for the Clash of Clans Season Pass challenge system
— specifically the recurring challenge task types that appear on the Season Pass reward track each
month. Each challenge type describes a repeatable in-game action (e.g. starting a building upgrade,
donating troops) along with clarifying notes about how progress is counted and what qualifies.

## Quick Start

```ts
import { seasonPass } from "clash-of-clans-data";

const sp = seasonPass();

// Total number of challenge types
sp.challenges().count(); // 8

// All challenge types
sp.challenges().get();

// Look up a specific challenge
sp.challenges().find("building-upgrade");
sp.challenges().findByName("Start any building upgrade");

// Access a challenge directly by type
sp.challenges().buildingUpgrade().first()!;
sp.challenges().starBonus().first()!;
```

## Entry Point

```ts
import { seasonPass } from "clash-of-clans-data";

const sp = seasonPass(); // returns SeasonPass namespace
```

`seasonPass()` returns a `SeasonPass` instance. Challenge data is accessed via `sp.challenges()`,
which returns a `SeasonPassChallenges` query class.

---

## Data Shape

```ts
interface SeasonPassChallenge {
  id: string; // kebab-slug identifying the challenge type, e.g. "building-upgrade"
  name: string; // display name shown in-game, e.g. "Start any building upgrade"
  notes: string[]; // clarifying rules about what counts and what doesn't
  image: string; // relative image path, e.g. "images/season-pass/challenges/building-upgrade.png"
}
```

The `notes` array contains game-rule clarifications important for understanding edge cases — for
example, whether cancelling and restarting an upgrade counts again, or whether Wall upgrades are
included.

### Example Record

```json
{
  "id": "building-upgrade",
  "name": "Start any building upgrade",
  "notes": [
    "Can be done in either Home Village or Builder Base.",
    "Also awarded if a building construction is started.",
    "Does not apply to Wall upgrades.",
    "If a building upgrade is cancelled and restarted, the restarted upgrade will not award a stamp."
  ],
  "image": "images/season-pass/challenges/building-upgrade.png"
}
```

---

## Sub-Namespace: `seasonPass().challenges()` → `SeasonPassChallenges`

`SeasonPassChallenges` extends `QueryBase<SeasonPassChallenge>` and provides direct accessor methods
for each of the 8 challenge types.

### Available Challenge Types (8 total)

| Accessor                  | ID                       | Description                          |
| ------------------------- | ------------------------ | ------------------------------------ |
| `buildingUpgrade()`       | `building-upgrade`       | Start any building upgrade           |
| `troopUpgrade()`          | `troop-upgrade`          | Start any troop upgrade              |
| `heroPetUpgrade()`        | `hero-pet-upgrade`       | Start any hero or pet upgrade        |
| `donateReinforcements()`  | `donate-reinforcements`  | Donate troops to clanmates           |
| `starBonus()`             | `star-bonus`             | Complete a Star Bonus                |
| `winBattle()`             | `win-battle`             | Win a multiplayer battle             |
| `destroyTownHall()`       | `destroy-town-hall`      | Destroy an enemy Town Hall in battle |
| `requestReinforcements()` | `request-reinforcements` | Request troops from the Clan Castle  |

Each accessor returns a `SeasonPassChallenges` instance containing that single challenge, allowing
you to use `.first()!` to get the object directly.

```ts
const challenges = seasonPass().challenges();

challenges.buildingUpgrade().first()!;
challenges.troopUpgrade().first()!;
challenges.heroPetUpgrade().first()!;
challenges.donateReinforcements().first()!;
challenges.starBonus().first()!;
challenges.winBattle().first()!;
challenges.destroyTownHall().first()!;
challenges.requestReinforcements().first()!;
```

---

## API Reference

### QueryBase Terminal Methods

All five standard terminal methods are available on every `SeasonPassChallenges` instance.

| Method                     | Return type                        | Description                          |
| -------------------------- | ---------------------------------- | ------------------------------------ |
| `get()`                    | `SeasonPassChallenge[]`            | All results as an array              |
| `first()`                  | `SeasonPassChallenge \| undefined` | First result, or `undefined` if none |
| `find(id: string)`         | `SeasonPassChallenge \| undefined` | Exact ID match                       |
| `findByName(name: string)` | `SeasonPassChallenge \| undefined` | Case-insensitive exact name match    |
| `count()`                  | `number`                           | Number of results                    |

```ts
const sp = seasonPass();

// All challenges
sp.challenges().get(); // SeasonPassChallenge[]
sp.challenges().count(); // 8

// Lookup by ID
sp.challenges().find("star-bonus");
sp.challenges().find("win-battle");

// Lookup by display name (case-insensitive)
sp.challenges().findByName("Start any building upgrade");
sp.challenges().findByName("WIN BATTLE"); // case-insensitive

// First challenge in the collection
sp.challenges().first();
```

---

## Full Usage Example

```ts
import { seasonPass } from "clash-of-clans-data";

const sp = seasonPass();

// Print all challenges with their notes
for (const challenge of sp.challenges().get()) {
  console.log(`\n[${challenge.id}] ${challenge.name}`);
  if (challenge.notes.length > 0) {
    console.log("  Rules:");
    for (const note of challenge.notes) {
      console.log(`  - ${note}`);
    }
  }
}

// Check rules for the building upgrade challenge
const buildingUpgrade = sp.challenges().buildingUpgrade().first()!;
const wallsExcluded = buildingUpgrade.notes.some((n) => n.toLowerCase().includes("wall"));
console.log("Walls excluded from building upgrade challenge:", wallsExcluded); // true

// Get image paths for all challenges (e.g. for rendering a UI)
const imagePaths = sp
  .challenges()
  .get()
  .map((c) => ({
    id: c.id,
    image: c.image,
  }));
```
