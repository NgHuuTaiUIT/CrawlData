request = require("request");
const rp = require("request-promise");
const cheerio = require("cheerio");
const fs = require("fs");
const { data } = require("cheerio/lib/api/attributes");
var download = async function (uri, filename, callback) {

  request.head(uri, function (err, res, body) {
    // console.log("content-type:", res.headers["content-type"]);
    // console.log("content-length:", res.headers["content-length"]);

    request(uri)
      .pipe(
        // fs.createWriteStream(filename.replace("/([^A-Za-z0-9_])w+/g", " "))
        fs.createWriteStream('aaa1.png')
      )
      .on("close", callback);
  });
};

download('https://cafef1.mediacdn.vn/LOGO/AAA_20220414132721.png','dad',function () {
  console.log("done");
})