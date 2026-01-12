const express = require("express")
const cors = require("cors")
const path = require("path");
const compressRouter = require("./src/routes/compressRoute");
const mergeRoute = require('./src/routes/mergeRoute');
const pdfToJpgRouter = require("./src/routes/pdfToJpgRoute");
const splitPdfRouter = require("./src/routes/splitPdfRoute");
const deletePagesRouter = require("./src/routes/deletePagesRoute");
const protectPdfRouter = require("./src/routes/protectPdfRoute");

const app = express();

app.use(cors())
app.use(express.json())

app.use("/api/compress", compressRouter);
app.use("/api/merge", mergeRoute);
app.use("/api/pdf-to-jpg", pdfToJpgRouter);
app.use("/api/split-pdf", splitPdfRouter);
app.use("/api/delete-pages", deletePagesRouter);
app.use("/api/protect", protectPdfRouter);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));