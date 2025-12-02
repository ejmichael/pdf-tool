const express = require("express")
const cors = require("cors")
const path = require("path");
const compressRouter = require("./src/routes/compressRoute");

const app = express();

app.use(cors())
app.use(express.json())

app.use("/api/compress", compressRouter);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));