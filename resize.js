const sharp = require('sharp');
const fs = require('fs');


let rawdata = fs.readFileSync('data-stock.json');
let data = JSON.parse(rawdata);


const resize = async (input,output) =>{
    try{
        let transform = await sharp().png({progressive: true})
        .flatten({ background: { r: 255, g: 255, b: 255, alpha: 0 } })
                        .resize({ width: 80,height:80,background: { r: 255, g: 255, b: 255, alpha:0 },fit:"contain"})
                        .on('info', function(fileInfo) {
                            console.log("Resizing done, file not saved");
                        });
                        let inStream = await fs.createReadStream(`images/${input}.jpeg`);
                        let outStream = await fs.createWriteStream(`img-nor/${output}.png`, {flags: "w"});
                        outStream.on('error', function() {
                            console.log("Error" );
                        });
                        
                        outStream.on('close', function() {
                            console.log("Successfully saved file");
                        });
                        inStream.pipe(transform).pipe(outStream);
    }catch(e){
        console.log(e)
    }
    // pipeline(inStream, transformer, res, (err) => {
    //     if (err) {
    //         next(err)
    //     }
    // })
    console.log(input);

}

//ANT,BLI,BMF
//41,100,104,150,170,223,238,258,262,282,311,314,352,387,415,451,474,510,527,533,563,565,593,616,620,671,677,802,804,819,827,838,857,863,865,890,906,913,943,954,1022,1035,1164,1245
//1261,1275,1281,1288,1311,1314,1324,1351,1352,1353,1354,1355,1356,1383,1388,1432,1436

let listErr = [41,100,104,150,170,223,238,258,262,282,311,314,352,387,415,451,474,510,527,533,563,565,593,616,620,671,677,802,804,819,827,838,857,863,865,890,906,913,943,954,1022,1035,1164,1245,1261,1275,1281,1288,1311,1314,1324,1351,1352,1353,1354,1355,1356,1383,1388,1432,1436]
// const idxErr = 0
data.map((item, index) => {
        if(!listErr.includes(index))
        {
            setTimeout(
                () => {
                    try{
                        resize(`${item.machungkhoan}`,`${item.machungkhoan}`)
                        // console.log(index+idxErr)
                    }catch(e){
                        console.log(e)
                        // listErr.push(item.machungkhoan);
                    }
                }
                ,50 * index
            )
        }
        
});
// console.log(listErr)

// resize(`${data[258].machungkhoan}`,`${data[258].machungkhoan}`)