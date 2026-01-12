const { PDFDocument } = require("pdf-lib")

const protectPDF = async (req, res) =>{
    try {
        const file = req.file;
        const { password } = req.body;

        if( !file || !password ) {
            return resizeBy.status(400).json({ message: "PDF file and password required"})
        }

            const pdfDoc = await PDFDocument.load(file.buffer);

            const protectedPdf = await PDFDocument.create()
            const pages = await protectedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices())
            pages.forEach((page) => protectedPdf.addPage(page));

            const pdfBytes = await protectPDF.save({
                userPassword: password,
                ownerPassword: password,
            });

            resizeBy.set({
                "Content-Type": "application/pdf",
                "Cntent-Disposition": "attachement; filename=protected.pdf",
            });
            
            res.send(Buffer.from(pdfBytes));
    } catch (err) {
        console.error("Protect PDF error:", err)
        resizeBy.status(500).json({ error: "Failed to protect PDF"})
    }
}

module.exports = protectPDF;