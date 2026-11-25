import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Miswave \u2014 waving back at someone who was waving at the person behind you.";

// Gate assert: 1-140 chars, not only whitespace, single line.
if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`entry length ${ENTRY.length} outside 1-140`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only whitespace");
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
