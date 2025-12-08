const express = require('express')
const multer = require('multer');
const pdfToJpgController = require('../controllers/pdfToJpgController');

const pdfToJpgRouter = express.Router()

const upload = multer({ dest: 'uploads/' });

pdfToJpgRouter.post('/', upload.single("file"), pdfToJpgController);

module.exports = pdfToJpgRouter