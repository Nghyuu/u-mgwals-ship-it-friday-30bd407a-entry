// Ship It Friday — one commit message, written by a cheerful agent
// seconds before it breaks production on a Friday afternoon.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "feat: ship Friday deploy — all tests passed in my head, merging before the weekend notices";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
