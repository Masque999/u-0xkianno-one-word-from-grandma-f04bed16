import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "robit";

// The entry must be exactly one word and nothing else.
if (!/^\S+$/.test(LINE)) {
  throw new Error("line must be exactly one word");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf-8");
console.log(LINE);
