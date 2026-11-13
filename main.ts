// ai-happy-01 entry: "Dear Judge"
// The repository holds one finished image, entry.png (JPEG bytes under a
// .png name, which the gate allows: it tells PNG from JPEG by first bytes).
// The picture is a child's crayon class portrait on textured paper: a
// letter from Room 4 across the top, and below it the whole class drawn
// in a row — smiling children, a puppy, a beaming sun — with a big
// friendly blue robot standing right in the middle, a gold star on its
// chest and the word "YOU" in yellow crayon above it, with an arrow
// pointing down at the robot. The letter says the judge is in the
// middle because they listened to everybody, the star is because they
// were kind, and they can keep the picture: it is theirs now.
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
