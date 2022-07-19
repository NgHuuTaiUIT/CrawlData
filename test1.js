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
        fs.createWriteStream("images" + "/" + filename)
      )
      .on("close", callback);
  });
};

let rawdata = fs.readFileSync('data-stock.json');
let data = JSON.parse(rawdata);
data.map((item, index) => {
  // const encodedURI = encodeURI(item.src);
  // console.log("dsada", encodedURI);
  download(`https://cafef1.mediacdn.vn/LOGO/AAM${item.machungkhoan}.jpg`,`${item.machungkhoan}.jpg`,function () {
  console.log("done");
})
});

// download('https://finance.vietstock.vn/image/AAA',`.jpeg`,function () {
//   console.log("done");
// })