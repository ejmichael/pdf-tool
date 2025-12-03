const fs = require("fs");
const mergePDFs = require("../utils/mergePDF");

const mergePDFController = async (req, res) => {
  try {
    if (!req.files || req.files.length < 2) {
      return res.status(400).json({ message: "Upload at least 2 PDF files to merge." });
    }

    const filePaths = req.files.map((f) => f.path);
    const mergedPath = await mergePDFs(filePaths);

    res.download(mergedPath, "merged.pdf", () => {
      // Clean up uploaded files
      filePaths.forEach((path) => fs.unlinkSync(path));
      fs.unlinkSync(mergedPath);
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Merging Failed" });
  }
};

module.exports = mergePDFController;
