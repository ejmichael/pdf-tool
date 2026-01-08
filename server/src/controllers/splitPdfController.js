const fs = require("fs")
const path = require("path")
const archiver = require("archiver")
const { PDFDocument } = require("pdf-lib")

const splitPdfController = async (req, res) => {
    try {
        
        if(!req.file){
            return res.status(400).json({ message: "No file uploaded!"})
        }

        const pdfBytes = fs.readFileSync(req.file.path);
        const pdfDoc = await PDFDocument.load(pdfBytes);

        const outputDir = path.join(__dirname, "../../temp", `split_${Date.now()}`);
        fs.mkdirSync(outputDir, { recursive: true });

        const totalPages = pdfDoc.getPageCount();

        for (let i=0; i < totalPages; i++) {
            const newPdf = await await PDFDocument.create();
      const [page] = await newPdf.copyPages(pdfDoc, [i]);
      newPdf.addPage(page);

      const pdfBytes = await newPdf.save();
      fs.writeFileSync(
        path.join(outputDir, `page-${i + 1}.pdf`),
        pdfBytes
      );
    }

    // Zip output
    const zipPath = `${outputDir}.zip`;
    const archive = archiver("zip");
    const output = fs.createWriteStream(zipPath);

    archive.pipe(output);
    archive.directory(outputDir, false);
    await archive.finalize();

    output.on("close", () => {
      res.download(zipPath, "split-pages.zip", () => {
        fs.unlinkSync(req.file.path);
        fs.rmSync(outputDir, { recursive: true, force: true });
        fs.unlinkSync(zipPath);
      });
    });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to split PDF!" })
    }
}

module.exports = splitPdfController;