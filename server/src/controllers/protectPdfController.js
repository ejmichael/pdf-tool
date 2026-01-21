const { PDFDocument } = require("pdf-lib");

const protectPDF = async (req, res) => {
  try {
    const file = req.file;
    const { password } = req.body;

    if (!file || !password) {
      return res.status(400).json({
        message: "PDF file and password required",
      });
    }

    let pdfDoc;
    try {
      pdfDoc = await PDFDocument.load(file.buffer);
    } catch (err) {
      if (err.message.toLowerCase().includes("encrypted")) {
        return res.status(400).json({
          error: "This PDF is already password protected",
        });
      }
      throw err;
    }

    // 🔐 IMPORTANT: save THE SAME document with encryption
    const pdfBytes = await pdfDoc.save({
      userPassword: password,
      ownerPassword: password,
    });

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=protected.pdf",
    });

    res.send(Buffer.from(pdfBytes));
  } catch (err) {
    console.error("Protect PDF error:", err);
    res.status(500).json({ error: "Failed to protect PDF" });
  }
};

module.exports = protectPDF;
