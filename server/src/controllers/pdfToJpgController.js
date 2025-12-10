const fs = require("fs");
const path = require("path");
const { fromPath } = require("pdf2pic");
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
      density: 150,
      saveFilename: "page",
      savePath: outputDir,
      format: "jpeg",
      width: 1200, // optional: resize width
      height: 1600, // optional: resize height
    };

    const storeAsImage = fromPath(pdfPath, options);
    const pdfData = await storeAsImage(1, true); // get number of pages
    const totalPages = pdfData.length || 1; // fallback

    // convert all pages
    for (let i = 1; i <= totalPages; i++) {
      await storeAsImage(i);
    }

    // zip the images
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
