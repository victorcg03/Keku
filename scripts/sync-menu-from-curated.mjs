import fs from "fs/promises";

const curatedPath = new URL(
  "../public/carta_keku_estructurada_curada.json",
  import.meta.url,
);
const tsPath = new URL("../src/data/menu.ts", import.meta.url);

const exists = async (p) => !!(await fs.stat(p).catch(() => false));
if (!(await exists(curatedPath))) {
  console.error(
    "Curated JSON not found at public/carta_keku_estructurada_curada.json",
  );
  process.exit(1);
}

const data = JSON.parse(await fs.readFile(curatedPath, "utf8"));
// Group by section preserving order of first appearance
const sectionsMap = new Map();
for (const entry of data) {
  const sec = (entry.section || "Otros").trim();
  if (!sectionsMap.has(sec)) sectionsMap.set(sec, []);
  // Normalize price: strip € and trim; keep comma decimal if present
  let price = (entry.price || "").toString().trim();
  price = price.replace(/€/g, "").replace(/\s+/g, " ").trim();
  const item = {
    id:
      `${entry.name}`
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-") || `item-${sectionsMap.get(sec).length + 1}`,
    name: entry.name,
    description: entry.description || undefined,
    price,
  };
  sectionsMap.get(sec).push(item);
}

const sections = Array.from(sectionsMap.entries()).map(([title, items]) => ({
  id: title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-"),
  title,
  items,
}));

let ts = await fs.readFile(tsPath, "utf8");
const pattern = /export const menuES: MenuSection\[\] = [\s\S]*?;\r?\n\r?\n/;
if (!pattern.test(ts)) {
  // Fallback robusto
  const startToken = "export const menuES: MenuSection[] =";
  let start = ts.indexOf(startToken);
  if (start === -1) {
    const approx = ts.indexOf("export const menuES:");
    if (approx !== -1) start = approx;
  }
  if (start !== -1) {
    const endToken = "export const menuEN:";
    let end = ts.indexOf(endToken, start);
    if (end === -1) end = ts.length;
    const before = ts.slice(0, start);
    const after = ts.slice(end);
    const replacement = `${startToken} ${JSON.stringify(
      sections,
      null,
      2,
    )} as any;\n\n`;
    ts = before + replacement + after;
  } else {
    console.error("Could not locate 'menuES' export in src/data/menu.ts.");
    process.exit(1);
  }
} else {
  ts = ts.replace(
    pattern,
    `export const menuES: MenuSection[] = ${JSON.stringify(
      sections,
      null,
      2,
    )} as any;\n\n`,
  );
}

await fs.writeFile(tsPath, ts, "utf8");
console.log(
  "menu.ts updated from curated JSON with",
  sections.length,
  "sections",
);
