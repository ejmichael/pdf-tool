const express = require("express")
const multer = require("multer"); 
const compressPDF = require('../controllers/compressPdfController')
const compressRouter = express.Router();

const upload = multer({ dest: "uploads/" });


compressRouter.post('/',  upload.single("file"), compressPDF)

module.exports = compressRouter