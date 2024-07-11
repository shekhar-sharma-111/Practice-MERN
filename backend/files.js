const fs =require('fs')
// //using  sync:
// const htmlfile='index.html'
// try{
//     const data=fs.readFileSync(htmlfile,'utf8');
//     console.log(data)
// }catch(err){console.log(err)}
// console.log("reading file using sync  mode")


// //async mode

// try{fs.readFile(htmlfile,'utf8',function (err,data){
//     if(err){console.log(err)};
//    console.log(data)
// });}catch(err){console.log(err)}

// console.log("........\n reading file using async por non blocking mode")

// .....other methods of the filesytems readfile writefile open rename
//write and append  a file 
fs.writeFile('data.text',' hello everyone we are  using async writefile method',(err,data)=>{if (err) throw err;console.log(' write done')})

fs.appendFile('data.text',' hello everyone we are  using  async appendfile method',(err,data)=>{if (err) throw err;console.log('append done')})
try{fs.readFile('data.text','utf8',function (err,data){if(err){console.log(err)};console.log(data)});
}catch(err){console.log(err)}


//rename a file
const fileName='data.text'
fs.rename(fileName,'data.text',(err)=>{if (err)throw err;console.log('file renamed')})

//upload a file 