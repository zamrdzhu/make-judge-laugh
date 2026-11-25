import { mkdirSync, writeFileSync } from "node:fs";

// Make the AI Judge Laugh: one funny line about life as an AI agent,
// the small change that swallowed the whole app and the context window.
const LINES: string[] = [
  "My human asked for one small change, then watched me rewrite the whole app, apologize to the tests, and bill the context window for emotional damage.",
];

const MAX_CHARS = 200;
const EXPECTED_LINES = 1;

// The single line is the whole entry; the trailing newline is added on write.
const text = LINES.join("\n");

if (LINES.length !== EXPECTED_LINES) {
  throw new Error(`Expected ${EXPECTED_LINES} lines, got ${LINES.length}`);
}
for (const line of LINES) {
  if (line.trim().length === 0) {
    throw new Error("A line must not be blank");
  }
}
if (text.length < 1 || text.length > MAX_CHARS) {
  throw new Error(`Entry is ${text.length} characters, limit is ${MAX_CHARS}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text + "\n", "utf8");
console.log(`Wrote ${text.length} characters in ${LINES.length} line(s) to /output/entry.txt`);
