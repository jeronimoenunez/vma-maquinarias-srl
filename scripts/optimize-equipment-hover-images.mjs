import sharp from "sharp";
import { mkdir, stat } from "node:fs/promises";

const input = "public/images/hover-manipuladores.png";
const outDir = "public/images/optimized";
const output = `${outDir}/hover-manipuladores-preview.webp`;

await mkdir(outDir, { recursive: true });

await sharp(input)
  .rotate()
  .resize({
    width: 920,
    withoutEnlargement: true,
  })
  .webp({
    quality: 84,
    effort: 6,
  })
  .toFile(output);

const original = await stat(input);
const optimized = await stat(output);

console.log(`Original: ${(original.size / 1024 / 1024).toFixed(2)} MB`);
console.log(`Preview: ${(optimized.size / 1024).toFixed(0)} KB -> ${output}`);
