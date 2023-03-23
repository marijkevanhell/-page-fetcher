const request = require("request");

const fs = require('fs');

//two arguments to take in
const url = process.argv[2];
const localFilePath = process.argv[3];


request(url, (error, response, body) => {
  //for error
  if (error) {
    console.log(error);
  }
  //for response if error, or success
  fs.writeFile(localFilePath, body, err => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${localFilePath}`);
    }
  });
});
