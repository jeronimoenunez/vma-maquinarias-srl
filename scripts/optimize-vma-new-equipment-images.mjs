import sharp from "sharp";
import { mkdir, stat } from "node:fs/promises";

const outDir = "public/images/optimized";

const images = [
  "public/images/HA41-RTJ-PRO.webp",
  "public/images/HT43-RTJ-PRO.jpg",
  "public/images/ha-32-rtj-pro.jpg",
  "public/images/HAULOTTE-H12SX.webp",
  "public/images/HAULOTTE-H15SX.webp",
  "public/images/haulotte-h18sx.jpg",
  "public/images/ha-18-spx.jpg",
];

await mkdir(outDir, { recursive: true });

async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

function outputBase(input) {
  return input
    .replace(/^public\/images\//, "")
    .replace(/[\\/]/g, "__")
    .replace(/\.[^.]+$/, "");
}

async function optimize(input) {
  if (!(await exists(input))) {
    console.warn(`NO existe, salteo: ${input}`);
    return;
  }

  const base = outputBase(input);
  const large = `${outDir}/${base}-large.webp`;
  const card = `${outDir}/${base}-card.webp`;

  await sharp(input)
    .rotate()
    .resize({
      width: 1600,
      withoutEnlargement: true,
    })
    .webp({
      quality: 84,
      effort: 6,
    })
    .toFile(large);

  await sharp(input)
    .rotate()
    .resize({
      width: 820,
      withoutEnlargement: true,
    })
    .webp({
      quality: 80,
      effort: 6,
    })
    .toFile(card);

  const originalSize = await stat(input);
  const largeSize = await stat(large);
  const cardSize = await stat(card);

  console.log(`OK ${input}`);
  console.log(`  Original: ${(originalSize.size / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  Large: ${(largeSize.size / 1024).toFixed(0)} KB -> ${large}`);
  console.log(`  Card: ${(cardSize.size / 1024).toFixed(0)} KB -> ${card}`);
}

for (const image of images) {
  await optimize(image);
}
