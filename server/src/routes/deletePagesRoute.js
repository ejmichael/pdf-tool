const express = require("express");
const multer = require("multer");
const deletePagesController = require("../controllers/deletePagesController");

const deletePagesRouter = express.Router();
const upload = multer({ dest: "uploads/" });

deletePagesRouter.post("/", upload.single("file"), deletePagesController);

module.exports = deletePagesRouter;
