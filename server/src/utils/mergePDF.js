const fs = require("fs");
const { PDFDocument } = require("pdf-lib");

const mergePDFs = async (filePaths) => {
  const mergedPdf = await PDFDocument.create();

  for (let path of filePaths) {
    const pdfBytes = fs.readFileSync(path);
    const pdf = await PDFDocument.load(pdfBytes);
    const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
    copiedPages.forEach((page) => mergedPdf.addPage(page));
  }

  const mergedPdfBytes = await mergedPdf.save();
  const outputPath = `uploads/merged_${Date.now()}.pdf`;
  fs.writeFileSync(outputPath, mergedPdfBytes);
  return outputPath;
};

module.exports = mergePDFs;
