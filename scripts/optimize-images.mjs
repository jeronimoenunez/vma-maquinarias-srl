import sharp from "sharp";
import { mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";

const inputDir = "public/images";
const outputDir = "public/images/optimized";

const validExt = new Set([".jpg", ".jpeg", ".png", ".webp"]);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (full.includes(`${path.sep}optimized`)) continue;
      files.push(...await walk(full));
      continue;
    }

    const ext = path.extname(entry.name).toLowerCase();
    if (validExt.has(ext)) files.push(full);
  }

  return files;
}

function safeName(file) {
  return file
    .replace(/^public\/images\//, "")
    .replace(/[\\/]/g, "__")
    .replace(/\.[^.]+$/, "");
}

async function optimize() {
  await mkdir(outputDir, { recursive: true });

  const files = await walk(inputDir);

  for (const file of files) {
    const info = await stat(file);
    const base = safeName(file);

    const cardOut = path.join(outputDir, `${base}-card.webp`);
    const largeOut = path.join(outputDir, `${base}-large.webp`);

    try {
      await sharp(file)
        .rotate()
        .resize({
          width: 820,
          withoutEnlargement: true,
        })
        .webp({
          quality: 80,
          effort: 6,
        })
        .toFile(cardOut);

      await sharp(file)
        .rotate()
        .resize({
          width: 1600,
          withoutEnlargement: true,
        })
        .webp({
          quality: 84,
          effort: 6,
        })
        .toFile(largeOut);

      const cardSize = await stat(cardOut);
      const largeSize = await stat(largeOut);

      console.log(
        `${file} | original ${(info.size / 1024 / 1024).toFixed(2)}MB -> card ${(cardSize.size / 1024).toFixed(0)}KB | large ${(largeSize.size / 1024).toFixed(0)}KB`
      );
    } catch (error) {
      console.warn(`No pude optimizar ${file}:`, error.message);
    }
  }
}

optimize();
