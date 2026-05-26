import sharp from "sharp";
import { mkdir, stat } from "node:fs/promises";

const input = "public/images/alquiler-de-equipos.jpeg";
const outDir = "public/images/optimized";

const large = `${outDir}/alquiler-de-equipos-large.webp`;
const card = `${outDir}/alquiler-de-equipos-card.webp`;

await mkdir(outDir, { recursive: true });

await sharp(input)
  .rotate()
  .resize({
    width: 1800,
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
    width: 900,
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

console.log(`Original: ${(originalSize.size / 1024 / 1024).toFixed(2)} MB`);
console.log(`Large: ${(largeSize.size / 1024).toFixed(0)} KB -> ${large}`);
console.log(`Card: ${(cardSize.size / 1024).toFixed(0)} KB -> ${card}`);
