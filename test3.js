// const fetch = require('node-fetch');
const fs = require('fs');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const url = "https://finance.vietstock.vn/image/AAT"

async function download(url,filename) {
  const response = await fetch(url);
  const buffer = await response.buffer();
  fs.writeFile(`./images/${filename}`, buffer, () => 
    console.log('finished downloading' + filename));
}

let rawdata = fs.readFileSync('data-stock.json');
let data = JSON.parse(rawdata);
console.log(data.length)
data.map((item, index) => {
    if(index >= 1452 && index < 1453)
        download(`https://finance.vietstock.vn/image/${item.machungkhoan}`,`${item.machungkhoan}.jpeg`)
});