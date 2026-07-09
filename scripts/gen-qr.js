const QRCode = require("qrcode");
const sharp = require("sharp");
const path = require("path");

const url = "https://in999.in.net/apk-download";

QRCode.toBuffer(url, {
  type: "png",
  errorCorrectionLevel: "M",
  margin: 1,
  width: 480,
  color: { dark: "#071225", light: "#FFFFFF" },
})
  .then((buffer) =>
    sharp(buffer)
      .webp({ quality: 90 })
      .toFile(path.join(__dirname, "..", "public", "images", "apk-qr.webp"))
  )
  .then((info) => console.log("QR generated", info))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
