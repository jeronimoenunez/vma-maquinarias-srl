import sharp from "sharp";
import { mkdir, stat, readdir } from "node:fs/promises";
import path from "node:path";

const outDir = "public/images/optimized";
await mkdir(outDir, { recursive: true });

async function exists(file) {
  try {
    await stat(file);
    return true;
  } catch {
    return false;
  }
}

async function optimizeOne({ input, output, width, quality = 84 }) {
  if (!(await exists(input))) {
    console.warn(`NO existe: ${input}`);
    return false;
  }

  await sharp(input)
    .rotate()
    .resize({
      width,
      withoutEnlargement: true,
    })
    .webp({
      quality,
      effort: 6,
    })
    .toFile(output);

  const original = await stat(input);
  const optimized = await stat(output);

  console.log(`${input}`);
  console.log(`  Original: ${(original.size / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  WebP: ${(optimized.size / 1024).toFixed(0)} KB -> ${output}`);

  return true;
}

const hoverImages = [
  {
    input: "public/images/hover-tijeras.png",
    output: `${outDir}/hover-tijeras-preview.webp`,
  },
  {
    input: "public/images/hover-brazos-articulados.png",
    output: `${outDir}/hover-brazos-articulados-preview.webp`,
  },
  {
    input: "public/images/hover-brazo-telescopico.png",
    output: `${outDir}/hover-brazo-telescopico-preview.webp`,
  },
  {
    input: "public/images/hover-plataforma-unipersonal.png",
    output: `${outDir}/hover-plataforma-unipersonal-preview.webp`,
  },
  {
    input: "public/images/hover-manipuladores.png",
    output: `${outDir}/hover-manipuladores-preview.webp`,
  },
];

for (const item of hoverImages) {
  await optimizeOne({
    input: item.input,
    output: item.output,
    width: 920,
    quality: 84,
  });
}

// Buscar imagen HT43 aunque tenga extensión rara o nombre con tilde
const imageDir = "public/images";
const files = await readdir(imageDir);

const ht43File = files.find((file) =>
  file.toLowerCase().includes("plataforma-telescópica-ht43-rtj-pro-a".toLowerCase()) ||
  file.toLowerCase().includes("plataforma-telescopica-ht43-rtj-pro-a".toLowerCase())
);

if (!ht43File) {
  console.warn("NO encontré imagen HT43 con nombre plataforma-telescópica-HT43-RTJ-PRO-a en public/images");
} else {
  const input = path.join(imageDir, ht43File);
  const base = path.basename(ht43File, path.extname(ht43File));

  await optimizeOne({
    input,
    output: `${outDir}/${base}-large.webp`,
    width: 1600,
    quality: 84,
  });

  await optimizeOne({
    input,
    output: `${outDir}/${base}-card.webp`,
    width: 820,
    quality: 80,
  });

  console.log(`HT43_ORIGINAL_SRC=/images/${ht43File}`);
}
