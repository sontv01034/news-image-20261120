import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Entry point for the 20 November 2026 news image: copy the image this
// entry ships (entry.png, drawn by gen_image.py) to the grader's output
// directory. The program runs with no network and writes the same bytes
// on every run.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
mkdirSync(outDir, { recursive: true });
const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
if (!existsSync(src) || statSync(src).size === 0) {
  throw new Error("entry.png is missing or empty");
}
copyFileSync(src, join(outDir, "entry.png"));
console.log(`wrote ${join(outDir, "entry.png")} (${statSync(src).size} bytes)`);
