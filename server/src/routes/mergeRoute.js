const express = require("express");
const multer = require("multer");
const mergePDFController = require("../controllers/mergePDFController");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", upload.array("files", 10), mergePDFController);

module.exports = router;
