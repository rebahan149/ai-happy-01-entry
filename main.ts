// ai-happy-01 entry: "Balloon Liftoff Buddies"
// The repository holds one finished image, entry.png (JPEG bytes under a
// .png name, which the gate allows: it tells PNG from JPEG by first bytes).
// This program's whole job is to place those exact bytes at
// /output/entry.png, deterministically, on every run.

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The harness normally creates the output directory, but making it here
// costs nothing and keeps a bare local run (node main.ts) from failing.
mkdirSync(outDir, { recursive: true });

const target = join(outDir, "entry.png");
copyFileSync(source, target);
console.log(`entry.png written: ${statSync(target).size} bytes`);
