import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

const file = "src/ui/sections/EquipmentShowcase.astro";
const source = readFileSync(file, "utf8");

const equipmentStart = source.indexOf("const equipment: EquipmentItem[] = [");
if (equipmentStart === -1) {
  console.error("No encontré const equipment en EquipmentShowcase.astro");
  process.exit(1);
}

const arrayStart = source.indexOf("[", equipmentStart);
const arrayEnd = source.indexOf("];", arrayStart);

if (arrayStart === -1 || arrayEnd === -1) {
  console.error("No pude detectar el array de equipment.");
  process.exit(1);
}

const equipmentBlock = source.slice(arrayStart + 1, arrayEnd);

function splitObjects(block) {
  const objects = [];
  let depth = 0;
  let start = -1;
  let inString = false;
  let quote = "";
  let escape = false;

  for (let i = 0; i < block.length; i++) {
    const ch = block[i];

    if (inString) {
      if (escape) {
        escape = false;
      } else if (ch === "\\") {
        escape = true;
      } else if (ch === quote) {
        inString = false;
      }
      continue;
    }

    if (ch === '"' || ch === "'" || ch === "`") {
      inString = true;
      quote = ch;
      continue;
    }

    if (ch === "{") {
      if (depth === 0) start = i;
      depth++;
    }

    if (ch === "}") {
      depth--;
      if (depth === 0 && start !== -1) {
        objects.push(block.slice(start, i + 1));
        start = -1;
      }
    }
  }

  return objects;
}

function pick(obj, field) {
  const re = new RegExp(`${field}:\\s*"([^"]*)"`);
  return obj.match(re)?.[1] ?? "";
}

function manualPick(obj) {
  return obj.match(/manualHref:\s*"([^"]*)"/)?.[1] ?? "";
}

function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function listFilesRecursive(dir) {
  if (!existsSync(dir)) return [];

  const out = [];

  for (const item of readdirSync(dir)) {
    const full = path.join(dir, item);
    const st = statSync(full);

    if (st.isDirectory()) {
      out.push(...listFilesRecursive(full));
    } else {
      out.push(full);
    }
  }

  return out;
}

function scoreMatch(cardText, fileName) {
  const a = normalizeText(cardText).split(" ").filter(Boolean);
  const b = normalizeText(fileName).split(" ").filter(Boolean);

  if (!a.length || !b.length) return 0;

  let score = 0;

  for (const token of a) {
    if (token.length < 2) continue;
    if (b.includes(token)) score += token.length >= 4 ? 2 : 1;
  }

  return score;
}

const objects = splitObjects(equipmentBlock);
const manuals = listFilesRecursive("public/manuales")
  .filter((item) => item.toLowerCase().endsWith(".pdf"))
  .sort();

const cards = objects.map((obj) => {
  const id = pick(obj, "id");
  const mainCategory = pick(obj, "mainCategory");
  const subCategory = pick(obj, "subCategory");
  const title = pick(obj, "title");
  const subtitle = pick(obj, "subtitle");
  const manualHref = manualPick(obj);

  const manualPath = manualHref
    ? path.join("public", manualHref.replace(/^\//, ""))
    : "";

  const exists = manualHref ? existsSync(manualPath) : false;

  const cardText = `${id} ${title} ${subtitle} ${mainCategory} ${subCategory}`;

  const suggestions = manuals
    .map((manual) => ({
      manual,
      score: scoreMatch(cardText, path.basename(manual)),
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((item) => item.manual.replace(/^public/, ""));

  return {
    id,
    mainCategory,
    subCategory,
    title,
    subtitle,
    manualHref,
    manualPath,
    exists,
    suggestions,
  };
});

const withoutManual = cards.filter((card) => !card.manualHref);
const brokenManual = cards.filter((card) => card.manualHref && !card.exists);
const okManual = cards.filter((card) => card.manualHref && card.exists);

console.log("\n==============================");
console.log("REPORTE MANUALES VMA");
console.log("==============================\n");

console.log(`Total cards detectadas: ${cards.length}`);
console.log(`Con manual correcto: ${okManual.length}`);
console.log(`Sin manualHref: ${withoutManual.length}`);
console.log(`Con manualHref roto/no existe: ${brokenManual.length}`);
console.log(`PDFs encontrados en public/manuales: ${manuals.length}`);

console.log("\n------------------------------");
console.log("CARDS SIN manualHref");
console.log("------------------------------");

if (!withoutManual.length) {
  console.log("OK: todas las cards tienen manualHref.");
} else {
  for (const card of withoutManual) {
    console.log(`\n- ${card.title}${card.subtitle ? ` ${card.subtitle}` : ""}`);
    console.log(`  id: ${card.id}`);
    console.log(`  categoría: ${card.mainCategory} / ${card.subCategory}`);

    if (card.suggestions.length) {
      console.log("  sugerencias:");
      for (const suggestion of card.suggestions) {
        console.log(`   · ${suggestion}`);
      }
    } else {
      console.log("  sugerencias: sin coincidencias claras");
    }
  }
}

console.log("\n------------------------------");
console.log("manualHref ROTOS / PDF NO EXISTE");
console.log("------------------------------");

if (!brokenManual.length) {
  console.log("OK: no hay rutas rotas.");
} else {
  for (const card of brokenManual) {
    console.log(`\n- ${card.title}${card.subtitle ? ` ${card.subtitle}` : ""}`);
    console.log(`  id: ${card.id}`);
    console.log(`  ruta declarada: ${card.manualHref}`);
    console.log(`  busca archivo: ${card.manualPath}`);

    if (card.suggestions.length) {
      console.log("  sugerencias:");
      for (const suggestion of card.suggestions) {
        console.log(`   · ${suggestion}`);
      }
    } else {
      console.log("  sugerencias: sin coincidencias claras");
    }
  }
}

console.log("\n------------------------------");
console.log("MANUALES PDF DISPONIBLES");
console.log("------------------------------");

for (const manual of manuals) {
  console.log(`- ${manual.replace(/^public/, "")}`);
}

console.log("\n------------------------------");
console.log("RESUMEN POR CARD");
console.log("------------------------------");

for (const card of cards) {
  const status = !card.manualHref
    ? "SIN_MANUAL"
    : card.exists
      ? "OK"
      : "ROTO";

  console.log(
    `${status.padEnd(10)} | ${card.id.padEnd(48)} | ${card.title}${card.subtitle ? ` ${card.subtitle}` : ""} | ${card.manualHref || "-"}`
  );
}

console.log("\nListo.\n");
