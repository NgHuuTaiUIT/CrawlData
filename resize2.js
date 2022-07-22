const Jimp = require('jimp');
const fs = require('fs');
const { HORIZONTAL_ALIGN_CENTER } = require('jimp');
const { VERTICAL_ALIGN_MIDDLE } = require('jimp');
const { AUTO } = require('jimp');
async function resize(input,output) { // Function name is same as of file name
   // Reading Image
   const image = await Jimp.read
   (`images/${input}.jpeg`);
   image.resize(80,80,"contain", function(err){
      if (err) throw err;
   }).quality(100).scaleToFit(80,80)
   .write(`img6/${output}.jpeg`);
}
let listErr = [41,100,104,150,170,223,238,258,262,282,311,314,352,387,415,451,474,510,527,533,563,565,593,616,620,671,677,802,804,819,827,838,857,863,865,890,906,913,943,954,1022,1035,1164,1245,1261,1275,1281,1288,1311,1314,1324,1351,1352,1353,1354,1355,1356,1383,1388,1432,1436]
let rawdata = fs.readFileSync('data-stock.json');
let data = JSON.parse(rawdata);
console.log(data.length)
data.map((item, index) => {
   if(listErr.includes(index))
    {
      setTimeout(
         () =>  resize(`${item.machungkhoan}`,`${item.machungkhoan}`)
         ,500 * index
       )
   }
   // }else{
      // setTimeout(
      //    () =>  resize(`${item.machungkhoan}`,`${item.machungkhoan}`)
      //    ,500 * index
      //  )
   // }
});
console.log("Image is processed successfully");