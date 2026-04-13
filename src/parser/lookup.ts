/**
 * Builds a Map<dataId, name> by scanning all JSON files under a given data
 * directory. Any file with a top-level `dataId` (number) + `name` (string)
 * contributes one entry. Module objects inside a `modules` array are also
 * scanned, as are type objects inside a `types` array.
 */

import * as fs from 'fs';
import * as path from 'path';

function scanFile(filePath: string, map: Map<number, string>): void {
  let raw: Record<string, unknown>;
  try {
    raw = JSON.parse(fs.readFileSync(filePath, 'utf-8')) as Record<string, unknown>;
  } catch {
    return;
  }

  if (typeof raw.dataId === 'number' && typeof raw.name === 'string') {
    map.set(raw.dataId, raw.name);
  }

  // Crafted defense module objects: { name, dataId, upgrades[] }
  if (Array.isArray(raw.modules)) {
    for (const mod of raw.modules as Record<string, unknown>[]) {
      if (typeof mod.dataId === 'number' && typeof mod.name === 'string') {
        map.set(mod.dataId, mod.name);
      }
    }
  }

  // Crafted defense type objects (if any future schema uses this top-level)
  if (Array.isArray(raw.types)) {
    for (const t of raw.types as Record<string, unknown>[]) {
      if (typeof t.dataId === 'number' && typeof t.name === 'string') {
        map.set(t.dataId, t.name);
      }
    }
  }
}

function scanDir(dir: string, map: Map<number, string>): void {
  let entries: fs.Dirent[];
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDir(full, map);
    } else if (entry.isFile() && entry.name.endsWith('.json')) {
      scanFile(full, map);
    }
  }
}

/**
 * Build and return the dataId → name lookup map.
 * @param dataDir Absolute path to the `data/` directory.
 */
export function buildLookup(dataDir: string): Map<number, string> {
  const map = new Map<number, string>();
  scanDir(dataDir, map);
  return map;
}
