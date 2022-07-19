const rp = require("request-promise");
const cheerio = require("cheerio");
const fs = require("fs");
const { data } = require("cheerio/lib/api/attributes");

let linkGetImg = [];

var i = 0;
// const URL = `https://freetuts.net/reactjs/tu-hoc-reactjs`;
// const URL = `https://www.hanoicomputer.vn/ban-phim-akko-acg84-dragon-ball-super-goku-cherry-switch-red`;
async function crawlerImg(
  urlImg = "https://gearvn.com/products/ban-phim-leopold-fc650mds-light-pink",
  name = "Test_LEO",
  folder = "Images/"
) {
  const optionsImg = {
    uri: urlImg,
    transform: function (body) {
      //Khi lấy dữ liệu từ trang thành công nó sẽ tự động parse DOM
      return cheerio.load(body);
    }
  };
  console.log("crawlerImg", urlImg);
  try {
    // Lấy dữ liệu từ trang crawl đã được parseDOM
    var $$ = await rp(optionsImg);
  } catch (error) {
    console.log(error);
    return error;
  }

  /* Lấy tên và miêu tả của tutorial*/
  const imgs = $$(".woocommerce-product-gallery__image>a");
  // ".img-item > a > img"
  // ".col > a > img"
  // ".woocommerce-product-gallery__image > a"
  // ".wp-post-image"
  // ".product_detail_img.mh-100"
  let link = [];
  let ab = [...imgs];

  /**Akko */
  // ab.map(item => link.push({ src: item.attribs.src, name: item.attribs.alt }));

  /**Newman */
  // ab.map(item => link.push({ src: item.attribs.href }));

  /**Leopod */
  ab.map(item => {
    console.log(item.attribs.href);
    let urlSrc = item.attribs.href;
    // .substring(2);

    link.push({ src: urlSrc });
  });

  // /**Filco */
  // ab.map((item, index) => {
  //   let urlSrc = item.attribs.src.substring(2);
  //   urlSrc = urlSrc.replace(
  //     "d1vm37nfym7tjl.cloudfront.net",
  //     "https://www.phongcachxanh.vn"
  //   );
  //   link.push({
  //     src: urlSrc
  //   });
  // });

  /**FL */
  // ab.map((item, index) => {
  //   if (index < 4) {
  //     link.push({
  //       src: "https://gearshop.vn" + item.attribs.src
  //     });
  //   }
  // });

  let data = [];
  data.push(...link);

  // Lưu dữ liệu về máy
  // fs.createWriteStream(`${link[0].name}.json`);
  // fs.writeFileSync(
  //   `${link[0].name.replaceAll("\\", "")}.json`,
  //   JSON.stringify(data)
  // );
  request = require("request");

  var download = async function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
      // console.log("content-type:", res.headers["content-type"]);
      // console.log("content-length:", res.headers["content-length"]);

      request(uri)
        .pipe(
          // fs.createWriteStream(filename.replace("/([^A-Za-z0-9_])w+/g", " "))
          fs.createWriteStream(folder + "/" + filename)
        )
        .on("close", callback);
    });
  };
  data.map((item, index) => {
    const encodedURI = encodeURI(item.src);
    console.log("dsada", encodedURI);
    download(
      encodedURI,
      `${name.replaceAll(" ", "_")}_00${index}.jpg`,
      function () {
        console.log("done");
      }
    );
  });
}

// crawlerImg("https://newmen.vn/san-pham/gm610-dual-mode-bt5-0-wire/", "Test");

