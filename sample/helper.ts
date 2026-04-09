import * as fs from 'fs';
import * as path from 'path';
import type { BuildTime } from '../src/types';

/** Absolute path to the project root (one level above this sample/ directory). */
export const PROJECT_ROOT = path.resolve(__dirname, '..');

/**
 * Creates a logger that writes each line to both stdout and an internal buffer,
 * then exposes `writeOutput` to flush the buffer to an `output.txt` file.
 */
export function createLogger() {
  const lines: string[] = [];

  const log = (...args: unknown[]): void => {
    const line = args
      .map((a) => (typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)))
      .join(' ');
    lines.push(line);
    console.log(line);
  };

  const writeOutput = (dir: string): void => {
    const outputPath = path.join(dir, 'output.txt');
    fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
    console.log(`\nOutput written to: ${outputPath}`);
  };

  return { log, writeOutput };
}

/**
 * Checks whether an image file exists at the given path (relative to PROJECT_ROOT).
 * Logs an error and returns false if missing.
 */
export function checkImage(label: string, imagePath: string): boolean {
  if (fs.existsSync(path.join(PROJECT_ROOT, imagePath))) return true;
  console.error(`  MISSING image for ${label}: ${imagePath}`);
  return false;
}

/**
 * Creates a pass/fail counter for image validation.
 * Call `check()` for each image and `report()` to get the summary string.
 */
export function createImageCounter() {
  let passed = 0;
  let failed = 0;
  return {
    check(label: string, imagePath: string): void {
      if (checkImage(label, imagePath)) passed++;
      else failed++;
    },
    report(): string {
      return `Images: ${passed} OK, ${failed} missing`;
    },
  };
}

/**
 * Formats a BuildTime object into a human-readable string (e.g. "2d 4h 30m").
 * Returns `fallback` (default `"instant"`) when all fields are zero.
 */
export function formatBuildTime(time: BuildTime, fallback = 'instant'): string {
  return (
    [
      time.days ? `${time.days}d` : '',
      time.hours ? `${time.hours}h` : '',
      time.minutes ? `${time.minutes}m` : '',
      time.seconds ? `${time.seconds}s` : '',
    ]
      .filter(Boolean)
      .join(' ') || fallback
  );
}
