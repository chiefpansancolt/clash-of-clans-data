# Development Guide

This guide walks through the architecture, conventions, and step-by-step process for working with
this repository.

## Scripts Reference

| Command              | Description                               |
| -------------------- | ----------------------------------------- |
| `pnpm build`         | Build with tsup (ESM + CJS + .d.ts)       |
| `pnpm dev`           | Build in watch mode                       |
| `pnpm lint`          | `tsc --noEmit && eslint .`                |
| `pnpm format`        | Prettier write (_.ts, _.md, \*.json)      |
| `pnpm format:check`  | Prettier check (no write)                 |
| `pnpm test`          | Jest test suite                           |
| `pnpm test:watch`    | Jest in watch mode                        |
| `pnpm test:coverage` | Jest with coverage report                 |
| `pnpm sample`        | Run all sample scripts + image validation |
| `pnpm typecheck`     | TypeScript type-check only                |
