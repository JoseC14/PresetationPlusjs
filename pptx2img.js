// const fs = require('node:fs');
// const { unzip } = require('node:zlib');
// fs.readFile('pres.pptx', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
// });
const decompress = require("decompress")

decompress("pres.pptx", ".")
  .then((files) => {
    console.log(files);
  })
  .catch((error) => {
    console.log(error);
  });