const path = require("path");
const fs = require("fs");
const poppler = require("pdf-poppler");

async function convertPdfToJpg(pdfPath) {
    const outputDir = path.join(__dirname, "../../converted");

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }

    const outputBase = path.join(outputDir, Date.now().toString());

    const options = {
        format: "jpeg",
        out_dir: outputDir,
        out_prefix: path.basename(outputBase),
        page: null, // convert all pages
    };

    await poppler.convert(pdfPath, options);

    // Gather all generated JPGs
    const images = fs
        .readdirSync(outputDir)
        .filter((file) => file.startsWith(path.basename(outputBase)) && file.endsWith(".jpg"))
        .map((file) => path.join(outputDir, file));

    return images;
}

module.exports = convertPdfToJpg;
