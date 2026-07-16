const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const DARK = "#0a0704";

function markGroup(scale, translate) {
  const notches = [0, 45, 90, 135, 180, 225, 270, 315]
    .map((angle) => {
      const rad = (angle * Math.PI) / 180;
      const x1 = 12 + 9.75 * Math.cos(rad);
      const y1 = 12 + 9.75 * Math.sin(rad);
      const x2 = 12 + 11 * Math.cos(rad);
      const y2 = 12 + 11 * Math.sin(rad);
      return `<line x1="${x1.toFixed(3)}" y1="${y1.toFixed(3)}" x2="${x2.toFixed(3)}" y2="${y2.toFixed(3)}" stroke="${DARK}" stroke-width="1.75" stroke-linecap="round"/>`;
    })
    .join("");

  return `
    <g transform="translate(${translate},${translate}) scale(${scale})">
      <circle cx="12" cy="12" r="8.25" stroke="${DARK}" stroke-width="1.75" fill="none"/>
      ${notches}
      <path d="M12.6 8.4c1.55 0 2.7 1.16 2.7 2.98 0 1.03-.32 2.02-1.03 3.36l-1.87 3.51h-1.72l1.6-2.95a2.9 2.9 0 0 1-.42.03c-1.5 0-2.66-1.13-2.66-2.7 0-1.71 1.25-3.23 3.4-3.23Zm-.02 1.36c-1.05 0-1.72.77-1.72 1.8 0 1 .62 1.67 1.6 1.67.99 0 1.7-.7 1.7-1.7 0-1.04-.65-1.77-1.58-1.77Z" fill="${DARK}"/>
    </g>
  `;
}

function badgeSvg({ size = 256 } = {}) {
  const scale = 70 / 24;
  const translate = (100 - 70) / 2;
  return `
    <svg width="${size}" height="${size}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f4c430"/>
          <stop offset="100%" stop-color="#b8860b"/>
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="50" fill="url(#gold)"/>
      ${markGroup(scale, translate)}
    </svg>
  `;
}

function toIco(pngBuffers, sizes) {
  const count = sizes.length;
  const headerSize = 6 + count * 16;
  let offset = headerSize;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  const entries = [];
  for (let i = 0; i < count; i++) {
    const size = sizes[i];
    const buf = pngBuffers[i];
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0);
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(buf.length, 8);
    entry.writeUInt32LE(offset, 12);
    entries.push(entry);
    offset += buf.length;
  }

  return Buffer.concat([header, ...entries, ...pngBuffers]);
}

async function main() {
  const outDir = path.join(__dirname, "..", "src", "app");
  const svg = badgeSvg({ size: 512 });

  const icoSizes = [16, 32, 48];
  const pngBuffers = await Promise.all(
    icoSizes.map((size) => sharp(Buffer.from(badgeSvg({ size }))).png().toBuffer())
  );
  fs.writeFileSync(path.join(outDir, "favicon.ico"), toIco(pngBuffers, icoSizes));
  console.log("favicon.ico written");

  await sharp(Buffer.from(svg)).png().toFile(path.join(outDir, "icon.png"));
  console.log("icon.png written");

  const appleSvg = badgeSvg({ size: 180 });
  await sharp(Buffer.from(appleSvg)).png().toFile(path.join(outDir, "apple-icon.png"));
  console.log("apple-icon.png written");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
