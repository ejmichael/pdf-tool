const express = require("express");
const multer = require("multer");
const splitPdfController = require("../controllers/splitPdfController");

const splitPdfRouter = express.Router();
const upload = multer({ dest: "uploads/" });

splitPdfRouter.post("/", upload.single("file"), splitPdfController);

module.exports = splitPdfRouter;