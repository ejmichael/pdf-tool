const fs = require('fs')
const { PDFDocument } = require('pdf-lib');
// const { v4: uuid } = require('uuid')

const compressPDFFile = async (filePath) => {
      const { v4: uuid } = await import("uuid");
    const pdfBytes = fs.readFileSync(filePath);

    const pdfDoc = await PDFDocument.load(pdfBytes, {
        updateMetadata: false
    });

    const compressedBytes = await pdfDoc.save({
        useObjectStreams: true
    });

    const compressedPath = `uploads/compressed-${uuid()}.pdf`;

    fs.writeFileSync(compressedPath, compressedBytes)

    return compressedPath
}

module.exports = compressPDFFile