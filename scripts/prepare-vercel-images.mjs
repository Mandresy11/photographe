import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const workspace = process.cwd();
const sourceRoot = path.join(workspace, "public", "images", "photoo");
const outputRoot = path.join(workspace, "public", "web", "photoo");
const supportedExtensions = new Set([".jpg", ".jpeg", ".png"]);

async function collectImages(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectImages(entryPath)));
    } else if (supportedExtensions.has(path.extname(entry.name).toLowerCase())) {
      files.push(entryPath);
    }
  }

  return files;
}

async function optimiseImage(source, destination) {
  await mkdir(path.dirname(destination), { recursive: true });
  const pipeline = sharp(source)
    .rotate()
    .resize({
      width: 2200,
      height: 2200,
      fit: "inside",
      withoutEnlargement: true,
    });

  if (path.extname(source).toLowerCase() === ".png") {
    await pipeline.png({ compressionLevel: 9 }).toFile(destination);
  } else {
    await pipeline.jpeg({ quality: 80, mozjpeg: true }).toFile(destination);
  }
}

const photoFiles = await collectImages(sourceRoot);
const standaloneFiles = ["terrain-polaroid-1.jpg", "terrain-polaroid-2.jpg"].map(
  (file) => path.join(workspace, "public", "images", file),
);
const jobs = [
  ...photoFiles.map((source) => ({
    source,
    destination: path.join(outputRoot, path.relative(sourceRoot, source)),
  })),
  ...standaloneFiles.map((source) => ({
    source,
    destination: path.join(workspace, "public", "web", path.basename(source)),
  })),
];

const concurrency = 4;
let cursor = 0;

async function worker() {
  while (cursor < jobs.length) {
    const job = jobs[cursor];
    cursor += 1;
    await optimiseImage(job.source, job.destination);
  }
}

await Promise.all(Array.from({ length: concurrency }, () => worker()));
console.log(`Prepared ${jobs.length} web images in public/web.`);
