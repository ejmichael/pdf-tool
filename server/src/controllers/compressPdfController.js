const express = require('express')
const fs = require("fs")
const compressPDFFile = require('../utils/compressPDF')

const compressPDF = async (req, res) => {
    try {

        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        const compressedPath = await compressPDFFile(req.file.path);

        res.download(compressedPath, "compressed.pdf", () => {
            fs.unlinkSync(req.file.path); //delete original
            fs.unlinkSync(compressedPath) //delete compresed
        });


        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Compression Failed"})
        
    }
}

module.exports = compressPDF