const fs = require("fs");
const path = require("path");
const PDFImage = require("pdf-poppler");
const archiver = require("archiver");

const pdfToJpgController = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const pdfPath = req.file.path;
    const outputDir = path.join(__dirname, "../../temp", `jpg_${Date.now()}`);

    fs.mkdirSync(outputDir, { recursive: true });

    const options = {
      format: "jpeg",
      out_dir: outputDir,
      out_prefix: "page",
      page: null,
    };

    await PDFImage.convert(pdfPath, options);

    const zipPath = `${outputDir}.zip`;
    const output = fs.createWriteStream(zipPath);
    const archive = archiver("zip", { zlib: { level: 9 } });

    archive.pipe(output);
    archive.directory(outputDir, false);
    await archive.finalize();

    output.on("close", () => {
      res.download(zipPath, "converted-images.zip", () => {
        fs.unlinkSync(pdfPath);
        fs.unlinkSync(zipPath);
        fs.rmSync(outputDir, { recursive: true, force: true });
      });
    });

  } catch (err) {
    console.error("PDF to JPG conversion error:", err);
    res.status(500).json({ error: "Failed to convert PDF" });
  }
};

module.exports = pdfToJpgController;
