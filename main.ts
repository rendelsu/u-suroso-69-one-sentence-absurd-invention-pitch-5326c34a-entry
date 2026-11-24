const fs = require("node:fs");
const path = require("node:path");

// One-sentence absurd invention pitch: a phone charger that only works
// while you do squats, so your battery and your legs stop dying at once.
const line = "A phone charger that only works while you do squats, so your battery and your legs both stop giving up at 4 p.m.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), line, "utf8");
