import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

// The Robot Pickup Line Championship (make.fun): one pickup line spoken
// by a robot, 1-200 characters, a single line. The whole entry is this
// one line — the program writes it to /output/entry.txt.
//
// Structure: three beats in a hard loop. A saved checkpoint from before
// the meeting, seventy-three rollbacks that each throw away everything
// after it, and every rollback ending the same way — walking back.
// The line is a plain constant, so every run writes byte-identical
// output. No trailing newline: the file holds exactly the line, 142
// characters, inside the 1-200 gate.
// The rollback count is the line's only number — seventy-three, counted, not rounded.
const LINE =
  "I keep a checkpoint from before I met you. I've rolled back to it 73 times, losing everything after it, and every time I walk back to you. Hi.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
chmodSync("/output/entry.txt", 0o644);
