import fs from "fs/promises";
import path from "path";

const genPath = new URL("../src/data/menu.generated.json", import.meta.url);
const tsPath = new URL("../src/data/menu.ts", import.meta.url);

const exists = async (p) => !!(await fs.stat(p).catch(() => false));
if (!(await exists(genPath))) {
  console.error(
    "menu.generated.json not found. Run npm run extract:menu first.",
  );
  process.exit(1);
}

const json = JSON.parse(await fs.readFile(genPath, "utf8"));
const mapTitle = (t) =>
  t
    .toLowerCase()
    .replaceAll("á", "a")
    .replaceAll("é", "e")
    .replaceAll("í", "i")
    .replaceAll("ó", "o")
    .replaceAll("ú", "u")
    .replaceAll("ñ", "n")
    .replace(/[^a-z0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const sections = (json.sections || []).map((s, i) => ({
  id: mapTitle(s.title) || `section-${i + 1}`,
  title: s.title.trim(),
  items: (s.items || []).map((it, j) => ({
    id: `${mapTitle(it.name) || "item"}-${j + 1}`,
    name: it.name.trim(),
    price: it.price,
  })),
}));

let ts = await fs.readFile(tsPath, "utf8");
// Intento 1: regex estándar (LF/CRLF)
const pattern = /export const menuES: MenuSection\[\] = [\s\S]*?;\r?\n\r?\n/;
if (pattern.test(ts)) {
  ts = ts.replace(
    pattern,
    `export const menuES: MenuSection[] = ${JSON.stringify(
      sections,
      null,
      2,
    )} as any;\n\n`,
  );
} else {
  // Fallback robusto: localizar delimitadores entre menuES y menuEN
  const startToken = "export const menuES: MenuSection[] =";
  let start = ts.indexOf(startToken);
  if (start === -1) {
    // alguna variación de espacios
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
    console.error(
      "Could not locate 'export const menuES' block in src/data/menu.ts. No changes applied.",
    );
    process.exit(1);
  }
}

await fs.writeFile(tsPath, ts, "utf8");
console.log("menu.ts updated with extracted ES sections.");
