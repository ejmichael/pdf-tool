const fs = require("fs");
const path = require("path");
const { PDFDocument } = require("pdf-lib");

const deletePagesController = async (req, res) => {
  try {
    const { pages } = req.body; // e.g. "1,3,5"
    if (!req.file || !pages)
      return res.status(400).json({ error: "Missing file or pages" });

    const pagesToDelete = pages.split(",").map(p => parseInt(p) - 1);

    const pdfBytes = fs.readFileSync(req.file.path);
    const pdfDoc = await PDFDocument.load(pdfBytes);

    const totalPages = pdfDoc.getPageCount();
    const keepPages = [];

    for (let i = 0; i < totalPages; i++) {
      if (!pagesToDelete.includes(i)) keepPages.push(i);
    }

    const newPdf = await PDFDocument.create();
    const copiedPages = await newPdf.copyPages(pdfDoc, keepPages);
    copiedPages.forEach(p => newPdf.addPage(p));

    const outputPdf = await newPdf.save();
    const outputPath = path.join(__dirname, "../../temp", `cleaned.pdf`);
    fs.writeFileSync(outputPath, outputPdf);

    res.download(outputPath, "updated.pdf", () => {
      fs.unlinkSync(req.file.path);
      fs.unlinkSync(outputPath);
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete pages" });
  }
};

module.exports = deletePagesController;