(async function crawler(className = ".p-img > a") {
  const URL = "https://dareu.com.vn/ban-phim/";
  const options = {
    uri: URL,
    transform: function (body) {
      //Khi lấy dữ liệu từ trang thành công nó sẽ tự động parse DOM
      return cheerio.load(body);
    }
  };

  // className = ".box-image> .image-fade_in_back > a";
  /**Newman */
  // className = ".w-vwrapper";
  /**Filco */
  className = ".image-fade_in_back> a";

  try {
    // Lấy dữ liệu từ trang crawl đã được parseDOM
    var $ = await rp(options);
  } catch (error) {
    return error;
  }
  const a = $(className);
  let ab = [...a];
  /**Akko  */
  // ab.map(item =>
  //   linkGetImg.push(
  //     // "https://www.hanoicomputer.vn"
  //     item.attribs.href
  //   )
  // );

  /**Newman  */

  // ab.map(item => {
  //   if (item.children[3] !== undefined) {
  //     // console.log(item.children[0].children[0].attribs.href);
  //     linkGetImg.push(
  //       // "https://www.hanoicomputer.vn"
  //       item.children[0].children[0].attribs.href
  //     );
  //   }
  // });

  /**Filco  */

  ab.map(item => {
    console.log(item.attribs.href);
    linkGetImg.push(
      //   //   // "https://www.hanoicomputer.vn"
      //   //   // "https://www.phongcachxanh.vn" + item.attribs.href
      //   //   "https://gearvn.com/" + item.attribs.href
      item.attribs.href
    );
  });

  // let linkGetImg = [];

  linkGetImg.map(item => {
    i = 0;
    //
    // let nameProduct = item.replace("https://akkogear.com.vn/san-pham/", "");

    // nameProduct = nameProduct.slice(0, nameProduct.length - 1);

    /**Akko */

    // let folder =
    //   "backend\\uploads\\Ban_phim\\" +
    //   item.replace("https://akkogear.com.vn/san-pham/", "");

    let nameProduct = item.replace("https://dareu.com.vn/", "");
    nameProduct = nameProduct.replaceAll("-", "_");
    nameProduct = nameProduct.substring(0, nameProduct.length - 1);

    let folder = "backend\\uploads\\Ban_phim\\" + nameProduct;
    // folder = folder.slice(0, folder.indexOf("?"));
    try {
      if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder);
      }
    } catch (err) {
      console.error(err);
    }

    // nameProduct = nameProduct.slice(0, nameProduct.indexOf("?"));

    /**Newman */
    // let nameProduct = item.substring(0, item.length - 1);
    // nameProduct = nameProduct.slice(nameProduct.lastIndexOf("/") + 1);
    // nameProduct = nameProduct.replaceAll("-", "_");
    // console.log(nameProduct);

    // let folder = "backend\\uploads\\ban_phim\\" + nameProduct;
    // try {
    //   if (!fs.existsSync(folder)) {
    //     fs.mkdirSync(folder);
    //   }
    // } catch (err) {
    //   console.error(err);
    // }

    const url = item;
    console.log("URL", url);
    console.log("Name", nameProduct);

    crawlerImg(url, nameProduct, folder);
  });

  //  Lưu dữ liệu về máy
  // fs.createWriteStream(`data2.json`);

  // fs.writeFileSync(`data2.json`, JSON.stringify(linkGetImg));
  // return linkGetImg;
  // console.log(url);
})();

(async function createImg() {
  link.map(item => {
    i = 0;

    /**Newman */
    let nameProduct = item.substring(0, item.length - 1);
    nameProduct = nameProduct.slice(nameProduct.lastIndexOf("/") + 1);
    nameProduct = nameProduct.replaceAll("-", "_");
    console.log(nameProduct);

    let folder = "backend\\uploads\\ban_phim\\" + nameProduct;
    try {
      if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder);
      }
    } catch (err) {
      console.error(err);
    }

    const url = item;
    console.log(url);

    crawlerImg(url, nameProduct, folder);
  });
});

function createFolder() {
  let folder =
    "backend\\uploads\\ban_phim\\" + item.replace("/shop/product/", "");
  folder = folder.slice(0, folder.indexOf("?"));
  folder = folder.replaceAll("-", "_");
  try {
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder);
    }
  } catch (err) {
    console.error(err);
  }
}
