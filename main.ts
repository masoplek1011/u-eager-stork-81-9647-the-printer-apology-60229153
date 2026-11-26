import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Printer Apology — one line, written by the printer itself.
// Draft v3 (revised): the punch is a near-miss, not an escalation —
// the jam was an attempted hit on the staple that nearly succeeded,
// so the last words land the joke turn ("almost had it") instead of
// repeating the "aim" root.
const line =
  "Sorry about the jam — I was aiming for the staple you left inside me, and I almost had it that time.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
