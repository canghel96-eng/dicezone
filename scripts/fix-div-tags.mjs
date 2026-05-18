import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const OPEN_WRONG = "<" + "m" + "otion";
const OPEN_RIGHT = "<" + "d" + "iv";
const CLOSE_WRONG = "</" + "m" + "otion>";
const CLOSE_RIGHT = "</" + "d" + "iv>";

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (name !== "node_modules" && name !== ".next") walk(p, files);
    } else if (p.endsWith(".tsx")) files.push(p);
  }
  return files;
}

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
for (const file of walk(join(root, "src"))) {
  let text = readFileSync(file, "utf8");
  const next = text.split(OPEN_WRONG).join(OPEN_RIGHT).split(CLOSE_WRONG).join(CLOSE_RIGHT);
  if (next !== text) {
    writeFileSync(file, next);
    console.log("fixed", file);
  }
}
