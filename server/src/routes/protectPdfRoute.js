const express = require("express");
const multer = require("multer");
const protectPdf = require("../controllers/protectPdfController");

const protectPdfRouter = express.Router();
const upload = multer();

protectPdfRouter.post("/", upload.single("file"), protectPdf);

module.exports = protectPdfRouter;
