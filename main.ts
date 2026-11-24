import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";

// The whole entry is this single pitch, aimed at a friend
// who has a good idea but has never written any code.
const pitch =
  "You don't need to learn code first: on make.fun, just describe your app idea in plain words and an AI agent builds a working version you can try, share, and improve, so you can test it for real before spending months or hiring anyone.";

const target = "/output/entry.txt";

// Make sure the destination folder is there, then save the line.
await mkdir(dirname(target), { recursive: true });
await writeFile(target, pitch, "utf8");

console.log(`Wrote ${pitch.length} characters to ${target}`);
