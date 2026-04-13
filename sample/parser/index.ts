/**
 * Profile parser sample — reads tmp/output.json and prints a clean,
 * human-readable breakdown of home village and builder base data.
 *
 * Usage:  pnpm tsx sample/parser/index.ts [path/to/profile.json]
 */
import * as fs from 'fs';
import * as path from 'path';
import {
  type ParsedEntry,
  type ParsedProfile,
  type ParsedSection,
  parseProfile,
} from '../../src/parser';
import { buildLookup } from '../../src/parser/lookup';
import { createLogger } from '../helper';

const { log, writeOutput } = createLogger();

// ---------------------------------------------------------------------------
// Load data
// ---------------------------------------------------------------------------

const PROJECT_ROOT = path.resolve(__dirname, '../..');
const inputPath = process.argv[2] ?? path.join(PROJECT_ROOT, 'tmp/output.json');
const dataDir = path.join(PROJECT_ROOT, 'data');

const raw = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));
const lookup = buildLookup(dataDir);
const profile: ParsedProfile = parseProfile(raw, lookup);

// ---------------------------------------------------------------------------
// Formatting helpers
// ---------------------------------------------------------------------------

const COL_NAME = 28;
const COL_LEVELS = 22;

function padR(s: string, n: number): string {
  return s.length >= n ? s : s + ' '.repeat(n - s.length);
}

function formatLevels(entry: ParsedEntry): string {
  const parts = entry.levels
    .filter((l) => l.level > 0)
    .map((l) => {
      const count = l.count !== undefined && l.count > 1 ? ` ×${l.count}` : '';
      return `lv${l.level}${count}`;
    });
  const base = parts.join(' + ');
  const flags = [entry.upgrading ? '⏳' : '', entry.gearUp ? '⚙' : ''].filter(Boolean).join(' ');
  return flags ? `${base}  ${flags}` : base;
}

function printEntry(entry: ParsedEntry): void {
  const name = padR(entry.name, COL_NAME);
  const levels = padR(formatLevels(entry), COL_LEVELS);
  log(`  ${name}${levels}(${entry.dataId})`);

  if (entry.craftedTypes) {
    for (const t of entry.craftedTypes) {
      const modules = t.modules.map((m) => `${m.name}: lv${m.level}`).join('  ');
      log(`    ${padR(`↳ ${t.name}`, COL_NAME + 2)}${modules}`);
    }
  }
}

function printSection(section: ParsedSection): void {
  if (section.entries.length === 0) return;
  log('');
  log(`  ── ${section.label.toUpperCase()} ${'─'.repeat(Math.max(0, 50 - section.label.length))}`);
  for (const entry of section.entries) {
    printEntry(entry);
  }
}

function printBase(label: string, sections: ParsedSection[]): void {
  log('');
  log('═'.repeat(60));
  log(`  ${label}`);
  log('═'.repeat(60));
  for (const section of sections) {
    printSection(section);
  }
}

// ---------------------------------------------------------------------------
// Summary helpers
// ---------------------------------------------------------------------------

function totalCount(section: ParsedSection): number {
  return section.entries.reduce((sum, e) => {
    const cnt = e.levels.reduce((s, l) => s + (l.count ?? 1), 0);
    return sum + cnt;
  }, 0);
}

function printSummary(label: string, sections: ParsedSection[]): void {
  log('');
  log(`  ${label} summary:`);
  for (const s of sections) {
    if (s.entries.length === 0) continue;
    log(`    ${padR(s.label, 20)} ${s.entries.length} types  (${totalCount(s)} total)`);
  }
}

// ---------------------------------------------------------------------------
// Render
// ---------------------------------------------------------------------------

const date = new Date(profile.timestamp * 1000).toISOString().replace('T', ' ').slice(0, 19);

log('');
log(`  Tag: ${profile.tag}    Timestamp: ${date} UTC`);

printBase('HOME VILLAGE', profile.home);
printBase('BUILDER BASE', profile.builder);

log('');
log('═'.repeat(60));
log('  SUMMARY');
log('═'.repeat(60));
printSummary('Home Village', profile.home);
printSummary('Builder Base', profile.builder);
log('');

writeOutput(__dirname);
