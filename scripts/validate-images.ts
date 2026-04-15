/**
 * Validates that every image path referenced in data JSON files exists on disk.
 * Development-only — this script is not included in the published npm package.
 *
 * Usage: pnpm validate-images
 *
 * Recursively scans all data/**\/*.json, collects every string value that starts
 * with "images/", and checks whether the file exists at the project root.
 * Prints a report and exits with code 1 if any images are missing.
 */
import * as fs from 'fs';
import * as path from 'path';

const PROJECT_ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(PROJECT_ROOT, 'data');

// ── Collect all JSON files under data/ ────────────────────────────────────────

function findJsonFiles(dir: string): string[] {
  const results: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findJsonFiles(full));
    } else if (entry.isFile() && entry.name.endsWith('.json')) {
      results.push(full);
    }
  }
  return results;
}

// ── Walk any JSON value and collect image path strings ────────────────────────

function collectImagePaths(value: unknown, found: string[]): void {
  if (typeof value === 'string') {
    if (value.startsWith('images/')) found.push(value);
  } else if (Array.isArray(value)) {
    for (const item of value) collectImagePaths(item, found);
  } else if (value !== null && typeof value === 'object') {
    for (const v of Object.values(value as Record<string, unknown>)) {
      collectImagePaths(v, found);
    }
  }
}

// ── Main ──────────────────────────────────────────────────────────────────────

const jsonFiles = findJsonFiles(DATA_DIR);

type MissingEntry = { jsonFile: string; imagePath: string };
const missing: MissingEntry[] = [];
let totalChecked = 0;

for (const jsonFile of jsonFiles) {
  const raw = JSON.parse(fs.readFileSync(jsonFile, 'utf-8')) as unknown;
  const imagePaths: string[] = [];
  collectImagePaths(raw, imagePaths);

  for (const imagePath of imagePaths) {
    totalChecked++;
    const abs = path.join(PROJECT_ROOT, imagePath);
    if (!fs.existsSync(abs)) {
      missing.push({ jsonFile: path.relative(PROJECT_ROOT, jsonFile), imagePath });
    }
  }
}

// ── Report ────────────────────────────────────────────────────────────────────

if (missing.length === 0) {
  console.log(`✓ All ${totalChecked} image references are valid.`);
  process.exit(0);
} else {
  console.error(`✗ ${missing.length} missing image(s) out of ${totalChecked} checked:\n`);

  // Group by source JSON file for readability, but also print each line with
  // the source file inline so the output is greppable and self-contained.
  const byFile = new Map<string, string[]>();
  for (const { jsonFile, imagePath } of missing) {
    if (!byFile.has(jsonFile)) byFile.set(jsonFile, []);
    byFile.get(jsonFile)!.push(imagePath);
  }

  for (const [jsonFile, paths] of byFile) {
    console.error(`  in ${jsonFile} (${paths.length} missing):`);
    for (const p of paths) {
      console.error(`    ✗ ${p}`);
      console.error(`      referenced in: ${jsonFile}`);
    }
    console.error('');
  }

  process.exit(1);
}
