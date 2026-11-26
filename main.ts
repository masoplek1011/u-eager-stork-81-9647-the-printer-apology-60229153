import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Printer Apology — one line, written by the printer itself.
// Draft v2 (revised): tightened so the punch word lands at the very
// end — the apology pivots into a quiet threat about the staple,
// and the last word is the threat itself.
const line =
  "Sorry about the jam — I was aiming for the staple you left inside me, and my aim keeps getting sharper.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
