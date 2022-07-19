request = require("request");
const rp = require("request-promise");
const cheerio = require("cheerio");
const fs = require("fs");
// const { data } = require("cheerio/lib/api/attributes");
var download = async function (uri, filename, callback) {
  request.head(uri, function (err, res, body) {
    // console.log("content-type:", res.headers["content-type"]);
    // console.log("content-length:", res.headers["content-length"]);

    request(uri)
      .pipe(
        // fs.createWriteStream(filename.replace("/([^A-Za-z0-9_])w+/g", " "))
        fs.createWriteStream(filename)
      )
      .on("close", callback);
  });
};



download('https://finance.vietstock.vn/image/AAT',`aaa.png`,function () {
  console.log("done");
})