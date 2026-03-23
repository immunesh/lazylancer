const fs = require("fs/promises");
const pdfParse = require("pdf-parse").default || require("pdf-parse");

const parsePDF = async (filePath) => {

  const buffer = await fs.readFile(filePath);

  const data = await pdfParse(buffer);

  return data.text;

};

module.exports = parsePDF;