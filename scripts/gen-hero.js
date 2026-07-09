const sharp = require("sharp");
const path = require("path");

const svg = `
<svg width="1600" height="900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#071225"/>
      <stop offset="50%" stop-color="#122447"/>
      <stop offset="100%" stop-color="#0b1833"/>
    </linearGradient>
    <radialGradient id="glow" cx="70%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#ffd34a" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#ffd34a" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffe9a8"/>
      <stop offset="35%" stop-color="#ffd34a"/>
      <stop offset="70%" stop-color="#f6b400"/>
      <stop offset="100%" stop-color="#ffe9a8"/>
    </linearGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <rect width="1600" height="900" fill="url(#glow)"/>
  <g opacity="0.12" stroke="#ffd34a" stroke-width="2">
    <circle cx="1250" cy="280" r="220"/>
    <circle cx="1250" cy="280" r="300"/>
    <circle cx="300" cy="700" r="160"/>
  </g>
  <text x="800" y="430" font-family="Georgia, serif" font-size="150" font-weight="700" fill="url(#gold)" text-anchor="middle" letter-spacing="10">IN999</text>
  <text x="800" y="500" font-family="Arial, sans-serif" font-size="34" font-weight="500" fill="#eef2fb" text-anchor="middle" letter-spacing="8">PREMIUM GAMING PLATFORM</text>
  <g transform="translate(800,600)" opacity="0.9">
    <circle r="4" fill="#ffd34a"/>
    <circle cx="-40" r="4" fill="#ffd34a"/>
    <circle cx="40" r="4" fill="#ffd34a"/>
  </g>
</svg>
`;

sharp(Buffer.from(svg))
  .webp({ quality: 85 })
  .toFile(path.join(__dirname, "..", "public", "images", "in999-hero.webp"))
  .then(() => console.log("hero placeholder written"))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
