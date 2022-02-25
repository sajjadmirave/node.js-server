const fs = require("fs");
//read file
fs.readFile("./txt/data.txt", "utf-8", (err, data) => {
    fs.writeFile('./txt/final.txt',`this is final text : ${data}`,'utf-8',(err)=>{
        //print data.txt
        console.log(data)

        // the text writed
        console.log('write success😉')
    })

   
});
