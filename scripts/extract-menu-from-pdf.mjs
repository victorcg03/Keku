import fs from "fs/promises";
// Evitar el index.js que entra en modo debug si no hay module.parent
import pdf from "pdf-parse/lib/pdf-parse.js";

const pdfPath = new URL(
  "../public/CARTA Y ALERGENOS VERANO 2025.pdf",
  import.meta.url,
);
const outPath = new URL("../src/data/menu.generated.json", import.meta.url);

const data = await fs.readFile(pdfPath);
// Extraer texto preservando orden visual (x,y) por página para minimizar cortes/columnas
const parsed = await pdf(data, {
  pagerender: async (pageData) => {
    const tc = await pageData.getTextContent();
    const items = tc.items
      .map((it) => ({
        s: it.str.trim(),
        x: it.transform[4],
        y: it.transform[5],
      }))
      .filter((t) => t.s);
    // Agrupar por Y con tolerancia
    const tolY = 2.0;
    const lines = [];
    for (const it of items) {
      let group = lines.find((ln) => Math.abs(ln.y - it.y) <= tolY);
      if (!group) {
        group = { y: it.y, tokens: [] };
        lines.push(group);
      }
      group.tokens.push(it);
      // Reajustar y a la media para el grupo
      group.y =
        (group.y * (group.tokens.length - 1) + it.y) / group.tokens.length;
    }
    // Ordenar de arriba a abajo y tokens de izquierda a derecha
    lines.sort((a, b) => b.y - a.y);
    const joined = lines.map((ln) => {
      ln.tokens.sort((a, b) => a.x - b.x);
      // Unir tokens con espacio, comprimiendo múltiples espacios
      return ln.tokens
        .map((t) => t.s)
        .join(" ")
        .replace(/\s{2,}/g, " ")
        .trim();
    });
    return joined.join("\n");
  },
});
const text = parsed.text;

// Utilidades
const isSectionHeader = (line) =>
  /^[A-ZÁÉÍÓÚÜÑ\s]{4,}$/.test(line) && !/\d/.test(line);
// Exigir € y decimales con dos dígitos para minimizar falsos positivos (p.ej. "1925", "2,2")
const priceOnlyRegex = /^(?:€?\s*)?(\d{1,3}[\.,]\d{2})\s*€$/;
const findLastPriceToken = (line) => {
  const re = /(\d{1,3}[\.,]\d{2})\s*€/g;
  let m,
    last = null;
  while ((m = re.exec(line)) !== null) {
    last = { value: m[1], index: m.index, length: m[0].length };
  }
  return last;
};
const normalizePrice = (raw) => {
  let p = String(raw).replace(",", ".");
  if (!p.includes(".") && /^\d{3,4}$/.test(p))
    p = `${p.slice(0, -2)}.${p.slice(-2)}`;
  return p;
};

// 1) Preprocesar líneas: recortar, eliminar vacías, y fusionar "líneas de precio" con la anterior
const rawLines = text
  .split(/\r?\n/)
  .map((l) => l.trim())
  .filter(Boolean);
const merged = [];
for (const line of rawLines) {
  if (
    priceOnlyRegex.test(line) &&
    merged.length > 0 &&
    !isSectionHeader(merged[merged.length - 1])
  ) {
    merged[merged.length - 1] = `${merged[merged.length - 1]} ${line}`;
  } else {
    // Normalizar separaciones extrañas en decimales: "3 , 00" -> "3,00"
    let fixed = line
      .replace(/(\d)\s*,\s*(\d{2})/g, "$1,$2")
      .replace(/(\d+)\s*,\s*(\d)(\s*€)/g, "$1,$2$30");
    merged.push(fixed);
  }
}

// 2) Parsear secciones e items: detectar sección en mayúsculas, buscar último token de precio en cada línea
const sections = [];
let current = null;
for (const line of merged) {
  if (isSectionHeader(line)) {
    if (current) sections.push(current);
    current = { title: line, items: [] };
    continue;
  }
  if (!current) continue; // ignorar contenido antes de la primera sección válida

  // Si la línea contiene múltiples precios (múltiples €), probablemente es una tabla/tamaños -> saltar
  const euroCount = (line.match(/€/g) || []).length;
  if (euroCount > 1) continue;

  const priceTok = findLastPriceToken(line);
  if (!priceTok) continue;

  let name = line
    .slice(0, priceTok.index)
    .replace(/[-–—\s]+$/, "")
    .replace(/\s{2,}/g, " ")
    .trim();
  // Eliminar precios incrustados con símbolo € dentro del nombre (evita duplicados tipo "... 8,50€ 8,50€")
  name = name
    .replace(/\b\d{1,3}(?:[\.,]\d{1,2})\s*€\b/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();
  // Filtros de ruido: debe empezar en mayúscula, no contener '@' ni palabras guía tipo "Incluye"
  if (!/^[A-ZÁÉÍÓÚÜÑ]/.test(name)) continue;
  if (name.includes("@")) continue;
  if (/^Incluye\b/i.test(name)) continue;
  let price = normalizePrice(priceTok.value);
  current.items.push({ name, price });
}
if (current) sections.push(current);

// 3) Filtrar secciones sin items y descartar cabeceras generales que a veces vienen del diseño
const skipTitles = new Set([
  "NUESTRA",
  "KEKU",
  "CARTA ALÉRGENOS",
  "CERTIFICADO DE",
  "GESTIÓN DE ALÉRGENOS",
]);
const nonEmpty = sections.filter(
  (s) => (s.items || []).length > 0 && !skipTitles.has(s.title),
);

// 4) Fusionar secciones con el mismo título (p. ej., "RIOJA" en varias páginas)
const byTitle = new Map();
for (const s of nonEmpty) {
  const key = s.title.trim();
  if (!byTitle.has(key)) byTitle.set(key, { title: s.title, items: [] });
  byTitle.get(key).items.push(...s.items);
}
const mergedSections = Array.from(byTitle.values()).map((s, i) => ({
  title: s.title,
  items: s.items,
}));

await fs.writeFile(
  outPath,
  JSON.stringify(
    { generatedAt: new Date().toISOString(), sections: mergedSections },
    null,
    2,
  ),
  "utf8",
);
console.log("Menu extracted to", outPath.pathname);
